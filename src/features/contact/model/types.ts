export type SocialLinkType = "github" | "linkedin" | "email";

export interface SocialLink {
  label: string;
  type: SocialLinkType;
  href: string;
}
