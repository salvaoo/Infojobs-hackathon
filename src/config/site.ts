export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "InfoJobs",
  description:
    "New design of InfoJobs, a job search platform. This is a hackathon project, not the official website.",
  mainNav: [
    {
      title: "Empleos",
      href: "/",
    },
    {
      title: "Mis ofertas",
      href: "/",
    },
    {
      title: "CV",
      href: "/",
    },
    {
      title: "Quién me ve",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/salvagr_",
    shadcnGithub: "https://github.com/shadcn/ui",
    github: "https://github.com/salvaoo",
    docs: "https://ui.shadcn.com",
  },
}
