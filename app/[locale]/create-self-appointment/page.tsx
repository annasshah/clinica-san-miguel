"use client";

import { styles } from "@/app/[locale]/styles";
import { supabase } from "@/supabaseClient";
import { Button } from "@/utils";
import { Modal } from "flowbite-react";
import { useLocale, useTranslations } from "next-intl";
import { TuiDatePicker } from "nextjs-tui-date-picker";
import { useEffect, useState } from "react";
import moment from "moment";

import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";

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
    className={`flex flex-col items-start w-full ${breakpoint ? "md:w-1/2" : ""
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
    className={`flex flex-col items-start w-full ${breakpoint ? "md:w-1/2" : ""
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
      dateFormat="yyyy-MM-dd HH:MM"
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
    className={`flex flex-col items-start w-full ${breakpoint ? "md:w-1/2" : ""
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

const Self_Appointment = () => {
  const t = useTranslations("appoinment_form");
  const locale = useLocale();

  const tableName = locale === "es" ? "services_es" : "services";

  // const [openModal, setOpenModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [sex, setSex] = useState("");
  const [services, setServices] = useState<string[] | null | undefined>([]);
  const [locations, setLocations] = useState<any>([]);
  const [locationID, setLocationID] = useState("")
  const [locationVal, setlocationVal] = useState("")
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [inOfficePatient, setInOfficePatient] = useState("");
  const [newPatient, setNewPatient] = useState("");
  const [date_and_time, setDate_and_time] = useState("");

  const visitType = [t("form_f1a"), t("form_f1b")];
  const patientType = [t("form_f2a"), t("form_f2b")];
  const genderOptions = [t("form_f8a"), t("form_f8b"), t("form_f8c")];

  useEffect(() => {
    const fetchServices = async () => {
      let { data, error } = await supabase.from(tableName).select("title");

      if (data) {
        const serviceData = data.map((item) => item.title);
        setServices(serviceData);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      let { data, error } = await supabase.from('Locations').select("address, id");

      if (data) {
        const serviceData = data;
        setLocations(serviceData);
      }
    };

    fetchServices();
  }, []);

  const submitAppointmentDetails = async () => {
    let appointmentDetails: any = {
      location_id: locationID,
      first_name: firstName,
      last_name: lastName,
      email_Address: email,
      address: address,
      in_office_patient: inOfficePatient === "In-Office Visit" || false,
      new_patient: newPatient === "new" || false,
      dob: dob,
      sex: sex,
      phone: phone,
      service: service,
    };

    const requiredFields = [
      "location_id",
      "first_name",
      "last_name",
      "email_Address",
      "address",
      "dob",
      "sex",
      "phone",
      "service",
    ];

    for (const field of requiredFields) {
      if (!appointmentDetails[field]) {
        toast.warning(`Please fill in the ${field}`);
        return;
      }
    }

    const postData = {
      ...appointmentDetails,
      date_and_time,
    }
    const { data, error } = await supabase
      .from("Appoinments")
      .insert([postData])
      .select();

    if (error) {
      if (error?.message === 'duplicate key value violates unique constraint "Appoinments_date_and_time_key"') {
        toast.error(`Sorry, Appointment time slot is not available, Please select any other time slot`);

      }
      else { toast.error(`Error submitting appointment: ${error?.message}`); }
    } else {
      toast.success("Appointment Submitted");
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob(null);
      setSex("");
      setServices([]);
      setService("");
      setlocationVal("");
      setAddress("");
      setPhone("");
      setInOfficePatient("");
      setNewPatient("");
      setDate_and_time("");
      console.log(data, "Appointment Submitted");
    }
  };



  const onChangeLocation = (selected: string) => {
    if (locations) {
      const findLocationId: any = locations?.find((elem: any) => elem.address === selected)
      console.log(findLocationId)
      if (findLocationId) {
        setLocationID(findLocationId.id)
      }
    }
    setlocationVal(selected)
    console.log(locations)
  }
  return (
    <div className="w-full flex justify-center">
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}

      <div className="w-full max-w-[800px] rounded-[20px] bg-[#F8F5F0]">

        <div className="flex w-full justify-center">
          <h1
            className={`${styles.sectionHeadText} border-b-[1px] border-black px-4 pb-3`}
            style={{ textAlign: "left", color: "#C1001F" }}
          >
            {t("self_form_title")}
          </h1>
        </div>
        <section className="flex flex-col px-5 justify-start items-start gap-4 p-4">
          <RadioButtons
            name="visit type"
            options={visitType}
            label={t("form_f1")}
            onChange={setInOfficePatient}
            selectedValue={inOfficePatient}
          />
          <RadioButtons
            name="patient type"
            options={patientType}
            label={t("form_f2")}
            onChange={setNewPatient}
            selectedValue={newPatient}
          />
          <div className="flex flex-col md:flex-row justify-start w-full gap-5 items-center">
            <Dropdown
              label={t("form_f10")}
              options={services}
              breakpoint={true}
              onChange={setService}
              value={service}
            />
            <Dropdown
              label={t("location_label")}
              options={locations.map((item: any) => item.address)}
              breakpoint={true}
              onChange={onChangeLocation}
              value={locationVal}
            />
          </div>
          <article className="flex flex-col md:flex-row justify-center w-full gap-5 items-center">
            <Input
              label={t("form_f3")}
              placeholder="Enter your first name"
              breakpoint={true}
              onChange={setFirstName}
              value={firstName}
            />
            <Input
              label={t("form_f4")}
              placeholder="Enter your last name"
              breakpoint={true}
              onChange={setLastName}
              value={lastName}
            />
          </article>
          <Input
            label={t("form_f5")}
            placeholder="Your current email address"
            breakpoint={false}
            onChange={setEmail}
            value={email}
          />
          <article className="flex flex-col md:flex-row justify-center w-full gap-5 items-center">
            <Input
              label={t("form_f6")}
              placeholder="ex. (+92) 331 2566730"
              breakpoint={true}
              onChange={setPhone}
              value={phone}
            />
            <DatePicker
              label={t("form_f7")}
              placeholder="your date of birth"
              breakpoint={true}
              onChange={setDob}
              value={dob}
            />
          </article>
          <RadioButtons
            name="gender"
            options={genderOptions}
            label={t("form_f8")}
            onChange={setSex}
            selectedValue={sex}
          />
          <Input
            label={t("form_f9")}
            placeholder="enter your address with zip code."
            breakpoint={false}
            onChange={setAddress}
            value={address}
          />




        </section>

        <div className="w-full flex justify-end items-center m-3">
          <Button
            text={t("button_label")}
            size={{ width: "250px", height: "50px" }}
            route={""}
            bgColor={"#C1001F"}
            textColor={"#ffffff"}
            onClick={() => {
              submitAppointmentDetails();
            }}
          />
        </div>

      </div>
    </div>
  );
};


export default Self_Appointment