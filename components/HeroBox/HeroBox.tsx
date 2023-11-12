import { doctor_portriat } from "@/assets";
import Image from "next/image";
// import "./style.css";
import gray from "../../assets/portriats/grey.png";
import maskGroup from "../../assets/portriats/Mask group.png";
import maskGroup2 from "../../assets/portriats/Mask group (2).png";
import vector from "../../assets/portriats/Vector1.png";

// export const HeroBox = () => {
//   return (
//     <div className="flex relative items-center gap-7 justify-between h-[499px] w-[582px]">
//       <div className="absolute h-full w-full bottom-0 left-[5%] z-[20]">
//         <Image
//           src={doctor_portriat}
//           alt="Doctor Head"
//           className="w-[60%] aspect-auto object-contain"
//         />
//       </div>
//       <div className="relative h-full w-[50%] rounded-tl-[35%] rounded-br-[35%] bg-[#3D3D3C]"></div>
//       <div className="flex flex-col w-[50%] gap-7 h-full">
//         <div className=" w-[275px] h-[50%] bg-[#C1001F] flex relative justify-center items-center rounded-bl-[35%] rounded-tr-[35%]">
//           <h2 className="text-4xl font-bold text-[#ffffff]">
//             Proper care,
//             <br /> happy life.
//           </h2>
//         </div>
//         <div className=" w-[275px] h-[50%] relative bg-[#C1001F] rounded-br-[35%] rounded-tl-[35%]">
//           <h2 className="absolute top-4 right-8 text-4xl font-bold text-[#ffffff]">
//             Clinca
//             <br /> San
//             <br /> Miguel!
//           </h2>
//         </div>
//       </div>
//     </div>
//     <div className="box">
//       <div className="group">
//         <div className="overlap">
//           <div className="overlap-group-wrapper">
//             <div className="overlap-group">
//               <div className="text-wrapper">Proper care, happy life.</div>
//             </div>
//           </div>
//           <img className="grey" alt="Grey" src={gray.src} />
//           <img className="mask-group" alt="Mask group" src={maskGroup.src} />
//           <img className="img" alt="Mask group" src={maskGroup2.src} />
//           <div className="clinca-san-miguel">
//             Clinca
//             <br />
//             San
//             <br />
//             Miguel
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const HeroBox = () => {
  return (
    <div style={{ height: "499px", width: "582px" }}>
      <div style={{ height: "499px", left: "0", top: "0", width: "584px" }}>
        <div style={{ height: "499px", position: "relative" }}>
          <div
            style={{
              height: "242px",
              left: "307px",
              position: "absolute",
              top: "0",
              width: "277px",
            }}
          >
            <div
              style={{
                backgroundImage: "url(../assets/portriats/Vector1.png)",
                backgroundSize: "100% 100%",
                height: "242px",
                position: "relative",
                width: "275px",
              }}
            >
              <Image src={vector} className="h-[242px] w-[275px]" alt={""} />
              <div
                className="font-antipasto"
                style={{
                  // fontFamily: "Antipasto Pro-DemiBold, Helvetica",
                  fontSize: "40px",
                  color: "#ffffff",
                  fontWeight: "700",
                  height: "82px",
                  left: "19px",
                  letterSpacing: "0",
                  lineHeight: "normal",
                  position: "absolute",
                  top: "50px",
                }}
              >
                Proper care, happy life.
              </div>
            </div>
          </div>
          <Image
            style={{
              height: "499px",
              left: "0",
              position: "absolute",
              top: "0",
              width: "286px",
            }}
            alt="Grey"
            src={gray}
          />
          <Image
            style={{
              height: "499px",
              left: "0",
              position: "absolute",
              top: "0",
              width: "582px",
            }}
            alt="Mask group"
            src={maskGroup}
          />
          <Image
            style={{
              height: "249px",
              left: "307px",
              position: "absolute",
              top: "250px",
              width: "275px",
            }}
            alt="Mask group"
            src={maskGroup2}
          />
          <div
            className="font-antipasto"
            style={{
              color: "#ffffff",
              // fontFamily: "Antipasto Pro-DemiBold, Helvetica",
              fontSize: "48px",
              fontWeight: "700",
              height: "123px",
              left: "411px",
              letterSpacing: "0",
              lineHeight: "normal",
              position: "absolute",
              top: "279px",
            }}
          >
            Clinca
            <br />
            San
            <br />
            Miguel
          </div>
        </div>
      </div>
    </div>
  );
};
