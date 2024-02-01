"use client";

import { Raleway } from "next/font/google";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Header />

      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
