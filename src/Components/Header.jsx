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

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold">SB-techlyCoded</div>

        {/* Hamburger (always extreme right on mobile) */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>Home</li>
          <li>Featured Projects</li>
          <li>About me</li>
          <li>Contact me</li>
          <li className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full">
            View Resume <FontAwesomeIcon icon={faFile} />
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-10 pb-6 bg-black">
          <li onClick={() => setOpen(false)}>Home</li>
          <li onClick={() => setOpen(false)}>Featured Projects</li>
          <li onClick={() => setOpen(false)}>About me</li>
          <li onClick={() => setOpen(false)}>Contact me</li>
          <li
            onClick={() => setOpen(false)}
            className="bg-[#2dd4bf] text-black hover:bg-white px-4 py-2 rounded-full w-fit"
          >
            View Resume <FontAwesomeIcon icon={faFile} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
