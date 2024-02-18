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
  locations: Database["public"]["Tables"]["Locations"]["Row"][];
  locationImages: Database["public"]["Tables"]["Images"]["Row"][];
  services: Database["public"]["Tables"]["services"]["Row"][];
  detailData: Record<string, any[]>;
  filteredData: any[];
  specials: Database["public"]["Tables"]["Specials"]["Row"][];
  testinomial: Database["public"]["Tables"]["Testinomial"]["Row"][];
  career: Database["public"]["Tables"]["career"]["Row"][];
  fetchDetailedData: (table: string, id: number) => Promise<void>;
  fetchFilteredData: (
    table: string,
    column_name: string,
    id: number
  ) => Promise<void>;
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
  const [locations, setLocations] = useState<
    Database["public"]["Tables"]["Locations"]["Row"][]
  >([]);
  const [locationImages, setLocationImages] = useState<
    Database["public"]["Tables"]["Images"]["Row"][]
  >([]);
  const [services, setServices] = useState<
    Database["public"]["Tables"]["services"]["Row"][]
  >([]);
  // const [detailData, setDetailData] = useState<
  //   Database["public"]["Tables"]["services"]["Row"][]
  // >([]);
  const [detailData, setDetailData] = useState<Record<string, any[]>>({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [specials, setSpecials] = useState<
    Database["public"]["Tables"]["Specials"]["Row"][]
  >([]);
  const [testinomial, setTestinomial] = useState<
    Database["public"]["Tables"]["Testinomial"]["Row"][]
  >([]);
  const [career, setCareer] = useState<
    Database["public"]["Tables"]["career"]["Row"][]
  >([]);

  // for all records
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

  // for any unique record
  const fetchDetailedData = async (table: string, id: number) => {
    try {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .eq("id", id);
      console.log(data, `${table} Data`);
      if (data) {
        setDetailData({ [table]: data });
      }
    } catch (error) {
      console.error(`Error fetching ${table} data:`, error);
    }
  };

  // fetch filtered data based on column id
  const fetchFilteredData = async (
    table: string,
    column_name: string,
    id: number
  ) => {
    try {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .eq(column_name, id);
      console.log(data, `${table} Data`);
      if (data) {
        setFilteredData(data);
      }
    } catch (error) {
      console.error(`Error fetching ${table} data:`, error);
    }
  };

  const fetchDataCallback = useCallback(fetchData, []);
  const fetchDetailedDataCallback = useCallback(fetchDetailedData, []);
  const fetchFilteredDataCallback = useCallback(fetchFilteredData, []);

  useEffect(() => {
    fetchDataCallback("about", setAbout);
    fetchDataCallback("Blog", setBlogs);
    fetchDataCallback("Additional_Services", setAdditionalServices);
    fetchDataCallback("FAQs", setFaqs);
    fetchDataCallback("Hero_Section", setHeroSection);
    fetchDataCallback("Locations", setLocations);
    fetchDataCallback("Images", setLocationImages);
    fetchDataCallback("services", setServices);
    fetchDataCallback("Specials", setSpecials);
    fetchDataCallback("Testinomial", setTestinomial);
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
        locations,
        locationImages,
        services,
        specials,
        testinomial,
        career,
        detailData,
        filteredData,
        fetchDetailedData: fetchDetailedDataCallback,
        fetchFilteredData: fetchFilteredDataCallback,
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
