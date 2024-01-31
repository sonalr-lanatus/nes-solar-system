import React from "react";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import { CleaningSystems } from "@/data/Project/CleaningSystem/CleaningSystem";

export default function CleaningSystem() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Cleaning System"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Cleaning System" linkName="CleaningSystem" />
      <MultipleImageComponent
        imageData={CleaningSystems}
        title="Cleaning System"
      />
    </div>
  );
}
