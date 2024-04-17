import "regenerator-runtime/runtime";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

// Provider
import { Providers } from "../providers";
import AiBotMain from "@/components/AiChatBot/AiBotMain";

import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Clinca San Miguel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className="font-inter bg-[#F8F5F0] relative overflow-x-hidden w-[100vw]">
          <Providers>
            <article className="h-[43px] w-full bg-[#19192C] flex justify-center items-center text-[12px] sm:text-[16px] text-center text-[#F8F5F0]">
              {/* {t("common:language_selection_description")} */}
            </article>
            <Navbar />
            {children}

            <Footer />
            <div
              className="sticky z-[999999] bottom-10 right-10"
              style={{ zIndex: 999999 }}
            >
              <AiBotMain />
            </div>
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
