import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/bundle";
export default function LandingAboutSection() {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    const mySwiper1 = new Swiper(".fa_hproswp1 .swiper", {
      autoplay: {
        // delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      slidesPerView: 1,
      spaceBetween: "8%",
      speed: 1200,
      loop: true,
      navigation: {
        nextEl: ".fa_pro_btn .fa_btn_r",
        prevEl: ".fa_pro_btn .fa_btn_l",
      },
    });

    // Save the Swiper instance to the ref
    swiperRef.current = mySwiper1;

    // Clean up function to destroy Swiper instance on component unmount
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <div id="c_static_001-16613924005290" className="response-animated">
        <div className="e_container-81 s_layout response-transition">
          <div className="cbox-81-0 p_item">
            <div className="e_container-83 s_layout response-transition">
              <div className="cbox-83-0 p_item">
                <div className="e_container-84 s_layout response-transition">
                  <div className="cbox-84-0 p_item">
                    <p className="e_text-86 s_link response-transition">
                      About us
                    </p>
                    <p className="fa_tt_span">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                </div>
                <div className="e_richText-87 s_title clearfix response-transition">
                  <p style={{ fontSize: "14px", lineHeight: "24px" }}>
                    <span style={{ color: "#696969" }}>
                      <span style={{ lineHeight: "1" }}>
                        <span style={{ fontSize: "16px" }}>
                          NES Energy Solutions, a name synonymous with solar
                          energy power plants developer in Gujarat, is one of
                          the oldest and most reliable solar power plants
                          developers since 2012. 1200+ residence & 850+
                          Industrial /commercial solar power plant on rooftop
                          installed with the highest customer satisfaction. We
                          are MNRE/GEDA/PGVCL – category A channel partner Rated
                          and awarded the highest rating by ICRA - credit rating
                          agency Committed to after-sales services Our high
                          quality solar panels integration, accurate site
                          feasibility study, reliable system design, technically
                          competent & experienced engineering team bring us as
                          Trustable developer for rooftop solar power plant for
                          home & Industry in India. Always strives to surpass
                          customer expectations in terms of quality, innovation,
                          design ,services, cost of solar power plant for
                          home-industry with prudent business policies Govt.
                          approved Electrical contractor
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
                <div className="e_loop-88 s_list" ds-id="" elem-id="e_loop-88">
                  <div className="">
                    <div className="p_list fa_flexwrap fa_flex_between">
                      <div className="cbox-88 p_loopitem fa_li ">
                        <div className="e_container-89 s_layout">
                          <div className="cbox-89-0 p_item">
                            <div className="e_image-90 s_img">
                              <img
                                src="https://omo-oss-image.thefastimg.com/portal-saas/new2022091509465100264/cms/image/8d11c890-8b2a-4dbc-9bfb-537fa57b2f9e.png"
                                alt="Company"
                                title="Company"
                              />
                            </div>
                            <p className="e_text-91 s_title">Company</p>
                            <a
                              href="/Company.html#c_static_001-16621047867470"
                              target="_self"
                              className="fa_link_a"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="cbox-88 p_loopitem fa_li ">
                        <div className="e_container-89 s_layout">
                          <div className="cbox-89-0 p_item">
                            <div className="e_image-90 s_img">
                              <img
                                src="https://omo-oss-image.thefastimg.com/portal-saas/new2022091509465100264/cms/image/6cf078ee-8487-4b38-be7d-6894a0bee71d.png"
                                alt="Culture"
                                title="Culture"
                              />
                            </div>
                            <p className="e_text-91 s_title">Culture</p>
                            <a
                              href="/Company.html#tag02"
                              target="_self"
                              className="fa_link_a"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="cbox-88 p_loopitem fa_li ">
                        <div className="e_container-89 s_layout">
                          <div className="cbox-89-0 p_item">
                            <div className="e_image-90 s_img">
                              <img
                                src="https://omo-oss-image.thefastimg.com/portal-saas/new2022091509465100264/cms/image/f06d5df4-50ed-40ce-af17-683fb24d82f9.png"
                                alt="Honor"
                                title="Honor"
                              />
                            </div>
                            <p className="e_text-91 s_title">Honor</p>
                            <a
                              href="/Company.html#tag03"
                              target="_self"
                              className="fa_link_a"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="cbox-88 p_loopitem fa_li ">
                        <div className="e_container-89 s_layout">
                          <div className="cbox-89-0 p_item">
                            <div className="e_image-90 s_img">
                              <img
                                src="https://omo-oss-image.thefastimg.com/portal-saas/new2022091509465100264/cms/image/27565cea-a6c9-458d-a14a-33f383174a85.png"
                                alt="Media"
                                title="Media"
                              />
                            </div>
                            <p className="e_text-91 s_title">Media</p>
                            <a
                              href="/Video.html#c_static_001-16585424842880"
                              target="_self"
                              className="fa_link_a"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p_page"></div>
                  </div>
                  <input
                    type="hidden"
                    name="_config"
                    value='{"cname":"介绍内容-列表接口","type":"list","params":{"size":6,"query":[{"esField":"DETAIL_ES.es_multi_category_01Sy2jv4","groupName":"数据展示条件,默认条件组","groupEnd":"2,1","field":"category_01Sy2jv4","sourceType":"static","valueName":"关于我们","dataType":"array[category]","logic":"and","groupBegin":"1,2","value":"2661","fieldType":"array","operator":"in"}],"header":{"Data-Query-Es-Field":"DETAIL_ES.es_multi_image_LId4c7g2,DETAIL_ES.es_symbol_text_r4O05cao,DETAIL_ES.es_symbol_batjp","Data-Query-Field":"image_LId4c7g2,text_r4O05cao,batjp"},"from":0,"sort":[]},"valueUrl":"/fwebapi/cms/lowcode/60007/1056131/list/value?cate=0","priority":0,"_dataFilter":{"filter":false,"showCondition":false,"conditionExclude":false,"showSearch":false,"currentConditionHide":false,"selectFirstCondition":false,"fields":[],"cascaderEnable":false,"showSearchCname":""},"datasourceType":"nomarl","appId":"60007","sourceUuid":"1441959640303796224","pageParams":[],"metaUrl":"/fwebapi/cms/lowcode/60007/1056131/list/meta?cate=0","disabled":false,"api":"/fwebapi/cms/lowcode/60007/1056131/list?cate=0","id":"datasource2","apiId":"1056131","reqKey":"/fwebapi/cms/lowcode/60007/1056131/list?cate=0|{\"size\":6,\"query\":[{\"esField\":\"DETAIL_ES.es_multi_category_01Sy2jv4\",\"groupName\":\"数据展示条件,默认条件组\",\"groupEnd\":\"2,1\",\"field\":\"category_01Sy2jv4\",\"sourceType\":\"static\",\"valueName\":\"关于我们\",\"dataType\":\"array[category]\",\"logic\":\"and\",\"groupBegin\":\"1,2\",\"value\":\"2661\",\"fieldType\":\"array\",\"operator\":\"in\"}],\"header\":{\"Data-Query-Es-Field\":\"DETAIL_ES.es_multi_image_LId4c7g2,DETAIL_ES.es_symbol_text_r4O05cao,DETAIL_ES.es_symbol_batjp\",\"Data-Query-Field\":\"image_LId4c7g2,text_r4O05cao,batjp\"},\"from\":0,\"sort\":[]}|{\"Data-Query-Es-Field\":\"DETAIL_ES.es_multi_image_LId4c7g2,DETAIL_ES.es_symbol_text_r4O05cao,DETAIL_ES.es_symbol_batjp\",\"Data-Query-Field\":\"image_LId4c7g2,text_r4O05cao,batjp\"}"}'
                  />
                  <input type="hidden" name="view" value="Home" />
                  <input
                    type="hidden"
                    name="pageParamsJson"
                    value='{"size":6,"from":0,"totalCount":4}'
                  />
                  <input
                    type="hidden"
                    name="i18nJson"
                    value='{"noMore_88":"No more","pageItem_88":"picecs","pageWhole_88":"in total","loadMore_88":"Click to load more","loadNow_88":"Loading","pageUnit_88":"page","pageJump_88":"proceed","noData_88":"No data"}'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cbox-81-1 p_item">
            <div className="e_image-82 s_img fa_mohide response-transition">
              <img
                src="/assets/about-landing-page.png"
                alt="图片名称"
                title="图片名称"
              />
            </div>
          </div>
        </div>
        <input
          type="hidden"
          name="propJson"
          value='{"href_82":{"type":"","value":"","target":""},"setting_82":{"fit":"contain","errorUrl":"","needThumb":"false","isLazy":"false"},"pageConfig_88":{"rolling":{"navigation":true,"scrollType":"horizontal","pagenation":true,"scrollTime":4,"autoScroll":true},"showJump":true,"pageType":"hidden","pcColumn":3,"marquee":{"navigation":true,"marqueeTime":4,"scrollType":"horizontal","opp":false},"loopItem":".p_loopitem","status":true,"filterPosition":"","pcRow":2,"moColumn":3,"datasourceid":"datasource2","elementid":88},"imgList2_93":[],"imgList1_82":[],"prompt_86":"","space_82":0,"href_86":{"type":"none","value":"","target":""},"dense_86":"","imgList2_90":[],"href_93":{"type":"","value":"","target":""},"href_91":{"transport":[],"type":"field","value":"_href","target":"_self"},"href_90":{"type":"none","value":"","target":""},"setting_90":{"fit":"contain","errorUrl":"","needThumb":"false","isLazy":"false"},"page_88":{"size":6,"from":0,"totalCount":100},"setting_93":{"fit":"contain","errorUrl":"","needThumb":"false","isLazy":"false"},"imgList2_82":[],"imgList1_93":[],"space_90":0,"prompt_91":"","space_93":0,"dense_91":"","imgList1_90":[]}'
        />
      </div>
      <div id="c_static_001-16662559417920" className="response-animated mt-4">
        <div className="e_container-1 s_layout">
          <div className="cbox-1-0 p_item">
            <div className="e_container-81 s_layout fa_text_c">
              <div className="cbox-81-0 p_item">
                <p className="e_text-83 s_link text-center">Projects</p>
                <p className="fa_tt_span text-center">
                  <span></span>
                  <span></span>
                </p>
              </div>
            </div>
            <div className="e_loop-84 s_list" ds-id="" elem-id="e_loop-84">
              <div className="">
                <div className="p_list">
                  <div className="cbox-84 p_loopitem">
                    <div className="e_container-85 s_layout">
                      <div className="cbox-85-0 p_item">
                        <div className="e_image-87 s_img">
                          <img
                            src="/assets/Expertice/6802629.png"
                            alt="Civil Work"
                            title="Civil Work"
                          />
                        </div>
                        <p className="e_text-86 s_title">Civil Work</p>
                        <a
                          href="/Case/1.html"
                          target="_self"
                          className="fa_link_a"
                        >
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cbox-84 p_loopitem">
                    <div className="e_container-85 s_layout">
                      <div className="cbox-85-0 p_item">
                        <div className="e_image-87 s_img">
                          <img
                            src="https://omo-oss-image.thefastimg.com/portal-saas/new2022091509465100264/cms/image/19b32d87-4dd7-437b-8e30-93b5ec977c03.png"
                            alt="Residence Rooftop Solar"
                            title="Residence Rooftop Solar"
                          />
                        </div>
                        <p className="e_text-86 s_title">
                          Residence Rooftop Solar
                        </p>
                        <a
                          href="/Case/2.html"
                          target="_self"
                          className="fa_link_a"
                        >
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cbox-84 p_loopitem">
                    <div className="e_container-85 s_layout">
                      <div className="cbox-85-0 p_item">
                        <div className="e_image-87 s_img">
                          <img
                            src="/assets/Projects/534230-200.png"
                            alt="Water power station"
                            title="Water power station"
                          />
                        </div>
                        <p className="e_text-86 s_title">Electrical Work</p>
                        <a
                          href="/Case/3.html"
                          target="_self"
                          className="fa_link_a"
                        >
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p_page"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="e_loop-76 s_list response-transition">
          <div className="">
            <div className="fa_hproswp1">
              <div className="swiper swiper-container-initialized swiper-container-horizontal">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-0f606c5fc99de688"
                  aria-live="off"
                  style={{
                    transform: "translate3d(-6804px, 0px, 0px)",
                    transition: "all 0ms ease 0s",
                  }}
                >
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li swiper-slide-duplicate"
                    data-swiper-slide-index="8"
                    role="group"
                    aria-label="1 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a
                            href="Projects/MountingStructureInstallation"
                            target="_self"
                          >
                            <img
                              src="/assets/Projects/Mounting structure Installation/iStock-1183024863.jpg"
                              alt="Mounting structure Installation"
                              title="Mounting structure Installation"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Mounting structure Installation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="2 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/CivilWork" target="_self">
                            <img
                              src="/assets/Projects/civil work/IMG-20170819-WA0004.jpg"
                              alt="Civil Work"
                              title="Civil Work"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Civil Work
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="3 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/CleaningSystem" target="_self">
                            <img
                              src="/assets/Projects/cleaning system/dsc04663.jpg"
                              alt="PV module cleaning system for overseas shed roof"
                              title="PV module cleaning system for overseas shed roof"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              PV module cleaning system for overseas shed roof
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="4 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a
                            href="Projects/RoofTopSolarInstallations/"
                            target="_self"
                          >
                            <img
                              src="/assets/Projects/Rooftop solar installations/iStock-1222813488.jpg"
                              alt="Rooftop solar installations"
                              title="Rooftop solar installations"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Rooftop solar installations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li"
                    data-swiper-slide-index="3"
                    role="group"
                    aria-label="5 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/ElectricalWork" target="_self">
                            <img
                              src="/assets/Projects/electrical work/projects-40920220123.jpg"
                              alt="Electrical Work"
                              title="Electrical Work"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Electrical Work
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li"
                    data-swiper-slide-index="4"
                    role="group"
                    aria-label="6 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/CleaningSystem" target="_self">
                            <img
                              src="/assets/Projects/cleaning system/dsc04657.jpg"
                              alt="Cleaning System"
                              title="Cleaning System"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Cleaning System
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li swiper-slide-prev"
                    data-swiper-slide-index="5"
                    role="group"
                    aria-label="7 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a
                            href="Projects/MountingStructureInstallation"
                            target="_self"
                          >
                            <img
                              src="/assets/Projects/Mounting structure Installation/DSC03787.jpg"
                              alt="Mounting structure Installation"
                              title="Mounting structure Installation"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Mounting structure Installation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li swiper-slide-active"
                    data-swiper-slide-index="6"
                    role="group"
                    aria-label="8 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a
                            href="Projects/RoofTopSolarInstallations"
                            target="_self"
                          >
                            <img
                              src="/assets/Projects/Rooftop solar installations/20201231_125237.jpg"
                              alt="Rooftop solar installations"
                              title="Rooftop solar installations"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Rooftop solar installations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li swiper-slide-next"
                    data-swiper-slide-index="7"
                    role="group"
                    aria-label="9 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/CleaningSystem" target="_self">
                            <img
                              src="/assets/Projects/cleaning system/dsc04647.jpg"
                              alt="Cleaning System"
                              title="Cleaning System"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Cleaning System
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li"
                    data-swiper-slide-index="8"
                    role="group"
                    aria-label="10 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/ElectricalWork" target="_self">
                            <img
                              src="/assets/Projects/electrical work/projects-multi-image-23120220123.jpg"
                              alt="Electrical Work"
                              title="Electrical Work"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Electrical Work
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide cbox-76 p_loopitem fa_li swiper-slide-duplicate"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="11 / 11"
                    style={{ width: "900px", marginRight: "72px" }}
                  >
                    <div className="e_container-77 s_layout response-transition">
                      <div className="cbox-77-0 p_item">
                        <div className="e_image-78 s_img fa_Img fa_Imgmin">
                          <a href="Projects/CivilWork" target="_self">
                            <img
                              src="/assets/Projects/civil work/IMG-20170819-WA0003.jpg"
                              alt="Civil Work"
                              title="Civil Work"
                            />
                          </a>
                        </div>
                        <div className="e_container-79 s_layout response-transition">
                          <div className="cbox-79-0 p_item">
                            <p className="e_text-80 s_title response-transition">
                              Civil Work
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
              <div className="fa_pro_btn">
                <div
                  className="fa_btn_l"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-0f606c5fc99de688"
                >
                  <div className="fa_divbtn">
                    <i>
                      <img
                        src="https://omo-oss-image.thefastimg.com/portal-saas/new2022070118592964018/cms/image/261c8fe0-0162-4834-ac30-87dc967dbfe4.png"
                        alt=""
                        title=""
                      />
                    </i>
                  </div>
                  <span>prev</span>
                </div>
                <div
                  className="fa_btn_r"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-0f606c5fc99de688"
                >
                  <span>next</span>
                  <div className="fa_divbtn">
                    <i>
                      <img
                        src="https://omo-oss-image.thefastimg.com/portal-saas/new2022070118592964018/cms/image/21ee852a-d5ba-4096-9aab-535bb0d36703.png"
                        alt=""
                        title=""
                      />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
