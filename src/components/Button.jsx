import React from "react";

const Button = ({ title }) => {
  return (
    <button className="lg:px-8 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
      {title}
    </button>
  );
};

export default Button;
