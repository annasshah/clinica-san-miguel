"use client";

import { facebook, instagram, youtube } from "@/assets/images";
import { Button } from "@/utils";

import Image from "next/image";
import Link from "next/link";

import StarRatings from "react-star-ratings";

export const Footer = () => {
  const footerLink = [
    { id: 1, name: "privacy policy", route: "" },
    { id: 2, name: "terms and conditions", route: "" },
    { id: 3, name: "accessiblity notice", route: "" },
    { id: 4, name: "contact us", route: "" },
  ];

  const pages = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About Us", route: "/about" },
    { id: 3, name: "services", route: "/services" },
    // { id: 4, name: "blogs", route: "" },
    // { id: 5, name: "testimonial", route: "" },
    { id: 6, name: "contact", route: "/contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      image: facebook,
      route: "https://www.facebook.com/clinicasanmigueltx/",
    },
    {
      id: 2,
      image: instagram,
      route: "https://www.instagram.com/san_miguel_clinic_",
    },
    {
      id: 3,
      image: youtube,
      route: "https://www.youtube.com/channel/UC-89xwmnpU6ZEPSawRZKNIw",
    },
  ];

  const ratings = 4.8;
  const reviews = 40;

  return (
    <footer className="bg-[#19192C] w-full flex flex-col justify-center items-baseline">
      <article className="w-full px-5">
        <ul className="flex flex-wrap gap-10 justify-center items-center my-10">
          {pages.map((page) => (
            <Link href={page.route} key={page.id}>
              <li className="text-[#F8F5F0] font-poppins text-[16px]">
                {page.name}
              </li>
            </Link>
          ))}
        </ul>
      </article>

      <article className="flex flex-wrap gap-5 justify-between w-full border-b-[3px] border-[#ffffff] py-10 px-10">
        <div className="flex order-1 md:order-1 flex-col items-center w-full md:w-auto md:items-start gap-2">
          <h5 className="text-white font-poppins text-[16px] text-center md:text-left font-semibold">
            connect with us
          </h5>
          <ul className="flex gap-3 items-center justify-center">
            {socialLinks.map((social) => (
              <Link href={social.route} key={social.id}>
                <li className="w-[60px] h-[60px]">
                  <Image
                    src={social.image}
                    alt={""}
                    className="w-[60px] h-[60px] object-contain aspect-auto"
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex order-3 md:order-2 flex-col justify-center items-center w-full md:w-auto md:items-start">
          <h5 className="text-white font-poppins text-[16px] font-semibold">
            Rating and review
          </h5>

          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center border-r-[2px] pr-3 border-[#ffffff]">
              <h3 className="text-[25px] font-inter text-[#ffffff]">
                {reviews}+
              </h3>
              <p className="text-[#F8F5F0] font-inter text-[14px]">Reviews</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[25px] font-inter text-[#ffffff]">
                {ratings}/5
              </h3>
              <StarRatings
                rating={ratings}
                starDimension="15px"
                starSpacing="1px"
                numberOfStars={5}
                starRatedColor="#C1001F"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col order-2 md:order-3 gap-3 justify-center w-full md:w-auto items-center md:items-start">
          <h5 className="text-white font-poppins text-[16px] text-center md:text-left font-semibold">
            Join a Newsletter
          </h5>

          <div className="flex gap-2">
            <div className="bg-[#F8F5F0] h-[55px] w-[296px] rounded-[10px] md:rounded-[5px] flex justify-center items-center p-2">
              <input
                placeholder="Enter Your Email"
                className="placeholder:text-[14px] placeholder:text-[#A2A9B0] text-[16px] outline-none text-[#000000] bg-transparent w-full"
              />
            </div>

            {/* <Button
              text={"Send"}
              size={{
                width: "100px",
                height: "50px",
              }}
              route={""}
              textColor={"#000000"}
              bgColor={"#F8F5F0"}
            /> */}
          </div>
        </div>
      </article>

      <article className="my-10 w-full">
        <ul className="flex flex-wrap gap-10 justify-evenly items-center ">
          <li className="text-[#F8F5F0] order-2 md:order-1 font-poppins text-[16px]">
            © Copyright 2023 myclinicmd Inc.
          </li>
          <div className="flex flex-wrap gap-3 justify-evenly items-center ">
            {footerLink.map((item) => (
              <Link href={item.route} key={item.id}>
                <li className="text-[#F8F5F0] order-1 md:order-2 font-poppins text-[16px]">
                  {item.name}
                </li>
              </Link>
            ))}
          </div>
        </ul>
      </article>
    </footer>
  );
};
