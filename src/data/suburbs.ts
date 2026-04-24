export type RegionId = "bayside" | "inner-se" | "se-growth" | "eastern-hills";

export interface Region {
  id: RegionId;
  name: string;
  tagline: string;
  narrative: string;
  specialty: string;
  image: string;
  suburbs: string[];
}

import baysideImg from "@/assets/region-bayside.jpg";
import innerseImg from "@/assets/region-innerse.jpg";
import segrowthImg from "@/assets/region-segrowth.jpg";
import easternImg from "@/assets/region-eastern.jpg";

export const REGIONS: Region[] = [
  {
    id: "bayside",
    name: "Bayside",
    tagline: "Coastal Defense Systems",
    specialty: "Salt-spray resistant marine-grade coatings",
    narrative:
      "Bayside homes face Port Phillip's relentless salt air, UV exposure and humidity. Our Coastal Defense System pairs marine-grade elastomeric membranes with UV-reflective topcoats engineered to outlast standard finishes by a decade.",
    image: baysideImg,
    suburbs: [
      "St Kilda","Brighton","Hampton","Sandringham","Black Rock","Beaumaris",
      "Mentone","Parkdale","Mordialloc","Aspendale","Aspendale Gardens","Edithvale",
      "Chelsea","Chelsea Heights","Bonbeach","Carrum","Seaford",
    ],
  },
  {
    id: "inner-se",
    name: "Inner South-East",
    tagline: "Heritage & Period Restoration",
    specialty: "Victorian, Edwardian & Art Deco facade specialists",
    narrative:
      "From Elwood's beachside Edwardians to Carnegie's California bungalows, the Inner South-East demands respect for original detail. Our period-correct colour matching and lead-safe preparation honour heritage permits and council overlays.",
    image: innerseImg,
    suburbs: [
      "Elwood","Balaclava","Elsternwick","Ripponlea","Gardenvale","Bentleigh",
      "Bentleigh East","McKinnon","Ormond","Carnegie","Moorabbin","Highett",
    ],
  },
  {
    id: "se-growth",
    name: "South-East Growth",
    tagline: "Modern Estate Finishes",
    specialty: "Contemporary render & feature-wall execution",
    narrative:
      "The South-East corridor is Melbourne's premium new-build belt. UV-reflective coatings on dark estate facades, modern render protection on contemporary builds, and industrial-grade epoxy floors in every double garage. Two-storey homes, large-format spray and back-roll, every coat to spec.",
    image: segrowthImg,
    suburbs: [
      "Springvale","Noble Park","Keysborough","Dandenong","Dandenong North","Dandenong South",
      "Hallam","Narre Warren","Narre Warren North","Narre Warren South","Berwick","Beaconsfield",
      "Officer","Pakenham","Hampton Park","Lynbrook","Lyndhurst","Cranbourne",
      "Cranbourne North","Cranbourne East","Cranbourne West","Clyde",
    ],
  },
  {
    id: "eastern-hills",
    name: "Eastern & Hills",
    tagline: "Mitcham HQ Heartland",
    specialty: "Bushland fire-rated & timber-finish expertise",
    narrative:
      "Headquartered in Mitcham, the Eastern corridor is our home turf. Heritage and weatherboard mastery is the local specialty: lead-paint XRF testing on pre-1970 substrates, four-season timber movement managed with oil-modified primers, and 70% prep-first restoration on every Federation trim. Same decentralised crew model, 7:00 AM starts.",
    image: easternImg,
    suburbs: [
      "Mitcham","Vermont","Vermont South","Nunawading","Blackburn","Blackburn North","Blackburn South",
      "Forest Hill","Burwood","Burwood East","Box Hill","Box Hill North","Box Hill South",
      "Mont Albert","Surrey Hills","Canterbury","Balwyn","Balwyn North","Doncaster","Doncaster East",
      "Templestowe","Templestowe Lower","Bulleen","Donvale","Park Orchards","Warrandyte",
      "Wonga Park","Ringwood","Ringwood East","Ringwood North","Heathmont","Bayswater",
      "Bayswater North","Croydon","Croydon Hills","Croydon North","Croydon South",
      "Kilsyth","Mooroolbark","Lilydale","Chirnside Park","Glen Waverley","Wantirna",
    ],
  },
];

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function findSuburb(slug: string): { suburb: string; region: Region } | null {
  for (const region of REGIONS) {
    const match = region.suburbs.find((s) => slugify(s) === slug);
    if (match) return { suburb: match, region };
  }
  return null;
}

export function findRegion(id: string): Region | null {
  return REGIONS.find((r) => r.id === id) ?? null;
}

export const ALL_SUBURBS = REGIONS.flatMap((r) =>
  r.suburbs.map((s) => ({ suburb: s, region: r })),
);