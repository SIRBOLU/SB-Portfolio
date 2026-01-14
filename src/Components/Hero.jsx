import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="bg-black h-[60vh] flex gap-4 flex-col justify-center">
          {/* <h1 className="text-4xl text-center text-[rgb(45,212,191)]">
            {`<Hello/>`} 👋 {"<Hello/>"}
          </h1> */}
          <p className="text-4xl text-center text-[rgb(45,212,191)]">
            &lt;Hello /&gt; 👋
          </p>

          <h1 className="text-white text-center text-3xl">
            I am{" "}
            <span className="text-[rgb(45,212,191)]">
              Peter Boluwatife Akintola
            </span>
          </h1>
          <p className="text-white text-center">
            A seasoned{" "}
            <span className="text-[rgb(45,212,191)]">{`{Frontend Developer}`}</span>{" "}
            transforming ideas into stunning digital experiences. Let's create
            something amazing.
          </p>
          <div className=" text-center flex justify-center gap-4 mt-8 [&>*]:bg-gray-200 [&>*]:rounded-full [&>*]:p-2">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="bg-[#27272a] p-10 ">
          <div className="text-center [&>*]:text-white">
            <p>SERVICES</p>
            <p className="text-white pt-2 pb-8">
              What <span className="text-[rgb(45,212,191)]">I do.</span>
            </p>
          </div>
          <div className="[&>*]:bg-[#030712] [&>*]:text-white [&>*]:p-4 [&>*]:w-[1000px] [&>*]:rounded-md [&>*]:h-[250px] flex justify-center gap-6 items-center text-center max-w-[800px] m-auto">
            <div className="flex flex-col justify-center border border-[rgb(45,212,191)] hover:bg-[rgb(45,212,191)] hover:text-black">
              <div>
                <FontAwesomeIcon icon={faGlobe} className="p-4" />
              </div>
              <p>Web Development</p>
              <div></div>
              <p className="p-6">
                I use my programming knowledge and skills such as HTML5, CSS3,
                JAVASCRIPT and TAILWIND to build user-friendly websites
              </p>
            </div>
            <div className="flex flex-col justify-center border border-[rgb(45,212,191)] hover:bg-[rgb(45,212,191)] hover:text-black">
              <div>
                <FontAwesomeIcon icon={faDisplay} className="p-4" />
              </div>
              <p>UI Design</p>
              <div></div>
              <p className="p-6">
                Designing intuitive digital experiences that harmonize visual
                appeal with seamless functionality, grounded in user-centered
                and responsive design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
