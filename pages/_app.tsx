import type { AppProps } from "next/app";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import "../pages/globals.css";
import "../pages/SolarPlanningInstallation/SolarPlanningInstallation.css";
import "../pages/OurTeam/OurTeam.css";
import "../pages/Projects/Projects.css";
import "../pages/Projects/CivilWork/CivilWork.css";
import "../pages/Awards/Awards.css";
import RootLayout from "@/components/Layout";
import GlobalContextProvider from "@/context/GlobalContextProvider";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3848934, 6);
  }, []);
  return (
    <>
      <GlobalContextProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </GlobalContextProvider>
    </>
  );
}
