// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFile, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <header className="flex flex-wrap items-center justify-between pt-4 pb-4 pr-10 pl-10 bg-black text-white fixed left-0 right-0">
//         <div className="text-3xl font-extrabold">SB-techlyCoded</div>
//         <div>
//           {/* DESKTOP MENU */}
//           <ul className="flex items-center flex-wrap gap-8">
//             <li className="">Home</li>
//             <li className="">Featured Projects</li>
//             <li className="">About me</li>
//             <li className="">Contact me </li>
//             <li className="bg-[#2dd4bf] text-black hover:bg-white p-2 pr-4 pl-4 rounded-full">
//               View Resume <FontAwesomeIcon icon={faFile} />
//             </li>
//           </ul>

//           {/* HAMBURGER MENU FOR MOBILE */}

//         </div>

//         {/* MOBILE MENU */}

//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFile, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setOpen(false);
//     }
//   };

//   return (
//     <header className="bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] text-white fixed top-0 left-0 right-0 z-50">
//       {/* Top bar */}
//       <div className="flex items-center justify-between px-10 py-4">
//         {/* Logo */}
//         <div className="text-xl md:text-3xl font-extrabold">SB-techlyCoded</div>

//         {/* Hamburger (always extreme right on mobile) */}
//         <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
//           <FontAwesomeIcon icon={open ? faXmark : faBars} />
//         </button>

//         {/* Desktop menu */}
//         {/* <ul className="hidden md:flex items-center gap-8">
//           <li>Home</li>
//           <li>Featured Projects</li>
//           <li>About me</li>
//           <li>Contact me</li>
//           <li className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full">
//             View Resume <FontAwesomeIcon icon={faFile} />
//           </li>
//         </ul> */}
//         <ul className="hidden md:flex items-center gap-8">
//           <li
//             onClick={() => scrollToSection("home")}
//             className="cursor-pointer"
//           >
//             Home
//           </li>
//           <li
//             onClick={() => scrollToSection("projects")}
//             className="cursor-pointer"
//           >
//             Featured Projects
//           </li>
//           <li
//             onClick={() => scrollToSection("about")}
//             className="cursor-pointer"
//           >
//             About me
//           </li>
//           <li
//             onClick={() => scrollToSection("contact")}
//             className="cursor-pointer"
//           >
//             Contact me
//           </li>
//           <li className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full cursor-pointer">
//             View Resume <FontAwesomeIcon icon={faFile} />
//           </li>
//         </ul>
//       </div>

//       {/* Mobile dropdown menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ${
//           open ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-6 px-10 pb-6 bg-black">
//           <li onClick={() => setOpen(false)}>Home</li>
//           <li onClick={() => setOpen(false)}>Featured Projects</li>
//           <li onClick={() => setOpen(false)}>About me</li>
//           <li onClick={() => setOpen(false)}>Contact me</li>
//           <li
//             onClick={() => setOpen(false)}
//             className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full w-fit"
//           >
//             View Resume <FontAwesomeIcon icon={faFile} />
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faBars,
  faXmark,
  faHouse,
  faBriefcase,
  faCircleInfo,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <header className="bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] text-white fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        {/* <div className="text-xl md:text-3xl font-extrabold ">
          SB-techlyCoded
        </div> */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-extrabold cursor-pointer hover:text-[#2dd4bf] transition-colors duration-300"
        >
          SB-techlyCoded
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl transition-transform duration-300"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faHouse} className="text-[#2dd4bf]" /> Home
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faBriefcase} className="text-[#2dd4bf]" /> My
            Projects
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faCircleInfo} className="text-[#2dd4bf]" />{" "}
            About me
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faAddressBook} className="text-[#2dd4bf]" />{" "}
            Contact me
          </li>
          <li className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full cursor-pointer transition">
            View Resume <FontAwesomeIcon icon={faFile} />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-10 pb-8 bg-black text-lg">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer active:scale-95 transition"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer active:scale-95 transition"
          >
            Featured Projects
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer active:scale-95 transition"
          >
            About me
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer active:scale-95 transition"
          >
            Contact me
          </li>

          <li
            onClick={() => setOpen(false)}
            className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full w-fit transition active:scale-95"
          >
            View Resume <FontAwesomeIcon icon={faFile} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
