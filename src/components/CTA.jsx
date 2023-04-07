import React from "react";
import { imgCTA } from "../assets";
import Button from "./Button";
import Heading from "./Heading";

const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={imgCTA} className="w-[650px] mx-auto" />
        <div>
          <Heading
            title="Join"
            second="learning platform today"
            green="World's largest"
            description="Start learning by registering for free"
          />
          <div className="mt-3">
            <Button title="Sign Up For Free" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
