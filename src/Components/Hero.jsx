import todo from "../assets/todo.png";
import soccer from "../assets/soccer.png";
import advice from "../assets/advice.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faEnvelope,
  faEnvelopeOpen,
  faFile,
  faGlobe,
  faInbox,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import sbpic from "../assets/profile-pic.png";
import Card from "./Card";
import ProjectCard from "./ProjectCard";
import tailwind from "../assets/tailwindd.jpg";
import typescript from "../assets/typescript.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";

const projectsData = [
  {
    image: soccer,
    link: "https://soccer-quiz-app.vercel.app/",
    title: "Soccer Quiz app",
    naration: "This is to test your football knowledge",
  },
  {
    image: todo,
    link: "https://todo-app-puce-delta.vercel.app/",
    title: "A todo-list app",
  },
  {
    image: advice,
    link: "https://advice-generator-eight-kappa.vercel.app/",
    title: "An automated advice app",
  },
];
const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div>
        {/* INTRODUCTION */}
        {/* <div id="home" className="flex justify-center">
          <div className="text-xs md:text-xl bg-black h-[80vh] flex gap-4 flex-col justify-center p-10 max-w-[800px]">
            <p className="text-2xl md:text-4xl text-center text-[rgb(45,212,191)]">
              &lt;Hello /&gt; 👋
            </p>

            <p className="text-white text-center text-2xl md:text-4xl">
              I am{" "}
              <span className="text-[rgb(45,212,191)]">
                Peter Boluwatife Akintola
              </span>
            </p>
            <p className="text-white text-center">
              A seasoned{" "}
              <span className="text-[rgb(45,212,191)]">{`{Frontend Developer}`}</span>{" "}
              transforming ideas into stunning digital experiences. Let's create
              something amazing.
            </p>
            <div className=" text-center flex justify-center gap-4 mt-8 [&>*]:bg-gray-200 [&>*]:rounded-full [&>*]:p-2">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:bg-[rgb(45,212,191)]"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="hover:bg-[rgb(45,212,191)]"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="hover:bg-[rgb(45,212,191)]"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:bg-[rgb(45,212,191)]"
              />
            </div>
          </div>
        </div> */}
        <div
          id="home"
          className="relative flex justify-center items-center min-h-[80vh] overflow-hidden"
        >
          {/* Animated gradient background */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_45%)] animate-[pulse_12s_ease-in-out_infinite]" /> */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.3),transparent_60%)] animate-[pulse_10s_ease-in-out_infinite]" />

          {/* Moving glow orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite_reverse]" />

          {/* Glass container */}
          <div className="absolute z-0 w-[90%] h-[80%] bg-[radial-gradient(circle,rgba(45,212,191,0.35),transparent_65%)] blur-[140px]" />

          <div className="relative z-10 text-xs md:text-xl backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl shadow-[0_0_120px_rgba(45,212,191,0.25)] h-[80vh] flex gap-5 flex-col justify-center p-10 max-w-[800px] transition-all duration-700 hover:shadow-[0_0_180px_rgba(45,212,191,0.45)] ">
            {/* Hello */}
            <p className="text-2xl md:text-4xl text-center text-[rgb(45,212,191)] animate-[fadeIn_1s_ease-out_forwards]">
              <p className="text-white text-center text-2xl md:text-4xl font-semibold tracking-wide animate-[fadeIn_1.4s_ease-out_forwards]">
                &lt;Hello /&gt;{" "}
                <span className="inline-block origin-bottom-left animate-[wave_1.8s_ease-in-out_infinite]">
                  👋,{" "}
                </span>{" "}
                I'm{" "}
                <span className="text-[rgb(45,212,191)] drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]">
                  Peter
                </span>
              </p>
            </p>

            {/* Description */}
            <p className="text-white/90 text-center leading-relaxed animate-[fadeIn_1.8s_ease-out_forwards]">
              A seasoned{" "}
              <span className="text-[rgb(45,212,191)] font-medium">
                {`{Frontend Developer}`}
              </span>{" "}
              transforming ideas into stunning digital experiences. Let’s create
              something amazing.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mt-8">
              {[faGithub, faEnvelope, faLinkedinIn, faTwitter].map(
                (icon, i) => (
                  <span
                    key={i}
                    className="group relative p-3 rounded-full bg-white/90 text-black transition-all duration-500 hover:bg-[rgb(45,212,191)] hover:scale-110 hover:shadow-[0_0_25px_rgba(45,212,191,0.8)]"
                  >
                    <FontAwesomeIcon icon={icon} />
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-[rgb(45,212,191)] transition-opacity duration-500 -z-10" />
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div id="services" className="bg-[#27272a] p-10 ">
          <div className="text-center [&>*]:text-white">
            <p>SERVICES</p>
            <p className="text-white pt-2 pb-8 text-3xl">
              What <span className="text-[rgb(45,212,191)]">I do.</span>
            </p>
          </div>

          <div className="[&>*]:bg-[#030712] [&>*]:text-white [&>*]:p-4 [&>*]:rounded-md [&>*]:h-[250px] flex flex-col md:flex-row justify-center gap-6 items-center text-center max-w-[800px] mx-auto text-sm md:text-md">
            {/* 1st column */}
            <Card
              hoverable
              icon={<FontAwesomeIcon icon={faGlobe} className="p-4" />}
              title="Web Development"
              description="I use my programming knowledge and skills such as HTML5, CSS3,
                JAVASCRIPT, TYPESCRIPT and TAILWIND to build user-friendly websites"
            />
            <Card
              hoverable
              icon={<FontAwesomeIcon icon={faDisplay} className="p-4" />}
              title="UI Design"
              description="Designing intuitive digital experiences that harmonize visual
                appeal with seamless functionality, grounded in user-centered
                and responsive design principles."
            />
          </div>

          {/* PORTFOLIO */}
          <div id="projects" className="text-white text-center my-12">
            <p>PORTFOLIO</p>
            <p className="text-white pt-2 pb-8 text-3xl">
              My <span className="text-[rgb(45,212,191)] ">Projects</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto text-center text-sm md:text-md [&>*]:bg-[#030712] [&>*]text-white [&>*]:rounded-md [&>*]:h-[250px]">
              {projectsData.map((item, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    link={item.link}
                    // naration={item.naration}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MY BIO */}
      <div id="about" className="max-w-[800px] m-auto pt-10 pb-10">
        <p className="text-white text-center">MY BIO</p>
        <p className="text-center text-white text-3xl pb-6">
          About <span className="text-[rgb(45,212,191)]">me</span>.
        </p>
        <div className="max-w-full flex flex-col items-center text-center md:text-left md:flex-row p-8 md:p-0 gap-[3rem]">
          <img src={sbpic} alt="my-pic" className="w-[200px] h-[200px]" />
          <p className="text-white text-sm leading-7">
            I'm a frontend developer with 3+ years of experience, I am a
            motivated and results-driven web developer, with a good knowledge of
            HTML, CSS, Tailwind CSS, JavaScript, and ReactJS, seeking an
            opportunity to add value by building responsive and scalable user
            interfaces. I am detail-oriented, a fast learner, and a
            collaborative team player, eager to grow under experienced
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

        {/* SKILLS */}
        <div className="max-w=full text-white flex flex-col items-center text-center md:text-left md:flex-row justify-between  gap-12 mt-14 mb-14 max-w-[800px] ">
          <div className="w-[350px]">
            <p>SKILLS</p>
            <p className="pb-4 pt-2 text-3xl">
              Technical <span className="text-[rgb(45,212,191)]">Skills</span>
            </p>
            <p className="text-sm leading-7">
              Frontend Developer skilled in building responsive, accessible, and
              user-centric web interfaces using HTML, CSS, JavaScript,
              TypeScript, React, and Tailwind CSS. Experienced in translating
              designs into performant, scalable, and maintainable code.
            </p>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-8">
            <div className="flex flex-col items-center justify-center">
              <img src={html} alt="html" className="h-8 w-8 rounded-lg" />
              <p className="text-xs">HTML5</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={css} alt="CSS3" className="h-8 w-8 rounded-lg" />
              <p className="text-xs">CSS3</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={javascript} alt="js" className="h-8 w-8 rounded-lg" />
              <p className="text-xs">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={react} alt="react" className="h-8 w-8 rounded-lg" />
              <p className="text-xs">React</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={tailwind}
                alt="tailwind"
                className="h-8 w-8 rounded-lg"
              />
              <p className="text-xs">Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={typescript}
                alt="tailwind"
                className="h-8 w-8 rounded-lg"
              />
              <p className="text-xs">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={git} alt="tailwind" className="h-8 w-8 rounded-lg" />
              <p className="text-xs">Git</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={github} alt="tailwind" className="h-8 w-8 rounded-lg" />
              <p className="text-xs">Github</p>
            </div>
          </div>
        </div>

        {/* CONTACT ME */}
        <div id="contact" className="text-white bg-[#27272a] p-8">
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

          {/* CONTACT ME DETAILS */}
          <div className="max-w-full flex flex-col md:flex-row justify-between bg-black p-10 mt-6 mb-6 text-sm rounded-lg gap-8">
            <div className="flex-1">
              <p>Have an awesome project idea?</p>
              <p className="text-[rgb(45,212,191)] pb-6">Let's Discuss</p>
              <div className="flex gap-2 items-center pb-6 ">
                <FontAwesomeIcon icon={faPhone} />
                <p className="hover:text-[rgb(45,212,191)]">
                  +234 813 030 0514
                </p>
              </div>
              <div className="flex gap-2 items-center pb-6">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <p className="hover:text-[rgb(45,212,191)]">
                  peterbolu.akintola@gmail.com
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="hover:text-[rgb(45,212,191)]">
                  Ibadan, Oyo State.
                </p>
              </div>
            </div>

            <form action="" className="text-left flex-1">
              <div className="flex flex-col">
                <label htmlFor="" className="pb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="max-w-full rounded-md p-2 bg-[#27272a] border-2 border-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pb-2 pt-4">
                  Email Address
                </label>
                <input
                  type="emaii"
                  placeholder="Enter email"
                  className="max-w-full rounded-md p-2 bg-[#27272a] border-2 border-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pb-2 pt-4">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter message"
                  className=" max-w-screen-sm rounded-md p-2 bg-[#27272a] border-2 border-white h-28"
                ></textarea>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="mt-6 bg-[rgb(45,212,191)] px-3 py-2 rounded-lg text-black">
                  Send Message <FontAwesomeIcon icon={faInbox} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-full text-white text-xs flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-around my-8">
        <div className="text-3xl font-extrabold text-white">SB-techlyCoded</div>
        <div className="flex flex-col  gap-3">
          <p className="text-center md:text-left">Web Developer</p>
          <p className="text-center md:text-left">Frontend Developer</p>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li
              className="hover:text-[rgb(45,212,191)] text-center md:text-left cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li className="hover:text-[rgb(45,212,191)] text-center md:text-left">
              My projects
            </li>
            <li className="hover:text-[rgb(45,212,191)] text-center md:text-left">
              About me
            </li>
            <li className="hover:text-[rgb(45,212,191)] text-center md:text-left">
              Contact me
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center md:text-left">Social Media Handles</p>
          <div className=" text-center flex justify-center gap-4 mt-4 [&>*]:bg-gray-200 [&>*]:rounded-full [&>*]:p-2 text-black">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:bg-[rgb(45,212,191)]"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="hover:bg-[rgb(45,212,191)]"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="hover:bg-[rgb(45,212,191)]"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:bg-[rgb(45,212,191)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
