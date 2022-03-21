import { useState } from "react"
import MobileNav from "../Navbar/MobileNav"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(true)

  const toggleNavbar = () => setNavOpen(!navOpen)

  return (
    <nav className="drop-shadow-xl p-5 shadow flex items-center justify-between">
      <h1 className="text-2xl cursor-pointer hover:text-purple-400">GLADE</h1>
      {/* <div className="sm:hidden">

        <div className="position-absolute">
          {navOpen && <MobileNav />}
        </div>
      </div> */}
      {/* <button onClick={toggleNavbar}>M</button> */}

      {/* <ul className={`hidden sm:flex navlinks gap-x-5`}> */}
      <ul className={`sm:flex navlinks gap-x-5`}>
        <li className="cursor-pointer hover:text-slate-400">Organize Event</li>
        <li className="cursor-pointer hover:text-slate-400">Host Space</li>
      </ul>
    </nav>
  )
}

export default Navbar