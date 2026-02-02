import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.vercel.app"),
  title: "Portfolio | Developer",
  description:
    "Personal portfolio. Building products that matter. Frontend, backend, and everything in between.",
  openGraph: {
    title: "Portfolio | Developer",
    description: "Personal portfolio. Building products that matter.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Developer",
    description: "Personal portfolio. Building products that matter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
