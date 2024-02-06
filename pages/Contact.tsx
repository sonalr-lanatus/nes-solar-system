import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import ContactUsFormComponent from "@/components/common/ContactUsFormComponent";

export default function Contact() {
  return (
    <div>
      <ScrollToTop />
      <HeroImageSection
        title="Contact Us"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <BreadCrumb pageName="Contact Us" linkName="Contact" />
      <section className="relative py-10 px-8 ">
        <div
          id="c_form_058-1666706123945"
          className="response-animated pt-5 pb-5"
        >
          <div className="e_container-18 s_layout fa_wrapper response-transition">
            <div className="relative max-w-full max-h-full">
              <div className="e_container-19 s_layout response-transition  ">
                <div className="cbox-19-0 p_item">
                  <div className="e_container-26 s_layout response-transition">
                    <div className="cbox-26-0 p_item">
                      <div className="e_container-41 s_layout response-transition">
                        <div className="cbox-41-0 p_item">
                          <p className="e_text-27 s_summary response-transition"></p>
                          <p className="e_text-28 s_link response-transition">
                            Contact
                          </p>
                          <p className="fa_tt_span">
                            <span></span>
                            <span></span>
                          </p>
                        </div>
                      </div>
                      <div className="e_container-30 s_layout fa_tel_li response-transition">
                        <div className="cbox-30-0 p_item">
                          <p className="e_text-31 s_title fa_tel_tt response-transition">
                            Tel
                          </p>
                          <p className="e_text-32 s_title fa_tel_cnt response-transition">
                            <a href="tel:+91 9825071551" target="_self">
                              +91 9825071551
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="e_container-34 s_layout fa_tel_li">
                        {/* <div className="cbox-34-0 p_item">
                          <p className="e_text-37 s_title fa_icon">
                            <i className="fa-brands fa-solid fa-envelope "></i>
                          </p>
                        </div> */}
                        <div className="cbox-34-1 p_item">
                          <p className="e_text-35 s_title fa_tel_tt">Email</p>
                          <div className="e_richText-36 s_title fa_tel_cnt clearfix">
                            <p style={{ lineHeight: "24px" }}>
                              <span style={{ lineHeight: "2" }}>
                                <a href="mailto:sales@nessolar.in">
                                  sales@nessolar.in
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="e_container-29 s_layout fa_tel_li">
                        {/* <div className="cbox-29-0 p_item">
                          <p className="e_text-40 s_title fa_icon">
                            <i className="fa-brands fa-solid fa-map-location"></i>
                          </p>
                        </div> */}
                        <div className="cbox-29-1 p_item">
                          <p className="e_text-38 s_title fa_tel_tt">Add</p>
                          <div className="e_richText-39 s_title fa_tel_cnt clearfix">
                            <p>
                              <span>
                                <span style={{ lineHeight: "2" }}>
                                  <span style={{ color: "#000000" }}>
                                    1/A Shambhupark Society , Nr. Vijayanagar
                                    School Rly. Crossing Kiranpark, Nava Vadaj,
                                    Ahmedabad , 380013
                                  </span>
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactUsFormComponent />
                <div className="fa_tag" id="tag_01"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1048.0068580676045!2d72.5629188!3d23.0600407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851b56d1b85b%3A0x8dd658ce33cee08b!2sNES%20Energy%20Solutions!5e1!3m2!1sen!2sin!4v1671785516389!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-gtm-yt-inspected-5="true"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
