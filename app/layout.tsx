import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Tarık Atasoy | Frontend Developer",
    template: "%s | Tarık Atasoy",
  },
  description:
    "Frontend developer specializing in React, TypeScript and modern UI. Explore my projects and skills.",
  keywords: [
    "Tarık Atasoy",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX",
    "Electron",
    "Framer Motion",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  metadataBase: new URL("https://tarikatasoy.com"),
  alternates: {
    canonical: "https://tarikatasoy.com",
  },
  openGraph: {
    title: "Tarık Atasoy | Frontend Developer",
    description:
      "Frontend developer specializing in React, TypeScript and modern UI.",
    url: "https://tarikatasoy.com",
    siteName: "Tarık Atasoy Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarık Atasoy | Frontend Developer",
    description:
      "Frontend developer specializing in React, TypeScript and modern UI.",
    creator: "@tarikatasoy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tarık Atasoy",
              url: "https://tarikatasoy.com",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/tarikatasoy",
                "https://linkedin.com/in/tarik-atasoy",
              ],
            }),
          }}
        />
        </Head>
      </head>
      <body className="font-sans antialiased bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
