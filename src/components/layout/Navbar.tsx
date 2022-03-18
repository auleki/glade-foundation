const Navbar = () => {
  return (
    <nav className="drop-shadow-xl p-5 shadow flex items-center justify-between">
      <h1 className="text-3xl cursor-pointer hover:text-purple-400">GLADE</h1>
      <ul className="navlinks flex gap-x-5">
        <li className="cursor-pointer hover:text-slate-400">Organize Event</li>
        <li className="cursor-pointer hover:text-slate-400">Host Space</li>
      </ul>
    </nav>
  )
}

export default Navbar