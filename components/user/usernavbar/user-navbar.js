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
          className={`${
            about ? "font-semibold pointer-events-none" : "font-light"
          }`}
        >
          <span className="cursor-pointer">{about ? "." : "About"}</span>
        </li>
        <li
          onClick={() => handleUserNavbar("experience")}
          className={`${
            experience ? "font-semibold pointer-events-none" : "font-light"
          }`}
        >
          {" "}
          <span className="cursor-pointer">
            {experience ? "." : "Experience"}
          </span>
        </li>
        <li
          onClick={() => handleUserNavbar("projects")}
          className={`${
            projects ? "font-semibold pointer-events-none" : "font-light"
          }`}
        >
          {" "}
          <span className="cursor-pointer">{projects ? "." : "Projects"}</span>
        </li>
      </ul>
    </>
  );
};

export default PersonalNavbar;
