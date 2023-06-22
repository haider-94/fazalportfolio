import Header from "../header/header";
import UserDetails from "../user/user-details";

const Portfolio = () => {
  return (
    <div className="lg:w-[1280px] mx-auto h-[100vh] px-10 py-10 text-white text-lg border border-white">
      <Header />
      <UserDetails />
    </div>
  );
};

export default Portfolio;
