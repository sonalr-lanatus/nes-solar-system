/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

export default function CounterSection() {
  return (
    <section
      className=" relative number-bg lg:py-12 py-7"
      style={{
        backgroundImage: "url(/assets/New2.png)",
      }}
    >
      <div className="container w-full pr-28 pl-28 mr-auto ml-auto">
        <div className="rowCounter items-center">
          <div
            className="col-lgc-5
           pe-lg-5"
          >
            <div className="px-0 w-11/12">
              <div className="ks-heading-outer ks-heading-left ">
                <div className="text-[#002f63] text-base font-semibold mb-2">
                  NES ENERGY SOLUTIONS
                </div>
                <h2 className="text-4xl md:text-3xl lg:mb-5 mb-4 text-black font-semibold ms-1 me-1">
                  Our numbers will give you the answer
                </h2>
              </div>
              <p className="mt-0 mb-4">
                In the dynamic realm of sustainable energy, NES ENERGY SOLUTIONS
                stands as a steadfast partner for all your solar needs. Our
                commitment is to be your premier choice in Solar Panel
                Installation and Robotic Cleaning solutions. Our numbers speak
                volumes, assuring you that we are not just a solar solution
                provider but a strategic partner dedicated to harnessing the
                power of the sun for a sustainable future. Together, let's
                illuminate a greener tomorrow.
              </p>
              <div>
                <a
                  className="rounded font-medium overflow-hidden btn-primary text-white counter-joinBtn px-4 inline-flex items-center mt-3 lg:mb-0 mb-4"
                  href="#"
                >
                  Join Us
                  <svg
                    className="ms-3 arrow-icon"
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L15 5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 1L15 5L11 9"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 flex flex-wrap m-auto ks-counter-mobile"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="ks-growth-num w-40 offset-1 col-count-2 col-body col-primary text-white flex flex-col justify-between p-3 relative rounded-tl-xl">
              <div className="text-5xl font-semibold">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={90}
                ></CountUp>
                <span style={{ transform: "none" }}></span>%
              </div>
              <div className="text-base font-medium uppercase whitespace-nowrap">
                Client <br />
                Retention Rate
              </div>
            </div>
            <div className="ks-growth-num col-count-2 w-40 col-body col-light flex flex-col justify-between p-3 relative">
              <div className="text-5xl font-semibold ">
                <CountUp
                  start={0}
                  end={2012}
                  separator=""
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                ></CountUp>
                <span style={{ transform: "none" }}></span>
              </div>
              <div className="font-medium text-base uppercase">Foundation</div>
            </div>
            <div className="ks-growth-num col-count-3 col-body col-dark text-white flex flex-col justify-between p-3 relative rounded-tr-xl">
              <div
                className="font-medium text-4xl
               text-white-gradient"
              >
                <CountUp
                  end={2000}
                  separator=""
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                ></CountUp>
                <span style={{ transform: "none" }}></span>
                <span className="text-primary">+</span>
              </div>
              <div className="font-medium text-base uppercase">
                Total Clients
              </div>
            </div>
            <div className="ks-growth-num col-count-6 col-body col-dark text-white flex flex-col justify-between p-3 relative rounded-tl-xl rounded-bl-xl">
              <div className=" text-5xl font-semibold text-right text-white-gradient">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={1200}
                  separator=""
                ></CountUp>
                <span style={{ transform: "none" }}></span>
                <span className="text-primary">+</span>
              </div>
              <div className="text-xl font-medium uppercase">
                Residential Clients
              </div>
              <div className="text-sm relative workforce-arrow">
                and still growing
              </div>
            </div>
            <div className="ks-growth-num col-count-3 col-body col-light flex flex-col justify-between p-3 relative">
              <div className="text-5xl font-semibold ">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={800}
                  separator=""
                ></CountUp>
                <span style={{ transform: "none" }}></span>
                <span className="text-primary">+</span>
              </div>
              <div className="text-sm font-medium text-center uppercase">
                Industrial / Commercial Clients
              </div>
            </div>
            <div className="ks-growth-num col-count-3 col-body col-dark text-white flex flex-col justify-between p-3 relative rounded-tr-xl">
              <div className="font-semibold text-right text-5xl display-3 text-white-gradient">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={4}
                  separator=""
                ></CountUp>
                <span style={{ transform: "none" }}></span>
              </div>
              <div className="text-base font-medium text-right uppercase space-xl-nowrap">
                Delivery Centers
              </div>
              <div className="mt-2 md:none block globe-mobile"></div>
            </div>
            <div className="ks-growth-num  col-count-3 col-body col-light flex flex-col justify-between p-3  relative rounded-bl-xl">
              <div className="font-semibold text-4xl">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={100}
                  separator=""
                ></CountUp>
                <span style={{ transform: "none" }}></span>
                <span className="text-primary">+</span>
              </div>
              <div className="font-medium text-sm text-center uppercase">
                Robotics Cleaning system Installed
              </div>
            </div>
            <div className="ks-growth-num  col-count-3 col-body col-dark text-white flex flex-col justify-between p-3  relative">
              <div className="font-semibold text-3xl text-white-gradient">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={35000}
                  separator=""
                ></CountUp>
                <span style={{ transform: "none" }}></span>
                <span className="text-primary">+</span>
              </div>
              <div className="font-medium text-base text-center uppercase">
                Loss units Saved per Week
              </div>
            </div>
            <div className="ks-growth-num col-count-3 col-body col-primary text-white flex flex-col justify-between p-3 relative">
              <div className="font-semibold text-4xl text-white-gradient">
                <CountUp
                  start={0}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={true}
                  duration={3}
                  end={7000}
                  separator=""
                ></CountUp>
                <span style={{ transform: "none" }}></span>
                <span className="text-primary">+</span>
              </div>
              <div className="font-medium text-base text-center uppercase text-white">
                Solar Panel Cleaned per Week
              </div>
            </div>
            <div className="none md:block ks-growth-num col-count-3  col-dark col-dark-2 text-center rounded-br-xl !border-0">
              <Image
                alt="earth"
                loading="lazy"
                width="140"
                height="140"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/Pointers/earth4.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
