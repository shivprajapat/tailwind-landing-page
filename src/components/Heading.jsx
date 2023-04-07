import React from "react";

const Heading = ({ title, second, green, description }) => {
  return (
    <div>
      <h2 className="py-3 text-3xl font-bold">
        {title} <span className="text-[#20B486] mr-1"> {green}</span>
        {second}
      </h2>
      <p className="pb-2 text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default Heading;
