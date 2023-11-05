"use client";

import { Logo } from "@/assets";
import navLinks from "./navLinks.json";

import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { useState } from "react";

export const Navbar = () => {
  // Use useState to manage the state of the dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const styles = {
    text: "list-none text-[25px] text-primary",
  };

  return (
    <header className="h-[90px] w-full flex justify-evenly items-center">
      <Image
        src={Logo}
        alt={"Logo"}
        className="w-[233px] aspect-auto object-contain"
      />
      <nav className="flex justify-center items-center gap-5">
        {navLinks.map((link) => (
          <div key={link.id}>
            {link.dropDownOptions ? ( // Check if dropDownOptions exist
              <div className="relative">
                <div
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="flex justify-between gap-3 items-center"
                >
                  <li className={styles.text}>{link.heading}</li>
                  {isDropdownOpen ? (
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
                {isDropdownOpen && ( // Display the dropdown if isDropdownOpen is true
                  <ul className="dropdown-content">
                    {link.dropDownOptions.map((option, index) => (
                      <Link key={index} href={option.route}>
                        <li className={styles.text}>{option.heading}</li>
                      </Link>
                    ))}
                  </ul>
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
      </nav>
    </header>
  );
};
