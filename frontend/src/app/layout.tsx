import "../styles/index.css";
import { LoadingProvider } from "../context/LoadingContext";
import ClientLayout from "../components/ClientLayout";

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
