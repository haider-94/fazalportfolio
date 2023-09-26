import Link from "next/link";
import Cross from "@/public/cross";

const MobileNavigation = ({ checked }) => {
  const arr = [
    { name: "contact", link: "tel:+923244962952" },
    { name: "email", link: "mailto:fazalkarim.se@gmail.com" },
    { name: "github", link: "https://github.com/fazal26" },
    { name: "linkedln", link: "https://www.linkedin.com/in/fazalkarim" },
  ];

  return (
    <div>
      <div
        className={`w-16 h-16 rounded-full fixed top-[6.5rem] right-[6.5rem] z-[1000] bg-black  ${
          checked ? "background" : "opacity-0"
        }`}
      >
        &nbsp;
      </div>
      <nav
        className={`h-[100vh] ${
          checked ? "w-full" : "w-0"
        } fixed top-0 right-0 z-[1500] `}
      >
        <ul className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          {arr.length > 0 &&
            arr.map((item, index) => (
              <li key={index} className="uppercase m-1 list">
                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-block px-8 py-4  link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
