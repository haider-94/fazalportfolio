import Link from "next/link";
import { useState } from "react";
const Projects = ({ projects }) => {
  const [link, setLink] = useState(false)
  return (
    <>
      <div className="last:mb-14">
        <Link
          target="_blank"
          href={projects.link ? projects.link : ""}
          className={`${
            !projects.link ? "pointer-events-none" : ""
          } text-xl font-medium mb-2 underline-animation`}
        >
         {projects.projectName}
        </Link>
        <p className="text-base mb-4">{projects.description}</p>
      </div>
    </>
  );
};

export default Projects;
