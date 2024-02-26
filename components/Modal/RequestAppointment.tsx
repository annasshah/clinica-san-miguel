"use client";

import { styles } from "@/app/styles";
import { supabase } from "@/supabaseClient";
import { Button } from "@/utils";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const DatePicker = ({
  label,
  placeholder,
  breakpoint,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  breakpoint: boolean;
  value: Date | null;
  onChange: (value: Date | null) => void;
}) => (
  <div
    className={`flex flex-col items-start w-full ${
      breakpoint ? "md:w-1/2" : ""
    } justify-center`}
  >
    <label className="text-[16px] text-customGray font-poppins font-bold">
      {label}:
    </label>
    {/* <input
      placeholder={`${placeholder}`}
      className="w-full h-[46px] border-[1px] border-[#000000] text-[16px] text-[#000000] placeholder:text-customGray placeholder:text-opacity-50 px-5 bg-transparent outline-none rounded-[10px]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    /> */}
    <ReactDatePicker
      selected={value}
      onChange={(date) => onChange(date)}
      placeholderText={placeholder}
      dateFormat="yyyy-MM-dd"
      className="w-full h-[46px] border-[1px] border-[#000000] text-[16px] text-[#000000] placeholder:text-customGray placeholder:text-opacity-50 px-5 bg-transparent outline-none rounded-[10px]"
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
  options: string[] | null | undefined;
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
      {options?.map((option, index) => (
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
  const [dob, setDob] = useState<Date | null>(null);
  const [sex, setSex] = useState("");
  const [services, setServices] = useState<string[] | null | undefined>([]);
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [inOfficePatient, setInOfficePatient] = useState("");
  const [newPatient, setNewPatient] = useState("");

  const visitType = ["In-Office Visit", "Virtual Visit"];
  const patientType = ["new", "returning"];
  const genderOptions = ["Male", "Female", "Other"];

  useEffect(() => {
    const fetchServices = async () => {
      let { data, error } = await supabase.from("services").select("title");

      if (data) {
        const serviceData = data.map((item) => item.title);
        setServices(serviceData);
      }
    };

    fetchServices();
  }, []);

  // const services = ["abc", "xyz"];

  const submitAppointmentDetails = async () => {
    let appointmentDetails = {
      location_id: locationID,
      first_name: firstName,
      last_name: lastName,
      email_Address: email,
      address: address,
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
        // size={"lg"}
        color="#F8F5F0"
        className="bg-[#000000] bg-opacity-50 flex justify-center items-center h-screen w-full"
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <div className="w-full max-w-[1000px] rounded-[20px] bg-[#F8F5F0]">
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
                  placeholder="Enter your first name"
                  breakpoint={true}
                  onChange={setFirstName}
                  value={firstName}
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  breakpoint={true}
                  onChange={setLastName}
                  value={lastName}
                />
              </article>
              <Input
                label="Email Address"
                placeholder="Your current email address"
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
                <DatePicker
                  label="Date of Birth"
                  placeholder="your date of birth"
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
                placeholder="enter your address with zip code."
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
        </div>
      </Modal>
    </>
  );
};
