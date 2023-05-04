import React from "react";

function NewsLetter() {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] md:flex justify-between mx-auto py-[50px]">
        <div className="m-2">
          <div className="text-white text-[20px] md:text-[40px] font-bold]">
            Want to learn latest I.T skills?
          </div>
          <span className="text-white ">
            Sign up to our newletter and staty up to date.
          </span>
        </div>
        <div className="m-1" >
          <input
            className="p-3 mr-2 rounded mb-2 text-slate-600"
            type="email"
            placeholder="Enter Email"
          />
          <button className="w-[30%] bg-black text-white p-3 rounded">
            Get started
          </button>
          <br />
          <p className="text-white">
            We care about the protection of your data. Read our <br />{" "}
            <a href="#" className="text-black">Privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
