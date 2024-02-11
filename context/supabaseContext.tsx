import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/@types/database.types";
import { supabase } from "@/supabaseClient";

interface SupabaseContextType {
  supabase: SupabaseClient;
  about: Database["public"]["Tables"]["about"]["Row"][];
  blogs: Database["public"]["Tables"]["Blog"]["Row"][];
  additionalServices: Database["public"]["Tables"]["Additional_Services"]["Row"][];
  faqs: Database["public"]["Tables"]["FAQs"]["Row"][];
  heroSection: Database["public"]["Tables"]["Hero_Section"]["Row"][];
  location: Database["public"]["Tables"]["Location"]["Row"][];
  services: Database["public"]["Tables"]["services"]["Row"][];
  serviceDetails: Database["public"]["Tables"]["services"]["Row"][];
  specials: Database["public"]["Tables"]["Specials"]["Row"][];
  testimonial: Database["public"]["Tables"]["Testinomial"]["Row"][];
  career: Database["public"]["Tables"]["career"]["Row"][];
  fetchServiceData: (table: string, id: number) => Promise<void>;
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined
);

export const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [about, setAbout] = useState<
    Database["public"]["Tables"]["about"]["Row"][]
  >([]);
  const [blogs, setBlogs] = useState<
    Database["public"]["Tables"]["Blog"]["Row"][]
  >([]);
  const [additionalServices, setAdditionalServices] = useState<
    Database["public"]["Tables"]["Additional_Services"]["Row"][]
  >([]);
  const [faqs, setFaqs] = useState<
    Database["public"]["Tables"]["FAQs"]["Row"][]
  >([]);
  const [heroSection, setHeroSection] = useState<
    Database["public"]["Tables"]["Hero_Section"]["Row"][]
  >([]);
  const [location, setLocation] = useState<
    Database["public"]["Tables"]["Location"]["Row"][]
  >([]);
  const [services, setServices] = useState<
    Database["public"]["Tables"]["services"]["Row"][]
  >([]);
  const [serviceDetails, setServiceDetails] = useState<
    Database["public"]["Tables"]["services"]["Row"][]
  >([]);
  const [specials, setSpecials] = useState<
    Database["public"]["Tables"]["Specials"]["Row"][]
  >([]);
  const [testimonial, setTestimonial] = useState<
    Database["public"]["Tables"]["Testinomial"]["Row"][]
  >([]);
  const [career, setCareer] = useState<
    Database["public"]["Tables"]["career"]["Row"][]
  >([]);

  const fetchData = async (table: string, setter: Function) => {
    try {
      const { data, error } = await supabase.from(table).select("*");
      console.log(data, `${table} Data`);
      if (data) {
        setter(data);
      }
    } catch (error) {
      console.error(`Error fetching ${table} data:`, error);
    }
  };

  const fetchServiceData = async (table: string, id: number) => {
    try {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .eq("id", id);
      console.log(data, `${table} Data`);
      if (data) {
        setServiceDetails(data);
      }
    } catch (error) {
      console.error(`Error fetching ${table} data:`, error);
    }
  };

  const fetchDataCallback = useCallback(fetchData, []);
  const fetchServiceDataCallback = useCallback(fetchServiceData, []);

  useEffect(() => {
    fetchDataCallback("about", setAbout);
    fetchDataCallback("Blog", setBlogs);
    fetchDataCallback("Additional_Services", setAdditionalServices);
    fetchDataCallback("FAQs", setFaqs);
    fetchDataCallback("Hero_Section", setHeroSection);
    fetchDataCallback("Location", setLocation);
    fetchDataCallback("services", setServices);
    fetchDataCallback("Specials", setSpecials);
    fetchDataCallback("Testinomial", setTestimonial);
    fetchDataCallback("career", setCareer);
  }, [fetchDataCallback]);

  return (
    <SupabaseContext.Provider
      value={{
        supabase,
        about,
        blogs,
        additionalServices,
        faqs,
        heroSection,
        location,
        services,
        specials,
        testimonial,
        career,
        serviceDetails,
        fetchServiceData: fetchServiceDataCallback,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
