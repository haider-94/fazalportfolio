import Link from "next/link";
import Image from "next/image";

function NavItems({ item }) {
  return (
    <li>
      <Link target="_blank" href={item.link}>
        <Image
          className="w-8 h-8 md:w-10 md:h-10"
          src={item.icon}
          alt={item.alt}
        />
      </Link>
    </li>
  );
}

export default NavItems;
