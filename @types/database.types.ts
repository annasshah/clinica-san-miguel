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
      About: {
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
      Location: {
        Row: {
          // the data expected from .select()
          id: number;
          email: string | null;
          created_at: string;
          phone: string | null;
          timings: string | null;
          location: string | null;
          address: string | null;
        };
      };
      Services: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          title: string | null;
          image: string | null;
          question_1: string | null;
          answer_1: string | null;
          question_2: string | null;
          answer_2: string | null;
          question_3: string | null;
          answer_3: string | null;
          description: string | null;
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
    };
  };
}
