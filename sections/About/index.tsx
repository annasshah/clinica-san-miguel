import { styles } from "@/app/styles";
import { about } from "@/assets/images";
import { About } from "@/components";

export const AboutSection = ({
  data,
}: {
  data:
    | Array<{ id: number; created_at: string; Content: string | null }>
    | undefined
    | null;
}) => {
  const content = data?.[0]?.Content;

  return (
    <section className="w-full flex flex-col justify-center gap-10 items-center my-14">
      <h1 className={`${styles.sectionHeadText} flex lg:hidden text-[#C1001F]`}>
        About Us
      </h1>
      <About image={about} heading={"About Us"} content={content} />
    </section>
  );
};
