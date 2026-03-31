import type { Metadata } from "next";
import "../styles/index.css";
import { LoadingProvider } from "../context/LoadingContext";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "Nimesh Kavinda",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="">
        <LoadingProvider>
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
