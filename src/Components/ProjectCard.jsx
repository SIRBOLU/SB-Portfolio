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

const ProjectCard = ({ image, title, link, naration }) => {
  return (
    <div className="w-full h-full flex flex-col relative top-0">
      {/* Image */}
      <div className="m-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[170px] object-cover rounded-md block"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-4 flex flex-col flex-grow">
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
    </div>
  );
};

export default ProjectCard;
