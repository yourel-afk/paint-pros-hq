// Painter Melbourne — Canonical NAP (Name, Address, Phone)
// Single source of truth. Update here and it propagates to footer, contact,
// schema and tel: links everywhere.

export const BUSINESS = {
  name: "Painter Melbourne",
  legalName: "Painter Melbourne Pty Ltd",
  // TODO: Replace with the registered ABN once provided by the client.
  abn: "ABN pending",
  phoneDisplay: "0414 402 101",
  phoneE164: "+61414402101",
  phoneHref: "tel:+61414402101",
  email: "quotes@paintermelbourne.com.au",
  emailHref: "mailto:quotes@paintermelbourne.com.au",
  street: "Mitcham HQ",
  locality: "Mitcham",
  region: "VIC",
  postcode: "3132",
  country: "AU",
  hours: "Mon–Sat · 7am – 6pm",
  url: "https://paintermelbourne.com.au",
  guarantee: "10-Year Masterpiece Guarantee",
} as const;
