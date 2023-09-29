import NavItems from "./navitems";
import { user } from "@/src/constants/user";

const Header = () => {
  const { personal, navItems } = user;

  return (
    <nav>
      <ul className="flex justify-between md:justify-between lg:items-start">
        <div className="font-extralight">
          <h1 className="text-6xl md:text-7xl ml-[-0.20rem]">
            {personal.name}
          </h1>
          <p className="text-base font-extralight">{personal.title}</p>
          <p className="text-base font-extralight">PUCIT 2013-2017</p>
        </div>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-5">
          {navItems &&
            navItems.map((item, i) => <NavItems item={item} key={i} />)}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
