import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://akshay-voora.vercel.app"),
  title: "Akshay Voora | Software Engineer",
  description:
    "Portfolio of Akshay Voora, a software engineer building thoughtful products across web, systems, and AI.",
  openGraph: {
    title: "Akshay Voora | Software Engineer",
    description:
      "Portfolio of Akshay Voora, a software engineer building thoughtful products across web, systems, and AI.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Akshay Voora portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Voora | Software Engineer",
    description:
      "Portfolio of Akshay Voora, a software engineer building thoughtful products across web, systems, and AI.",
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
