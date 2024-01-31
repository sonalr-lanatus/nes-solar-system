import React from "react";
import Marquee from "react-fast-marquee";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import { imageData } from "@/data/About/ImageData";
import { imageData2 } from "@/data/About/ImageData2";

const OfferData = [
  {
    logo: "../assets/About/what-we-offer-70520220620.png",
    title: "Quality",
    text1:
      "Structure - GI box pipe to withstand high wind velocity & SS 304 bolts & nuts",
    text2:
      "Cabling - EN type double insulated DC cable for maximum power output",
    text3:
      "Civil work - Epoxy resin material for waterproofing & PCC for structure strength",
  },
  {
    logo: "../assets/About/what-we-offer-37920220621.png",
    title: "After Sales Service",
    text1:
      "Communication with customers for plant remote monitoring and efficiency",
    text2: "Quick response to customer service calls and on-site visit",
    text3: "Service report preparation and submission to the customer",
  },
  {
    logo: "../assets/About/what-we-offer-30920221203.png",
    title: "Innovations , Commitment & Safety",
    text1:
      "Power optimization technology for any roof orientations and directions",
    text2:
      "Maximum energy output through the selection of PERC and bi-facial solar cell technology",
    text3: "AC-DC separate and parallel earthing for the highest safety",
    text4:
      "Robotic thermography - voltage current tracing, electroluminescence testing for solar panels",
  },
  {
    logo: "../assets/About/what-we-offer-46920220620.png",
    title: "Skill",
    text1:
      "Pre site visit- feasibility study with solar module placement drawing as rooftop area",
    text2: "3D modeling design",
    text3: "Shadow analysis report",
    text4: "Month-wise solar energy generation report with payback calculation",
  },
  {
    logo: "../assets/About/what-we-offer-11420221200.png",
    title: "Return on Investment",
    text1: "Committed to achieving 3-4 years of system Payback period",
    text2: "Savings on electricity bills for the next 22 years",
    text3: "Material selection for 25 years of performance",
  },
  {
    logo: "../assets/About/what-we-offer-79020220620.png",
    title: "Competence",
    text1: "Technically competent & experienced engineering team",
    text2: "Quick troubleshooting by a trained service team",
    text3: "Organizations prudent business policies",
  },
];
export default function About() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="About Us"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="About Us" linkName="About" />
      <section className="relative block pt-14 pr-0 pl-0 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mr-4 -ml-4">
            <div className="relative w-full pr-4 pl-4 md:flex-1 max-w-4xl">
              <div className="relative block mt-2.5">
                <img
                  src="../assets/About/about-image-59220220128.jpg"
                  alt="Awesome Image"
                  style={{
                    height: "500px",
                    width: "100%",
                    borderTopLeftRadius: "20%",
                    borderBottomRightRadius: "20%",
                    boxShadow: `rgba(16, 33, 62, 1) -5px 5px, rgba(16, 33, 62, 0.8) -10px 10px, rgba(16, 33, 62, 0.6) -15px 15px, rgba(16, 33, 62, 0.4) -20px 20px, rgba(16, 33, 62, 0.3) -25px 25px`,
                  }}
                />
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:flex-1 max-w-4xl">
              <div className="relative block mt-12">
                <div className="relative block">
                  <div className="table-cell align-middle">
                    <h2 className="text-black font-bold m-0 text-3xl before:absolute before:w-60 before:pt-6 before:left-0 before:right-0 ">
                      Commitment to excellence
                      <p className="fa_tt_span">
                        <span></span>
                        <span></span>
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="relative block pt-8 pb-4">
                  <ul>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      Our team’s collective understanding of the solar industry,
                      the financial advantages &amp; nuances of solar investment
                      allows us to{" "}
                      <strong>
                        design, construct, and maintain large, complex solar
                        projects.
                      </strong>
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      It’s our mission to provide every client with
                      competitively-priced renewable energy systems paired with{" "}
                      <strong>top-quality service.</strong>
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      Every project we take on is assigned a{" "}
                      <strong>designated professional </strong>to ensure we
                      continually meet all of our clients needs and
                      expectations.
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      <strong>Safety </strong>is one of our top priorities. No
                      job is more important than the safety of our employees and
                      partners. Our moral obligation and organizational
                      standards &amp; employ only the industry best practices
                      for safety.
                    </li>
                  </ul>

                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 px-0  ">
        <div className="container pr-4 pl-4 mr-auto ml-auto md:max-w-7xl ">
          <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm ">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block">
                  <img
                    src="../assets/mission.png"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10 "></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Mission
                  </h3>
                  <p className="m-0 text-black">
                    We take pride in delivering reliable, efficient and cost
                    effective solar solutions with agility.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm ">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block">
                  <img
                    src="../assets/vision.png"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10"></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Vision
                  </h3>
                  <p className="m-0 text-black">
                    To be the preferred destination for comprehensive solar
                    power plant solutions at large scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block ">
                  <img
                    src="../assets/work.png"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10"></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Core Value
                  </h3>
                  <p className="m-0 text-black">
                    Committed to highest customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative block pt-16 pb-24 px-0"
        style={{ background: "#002f630a" }}
      >
        <div className="container pr-4 pl-4 mr-auto ml-auto md:max-w-7xl">
          <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
            <div className="relative w-full pr-4 pl-4">
              <div className="relative block">
                <div className="pb-9 relative block -mt-1 text-center">
                  <p
                    style={{ color: "#333" }}
                    className="text-sm leading-5 font-bold uppercase mx-0 mb-3 mt-0"
                  >
                    Offering
                  </p>
                  <div
                    style={{ color: "#333" }}
                    className="relative block text-[#002f63] text-5xl leading-10 font-bold capitalize z-10 mb-5 mx-0 mt-0"
                  >
                    What We Offer
                    <p className="fa_tt_span">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                  <div className="relative block w-20 h-2"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4">
              <div className="relative block">
                <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
                  <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
                      {OfferData.map((data) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <>
                            <div className="relative bg-gradient-to-r from-blue-950 to-blue-900 py-8 px-8 rounded-3xl w-96 my-4 shadow-xl mt-10">
                              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-white left-4 -top-16">
                                <img
                                  className="w-20 h-20 object-cover  mx-auto "
                                  src={data.logo}
                                  alt="User avatar"
                                />
                              </div>
                              <div className="mt-8">
                                <p className="text-xl font-semibold my-2 text-gray-100">
                                  {data.title}
                                </p>
                                <div className="flex space-x-2 text-gray-200 text-sm leading-5 tracking-wider">
                                  <p>
                                    {data.text1}
                                    {data.text2}
                                    {data.text3}
                                    {data.text4}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* <div className="mx-5  grid place-content-center">
                          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                            <h1 className="text-2xl mb-1">{data.title}</h1>
                            <p className="text-base">
                              {data.text1}
                              {data.text2}
                              {data.text3}
                              {data.text4}
                            </p>
                          </div>
                          <div className="bg-white mt-20 py-2 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                            <img
                              className="w-20 h-20 object-cover  mx-auto "
                              src={data.logo}
                              alt="User avatar"
                            />
                          </div>
                        </div> */}
                            {/* <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl ">
                          <div className="newBox relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded bg-clip-border h-full">
                            <div className="flex flex-nowrap">
                              <div
                                className="relative"
                                style={{
                                  textAlign: "center",
                                  margin: "auto",
                                  display: "block",
                                }}
                              >
                                <img
                                  src={data.logo}
                                  className="rounded-sm p-2"
                                  alt="Quality"
                                  style={{ width: "64px" }}
                                />
                              </div>
                              <div className="relative w-full">
                                <div className="p-5 flex-1 flex-shrink h-full">
                                  <h5 className="mb-3 text-[#002f63] font-bold  text-xl">
                                    {data.title}
                                  </h5>
                                  <p className="p-text"></p>
                                  <p className="p-text">{data.text1}</p>
                                  <p className="p-text">{data.text2}</p>
                                  <p className="p-text">{data.text3}</p>
                                  <p className="p-text">{data.text4}</p>
                                  <p className="p-text"></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="brand-wrapper gradient-bg pt-12">
        <div className=" mb-14 text-center">
          <h2 className="text-4xl">
            <span className="text-line" style={{ color: "black" }}>
              Our{" "}
              <span
                className="text-bold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Client
              </span>
            </span>
          </h2>
        </div>
        <div className="Marquee">
          <Marquee
            direction="right"
            autoFill={true}
            speed={50}
            pauseOnHover={true}
            style={{ overflow: "hidden" }}
          >
            {imageData.map((data) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Marquee-tag">
                  <img
                    src={data.clientele}
                    alt="Flexibond"
                    style={{ padding: "15px" }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="Marquee">
          <Marquee
            direction="left"
            autoFill={true}
            speed={50}
            pauseOnHover={true}
          >
            {imageData2.map((data) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Marquee-tag">
                  <img
                    src={data.clientele}
                    alt="Flexibond"
                    style={{ padding: "15px" }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
