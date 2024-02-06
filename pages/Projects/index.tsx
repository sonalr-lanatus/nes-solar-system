import React from "react";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";

export default function Projects() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Projects"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Projects" linkName="Projects" />
      <section className="main-project-area v3">
        <div className="container">
          <div className="row">
            <div className="grid gap-x-40 gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="filter-item env res">
                <div className="single-project-style3 mb-32">
                  <div className="widget-container">
                    <div className="flip-box common-flip-style">
                      <div className="box-front common-box-style">
                        <div className="box-content-wrapper"></div>
                      </div>
                      <div className="box-back common-box-style box-bgi-effect">
                        <div className="box-content-wrapper">
                          <div className="box-content">
                            <Link href="/Projects/CivilWork">
                              <h1 className="card-textL">Civil Work</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-item env res">
                <div className="single-project-style3 mb-32">
                  <div className="widget-container">
                    <div className="flip-box common-flip-style">
                      <div className="box-front2 common-box-style">
                        <div className="box-content-wrapper"></div>
                      </div>
                      <div className="box-back common-box-style box-bgi-effect">
                        <div className="box-content-wrapper">
                          <div className="box-content">
                            <Link href="/Projects/MountingStructureInstallation">
                              <h1 className="card-textL">
                                Mounting Structure Installation
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-item env res">
                <div className="single-project-style3 mb-32">
                  <div className="widget-container">
                    <div className="flip-box common-flip-style">
                      <div className="box-front3 common-box-style">
                        <div className="box-content-wrapper"></div>
                      </div>
                      <div className="box-back common-box-style box-bgi-effect">
                        <div className="box-content-wrapper">
                          <div className="box-content">
                            <Link href="/Projects/CleaningSystem">
                              <h1 className="card-textL">Cleaning System</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-item env res">
                <div className="single-project-style3 mb-32">
                  <div className="widget-container">
                    <div className="flip-box common-flip-style">
                      <div className="box-front4 common-box-style">
                        <div className="box-content-wrapper"></div>
                      </div>
                      <div className="box-back common-box-style box-bgi-effect">
                        <div className="box-content-wrapper">
                          <div className="box-content">
                            <Link href="/Projects/DispatchDeliveryPractice">
                              <h1 className="card-textL">
                                Dispatch Delivery Practice
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-item env res">
                <div className="single-project-style3 mb-32">
                  <div className="widget-container">
                    <div className="flip-box common-flip-style">
                      <div className="box-front5 common-box-style">
                        <div className="box-content-wrapper"></div>
                      </div>
                      <div className="box-back common-box-style box-bgi-effect">
                        <div className="box-content-wrapper">
                          <div className="box-content">
                            <Link href="/Projects/ElectricalWork">
                              <h1 className="card-textL">Electrical Work</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" filter-item env res">
                <div className="single-project-style3 mb-32">
                  <div className="widget-container">
                    <div className="flip-box common-flip-style">
                      <div className="box-front6 common-box-style">
                        <div className="box-content-wrapper"></div>
                      </div>
                      <div className="box-back common-box-style box-bgi-effect">
                        <div className="box-content-wrapper">
                          <div className="box-content">
                            <Link href="/Projects/RooftopSolarInstallations">
                              <h1 className="card-textL">
                                Rooftop Solar Installations
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
