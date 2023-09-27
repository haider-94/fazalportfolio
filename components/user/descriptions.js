import Experience from "./experiencedata/experience";
import Projects from "./projects/projects";

const PersonalInfo = ({ data, about, experience, projects }) => {
  return (
    <div>
      {about && (
        <div className="lg:h-[74vh] text-lg">
          <p>A Software Engineering Grad.</p>
          <p>I am a Coder by choice and Problem Solver by profession.</p>
          <p className="mb-20">
            I&apos;ve worked with startups, mid and large scale companies and
            even a Fortune 500 client. Currently serving as a Full Stack Eng at
            Vendor Jump.
          </p>
          <div className="flex gap-x-10">
            <div className="flex flex-col">
              <span className="mb-5">Experience</span>
              <span className="mb-5">Project Count</span>
              <span>Technical Stack</span>
              <span className="mt-auto">Misc Tools</span>
            </div>
            <div>
              <p className="mb-5">6+ Years</p>
              <p className="mb-5">25+</p>
              <p>React, React Native, Ruby on Rails, NextJs</p>
              <p>AWS, Node, Firebase, Material UI</p>
              <p>Jest, Angular, Typescript, Ionic</p>
              <p>Javascript, HTML, CSS</p>
              <p className="mt-5">
                Git, Gitlab, Bitbucket, Jira, Notion, Asana
              </p>
            </div>
          </div>
        </div>
      )}
      {experience && (
        <ul style={{ maxHeight: "74vh", "overflow-y": "scroll" }}>
          {data.experience.map((exp) => (
            <div key={exp.id} className="grid items-start">
              <li>
                <Experience experience={exp} />
              </li>
            </div>
          ))}
        </ul>
      )}
      {projects && (
        <ul style={{ maxHeight: "74vh", "overflow-y": "scroll" }}>
          {data.projects.map((pro) => (
            <div key={pro.id} className="grid items-start">
              <li>
                <Projects projects={pro} />
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PersonalInfo;
