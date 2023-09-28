const PersonalNavbar = ({ about, experience, projects, setAbout, setExperience, setProjects }) => {
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
    <div style={{ maxHeight: "100vh" }}>
      <ul className={`flex leading-none font-light flex-row justify-center gap-10 md:flex-col lg:gap-4 text-[1.2rem]`}>
        <li onClick={() => handleUserNavbar("about")} className={`${about ? "font-medium pointer-events-none" : "font-light"}`}>
          <span className="cursor-pointer">{about ? "● About" : "About"}</span>
        </li>
        <li onClick={() => handleUserNavbar("experience")} className={`${experience ? "font-medium pointer-events-none" : "font-light"}`}>
          <span className="cursor-pointer">{experience ? "● Experience" : "Experience"}</span>
        </li>
        <li onClick={() => handleUserNavbar("projects")} className={`${projects ? "font-medium pointer-events-none" : "font-light"}`}>
          <span className="cursor-pointer">{projects ? "● Projects" : "Projects"}</span>
        </li>
      </ul>
    </div>
  );
};

export default PersonalNavbar;
