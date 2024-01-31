import React from "react";

export default function HeroImageSection({ imgSrc, title }: any) {
  return (
    <div>
      <section className="relative py-32 px-4 before:absolute  before:top-0 before:left-0 before:h-full before:w-full before:-z-10 ">
        <div className="z-20 relative text-white container mx-auto">
          <p className=" font-bold text-6xl drop-shadow-2xl">{title}</p>
        </div>
        <div className={`absolute inset-0 h-[55vh] z-10`}>
          <img src={imgSrc} alt="" className="h-full w-full object-fit-cover" />
          <div className="absolute inset-0 h-[55vh] z-20 bg-white bg-opacity-20" />
        </div>
      </section>
    </div>
  );
}
