"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Hamburger from "hamburger-react";
import { Dropdown } from "@/utils";
import { Logo, USA_flag } from "@/assets/images";
import { useRouter } from "next/navigation";
// import navLinks from "./navLinks.json";
import LanguageChanger from "../LanguageChanger";

export const Navbar = () => {
  const router = useRouter();
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
    { id: 4, heading: "Career", route: "/career" },
    { id: 5, heading: "Specials", route: "/special" },
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
    text: "list-none text-[20px] text-primary cursor-pointer",
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

  const SM_Screen_renderNavLinks = () =>
    navLinks.map((link, index) => (
      <Link key={link.id} className="" href={link.route}>
        <li onClick={() => setOpen(false)} className={`${styles.text} my-5`}>
          {link.heading}
        </li>
      </Link>
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

      {isOpen && (
        <div className="  bg-white/95 bottom-0 right-0 left-0 top-0 h-[100dvh] z-40 fixed transition-all duration-300 ease-in-out w-full tablet:hidden gap-4 sm:gap-7 items-center">
          <div className="grid place-items-center h-full">
            <div className="spacing-y-5">
              <SM_Screen_renderNavLinks />
            </div>
          </div>
        </div>
      )}

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
        <div className="block absolute z-50 top-5 right-6 tablet:right-10">
          <LanguageChanger />
        </div>
        <div className="block absolute z-50 top-5 right-6 tablet:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>
    </header>
  );
};
