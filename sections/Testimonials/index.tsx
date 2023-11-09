import { Testimonial } from "@/components";
import testimonials from "./testimonials.json";

export const Testimonials = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {testimonials.map((testimonial) => {
        return (
          <Testimonial
            comment={testimonial.comment}
            author={testimonial.author}
            key={testimonial.id}
            ratings={testimonial.ratings}
          />
        );
      })}
    </div>
  );
};
