"use client";

import { eduardo, jesus, walter } from "@/assets/images";
import { ExpandedTestimonial } from "@/components";
import { Button } from "@/utils";

import StarRatings from "react-star-ratings";

const Testimonials = () => {
  const review_description =
    "Clinica San Miguel always appreciates feedback from our valued patients. To date, we’re thrilled to have collected 43 reviews with an average rating of 4.88 out of 5 stars. Please read what others are saying about Clinica San Miguel below, and as always, we would love to collect your feedback.";
  const total_reviews = 43;
  const total_ratings = 4.8;
  const testimonials = [
    {
      id: 1,
      name: "WALTER C.",
      comment:
        "I recently had surgery at this hospital, and I cannot praise the staff enough. From the surgeons to the nurses, everyone was incredibly skilled and caring. They made me feel comfortable and well-cared-for throughout my stay. I highly recommend this hospital for their exceptional services and compassionate staff.",
      title: "Exceptional Care and Compassion!",
      ratings: 4,
      postDate: "October 10, 2023",
      image: walter,
    },
    {
      id: 2,
      name: "EDUARDO C.",
      comment:
        "I visited the emergency department last night, and the service was outstanding. The medical team was quick, efficient, and thorough in their assessment and treatment. The facility was clean, and the staff was friendly. I am grateful for the prompt and professional care I received. Thank you to everyone at this hospital for their dedication and expertise.",
      title: "Outstanding Emergency Care!",
      ratings: 4,
      postDate: "September 25, 2023",
      image: eduardo,
    },
    {
      id: 3,
      name: "JESUS B.",
      comment:
        "I recently had a family member admitted to this hospital, and I was incredibly impressed with the level of care provided. The doctors and nurses were knowledgeable, attentive, and kind. The facilities were modern and well-maintained. The entire staff went above and beyond to ensure our comfort and understanding of the treatment plan. I am grateful for the excellent care received here.",
      title: "Top-Notch Staff and Facilities!",
      ratings: 4,
      postDate: "August 15, 2023",
      image: jesus,
    },
  ];

  return (
    <main className="flex flex-col gap-6 justify-center items-center">
      <section className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-[70px] text-[#C1001F] leading-[70px] font-antipasto">
          Testimonials & Reviews
        </h1>
        <article className="flex flex-col gap-20 md:flex-row w-full justify-center items-center">
          <div className="flex flex-col items-start gap-3">
            <div className="text-[60px] md:text-[80px] text-[#3D3D3C]">
              {total_ratings}/5
            </div>
            <div>
              <StarRatings
                rating={total_ratings}
                starDimension="45px"
                starSpacing="1px"
                numberOfStars={5}
                starRatedColor="#C1001F"
              />
            </div>
            <div className="text-[40px] md:text-[60px] text-[#3D3D3C]">
              {total_reviews}
              <br /> Total Reviews
            </div>
            <Button
              text={"Share Feedback"}
              size={{
                width: "270px",
                height: "73px",
              }}
              route={""}
              bgColor={"#C1001F"}
              textColor={"#ffffff"}
            />
          </div>
          <div className="w-[500px] h-[450px] border-[3px] rounded-[10px] p-7 text-left text-[#3D3D3C] text-[25px] flex items-center">
            {review_description}
          </div>
        </article>
      </section>

      <section className="flex flex-col gap-6 justify-center items-center">
        {testimonials.map((item) => (
          <ExpandedTestimonial
            comment={item.comment}
            title={item.title}
            author={item.name}
            ratings={item.ratings}
            displayImage={item.image}
            name={item.name}
            postDate={item.postDate}
            key={item.id}
          />
        ))}
      </section>
    </main>
  );
};

export default Testimonials;
