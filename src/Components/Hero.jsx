import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faEnvelope,
  faEnvelopeOpen,
  faFile,
  faGlobe,
  faLocationDot,
  faPhone,
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
        <div className="bg-black h-[80vh] flex gap-4 flex-col justify-center">
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
            <p className="text-white pt-2 pb-8 text-3xl">
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
          <div>
            <p>PORTFOLIO</p>
            <p>
              Featured <span>Projects</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] m-auto pt-10 pb-10">
        <p className="text-white text-center">MY BIO</p>
        <p className="text-center text-white text-3xl pb-6">
          About <span className="text-[rgb(45,212,191)]">me</span>.
        </p>
        <div className="flex gap-[3rem]">
          <img
            src="./src/assets\profile-pic.png"
            alt="my-pic"
            className="w-[200px] h-[200px]"
          />
          <p className="text-white text-sm">
            I am a motivated and results-driven web developer, with a good
            knowledge of HTML, CSS, Tailwind CSS, JavaScript, and ReactJS,
            seeking an opportunity to add value by building responsive and
            scalable user interfaces. I am detail-oriented, a fast learner, and
            a collaborative team player, eager to grow under experienced
            professionals. I am also a team player, committed to building
            engaging digital experiences that enhance user satisfaction, while
            ultimately supporting organization’s mission.
            <div>
              <button className="bg-[#2dd4bf] text-black hover:bg-white p-2 pr-4 pl-4 rounded-full mt-4">
                View Resume <FontAwesomeIcon icon={faFile} />
              </button>
            </div>
          </p>
        </div>
        <div className="text-white flex justify-between gap-12 mt-14 mb-14 max-w-[800px] ">
          <div className="w-[350px]">
            <p>SKILLS</p>
            <p className="pb-4 text-3xl">
              Technical <span className="text-[rgb(45,212,191)]">Skills</span>
            </p>
            <p className="text-sm leading-6">
              Frontend Developer skilled in building responsive, accessible, and
              user-centric web interfaces using HTML, CSS, JavaScript, React,
              and Tailwind CSS. Experienced in translating designs into
              performant, scalable, and maintainable code.
            </p>
          </div>
          <div className="w-[350px] flex flex-col gap-4 justify-center text-xs">
            <div className="flex justify-evenly">
              <div className="w-[100px] text-center bg-[#27272a] p-4 border-2 border-[rgb(45,212,191)] rounded-lg ">
                HTML5
              </div>
              <div className="w-[100px] text-center bg-[#27272a] p-4 border-2 border-[rgb(45,212,191)] rounded-lg ">
                CSS3
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="w-[100px] text-center bg-[#27272a] p-4 border-2 border-[rgb(45,212,191)] rounded-lg ">
                JAVASCRIPT
              </div>
              <div className="w-[100px] text-center bg-[#27272a] p-4 border-2 border-[rgb(45,212,191)] rounded-lg ">
                REACT
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="w-[100px] text-center bg-[#27272a] p-4 border-2 border-[rgb(45,212,191)] rounded-lg ">
                TAILWIND
              </div>
              <div className="w-[100px] text-center bg-[#27272a] p-4 border-2 border-[rgb(45,212,191)] rounded-lg ">
                UI DESIGN
              </div>
            </div>
          </div>
        </div>
        <div className="text-white bg-[#27272a] p-8">
          <div className="text-center">
            <p>GET IN TOUCH</p>
            <p className="text-3xl pb-4">
              Contact <span className="text-[rgb(45,212,191)]">me</span>.
            </p>
            <p>
              I am currently open to full-time, part-time, contract or remote
              opportunities in Frontend Development.
            </p>
          </div>
          <div>
            <div>
              <p>Have an awesome project idea?</p>
              <p>Let's Discuss</p>
              <FontAwesomeIcon icon={faPhone} /> +234 813 030 0514 <br />
              <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
              peterbolu.akintola@gmail.com <br />
              <FontAwesomeIcon icon={faLocationDot} /> Ibadan, Oyo State.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
