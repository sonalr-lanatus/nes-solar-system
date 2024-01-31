import React from "react";
import Fancybox from "./Fancybox";
import ConsultComponent from "./ConsultComponent";

export default function MultipleImageComponent({ imageData, title }: any) {
  return (
    <div>
      <section className="single-service-area">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="container">
            <div className="row">
              <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full">
                <div className="single-service-top">
                  <h1>{title}</h1>

                  <div className="text mt-2">
                    <div className="container mb-5 mt-5">
                      <div className="row">
                        {imageData.map((data: any) => {
                          return (
                            // eslint-disable-next-line react/jsx-key
                            <div
                              className="col-xl-3"
                              style={{ marginBottom: "15px" }}
                            >
                              <div className="bg-items">
                                <div className="items">
                                  <img className="items" src={data.image}></img>
                                  <div className="three"></div>
                                  <div className="details">
                                    <a
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                      href={data.image}
                                    >
                                      <i
                                        className="fa-solid fa-magnifying-glass-plus text-5xl"
                                        style={{ color: "#10213e" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ConsultComponent />
            </div>
          </div>
        </Fancybox>
      </section>
    </div>
  );
}
