import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function ConsultComponent() {
  return (
    <div>
      <div className="xl:basis-1/3 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full ">
        <div className="single-service-sidebar">
          <div className="sidebar-contact-box text-center">
            <div className="inner-content">
              <div>
                <div className="img-holder">
                  <img
                    src="../assets/Expertice/customer-service-handsome-curly-man-office-suit-with-computer-headset-happy-coffee.jpg"
                    alt="Awesome Image"
                    height={20}
                    width={360}
                  />
                </div>
              </div>
              <div>
                {" "}
                <div className="icon-holder">
                  <img
                    src="../assets/Expertice/customer-service.png"
                    alt="Awesome Image"
                    height={80}
                    width={80}
                  />
                </div>
                <h3 className="text-front">
                  Consult with expert &amp; Start today
                </h3>
              </div>
              <div className="bottom-box">
                <h2 className="!text-white">
                  <a
                    href="tel:9825071551"
                    target="_blank"
                    style={{ color: "#ffffff !important" }}
                  >
                    +91 9825071551
                  </a>
                </h2>
                <span className="!text-white">
                  <a
                    href="mailto:sales@nessolar.in"
                    target="_blank"
                    style={{ color: "#ffffff !important" }}
                  >
                    sales@nessolar.in
                  </a>
                </span>
              </div>
              <div className="bottom-content pt-12">
                <button className="btn buttonConsult">
                  <Link
                    className=" wow slideInUp animated animated"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                    href="/Contact"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                    }}
                  >
                    <span className="btn-label">
                      Schedule for Call
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
