"use client";

import { styles } from "@/app/styles";
import { ImageCarousel, Testimonial } from "@/components";
// import Image from "next/image";
import StarRatings from "react-star-ratings";

// icons
import { IoIosArrowForward } from "react-icons/io";
import { Map } from "@/components/Map";
import { Button } from "@/utils";
import { RequestAppointment } from "@/components/Modal/RequestAppointment";
import { useCallback, useEffect, useState } from "react";
import { useSupabase } from "@/context/supabaseContext";

const ServiceTab = ({ name }: { name: string }) => {
  return (
    <article className="w-[340px] h-[80px] rounded-[5px] bg-[#D9D9D9] flex justify-between items-center p-3">
      <div className="flex items-center gap-3">
        <div className="rounded-full flex w-10 h-10 justify-center items-center bg-[#C1001F]">
          {/* <Image
            src={"icon"}
            alt={"service icon"}
            className="object-contain w-5 h-5 aspect-auto"
          /> */}
        </div>

        <h3 className="text-[20px] text-black font-semibold font-poppins">
          {name}
        </h3>
      </div>
      <div className="rounded-full flex w-10 h-10 justify-center items-center bg-black">
        <IoIosArrowForward className="text-[16px] text-white" />
      </div>
    </article>
  );
};

const LocationDetails = ({ params }: { params: { slug: string } }) => {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [locationGallery, setLocationGallery] = useState<(string | null)[]>();

  const {
    detailData,
    filteredData,
    locationImages,
    fetchDetailedData,
    fetchFilteredData,
  } = useSupabase();

  const fetchDataCallback = useCallback(() => {
    fetchDetailedData("Locations", parseInt(params.slug));
  }, [fetchDetailedData, params.slug]);

  const fetchTestimonialsData = useCallback(() => {
    fetchFilteredData("Testinomial", "location_id", parseInt(params.slug));
  }, [fetchFilteredData, params.slug]);

  useEffect(() => {
    fetchTestimonialsData();
  }, [fetchTestimonialsData]);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  const handleCloseModal = () => {
    setOpenAppointmentModal(false);
  };

  const detailedData = detailData["Locations"] || [];

  const {
    id,
    title,
    phone,
    address,
    mon_timing,
    tuesday_timing,
    wednesday_timing,
    thursday_timing,
    friday_timing,
    saturday_timing,
    sunday_timing,
    direction,
  } = detailedData[0] || {};

  useEffect(() => {
    let data = locationImages
      .filter((item) => item.location_id === id)
      .map((item) => item.image);

    setLocationGallery(data);
  }, [id, locationImages]);

  const total_ratings = 4.8;

  const testimonials = [
    {
      id: 1,
      comment:
        "Very great service, I went for an ear ache and left feeling very well. I was sent medication and the ladies treated me really good. 'Highly recommend'",
      author: "Peter, Belgium",
      ratings: 5,
    },
    {
      id: 2,
      comment:
        "Really nice staff! I was treated very nice and loved the way they explained everything to me! highly recommended",
      author: "EDUARDO C.",
      ratings: 5,
    },
    {
      id: 3,
      comment:
        "Really nice staff! I was treated very nice and loved the way they explained everything to me! highly recommended",
      author: "ANGELES R.",
      ratings: 5,
    },
    {
      id: 4,
      comment:
        "Great clinic great prices they treat you so well I have the flu and as soon as I left the clinic I felt so much better ! Will for sure come back!",
      author: "JESUS ​​B.",
      ratings: 5,
    },
  ];

  const services = [
    { id: 1, name: "wart removal" },
    { id: 2, name: "wart removal" },
    { id: 3, name: "wart removal" },
    { id: 4, name: "wart removal" },
    { id: 5, name: "wart removal" },
    { id: 6, name: "wart removal" },
    { id: 7, name: "wart removal" },
    { id: 8, name: "wart removal" },
  ];

  // const location =
  //   "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s";

  const clinicDetails = {
    phone: phone,
    timings: [
      { id: 1, day: "mon", timing: mon_timing },
      { id: 2, day: "tue", timing: tuesday_timing },
      { id: 3, day: "wed", timing: wednesday_timing },
      { id: 4, day: "thurs", timing: thursday_timing },
      { id: 5, day: "fri", timing: friday_timing },
      { id: 6, day: "sat", timing: saturday_timing },
      { id: 7, day: "sun", timing: sunday_timing },
    ],
    address: address,
  };

  type GroupedTimings = {
    [timing: string]: string[];
  };

  const groupedTimings: GroupedTimings = clinicDetails.timings.reduce(
    (acc: GroupedTimings, timing) => {
      const timingKey = timing.timing;
      if (acc[timingKey]) {
        acc[timingKey].push(timing.day);
      } else {
        acc[timingKey] = [timing.day];
      }
      return acc;
    },
    {}
  );

  const displayTimings = Object.entries(groupedTimings).map(
    ([timing, days]: [string, string[]]) => {
      const daysString = days.join(", ");
      return (
        <p
          key={timing}
          className="flex flex-col items-start text-[16px] text-black font-normal"
        >
          <span className="font-semibold">{daysString}:</span>
          <span className="pb-1"> {timing}</span>
        </p>
      );
    }
  );

  return (
    <>
      {" "}
      <main className="flex flex-col gap-10 justify-center items-center py-5 px-2 md:px-[5%] lg:px-[10%]">
        <section className="flex flex-col justify-start gap-10 w-full">
          <h2 className={`${styles.sectionHeadText} text-headingColor`}>
            {/* Clinica San Miguel Houston, TX Office */}
            {title}
          </h2>

          <article className="flex flex-col lg:flex-row justify-center w-full items-start gap-5">
            <div className="w-full lg:w-1/2">
              <ImageCarousel imagesData={locationGallery} />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-4">
              <Button
                text={"Book an appoinment"}
                size={{ width: "250px", height: "50px" }}
                route={""}
                bgColor={"#C1001F"}
                textColor={"#ffffff"}
                onClick={() => setOpenAppointmentModal(true)}
              />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="text-[18px] font-bold text-black capitalize">
                    Phone:
                  </h3>
                  <p className="text-[16px] text-black font-normal">{phone}</p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-[18px] font-bold text-black capitalize">
                    Timings:
                  </h3>
                  <p className="text-[16px] text-black font-normal">
                    {displayTimings}
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-[18px] font-bold text-black capitalize">
                    Address:
                  </h3>
                  <p className="text-[16px] text-black font-normal">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="flex flex-col justify-start gap-5 w-full">
          <h2
            className={`${styles.sectionHeadText} text-headingColor`}
            style={{ textAlign: "left" }}
          >
            Testimonials:
          </h2>
          <article className="flex flex-col gap-3 justify-start">
            <div className="flex flex-col justify-start gap-3">
              <div className="text-[40px] md:text-[60px] lg:text-[80px] text-customGray">
                {total_ratings}/5
              </div>
              <div className="hidden lg:block">
                <StarRatings
                  rating={total_ratings}
                  starDimension="45px"
                  starSpacing="1px"
                  numberOfStars={5}
                  starRatedColor="#C1001F"
                />
              </div>
            </div>
          </article>

          <article className="flex flex-wrap justify-start gap-5 items-center">
            {filteredData?.map((item, index) => (
              <Testimonial
                key={item.id}
                author={item.name}
                comment={item.review}
                ratings={parseFloat(item.rating)}
                mode="dark"
              />
            ))}
          </article>
        </section>

        <section className="flex flex-col justify-start gap-5 w-full">
          <h2
            className={`${styles.sectionHeadText} text-headingColor`}
            style={{ textAlign: "left" }}
          >
            Our Services:
          </h2>
          <article className="flex flex-wrap justify-start gap-6">
            {services.map((item, index) => (
              <ServiceTab key={item.id} name={item.name} />
            ))}
          </article>
        </section>

        <section className="flex flex-col justify-start gap-5 w-full">
          <h2
            className={`${styles.sectionHeadText} text-headingColor`}
            style={{ textAlign: "left" }}
          >
            Find us:
          </h2>

          <div className="min-w-[300px] w-[80vw] max-w-[1200px] rounded-[60px]">
            <Map height={600} location={direction} />
          </div>
        </section>
      </main>
      <RequestAppointment
        locationID={parseInt(params.slug)}
        handleClose={handleCloseModal}
        openModal={openAppointmentModal}
      />
    </>
  );
};

export default LocationDetails;
