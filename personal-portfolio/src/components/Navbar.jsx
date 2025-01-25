import { useState } from "react"
import { about, logo } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="navbar font-outfit flex flex-row  justify-between" >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="nav-menu gap-10 text-5 ">
          {navLinks.map((nav, index) => (
            <li key={index} className={`list space-x-3 px-3 cursor-pointer scro ${active === nav.title} ? font-semibold  text-white rounded md:bg-transparent  md:p-0 dark:text-white   : hover:text-blue-500
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
          <button className="cursor-pointer nav_connect text-[18px] font-semibold">

            Connect with me</button>
        </a>

      </div>
    </nav>

  )
}

export default Navbar