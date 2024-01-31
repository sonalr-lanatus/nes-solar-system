import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-5 z-[99]">
      {isVisible && (
        <>
          <div className="main">
            <div
              onClick={scrollToTop}
              aria-label="scroll to top"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-cyan-900 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp circle"
            >
              <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
            <svg
              id="rotatingText"
              viewBox="0 0 200 200"
              width="120"
              height="120"
            >
              <defs>
                <path
                  id="circle"
                  d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                "
                ></path>
              </defs>
              <text width="400">
                <textPath
                  alignment-baseline="top"
                  xlinkHref="#circle"
                  className="text"
                >
                  Scroll Up ! Scroll Up ! Scroll Up ! Scroll Up !
                </textPath>
              </text>
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
