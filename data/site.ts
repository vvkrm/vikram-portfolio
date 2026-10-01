/*
 * All of the site's content lives here.
 * Edit the values below and the whole site updates — no other files to touch.
 */

export type SocialIcon = "github" | "linkedin" | "x" | "instagram";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const site = {
  name: "Veer Vikram",
  tagline: "Software engineer and curious builder.",
  description:
    "Personal website of Veer Vikram — a short bio, and ways to get in touch.",
  intro:
    "I like building simple, reliable things for the web — and keeping them that way.",
  bio: [
    "I'm Veer Vikram. I work with software, and I care about clarity: clear code, clear writing, and clear thinking.",
    "Outside of work I enjoy reading, long walks, and learning how things work. This site is my small corner of the internet — a place to say hello and share a little about myself.",
  ],
  email: "mail@veervikram.com",
  url: "https://veervikram.top",
  /** Rotating roles shown under the hero greeting. */
  roles: ["Software engineer", "Curious builder", "Terminal tinkerer"],
  /** Terminal identity shown in prompts and window chrome. */
  shell: {
    user: "veer",
    host: "portfolio",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "X", href: "https://x.com/", icon: "x" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  ] as SocialLink[],
};
