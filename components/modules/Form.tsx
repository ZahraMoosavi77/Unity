"use client";
import React from "react";

const Form = ({ title, caption, children }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative w-full md:w-[440px]  flex flex-col flex-1 md:flex-grow-0 md:min-h-[300px] p-6 border-gray-300 md:border rounded-[20px] space-y-6"
    >
      <div className="w-full">
        <h4 className="text-scales-body font-peyda-bold  text-gray-900 mb-2.5">
          {title}
        </h4>
        <p className="max-w-full font-peyda-regular text-gray-800 text-base leading-5 ">
          {caption}
        </p>
      </div>
      {children}
    </form>
  );
};

export default Form;
