import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { MountingStructureInstallations } from "@/data/Project/Mounting Structure Installation/MountingStructureInstallation";

export default function MountingStructureInstallation() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Mounting Structure Installation"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb
        pageName="Mounting Structure Installation"
        linkName="MountingStructureInstallation"
      />
      <MultipleImageComponent
        imageData={MountingStructureInstallations}
        title="Mounting Structure Installation"
      />
    </div>
  );
}
