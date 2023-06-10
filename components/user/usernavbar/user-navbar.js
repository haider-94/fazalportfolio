const PersonalNavbar = ({
  about,
  experience,
  projects,
  setAbout,
  setExperience,
  setProjects,
}) => {
  const handleUserNavbar = (type) => {
    if (type === "about") {
      setAbout(true);
      setExperience(false);
      setProjects(false);
    } else if (type === "experience") {
      setAbout(false);
      setExperience(true);
      setProjects(false);
    } else {
      setAbout(false);
      setExperience(false);
      setProjects(true);
    }
  };
  return (
    <>
      <ul className={`flex flex-col gap-4 text-sm leading-none font-light`}>
        <li
          onClick={() => handleUserNavbar("about")}
          className={`cursor-pointer ${
            about ? "font-semibold pointer-events-none" : "font-light"
          }`}
        >
          {about ? "." : "About"}
        </li>
        <li
          onClick={() => handleUserNavbar("experience")}
          className={`cursor-pointer ${
            experience ? "font-semibold pointer-events-none" : "font-light"
          }`}        >
          {" "}
          {experience ? "." : "Experience"}
        </li>
        <li
          onClick={() => handleUserNavbar("projects")}
          className={`cursor-pointer ${
            projects ? "font-semibold pointer-events-none" : "font-light"
          }`}        >
          {" "}
          {projects ? "." : "Projects"}
        </li>
      </ul>
    </>
  );
};

export default PersonalNavbar;
