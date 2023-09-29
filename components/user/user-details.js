import PersonalNavbar from "./usernavbar/user-navbar";
import PersonalInfo from "./descriptions";
import { user } from "@/src/constants/user";
import { useReducer } from "react";
import { reducer } from "@/src/context/navbar.reducer";

const UserDetails = () => {
  const initialState = {
    about: true,
    experience: false,
    projects: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <main className="grid gap-y-10 pt-16 md:pt-20 md:grid md:grid-cols-[200px,1fr] lg:grid-cols-[420px,1fr] lg:gap-y-16">
      <PersonalNavbar state={state} dispatch={dispatch} />
      <PersonalInfo
        about={state.about}
        experience={state.experience}
        projects={state.projects}
        data={user}
      />
    </main>
  );
};

export default UserDetails;
