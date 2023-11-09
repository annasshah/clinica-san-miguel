"use client";

import React, { useState } from "react";
import { Button } from "@/utils";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <h3 className="text-[20px] text-[#ffffff]">{label}</h3>
      <div className="w-[183px] h-[37px] px-1 rounded-[10px] bg-[#ffffff] flex justify-between items-center">
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent text-[#000000] outline-none text-[16px]"
        />
      </div>
    </div>
  );
};

export const ScheduleTreatment: React.FC = () => {
  const [patientName, setPatientName] = useState("");

  const handlePatientNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientName(e.target.value);
  };

  return (
    <article className="w-[80%] flex items-center justify-evenly rounded-[10px] h-[107px] bg-[#19192C]">
      <InputField
        label="Patient Name:"
        placeholder="Enter your name"
        value={patientName}
        onChange={handlePatientNameChange}
      />
      <InputField
        label="Patient Name:"
        placeholder="Enter your name"
        value={patientName}
        onChange={handlePatientNameChange}
      />{" "}
      <InputField
        label="Patient Name:"
        placeholder="Enter your name"
        value={patientName}
        onChange={handlePatientNameChange}
      />
      {/* Add more InputField components for other inputs if needed */}
      <div>
        <Button
          text={"Book Now"}
          size={{
            width: "161px",
            height: "62px",
          }}
          route={""}
          bgColor={"#C1001F"}
        />
      </div>
    </article>
  );
};
