import { useState } from "react"
import Button from "./Button"
import { GladepayButton } from "react-gladepay-2"

const DonationForm = () => {
  const [amount, setAmount] = useState<number>(0)
  const [reason, setReason] = useState<"Medical" | "School">('Medical')
  const handleAmountChange = (e: any) => setAmount(e.target.value)
  const [MID] = useState<string>("GP0000001")

  async function donateFunds(response: any) {
    if (amount <= 0) {
      throw new Error('You need to send something')
    } else {
      alert(`Thanks for donating N${amount}! for ${reason}`)
    }
  }

  function onClose() {
    alert('Payment dialog was closed')
    // redirect to Landing page
  }
  return (
    <div className="my-10 flex flex-col inline-flex">
      <div className="inputGroup flex flex-col inline-flex">
        <label htmlFor="reason" className="text-sm mb-1">Reason</label>
        <select>
          <option value="schoolFees">School Fees</option>
          <option value="medicalBill">Medical Bills</option>
        </select>
      </div>
      <div className="inputGroup text-sm mb-1 mt-5 flex flex-col inline-flex">
        <label htmlFor="amount">Amount</label>
        <input
          className="outline rounded-full mt-2 outline-green-200 p-1 px-2"
          type="text"
          name="amount"
          id="amout"
          placeholder="Nxxx,xxx"
          value={amount}
          onChange={handleAmountChange} />
      </div>
      <div className="inputGroup mt-5">
        {/* <Button onClick={donateFunds} text="Make Donation" /> */}
        <GladepayButton
          className="bg-green-500 p-2 px-5 hover:bg-white hover:text-black rounded-md text-white"
          onSuccess={donateFunds}
          text={`Donate ${reason} ${reason === "Medical" ? "Bills" : "Fees"}`}
          onClose={onClose}
          MID={MID}
          amount={amount}
          email="abc@gmail.com"
          description={reason}
          is_production={true}
        />
        {/* <GladepayButton  amount={1000} text="Donate" /> */}
      </div>
    </div>
  )
}

export default DonationForm