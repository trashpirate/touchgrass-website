import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PROJECT_NAME, PROJECT_DESCRIPTION, PROJECT_DOMAIN, PROJECT_X, PROJECT_PREVIEW, PROJECT_URL } from "../lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  applicationName: PROJECT_NAME,
  twitter: {
    card: "summary_large_image",
    site: PROJECT_DOMAIN,
    creator: PROJECT_X,
    images: PROJECT_PREVIEW,
  },
  openGraph: {
    type: "website",
    url: PROJECT_URL,
    title: PROJECT_NAME,
    description:
      PROJECT_DESCRIPTION,
    siteName: PROJECT_NAME,
    images: [
      {
        url: PROJECT_PREVIEW,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
