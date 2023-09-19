
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-scroll";
import profileImg from '../assets/man.png'

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full relative z-[100]">
      <div className="md:flex items-center justify-between bg-[#45a29e] py-4 md:px-14 px-7 fixed top-0 left-0 right-0 shadow-sm">
        {/* logo section */}
        <div className="font-bold text-2xl tracking-wide cursor-pointer flex items-center gap-1">
            <img src={profileImg} alt="" className="md:w-12 md:h-12 w-10 h-10 rounded-full"/>
          <span className="text-primary hover:text-secondary md:ml-3 ml-2">Tommy_codes</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-primary"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        {/* linked items */}
        <ul
          className={`md:flex md:items-center items-center md:pb-0 absolute md:static md:text-[#1f2833] md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0  bg-white sm:bg-transparent  ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 mt-5 font-semibold text-xl border-b-2 md:border-b-0 text-right md:text-[#1f2833] px-7 md:px-4 pb-4 md:pb-0 cursor-pointer" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                className="text-light md:text-[#1f2833] hover:text-[#1f2833] duration-500 uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
