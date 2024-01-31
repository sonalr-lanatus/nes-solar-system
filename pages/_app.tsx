import type { AppProps } from "next/app";
import "../pages/globals.css";
import "../pages/SolarPlanningInstallation/SolarPlanningInstallation.css";
import "../pages/OurTeam/OurTeam.css";
import "../pages/Projects/Projects.css";
import "../pages/Projects/CivilWork/CivilWork.css";
import "../pages/Awards/Awards.css";
import RootLayout from "@/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
