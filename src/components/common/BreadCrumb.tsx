import React from "react";

export default function BreadCrumb({ pageName, linkName }: any) {
  return (
    <div>
      <section className="relative py-2 px-4 before:absolute  before:top-0 before:left-0 before:h-full before:w-full before:-z-10 ">
        <div className=" relative z-30 top-11  rounded-2xl">
          <div className="container  flex items-center justify-start  px-4 py-6 mx-auto overflow-x-auto whitespace-nowrap">
            <a href="/" className=" flex items-center text-gray-500 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="mx-2">Home</span>
            </a>

            <span className=" text-gray-500  rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <a
              href={linkName}
              className="flex items-center text-[#002f63] -px-2  hover:underline font-bold"
            >
              <span className="mx-0">{pageName}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
