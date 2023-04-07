import React from "react";
import {
  iconCompany1,
  iconCompany2,
  iconCompany3,
  iconCompany4,
} from "../assets";

const Companies = () => {
  const imgData = [iconCompany1, iconCompany2, iconCompany3, iconCompany4];
  return (
    <div className="w-full bg-white pb-[50px]">
      <div className="md:max-w-[1480px] mx-auto max-w-[600px] px-3.5">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#536E96]">
            Trusted by over 25,000 teams around the world.
          </h2>
          <p className=" text-[#536E96] text-xl">
            Leading companies use the same courses to help employees keep their
            skills fresh.
          </p>
          <div className="flex justify-center py-8 md:gap-8 ">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              {imgData.map((item, i) => (
                <img key={i} src={item} alt="icon" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
