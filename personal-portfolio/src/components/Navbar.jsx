import { useState } from "react"
import { about, close, logo, menu } from "../assets"
import { navLinks } from "../constants"
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="navbar font-outfit flex flex-row  justify-between" >
      <div className="logo">
        <img src={logo} alt="logo" className="hidden  md:flex" />

      </div>

      {/* desktop view */}
      <div className="hidden md:flex flex-wrap">
        <ul className="   nav-menu gap-10 text-5 ">
          {navLinks.map((nav, index) => (
            <li key={index} className={`list space-x-3 px-3 cursor-pointer  ${active === nav.title} ? font-semibold  text-white rounded md:bg-transparent  md:p-0 dark:text-white   : hover:text-blue-500
            } ${index === navLinks.length - 1 ? "mr-4" : "mr-2"}`}
              onClick={() => setActive(nav.title)}>
              <a
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${nav.id}`).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#contact`).scrollIntoView({
              behavior: "smooth",
              block: "start",

            });
          }}
        >
          <button className="hidden md:flex cursor-pointer nav_connect text-[18px] font-semibold">

            Connect with me</button>
        </a>


        {/* mobile view */}
        <div className=" inline-block justify-around   my-0 right-0 bottom-0 items-center px-4 md:hidden">
          <div className="flex items-center">
            <img src={logo} alt="logo" className=" w-[100px] " />

          </div>
          <button
            className="text-white focus:outline-none top-0"
            onClick={() => setToggle(!toggle)} >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        <div className={` ${!toggle ? "hidden" : "flex"}    w-[450px] mb-4 pr-12 md:hidden"`}>
          <ul className=" flex flex-col  bg-[#312121] nav-menu mx-8  py-4 space-y-6 text-left text-sm w-auto ">
            {navLinks.map((nav, index) => (
              <li key={index} className={` space-y-3 px-3 cursor-pointer rounded transition-all duration-300 ${active === nav.title} ? font-semibold  text-white rounded md:bg-transparent  md:p-0 dark:text-white   : hover:text-blue-500
            } ${index === navLinks.length - 1 ? "mr-4" : "mr-2"}`}
                onClick={() => setActive(nav.title)}>
                <a
                  href={`#${nav.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${nav.id}`).scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </nav>

  )
}

export default Navbar