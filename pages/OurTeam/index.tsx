import React, { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";

export default function OurTeam() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection title="Team" imgSrc={"../assets/Our+Approach.jpg"} />
      <BreadCrumb pageName="Team" linkName="OurTeam" />
      <section className="py-32">
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div className="blog-slider__img">
                  <img src="../assets/Team/team-23620220703.png" alt="" />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div className="blog-slider__content">
                  <div className="blog-slider__title">Hardik Shah</div>
                  <span className="blog-slider__code">Founder & CEO</span>
                  <div className="blog-slider__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi? Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi? Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi? Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi? Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-slider__pagination"></div>
        </div>
      </section>
    </div>
  );
}
