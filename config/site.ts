import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ِاحمد منصور",
  description:
    "مهندس برمجي متخصص في البرمجة والتطوير المفتوح والمصادر",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
     github: "https://github.com/Up-to-code/",
  },
  mailSupport: "support@mickasmt.com",
};
