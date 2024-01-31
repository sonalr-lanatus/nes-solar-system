import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { RoofTopSolarInstallation } from "@/data/Project/RoofTopSolarInstallations/RoofTopSolarInstallations";

export default function RoofTopSolarInstallations() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="RoofTop Solar Installations"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb
        pageName="RoofTop Solar Installations"
        linkName="RoofTopSolarInstallations"
      />
      <MultipleImageComponent
        imageData={RoofTopSolarInstallation}
        title="RoofTop Solar Installations"
      />
    </div>
  );
}
