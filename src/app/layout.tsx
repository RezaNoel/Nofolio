import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/data/site";
import { SITE_URL } from "@/lib/paths";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: profile.headline,
    template: `%s — ${profile.name}`,
  },
  description: profile.subtitle,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: profile.headline,
    description: profile.subtitle,
    url: SITE_URL,
    siteName: "Nofolio",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efe8dc" },
    { media: "(prefers-color-scheme: dark)", color: "#12110f" },
  ],
};

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("nofolio-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${fraunces.variable} ${manrope.variable} ${ibm.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-dvh bg-bg text-ink antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
