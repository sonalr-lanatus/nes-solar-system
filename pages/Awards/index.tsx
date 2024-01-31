import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import Fancybox from "@/components/common/Fancybox";
export default function Awards() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection title="Awards" imgSrc={"../assets/Our+Approach.jpg"} />
      <BreadCrumb pageName="Awards" linkName="Awards" />
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="container mb-20 mt-20">
          <div className="row">
            <div className="cardsImage xl:basis-1/3 col-xl-4">
              <div className="cardI">
                <div className="colour"></div>
                <div className="card-text">
                  <ul className="links-icons">
                    <li>
                      <a
                        data-fancybox="gallery"
                        href="../assets/Awards/innovative-business-award-57920220913.jpg"
                      >
                        <span>
                          <i
                            className="fa-solid fa-magnifying-glass-plus text-6xl"
                            style={{ color: "#10213e" }}
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="colour-bottom"></div>
              </div>
            </div>
            <div className="cardsImage xl:basis-1/3 col-xl-4">
              <div className="cardI award2">
                <div className="colour"></div>
                <div className="card-text">
                  <ul className="links-icons">
                    <li>
                      <a
                        data-fancybox="gallery"
                        href="../assets/Awards/innovative-business-award-57920220913.jpg"
                      >
                        <span>
                          <i
                            className="fa-solid fa-magnifying-glass-plus text-6xl"
                            style={{ color: "#10213e" }}
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="colour-bottom"></div>
              </div>
            </div>
            <div className="cardsImage xl:basis-1/3 col-xl-4">
              <div className="cardI award3">
                <div className="colour"></div>
                <div className="card-text">
                  <ul className="links-icons">
                    <li>
                      <a
                        data-fancybox="gallery"
                        href="../assets/Awards/innovative-business-award-57920220913.jpg"
                      >
                        <span>
                          <i
                            className="fa-solid fa-magnifying-glass-plus text-6xl"
                            style={{ color: "#10213e" }}
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="colour-bottom"></div>
              </div>
            </div>
            <div className="cardsImage xl:basis-1/3 col-xl-4">
              <div className="cardI award4">
                <div className="colour"></div>
                <div className="card-text">
                  <ul className="links-icons">
                    <li>
                      <a
                        data-fancybox="gallery"
                        href="../assets/Awards/innovative-business-award-57920220913.jpg"
                      >
                        <span>
                          <i
                            className="fa-solid fa-magnifying-glass-plus text-6xl"
                            style={{ color: "#10213e" }}
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="colour-bottom"></div>
              </div>
            </div>
            <div className="cardsImage xl:basis-1/3 col-xl-4">
              <div className="cardI award5">
                <div className="colour"></div>
                <div className="card-text">
                  <ul className="links-icons">
                    <li>
                      <a
                        data-fancybox="gallery"
                        href="../assets/Awards/innovative-business-award-57920220913.jpg"
                      >
                        <span>
                          <i
                            className="fa-solid fa-magnifying-glass-plus text-6xl"
                            style={{ color: "#10213e" }}
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="colour-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </Fancybox>
    </div>
  );
}
