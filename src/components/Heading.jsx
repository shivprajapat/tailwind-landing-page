import React from "react";

const Heading = ({ title, green, description }) => {
  return (
    <div>
      <h2 className="py-3 text-3xl font-bold">
        {title} <span className="text-[#20B486]">{green}</span>
      </h2>
      <p className="pb-2 text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default Heading;
