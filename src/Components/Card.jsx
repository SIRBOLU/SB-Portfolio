// import React from "react";

// const Card = ({ icon, title, description }) => {
//   return (
//     <div className="max-w-full flex flex-col justify-center border border-[rgb(45,212,191)] hover:bg-[rgb(45,212,191)] hover:text-black">
//       <div>{icon}</div>
//       <p>{title}</p>
//       <p className="p-6">{description}</p>
//     </div>
//   );
// };

// export default Card;

const Card = ({ icon, img, title, description, link, hoverable = false }) => {
  return (
    <div
      className={`
        bg-[#030712]
        text-white
        p-4
        rounded-md
        h-[250px]
        flex
        flex-col
        items-center
        justify-center
        text-center
        ${hoverable ? "hover:bg-[rgb(45,212,191)] hover:text-black transition" : ""}
      `}
    >
      {/* Icon (Services section) */}
      {icon && <div className="text-3xl">{icon}</div>}

      {/* Image (Portfolio section) */}
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-[120px] object-cover rounded-md mb-3"
        />
      )}

      <h3 className="font-semibold mt-2">{title}</h3>

      {/* Description (Services section) */}
      {description && <p className="text-sm opacity-80 mt-2">{description}</p>}

      {/* Link (Portfolio section) */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(45,212,191)] text-sm mt-3 underline"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Card;
