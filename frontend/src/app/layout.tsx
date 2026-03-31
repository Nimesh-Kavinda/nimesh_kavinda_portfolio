import type { Metadata } from "next";
import "../styles/index.css";
import { LoadingProvider } from "../context/LoadingContext";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "Nimesh Kavinda | Full-Stack Web Developer",
  description: "Portfolio of Nimesh Kavinda, a Full-Stack Web Developer building modern web applications with React, Next.js, Laravel, and PHP.",
  keywords: [
    "Nimesh Kavinda",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "PHP Developer",
    "Portfolio",
    "Sri Lanka",
    "Oximay",
    "Freelance Developer",
    "Modern Web Applications"
  ],
  authors: [{ name: "Nimesh Kavinda" }],
  creator: "Nimesh Kavinda",
  publisher: "Nimesh Kavinda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nimesh Kavinda | Full-Stack Web Developer",
    description: "Explore the portfolio of Nimesh Kavinda and featured web projects across React, Next.js, Laravel, and automation products.",
    url: "https://github.com/Nimesh-Kavinda",
    siteName: "Nimesh Kavinda Portfolio",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "Nimesh Kavinda Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimesh Kavinda | Portfolio",
    description: "Full-Stack Web Developer specializing in scalable modern web solutions.",
    creator: "@nimeshkavinda",
    images: ["/images/about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nimesh Kavinda",
    "jobTitle": "Full-Stack Web Developer",
    "url": "https://github.com/Nimesh-Kavinda",
    "sameAs": [
      "https://github.com/Nimesh-Kavinda",
      "http://www.linkedin.com/in/nimesh-kavinda-b363012b7"
    ],
    "description": "Nimesh Kavinda is a Full-Stack Web Developer specializing in React, Next.js, Laravel, and modern web application development.",
    "knowsAbout": ["Web Development", "Software Engineering", "React", "Next.js", "Laravel", "PHP"]
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="">
        <LoadingProvider>
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
