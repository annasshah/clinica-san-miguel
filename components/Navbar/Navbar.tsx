"use client";

import { useState, useContext } from "react";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Hamburger from "hamburger-react";
import { Dropdown } from "@/utils";
import { Logo, USA_flag } from "@/assets/images";
import { useRouter } from "next/navigation";
import { BotContext } from "@/context/Context";
// import navLinks from "./navLinks.json";

export const Navbar = () => {
  const { setLanguage } = useContext(BotContext);
  const router = useRouter()
  const navLinks = [
    { id: 1, heading: "Home", route: "/" },
    { id: 2, heading: "About Us", route: "/about" },
    {
      id: 3,
      heading: "Services",
      route: "/services",
      // dropDownOptions: [
      //   { id: 1, heading: "Service 1", route: "" },
      //   { id: 2, heading: "Service 2", route: "" },
      // ],
    },
    // { id: 4, heading: "Blogs", route: "" },
    // { id: 5, heading: "Testimonial", route: "/testimonials" },
    { id: 6, heading: "Contact", route: "/contact" },
    // {
    //   id: 7,
    //   heading: "More",
    //   route: "",
    //   dropDownOptions: [{ id: 1, heading: "Special", route: "/special" }],
    // },
  ];

  const [dropdownStates, setDropdownStates] = useState(
    Array(navLinks.length).fill(false)
  );
  const [usaFlagDropdownOpen, setUsaFlagDropdownOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const styles = {
    text: "list-none text-[16px] text-primary cursor-pointer",
  };

  const toggleDropdown = (index: number) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const toggleUsaFlagDropdown = () => {
    setUsaFlagDropdownOpen(!usaFlagDropdownOpen);
  };

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      <div key={link.id}>
        {/* {link?.dropDownOptions ? (
          <div className="relative">
            <div
              onClick={() => toggleDropdown(index)}
              className="flex justify-between gap-3 items-center"
            >
              <li className={styles.text}>{link.heading}</li>
              {dropdownStates[index] ? (
                <div className="text-[15px] text-primary">
                  <IoIosArrowUp />
                </div>
              ) : (
                <div className="text-[15px] text-primary">
                  <IoIosArrowDown />
                </div>
              )}
            </div>
            {dropdownStates[index] && (
              <Dropdown options={link?.dropDownOptions} />
            )}
          </div>
        ) : ( */}
        <Link href={link.route}>
          <li className={styles.text}>{link.heading}</li>
        </Link>
        {/* )} */}
      </div>
    ));



  return (
    <header className="h-[90px] w-full flex justify-center relative px-8 md:px-10 lg:px-14 items-center">
      <Image
        onClick={() => router.push(`/`)}
        src={Logo}
        alt="Logo"
        className="cursor-pointer w-[150px] md:w-[170px] lg:w-[200px] xl:w-[233px] absolute left-6 top-5 aspect-auto object-contain"
      />
      <nav className="hidden tablet:flex tablet:justify-center font-poppins tablet:items-center tablet:gap-5">
        {renderNavLinks()}
      </nav>
      <div className="flex gap-4 sm:gap-7 items-center">
        {/* <div className="relative">
          <div
            onClick={toggleUsaFlagDropdown}
            className="flex justify-between gap-3 items-center"
          >
            <Image
              src={USA_flag}
              alt="usa flag"
              className="w-[30px] aspect-auto"
            />
            {usaFlagDropdownOpen ? (
              <div className="text-[15px] text-primary">
                <IoIosArrowUp />
              </div>
            ) : (
              <div className="text-[15px] text-primary">
                <IoIosArrowDown />
              </div>
            )}
          </div>
          {usaFlagDropdownOpen && (
            <Dropdown
              options={[
                { id: 1, icon: "", heading: "fr" },
                { id: 2, icon: "", heading: "sp" },
              ]}
            />
          )}
        </div> */}
        <div className="block absolute top-5 right-6 tablet:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
        <button onClick={() => setLanguage('en')}>
          <p className="text-2xl font-bold ml-2">
            en
          </p>
        </button>
        <p className="text-2xl font-bold ml-2">
          |
        </p>
        <button onClick={() => setLanguage('es')}>
          <p className="text-2xl font-bold ml-2">
            es
          </p>
        </button>
      </div>
    </header>
  );
};
