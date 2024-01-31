import React from "react";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";

export default function Expertise() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Expertise"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Expertise" linkName="Expertise" />
      {/* <section className="relative py-10 px-8 ">
        <ul className="cards">
          <li>
            <a href="" className="card">
              <img
                src="../assets/Expertice/expertise-39520221107.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="../assets/Expertice/expertise-39520221107.jpg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Jessica Parker</h3>
                    <span className="card__status">1 hour ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img
                src="https://i.imgur.com/2DhmtJ4.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img
                src="https://i.imgur.com/oYiTqum.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Jessica Parker</h3>
                    <span className="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                    <span className="card__status">1 hour ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section> */}
      <section className="card-area relative py-32  sm:py-20  md:py-32 2xl:py-56 px-8">
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--city">
                    <img
                      src={"../assets/Expertice/6802629.png"}
                      alt=""
                      className="h-3/6 w-6/12 object-fit-cover rounded-bl-lg"
                    />

                    <h2 className="card-front__heading text-center">
                      Solar Planning & Installation
                    </h2>
                  </div>

                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--city">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img
                    src={"../assets/Expertice/expertise-39520221107.jpg"}
                    alt=""
                    className="object-fit-cover rounded-bl-lg video__container"
                  />
                </div>
              </div>
            </div>

            <div className="inside-page">
              <div className="inside-page__container">
                <h2 className="inside-page__heading inside-page__heading--city">
                  Solar planning & Installation
                </h2>
                <p className="inside-page__text text-sm">
                  From idea to installation,our engineering team will help
                  customer to give best rooftop solar solutions as per site
                  condition.
                </p>
                <Link
                  href="/SolarPlanningInstallation"
                  className="inside-page__btn inside-page__btn--city mt-2"
                >
                  {" "}
                  View More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--ski">
                    <img
                      src={"../assets/Expertice/2086345-200.png"}
                      alt=""
                      className="h-3/6 w-6/12 object-fit-cover rounded-bl-lg"
                    />
                    <h2 className="card-front__heading">Project finance</h2>
                  </div>

                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--ski">
                      View me
                    </p>
                  </div>
                </div>

                <div className="card-back">
                  <img
                    src={"../assets/Expertice/expertise-88720220415.jpg"}
                    alt=""
                    className="object-fit-cover rounded-bl-lg video__container"
                  />
                </div>
              </div>
            </div>

            <div className="inside-page">
              <div className="inside-page__container">
                <h2 className="inside-page__heading inside-page__heading--ski">
                  Project finance
                </h2>
                <p className="inside-page__text text-sm">
                  We provide an end-to-end platform for digital and hassle-free
                  journey to the loan applicants for financing Solar projects.
                </p>
                <Link
                  href="/ProjectFinance"
                  className="inside-page__btn inside-page__btn--beach mt-2"
                >
                  {" "}
                  View More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--beach text-center">
                    <img
                      src={"../assets/Expertice/sol-pl-01.svg"}
                      alt=""
                      className="h-2/4 w-2/4 object-fit-cover rounded-bl-lg"
                    />

                    <h2 className="card-front__heading">
                      Solar Operations and maintenance
                    </h2>
                  </div>

                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--beach">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img
                    src={"../assets/Expertice/expertise-80720220414.jpg"}
                    alt=""
                    className="object-fit-cover rounded-bl-lg video__container"
                  />
                </div>
              </div>
            </div>

            <div className="inside-page">
              <div className="inside-page__container">
                <h2 className="inside-page__heading inside-page__heading--beach">
                  Solar Operations and maintenance
                </h2>
                <p className="inside-page__text text-sm">
                  Our team can operate and maintain rooftop solar power plant,
                  ensuring uninterrupted functionality of solar power plant to
                  get maximum output...
                </p>
                <Link
                  href="/SolarOperationAndMaintenance"
                  className="inside-page__btn inside-page__btn--beach mt-2"
                >
                  {" "}
                  View More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
