import { useState } from "react"
import DonationForm from "../DonationForm"

const Goals = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const toggleForm = () => setShowForm(!showForm)
  return (
    <div className="my-20">
      <h1 className="text-3xl text-center">Goals</h1>
      <div className="py-5 text-center flex flex-col items-center">
        <ul className="text-lg mb-5 text-left flex flex-col inline-flex">
          <li>Assist people who have been affected by Covid 19</li>
          <li>Help to pay school fees for Covid 19 victims</li>
          <li>Settle hospital bills of Covid 19 victims</li>
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