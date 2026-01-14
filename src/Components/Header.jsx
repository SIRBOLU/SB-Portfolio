import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="flex flex-wrap items-center justify-between pt-4 pb-4 pr-10 pl-10 bg-black text-white">
        <div className="text-3xl font-extrabold">SB</div>
        <div>
          <ul className="flex items-center flex-wrap gap-8">
            <li className="">Home</li>
            <li className="">Featured Projects</li>
            <li className="">About me</li>
            <li className="">Contact me </li>
            <li className="bg-[#2dd4bf] text-black hover:bg-white p-2 pr-4 pl-4 rounded-md">
              View Resume <FontAwesomeIcon icon={faFile} />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
