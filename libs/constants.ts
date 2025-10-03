export const COLORS = {
  background: "#F5F5FA",
  primary: "#0044B5",
  purple: "#9A00CD",
  green: "#156B4C",
  greenLight: "#00B191",
  teal: "#4ABDCD",
  red: "#FD372C",
  yellow: "#F9AE0B",
} as const;

export const ANIMATION_DURATION = {
  fast: 300,
  normal: 600,
  slow: 1000,
} as const;

export const INTERSECTION_THRESHOLD = {
  start: 0.2,
  middle: 0.5,
  end: 0.8,
} as const;

export const NAV_ITEMS = [
  { label: "ABOUT US", href: "/about" },
  { label: "IMPACT", href: "/impact" },
  { label: "GET INVOLVED", href: "/get-involved" },
  { label: "STAY INFORMED", href: "/stay-informed" },
] as const;

export const SECONDARY_NAV = [
  { label: "WHO WE ARE", href: "/who-we-are" },
  { label: "LEADERSHIP", href: "/leadership" },
  { label: "OUR VOLUNTEER TEAM", href: "/volunteer-team" },
  { label: "MILESTONES", href: "/milestones", active: true },
] as const;