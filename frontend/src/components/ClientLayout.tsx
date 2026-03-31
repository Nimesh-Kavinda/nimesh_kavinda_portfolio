'use client';

import { useLoading } from "../context/LoadingContext";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();
  
  return (
    <>
      {!loading && (
        <>
          <Header />
          <FloatingContact />
        </>
      )}
      {children}
      {!loading && <Footer />}
    </>
  );
}
