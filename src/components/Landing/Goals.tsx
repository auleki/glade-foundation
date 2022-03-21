import { useState } from "react"
import DonationForm from "../DonationForm"
import wavesAnimation from "../../assets/97393-waves.json"
import Lottie from "lottie-react"
import { BiDonateHeart, BiMoney, BiFirstAid } from "react-icons/bi";

const Goals = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const toggleForm = () => setShowForm(!showForm)

  return (
    <div className="my-20 px-5 sm:px-0">
      <h1 className="text-3xl text-center">Goals</h1>
      <div className="py-5 text-center flex flex-col items-center">
        <ul className="text-lg mb-5 text-left flex flex-col inline-flex text-slate-500 gap-6">
          <li className="flex items-center gap-2">
            <span className="text-3xl outline outline-purple-300 rounded-full bg-purple-600 p-3 text-white"><BiDonateHeart /></span>
            <span>Assist people who have been affected by Covid 19</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-3xl outline outline-purple-300 rounded-full bg-purple-600 p-3 text-white"><BiMoney /></span>
            <span>Help to pay school fees for Covid 19 victims</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-3xl outline outline-purple-300 rounded-full bg-purple-600 p-3 text-white"><BiFirstAid /></span>
            <span>Settle hospital bills of Covid 19 victims</span>
          </li>
        </ul>
        <button
          className="text-lg text-center outline outline-purple-200 cursor-pointer bg-purple-400 inline-flex flex p-4 text-white italic px-8 rounded-full"
          onClick={toggleForm}>
          {showForm ? "Close form" : "Donation form"}
        </button>
        <div>
          {showForm && <DonationForm />}
        </div>
      </div>
    </div>
  )
}

export default Goals