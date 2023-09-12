import React, { useState } from "react";
import useStore from "../store";

const Select = () => {
  const { Traits, addTraits } = useStore();

  const Options = [
    "Adventurous",
    "clean",
    "Good listener",
    "Honest",
    "Humorous",
    "Inspiring",
    "Kind",
    "Knowledgable",
    "Non-judgemental",
    "Spontanous",
    "Talkative",
    "Thoughfull",
    "Trustworthy"
  ];

  const handleOptionChange = (event) => {
    const value = event.target.value;
    addTraits(value);
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
      {Options.map((option, index) => (
        <div key={index} className="flex items-center ">
          <input
            type="checkbox"
            name="recommand"
            id={`option-${index}`}
            value={option}
            className="hidden"
            onChange={handleOptionChange}
          />
          <label
            htmlFor={`option-${index}`}
            className="rounded-full p-2 bg-[#f6f3f0] text-black text-sm cursor-pointer"
            style={{
              backgroundColor: Traits.includes(option) && "#a2e6b8"
            }}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Select;
