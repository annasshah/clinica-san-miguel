export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      about: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          t1: string | null;
        };
      };
      Additional_Services: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          title: string | null;
          image: string | null;
          content: string | null;
        };
      };
      Blog: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          title: string | null;
          image: string | null;
          content: string | null;
        };
      };
      FAQs: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          question: string | null;
          answer: string | null;
        };
      };
      Hero_Section: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          title: string | null;
          content: string | null;
        };
      };
      Locations: {
        Row: {
          // the data expected from .select()
          id: number;
          title: string | null;
          email: string | null;
          created_at: string;
          phone: string | null;
          mon_timing: string | null;
          tuesday_timing: string | null;
          wednesday_timing: string | null;
          thursday_timing: string | null;
          friday_timing: string | null;
          saturday_timing: string | null;
          sunday_timing: string | null;
          direction: string | null;
          address: string | null;
        };
      };
      Images: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          location_id: number | null;
          image: string | null;
        };
      };
      services: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          title: string | null;
          image: string | null;
          // question_1: string | null;
          // answer_1: string | null;
          // question_2: string | null;
          // answer_2: string | null;
          // question_3: string | null;
          // answer_3: string | null;
          description: string | null;
          icon: string | null;
        };
      };
      Specials: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          image: string | null;
        };
      };
      Testinomial: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          name: string | null;
          stars: string | null;
          review: string | null;
        };
      };
      career: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          texts: string | null;
        };
      };
      Appoinments: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          texts: string | null;
          location_id: number | null;
          first_name: string | null;
          last_name: string | null;
          email_Address: string | null;
          in_office_patient: boolean | null;
          new_patient: boolean | null;
          dob: string | null;
          sex: string | null;
          service: string | null;
        };
      };
    };
  };
}
