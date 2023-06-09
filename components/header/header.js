import Link from "next/link";
import Image from "next/image";
import gmail from "../../public/icons8-gmail.svg";
import github from "../../public/icons8-github.svg";

const Header = () => {
  return (
    <nav className="">
      <ul className="flex justify-between">
        <button className="text-[#ccc]">{"<Ahmad />"}</button>
        <div className="flex gap-5">
          <li>
            <Link href="https://www.linkedin.com/in/haider-ali-693996272/">
              <Image width={30} height={30} src={gmail} alt="" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/haider-ali-693996272/">
              <Image width={30} height={30} src={github} alt="" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
