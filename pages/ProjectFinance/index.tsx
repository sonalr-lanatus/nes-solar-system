import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import ConsultComponent from "@/components/common/ConsultComponent";

export default function ProjectFinance() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Project Finance"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Project Finance" linkName="ProjectFinance" />
      <section className="single-service-area py-10 sm:py-20  md:py-32 2xl:py-56 px-8">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top">
                <h1> Project Finance</h1>
                <div className="remove_li text mt-2">
                  <div>
                    We ensure that the customers get all necessary support and
                    guidance to choose the right equipment, resolve technical
                    issues at their door steps and get expeditious approvals of
                    their loans at competitive rates, it adds.
                  </div>

                  <div className="p-5">
                    <ul>
                      <li>For existing units, who switch to solar power</li>
                      <li>Capital subsidy</li>
                      <li>Interest subsidy</li>
                      <li>
                        Partners with all national and private sectors banks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ConsultComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
