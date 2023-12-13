import React, { createContext, useContext, useEffect, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/@types/database.types";
import { supabase } from "@/supabaseClient";

interface SupabaseContextType {
  supabase: SupabaseClient;
  about: Database["public"]["Tables"]["About"]["Row"][];
  blogs: Database["public"]["Tables"]["Blog"]["Row"][];
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined
);

export const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [about, setAbout] = useState<
    Database["public"]["Tables"]["About"]["Row"][]
  >([]);
  const [blogs, setBlogs] = useState<
    Database["public"]["Tables"]["Blog"]["Row"][]
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

  useEffect(() => {
    fetchData("About", setAbout);
    fetchData("Blog", setBlogs);
  }, []); // Empty dependency array

  return (
    <SupabaseContext.Provider value={{ supabase, about, blogs }}>
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
