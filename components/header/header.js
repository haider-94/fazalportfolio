import Link from "next/link";
import Image from "next/image";
import gmail from "../../public/icons8-gmail.svg";
import github from "../../public/icons8-github.svg";
import linkdin from "../../public/icons8-linkedin.svg"
import stackoverflow from "../../public/icons8-stack-overflow-48.svg"

const Header = () => {
  const user = {
    name: 'Fazal Karim',
    title: 'Full Stack Engineer'
  }
  return (
    <nav className="">
      <ul className="flex justify-between">
        <div className="font-extralight">
          <h1 className="text-6xl ml-[-0.20rem]">{user.name}</h1>
          <p className="text-base font-extralight">{user.title}</p>
        </div>
        <div className="flex gap-5">
          <li>
            <Link href="mailto:fazalkarim.se@gmail.com">
              <Image width={35} height={30} src={gmail} alt="" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/fazal26">
              <Image width={35} height={30} src={github} alt="" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/fazalkarim/">
              <Image width={35} height={30} src={linkdin} alt="" />
            </Link>
          </li>
          <li>
            <Link href="https://stackoverflow.com/users/10195813/fazal-karim">
              <Image width={35} height={30} src={stackoverflow} alt="" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
