import Experience from "./experiencedata/experience";

const PersonalInfo = ({ data, about, experience, projects }) => {
  return (
    <div className={`${experience ? 'h-1/2 overflow-y-scroll' : ''}`} >
      {about && <p className="text-md font-thin leading-6 ml-[120px]">{data.about}</p>}
      {experience &&
        data.experience.map((exp) => (
          <div key={exp.id} className="grid grid-cols-[120px,1fr] items-start">
            <Experience experience={exp} />
          </div>
        ))}
    </div>
  );
};

export default PersonalInfo;
