"use client";

import { styles } from "@/app/styles";
import { supabase } from "@/supabaseClient";
import { Button } from "@/utils";
import { Modal } from "flowbite-react";
import { useState } from "react";

const RadioButton = ({ value, name, label, checked, onChange }: any) => (
  <div className="flex items-center justify-start gap-3">
    <input
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-[25px] h-[25px] bg-transparent border-[2px] border-[#000000] hover:bg-[#ccc]"
    />{" "}
    <label className="text-[16px] text-customGray font-poppins">{label}</label>
  </div>
);

const RadioButtons = ({
  name,
  options,
  label,
  selectedValue,
  onChange,
}: {
  name: string;
  options: string[];
  label: string;
  selectedValue: string;
  onChange: (value: string) => void;
}) => (
  <div className="flex flex-col md:flex-row items-start justify-start gap-4">
    <label className="text-[16px] text-customGray font-poppins font-bold">
      {label}:
    </label>
    <div className="flex flex-wrap gap-4">
      {options.map((value, index) => (
        <RadioButton
          key={index}
          value={value}
          name={name}
          label={value}
          checked={selectedValue === value}
          onChange={() => onChange(value)}
        />
      ))}
    </div>
  </div>
);

const Input = ({
  label,
  placeholder,
  breakpoint,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  breakpoint: boolean;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div
    className={`flex flex-col items-start w-full ${
      breakpoint ? "md:w-1/2" : ""
    } justify-center`}
  >
    <label className="text-[16px] text-customGray font-poppins font-bold">
      {label}:
    </label>
    <input
      placeholder={`${placeholder}`}
      className="w-full h-[46px] border-[1px] border-[#000000] text-[16px] text-[#000000] placeholder:text-customGray placeholder:text-opacity-50 px-5 bg-transparent outline-none rounded-[10px]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Dropdown = ({
  label,
  options,
  breakpoint,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  breakpoint: boolean;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div
    className={`flex flex-col items-start w-full ${
      breakpoint ? "md:w-1/2" : ""
    } justify-center`}
  >
    <label className="text-[16px] text-customGray font-poppins font-bold">
      {label}:
    </label>
    <select
      className="w-full h-[46px] border-[1px] border-[#000000] text-[16px] text-[#000000] placeholder:text-customGray placeholder:text-opacity-50 px-5 bg-transparent outline-none rounded-[10px]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const RequestAppointment = ({
  locationID,
  openModal,
  handleClose,
}: {
  locationID: number;
  openModal: boolean;
  handleClose: any;
}) => {
  // const [openModal, setOpenModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [inOfficePatient, setInOfficePatient] = useState("");
  const [newPatient, setNewPatient] = useState("");

  const visitType = ["In-Office Visit", "Virtual Visit"];
  const patientType = ["new", "returning"];
  const genderOptions = ["Male", "Female", "Other"];
  const services = ["abc", "xyz"];

  const submitAppointmentDetails = async () => {
    let appointmentDetails = {
      location_id: locationID,
      first_name: firstName,
      last_name: lastName,
      email_Address: email,
      in_office_patient: inOfficePatient === "In-Office Visit" || false,
      new_patient: newPatient === "new" || false,
      dob: dob,
      sex: sex,
      service: service,
    };

    const { data, error } = await supabase
      .from("Appoinments")
      .insert([appointmentDetails])
      .select();

    console.log(data, "Appointment Submitted");
  };

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal
        show={openModal}
        onClose={handleClose}
        position={"center"}
        size={"lg"}
        color="#F8F5F0"
      >
        {/* <div className="min-w-[320px] w-full max-w-[800px] rounded-[20px] bg-[#F8F5F0]"> */}
        <Modal.Header>
          <div className="flex w-full justify-start">
            <h1
              className={`${styles.sectionHeadText} border-b-[1px] border-black px-4 pb-3`}
              style={{ textAlign: "left", color: "#C1001F" }}
            >
              Appointment Request
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body>
          <section className="flex flex-col px-5 justify-start items-start gap-4 p-4">
            <RadioButtons
              name="visit type"
              options={visitType}
              label="Visit Type"
              onChange={setInOfficePatient}
              selectedValue={inOfficePatient}
            />
            <RadioButtons
              name="patient type"
              options={patientType}
              label="Are you a new or returning patient?"
              onChange={setNewPatient}
              selectedValue={newPatient}
            />
            <article className="flex flex-col md:flex-row justify-center w-full gap-5 items-center">
              <Input
                label="First Name"
                placeholder="ex. umair"
                breakpoint={true}
                onChange={setFirstName}
                value={firstName}
              />
              <Input
                label="Last Name"
                placeholder="ex. munawar"
                breakpoint={true}
                onChange={setLastName}
                value={lastName}
              />
            </article>
            <Input
              label="Email Address"
              placeholder="ex. umair.munawar@gmail.com"
              breakpoint={false}
              onChange={setEmail}
              value={email}
            />
            <article className="flex flex-col md:flex-row justify-center w-full gap-5 items-center">
              <Input
                label="Mobile Number"
                placeholder="ex. (+92) 331 2566730"
                breakpoint={true}
                onChange={setPhone}
                value={phone}
              />
              <Input
                label="Date of Birth"
                placeholder="ex. 23-oct-2000"
                breakpoint={true}
                onChange={setDob}
                value={dob}
              />
            </article>
            <RadioButtons
              name="gender"
              options={genderOptions}
              label="Sex"
              onChange={setSex}
              selectedValue={sex}
            />
            <Input
              label="Address"
              placeholder="ex. Model Colony, Malir, Karachi."
              breakpoint={false}
              onChange={setAddress}
              value={address}
            />
            <Dropdown
              label="Service"
              options={services}
              breakpoint={true}
              onChange={setService}
              value={service}
            />
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full flex justify-end items-center m-3">
            <Button
              text={"Book now"}
              size={{ width: "250px", height: "50px" }}
              route={""}
              bgColor={"#C1001F"}
              textColor={"#ffffff"}
              onClick={() => {
                submitAppointmentDetails();
                handleClose();
              }}
            />
          </div>
        </Modal.Footer>
        {/* </div> */}
      </Modal>
    </>
  );
};
