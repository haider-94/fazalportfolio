const Projects = ({projects}) => {

  return (
    <>
      <div className="last:mb-14">
        <h2 className="text-xl font-medium mb-2">
          {projects.projectName}
        </h2>
        <p className="text-base mb-4">{projects.description}</p>
      </div>
    </>
  );
};

export default Projects;
