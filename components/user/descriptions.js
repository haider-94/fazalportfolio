import Experience from "./experiencedata/experience";
import Projects from "./projects/projects";

const PersonalInfo = ({ data, about, experience, projects }) => {
  return (
    <div className={`${experience || projects ? 'h-1/2 overflow-y-scroll' : ''}`} >
      {about && <p className="text-[1.3rem] leading-10 tracking-normal font-normal ml-[120px]">{data.about}</p>}
      {experience &&
        data.experience.map((exp) => (
          <div key={exp.id} className="grid grid-cols-[130px,1fr] items-start">
            <Experience experience={exp} />
          </div>
        ))}
      {projects &&
        data.projects.map((pro) => (
          <div key={pro.id} className="grid grid-cols-[1fr] ml-[120px] items-start">
            <Projects projects={pro} />
          </div>
        ))}
    </div>
  );
};

export default PersonalInfo;
