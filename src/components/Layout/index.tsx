"use client";

import { Raleway } from "next/font/google";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";

const inter = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
