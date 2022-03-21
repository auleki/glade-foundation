import { BsFillHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-10 bg-slate-200 text-center">
      <h2 className="text-2xl">Save a life, make a donation today</h2>
      <div className="flex items-center justify-center gap-2">
        <p className="text-slate-400">Sponsored by Glade Foundation</p>
        <span className="text-red-600"><BsFillHeartFill /></span>
      </div>
    </div>
  )
}

export default Footer