import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { CivilImages } from "@/data/Project/CivilWork/CivilImages";
export default function CivilWork() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Civil Work"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Civil Work" linkName="CivilWork" />
      <MultipleImageComponent imageData={CivilImages} title="Civil Work" />
    </div>
  );
}
