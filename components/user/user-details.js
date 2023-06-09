import PersonalNavbar from "./usernavbar/user-navbar";
import PersonalInfo from "./descriptions";

const UserDetails = () => {
  return (
    <main className="grid grid-cols-[600px,1fr] h-full items-center">
        <PersonalNavbar />
        <PersonalInfo />
    </main>
  )
};

export default UserDetails;
