import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sujana Dinuwara | Full-Stack Software Engineer & Systems Developer",
  description: "Portfolio of Sujana Dinuwara, a Software Engineering Student at SLIIT and Full-Stack Developer specializing in scalable backend systems and high-fidelity frontends.",
  keywords: [
    "Sujana Dinuwara",
    "Sujana",
    "Dinuwara",
    "Software Engineer Portfolio",
    "Full-Stack Developer",
    "Systems Developer",
    "Software Engineering Intern",
    "Next.js",
    "Spring Boot",
    "React Developer"
  ],
  authors: [{ name: "Sujana Dinuwara" }],
  creator: "Sujana Dinuwara",
  openGraph: {
    title: "Sujana Dinuwara | Full-Stack Software Engineer & Systems Developer",
    description: "Software Engineering Student & Full-Stack Developer crafting performant, production-grade systems from C to distributed microservices.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sujana Dinuwara Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujana Dinuwara | Full-Stack Software Engineer & Systems Developer",
    description: "Software Engineering Student & Full-Stack Developer crafting performant, production-grade systems from C to distributed microservices.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
