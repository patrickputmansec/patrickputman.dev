import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Putman — Security Researcher & Engineer | Birmingham, Alabama",
  description:
    "Patrick Putman is a security researcher and engineer based in Birmingham, Alabama. Focused on CI/CD security, cloud infrastructure, Kubernetes, and identity systems.",
  authors: [{ name: "Patrick Putman" }],
  metadataBase: new URL("https://www.patrickputman.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Patrick",
    lastName: "Putman",
    title: "Patrick Putman — Security Researcher & Engineer",
    description:
      "Security researcher and engineer based in Birmingham, Alabama. Focused on CI/CD, cloud, Kubernetes, and identity security.",
    url: "https://www.patrickputman.dev",
    siteName: "Patrick Putman",
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Patrick Putman — Security Researcher & Engineer, Birmingham, Alabama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Putman — Security Researcher & Engineer",
    description:
      "Security researcher and engineer based in Birmingham, Alabama. Focused on CI/CD, cloud, Kubernetes, and identity security.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "geo.region": "US-AL",
    "geo.placename": "Birmingham, Alabama",
    "geo.position": "33.5186;-86.8104",
    ICBM: "33.5186, -86.8104",
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Patrick Putman",
              givenName: "Patrick",
              familyName: "Putman",
              jobTitle: "Security Researcher & Engineer",
              url: "https://www.patrickputman.dev",
              email: "putman.patrick@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Birmingham",
                addressRegion: "AL",
                addressCountry: "US",
              },
              worksFor: {
                "@type": "Organization",
                name: "Stormbane Security",
                url: "https://www.stormbane.net",
              },
              knowsAbout: [
                "CI/CD Security",
                "Cloud Security",
                "Kubernetes Security",
                "Identity Security",
                "Attack Surface Management",
              ],
              sameAs: [
                "https://github.com/patrickputmansec",
                "https://linkedin.com/in/patrickputman",
                "https://www.stormbane.net",
              ],
            }),
          }}
        />
        {/* Identity linking for search engines */}
        <link rel="me" href="https://github.com/patrickputmansec" />
        <link rel="me" href="https://linkedin.com/in/patrickputman" />
        <link rel="me" href="mailto:putman.patrick@gmail.com" />
        {children}
      </body>
    </html>
  );
}
