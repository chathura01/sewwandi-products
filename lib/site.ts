export const site = {
  name: "Sewwandi Products",
  sinhala: "සෙව්වන්දි නිෂ්පාදන",
  tagline: "Sri Lankan spices, selected with care.",
  established: 2003,
  registration: "14/1143",
  address: {
    line1: "Bogolla, Hettipola",
    district: "Kurunegala District",
    province: "North Western Province",
    country: "Sri Lanka",
  },
  email: "sewwandiproduct@gmail.com",
  phone: "037 578 0573",
  phones: ["037 578 0573", "071 780 1330"],
  hours: "Monday – Saturday, 8:00 AM – 5:00 PM",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/distribution", label: "Distribution" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
