export interface FooterLinkItem {
  text: string;
  href?: string;
}

export interface FooterSocialItem {
  icon: "facebook" | "instagram" | "x" | "github" | "youtube" | "linkedin";
  text: string; // used as aria-label / tooltip
  href?: string;
}

export interface FooterColumnProps {
  title: string;
  items: FooterLinkItem[];
}

export interface FooterProps {
  items: FooterColumnProps[];
  logo?: string;
  isNewsletter?: boolean;
  socialsMedia: FooterSocialItem[];
  companyName?: string;
  newsletterTitle?: string;
  newsletterDescription?: string;
  onSubscribe?: (email: string) => void;
}
