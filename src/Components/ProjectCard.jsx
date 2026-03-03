// const ProjectCard = ({ image, title, link }) => {
//   return (
//     <div className="max-w-full flex flex-col justify-center">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-[120px] object-cover rounded-md mb-3"
//       />
//       <p>{title}</p>
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-[rgb(45,212,191)] text-sm mt-3 underline"
//       >
//         View Project
//       </a>
//     </div>
//   );
// };

// export default ProjectCard;

// const ProjectCard = ({ image, title, link, naration }) => {
//   return (
//     <div className="w-full h-full flex flex-col relative top-0">
//       {/* Image wrapper with margin */}
//       <div className="m-4">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[170px] object-cover rounded-md block"
//         />
//       </div>

//       {/* Content */}
//       <div className="px-4 pb-4 flex flex-col flex-grow">
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[rgb(45,212,191)] text-sm font-medium mt-auto underline hover:opacity-80"
//         >
//           {title}
//         </a>
//       </div>
//       <div>{naration}</div>
//     </div>
//   );
// };

// export default ProjectCard;

const ProjectCard = ({ image, title, link, naration, skills }) => {
  console.log(skills);
  return (
    <div className="w-full h-full flex flex-col relative top-0">
      {/* Image */}
      <div className="m-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[170px] object-cover rounded-md block transform
        transition-transform
        duration-500
        ease-out
        hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-4 flex flex-col">
        {/* Title as link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(45,212,191)] font-semibold underline mb-3"
        >
          {title}
        </a>
        <div>{naration}</div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 items-center">
        {skills.map((e, i) => (
          <span
            key={i}
            className=" px-3 py-1 text-xs text-teal-400 bg-teal-400/10 border border-teal-400 rounded-full"
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

// const ProjectCard = ({ image, title, link, naration, skills }) => {
//   return (
//     <div className="w-full h-full flex flex-col relative top-0 bg-gray-900 text-white rounded-lg overflow-hidden">
//       {/* Image Container */}
//       <div className="m-4 overflow-hidden rounded-md">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[170px] object-cover block transform transition-transform duration-500 ease-out hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="px-4 pb-2 flex flex-col flex-grow">
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[rgb(45,212,191)] font-semibold underline mb-2"
//         >
//           {title}
//         </a>
//         <div className="text-sm text-gray-300 mb-4">{naration}</div>
//       </div>

//       {/* Skills Container - Fixed Logic Here */}
//       <div className="px-4 pb-4 flex flex-wrap gap-2">
//         {skills.map((skill, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 text-xs font-medium text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded-full"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ProjectCard;
