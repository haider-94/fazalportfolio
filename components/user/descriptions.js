import Experience from "./experiencedata/experience";
import Projects from "./projects/projects";

const PersonalInfo = ({ data, about, experience, projects }) => {
  return (
    <div>
      {about && (
        <div style={{ height: "74vh" }}>
          <p>A Software Engineering Grad.</p>
          <p>I am a Coder by choice and Problem Solver by profession.</p>
          <p>
            I've worked with startups, mid and large scale companies and even a Fortune 500 client. Currently serving as a Full Stack Eng at Vendor
            Jump.
          </p>
          <br />
          <p>Experience: 6+ Years</p>
          <p>Project Count: 22+</p>
          <br />
          <p>
            Technical Stack: React, React Native, Ruby on Rails, NextJs, Angular, Typescript, AWS, Jest, Ionic, Node, Firebase, Javascript, HTML, CSS
            :)
          </p>
          <p>Misc Tools: Git, Gitlab, Bitbucket, Jira, Notion, Asana</p>
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
