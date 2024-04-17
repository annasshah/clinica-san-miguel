"use client";

import { facebook, instagram, youtube } from "@/assets/images";
import { Button } from "@/utils";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

import StarRatings from "react-star-ratings";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("common");

  const footerLink = [
    { id: 1, name: t("link_privacy_policy"), route: "" },
    { id: 2, name: t("link_terms_and_conditions"), route: "" },
    { id: 3, name: t("link_accessibility_notice"), route: "" },
    { id: 4, name: t("link_contact_us"), route: "/contact" },
  ];

  const pages = [
    { id: 1, name: t("link_home"), route: "/" },
    { id: 2, name: t("link_about"), route: "/about" },
    { id: 3, name: t("link_services"), route: "/services" },
    { id: 6, name: t("link_contact"), route: "/contact" },
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
              <li className="text-[#F8F5F0] font-poppins lowercase text-[16px]">
                {page.name}
              </li>
            </Link>
          ))}
        </ul>
      </article>

      <article className="flex flex-wrap gap-5 justify-between w-full border-b-[3px] border-[#ffffff] py-10 px-10">
        <div className="flex order-1 md:order-1 flex-col items-center w-full md:w-auto md:items-start gap-2">
          <h5 className="text-white font-poppins text-[16px] text-center md:text-left font-semibold">
            {t("footer_connect_socials")}
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
            {t("footer_rating_review_title")}
          </h5>

          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center border-r-[2px] pr-3 border-[#ffffff]">
              <h3 className="text-[25px] font-inter text-[#ffffff]">
                {reviews}+
              </h3>
              <p className="text-[#F8F5F0] font-inter text-[14px]">
                {t("footer_review_title")}
              </p>
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
            {t("footer_news_letter_title")}
          </h5>

          <div className="flex gap-2">
            <div className="bg-[#F8F5F0] h-[55px] w-[296px] rounded-[10px] md:rounded-[5px] flex justify-between items-center p-2">
              <input
                placeholder={t("footer_email_input_placeholder")}
                className="placeholder:text-[14px] placeholder:text-[#A2A9B0] text-[16px] outline-none text-[#000000] bg-transparent w-full pr-2"
              />

              <div className="rounded-full aspect-square bg-[#19192C] text-[24px] text-white w-[40px] h-[40px] flex justify-center items-center">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="my-10 w-full">
        <ul className="flex flex-wrap gap-10 justify-evenly items-center ">
          <li className="text-[#F8F5F0] order-2 md:order-1 font-poppins text-[16px]">
            {t("footer_copyright_text")}
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
