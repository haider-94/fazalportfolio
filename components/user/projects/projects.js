import Link from "next/link";
import Image from "next/image";
const Projects = ({ projects }) => {
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
        <div className="flex items-center justify-evenly">
          {projects.images &&
            projects.images.map((img, i) => (
              <Image key={i} width={200} height={100} src={img} alt="images" />
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
