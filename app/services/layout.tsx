import { Services, Testimonials } from "@/sections";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-10 px-10 w-[100vw] h-full overflow-x-hidden">
      {children}
      <div className="w-full flex justify-center">
        <Services />
      </div>
      <Testimonials headingFlag={true} mode={"light"} />
    </main>
  );
}

