import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { ElectricalWorks } from "@/data/Project/ElectricalWork/ElectricalWork";

export default function ElectricalWork() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Electrical Work"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Electrical Work" linkName="ElectricalWork" />
      <MultipleImageComponent
        imageData={ElectricalWorks}
        title="Electrical Work"
      />
    </div>
  );
}
