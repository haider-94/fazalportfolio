import Link from "next/link";
import Image from "next/image";
import gmail from "../../public/icons8-gmail.svg";
import github from "../../public/icons8-github.svg";
import linkedin from "../../public/icons8-linkedin.svg";
import phone from "../../public/icons8-phone.gif";
import stackoverflow from "../../public/icons8-stack-overflow-48.svg";

const Header = () => {
  const user = {
    name: "Fazal Karim",
    title: "Full Stack Senior Software Engineer",
  };
  return (
    <nav>
      <ul className="flex justify-between md:justify-between lg:items-start">
        <div className="font-extralight">
          <h1 className="text-6xl md:text-7xl ml-[-0.20rem]">{user.name}</h1>
          <p className="text-base font-extralight">{user.title}</p>
          <p className="text-base font-extralight">PUCIT 2013-2017</p>
        </div>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-5">
          <li>
            <Link target="_blank" href="tel:+923244962952">
              <Image className="w-8 h-8 md:w-10 md:h-10" src={phone} alt="phone icon" />
            </Link>
          </li>
          <li>
            <Link  target="_blank" href="mailto:fazalkarim.se@gmail.com">
              <Image className="w-8 h-8 md:w-10 md:h-10" src={gmail} alt="gmail icon" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/fazal26">
              <Image className="w-8 h-8 md:w-10 md:h-10" src={github} alt="github icon" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/fazalkarim/"
            >
              <Image className="w-8 h-8 md:w-10 md:h-10" src={linkedin} alt="linkedin icon" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://stackoverflow.com/users/10195813/fazal-karim"
            >
              <Image className="w-8 h-8 md:w-10 md:h-10" src={stackoverflow} alt="stackoverflow icon" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
