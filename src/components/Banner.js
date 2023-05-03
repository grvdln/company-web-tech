import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-[#2699fb] py-[100px] text-center font-bold w-full mx-auto">
      <div className="mt-[100px]">
        <div className="text-xl md:text-3xl md:p-[24px]">Learn with us</div>
        <div className="text-white text-5xl md:text-[80px] md:p-[24px]">
          Grow with us.
        </div>
        <div className="text-white text-[20px] md:text-[50px] md:p-[24px]">
          Learn
          <Typed
            className="ml-3"
            strings={[
              "Web Development",
              "Artificial Intelligence",
              "Machine Learning",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
