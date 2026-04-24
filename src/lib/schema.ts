// Centralized JSON-LD schema generators for Painter Melbourne.
// All schemas reference the same canonical NAP from src/data/business.ts.

import { BUSINESS } from "@/data/business";
import { REGIONS, ALL_SUBURBS, slugify } from "@/data/suburbs";

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.locality,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postcode,
  addressCountry: BUSINESS.country,
} as const;

const GEO_MITCHAM = {
  "@type": "GeoCoordinates",
  // Mitcham VIC 3132 approximate centroid
  latitude: -37.8167,
  longitude: 145.1917,
} as const;

/**
 * Site-wide LocalBusiness schema — hard-coded for the Mitcham Office.
 * Includes every serviced suburb in `areaServed` so Google can map the
 * full 93-suburb service polygon to one canonical legal entity.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": `${BUSINESS.url}/#localbusiness`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/og-cover.jpg`,
    priceRange: "$$$",
    address: POSTAL_ADDRESS,
    geo: GEO_MITCHAM,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: ALL_SUBURBS.map(({ suburb }) => ({
      "@type": "City",
      name: `${suburb}, Melbourne, VIC`,
    })),
    sameAs: [],
  };
}

/**
 * Bundled Service schema for the three core service lines (Interior /
 * Exterior / Epoxy). Lives at the root so every page declares the full
 * service catalogue alongside the LocalBusiness.
 */
export function servicesCatalogueSchema() {
  const provider = {
    "@type": "PaintingContractor",
    "@id": `${BUSINESS.url}/#localbusiness`,
    name: BUSINESS.name,
    telephone: BUSINESS.phoneE164,
    address: POSTAL_ADDRESS,
  };

  const baseAreaServed = ALL_SUBURBS.map(({ suburb }) => ({
    "@type": "City",
    name: `${suburb}, Melbourne, VIC`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BUSINESS.url}/services#interior`,
        serviceType: "Interior Residential Painting",
        name: "Interior Painting | Master Finish",
        description:
          "Premium interior repainting across walls, ceilings, trim, doors and feature joinery. Low-VOC, designer-grade systems applied by Painter Melbourne's in-house master crew.",
        provider,
        areaServed: baseAreaServed,
        url: `${BUSINESS.url}/services`,
      },
      {
        "@type": "Service",
        "@id": `${BUSINESS.url}/services#exterior`,
        serviceType: "Exterior Residential Painting",
        name: "Exterior Painting | Coastal Defense & Heritage Restoration",
        description:
          "Full exterior repaints including weatherboard, render, brick, eaves and timber trim. Engineered for Melbourne's coastal salt-spray, UV and heritage colour-correct overlays.",
        provider,
        areaServed: baseAreaServed,
        url: `${BUSINESS.url}/services`,
      },
      {
        "@type": "Service",
        "@id": `${BUSINESS.url}/services#epoxy`,
        serviceType: "Epoxy Floor Coatings",
        name: "Epoxy Floors | Garage, Workshop & Wet-Area Systems",
        description:
          "High-build epoxy and polyaspartic floor systems for residential garages, workshops and wet areas. Slip-rated, chemical-resistant, decade-grade durability.",
        provider,
        areaServed: baseAreaServed,
        url: `${BUSINESS.url}/services`,
      },
    ],
  };
}

/**
 * Per-suburb FAQPage schema — three questions hammering the Coastal
 * Defense / Mitcham Logistics narrative for GEO + featured-snippet wins.
 */
export function suburbFaqSchema(suburb: string, regionName: string, regionTagline: string) {
  const isCoastal = regionTagline.toLowerCase().includes("coastal");
  const coastalAnswer = isCoastal
    ? `Yes. ${suburb} sits within Painter Melbourne's Coastal Defense zone. Every exterior in ${suburb} is specified with marine-grade elastomeric primers, salt-resistant topcoats and UV-stable pigments engineered for Port Phillip's salt-spray, onshore winds and reflected bay UV.`
    : `Coastal Defense is reserved for Painter Melbourne's bayside zones, but ${suburb} homes still receive the matching salt-air-tested system on any facade exposed to Melbourne's prevailing weather. Our Mitcham Office specs every ${suburb} exterior with the same marine-grade resin tech as our Bayside crews.`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How fast can a Painter Melbourne crew reach ${suburb} from your Mitcham Office?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Strategically based in Mitcham, our teams provide rapid coverage across Greater Melbourne via the EastLink and Monash corridors. ${suburb} sites typically receive an on-site survey within 24 hours of enquiry. Our decentralised crew model ensures on-time starts at 7:00 AM sharp, regardless of your suburb. Crews are 100% in-house, never subcontracted, never re-routed.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you use Coastal Defense salt-spray protection on ${suburb} homes?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: coastalAnswer,
        },
      },
      {
        "@type": "Question",
        name: `Is the 10-Year Masterpiece Guarantee valid on every ${suburb} project?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Every project in ${suburb}, whether interior, exterior or epoxy, is signed off by a senior Painter Melbourne master painter and backed by our full 10-Year Masterpiece Guarantee. Crews are 100% in-house. Zero subcontractors.`,
        },
      },
    ],
  };
}

/** Generic BreadcrumbList builder. Pass an ordered list of crumbs. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BUSINESS.url}${it.url}`,
    })),
  };
}

/**
 * Compute the N nearest neighbouring suburbs for a given suburb within
 * the same region. We don't carry geo-coordinates per suburb yet, so we
 * use the curated order of `region.suburbs` (which is already ordered
 * geographically along each corridor) and pick the N adjacent entries.
 */
export function nearestNeighbours(regionId: string, suburb: string, n = 5): string[] {
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) return [];
  const idx = region.suburbs.indexOf(suburb);
  if (idx === -1) return region.suburbs.slice(0, n);

  const out: string[] = [];
  let left = idx - 1;
  let right = idx + 1;
  while (out.length < n && (left >= 0 || right < region.suburbs.length)) {
    if (right < region.suburbs.length) out.push(region.suburbs[right++]);
    if (out.length < n && left >= 0) out.push(region.suburbs[left--]);
  }
  return out;
}

export { slugify };