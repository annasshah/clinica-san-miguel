"use client";

import { Logo, USA_flag } from "@/assets";
import navLinks from "./navLinks.json";

import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { useState } from "react";
import { Dropdown } from "@/utils";

export const Navbar = () => {
  // Use useState to manage the state of each dropdown separately
  const [dropdownStates, setDropdownStates] = useState(
    Array(navLinks.length).fill(false)
  );
  const [usaFlagDropdownOpen, setUsaFlagDropdownOpen] = useState(false);

  const styles = {
    text: "list-none text-[25px] text-primary",
  };

  const toggleDropdown = (index: number) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const toggleUsaFlagDropdown = () => {
    setUsaFlagDropdownOpen(!usaFlagDropdownOpen);
  };

  return (
    <header className="h-[90px] w-full flex justify-between px-14 items-center">
      <Image
        src={Logo}
        alt={"Logo"}
        className="w-[233px] aspect-auto object-contain"
      />
      <nav className="flex justify-center items-center gap-5">
        {navLinks.map((link, index) => (
          <div key={link.id}>
            {link.dropDownOptions ? ( // Check if dropDownOptions exist
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
                  )}{" "}
                  {/* Arrow icon */}
                </div>
                {dropdownStates[index] && ( // Display the dropdown if the corresponding dropdown state is true
                  <Dropdown options={link.dropDownOptions} />
                )}
              </div>
            ) : (
              <Link href={link.route}>
                <li className="list-none text-[25px] text-primary">
                  {link.heading}
                </li>
              </Link>
            )}
          </div>
        ))}
        {/* Add the last div with a dropdown */}
      </nav>
      <div className="relative">
        <div
          onClick={toggleUsaFlagDropdown}
          className="flex justify-between gap-3 items-center"
        >
          <Image
            src={USA_flag}
            alt={"usa flag"}
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
          )}{" "}
        </div>
        {usaFlagDropdownOpen && ( // Display the dropdown if the usaFlagDropdownOpen state is true
          <Dropdown
            options={[
              { id: 1, icon: "", heading: "fr" },
              { id: 2, icon: "", heading: "sp" },
            ]}
          />
        )}
      </div>
    </header>
  );
};
