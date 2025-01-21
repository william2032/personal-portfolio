import { logo } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <nav className="navbar font-outfit flex flex-row  justify-between ">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="nav-menu gap-10 text-5">
          {navLinks.map((nav, index) => (
            <li key={index} className="list space-x-3 px-3 ">
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="cursor-pointer nav_connect">Connect with me</button>
      </div>
    </nav>

  )
}

export default Navbar