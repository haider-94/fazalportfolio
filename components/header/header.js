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
      <ul className="flex justify-between">
        <div className="font-extralight">
          <h1 className="text-7xl ml-[-0.20rem]">{user.name}</h1>
          <p className="text-base font-extralight">{user.title}</p>
          <p className="text-base font-extralight">PUCIT 2013-2017</p>
        </div>
        <div className="flex gap-5">
          <li>
            <Link target="_blank" href="tel:+923244962952">
              <Image width={40} height={30} src={phone} alt="" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="mailto:fazalkarim.se@gmail.com">
              <Image width={40} height={30} src={gmail} alt="" />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/fazal26">
              <Image width={40} height={30} src={github} alt="" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/fazalkarim/"
            >
              <Image width={40} height={30} src={linkedin} alt="" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://stackoverflow.com/users/10195813/fazal-karim"
            >
              <Image width={40} height={30} src={stackoverflow} alt="" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
