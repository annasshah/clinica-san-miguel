// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[];

// export interface Database {
//   public: {
//     Tables: {
//       About: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           content: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       AdditionalServices: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           title: string | null;
//           image: string | null;
//           content: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       Blog: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           title: string | null;
//           image: string | null;
//           content: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       Location: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           email: string | null;
//           created_at: timeStamptz;
//           phone: string | null;
//           timings: string | null;
//           location: string | null;
//           address: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       Services: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           title: string | null;
//           image: string | null;
//           content: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       Specials: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           image: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       Testinomial: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           name: string | null;
//           stars: string | null;
//           review: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//       career: {
//         Row: {
//           // the data expected from .select()
//           id: number;
//           created_at: timeStamptz;
//           texts: string | null;
//         };
//         // Insert: {
//         //   // the data to be passed to .insert()
//         //   id?: never; // generated columns must not be supplied
//         //   name: string; // `not null` columns with no default must be supplied
//         //   data?: Json | null; // nullable columns can be omitted
//         // };
//         // Update: {
//         //   // the data to be passed to .update()
//         //   id?: never;
//         //   name?: string; // `not null` columns are optional on .update()
//         //   data?: Json | null;
//         // };
//       };
//     };
//   };
// }
