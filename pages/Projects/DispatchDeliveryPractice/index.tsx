import React from "react";
import "../../../../app/globals.css";
import "../CivilWork/CivilWork.css";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { DispatchDeliveryPractices } from "@/data/Project/DispatchDeliveryPractice/DispatchDeliveryPractice";

export default function DispatchDeliveryPractice() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Dispatch Delivery Practice"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb
        pageName="Dispatch Delivery Practice"
        linkName="DispatchDeliveryPractice"
      />
      <MultipleImageComponent
        imageData={DispatchDeliveryPractices}
        title="Dispatch Delivery Practice"
      />
    </div>
  );
}
