import PersonalNavbar from "./usernavbar/user-navbar";
import PersonalInfo from "./descriptions";
import { user } from "@/src/constants/user";
import { useState } from "react";

const UserDetails = () => {
  const [about, setAbout] = useState(true);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);
  return (
    <main className="grid gap-y-10 pt-16 md:pt-20 md:grid md:grid-cols-[200px,1fr] lg:grid-cols-[420px,1fr] lg:gap-y-16">
      <PersonalNavbar
        about={about}
        experience={experience}
        projects={projects}
        setAbout={setAbout}
        setExperience={setExperience}
        setProjects={setProjects}
      />
      <PersonalInfo about={about} experience={experience} projects={projects} data={user} />
    </main>
  );
};

export default UserDetails;
