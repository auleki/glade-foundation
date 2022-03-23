import { useState, useEffect } from "react"
import Button from "../Button"
import { instance } from "../../api/axiosInstance";

const Header = () => {
  const [amount, setAmount] = useState<number>(100)

  const makePayment = async () => {
    const payObj = {
      "action": "charge",
      "paymentType": "bank_transfer",
      "user": {
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@example.com",
        "ip": "192.168.33.10",
        "fingerprint": "cccvxbxbxb"
      },
      "amount": "1500",
      "country": "NG",
      "currency": "NGN",
      "business_name": "Eva Empire"
    }
    const response = await instance.patch("/payment", payObj)
    console.log(response)
  }

  useEffect(() => {
    makePayment()
  }, [])

  const handleAmountChange = (e: any) => setAmount(e.target.value)

  async function donateFunds() {
    if (amount < 100) {
      console.log('Why are trying to be wicked, send something...')
      setAmount(0)
    } else {
      // convert amount to a number
      alert('This much N' + amount + ' has been donated')
      setAmount(100)
    }
  }
  return (
    <div className="lg:h-screen lg:flex-row px-5 flex flex-col-reverse">
      <div className="flex-1 text-center lg:text-left lg:mt-60 mt-10 md:ml-20 align-center">
        <h1 className="text-4xl lg:text-5xl">Donate to COVID-19 Victims</h1>
        <h1 className="text-slate-400 mt-5 mb-10">Our mission is to lend a hand to those we need help</h1>
        {/* Donation form */}
        <div className="overflow-hidden outline rounded-full mt-2 outline-green-200 flex inline-flex p-1">
          <div className="p-2 px-4">
            <span className="text-green-500 mr-2 text-lg">₦</span>
            <input
              type="number"
              name="amount"
              autoComplete="off"
              value={amount}
              onChange={handleAmountChange}
              className="text-2xl w-24 text-green-500 placeholder:text-green-300 bg-transparent focus:outline-none border border-0 outline outline-none border-none rounded-sm"
              placeholder="amount" />
          </div>
          <Button onClick={donateFunds}>
            {/* <DonateButton amount={amount} text="Donate" /> */}
            {/* </GladepayButton> */}
            Donate
          </Button>
        </div>
      </div>
      <div className="flex-1 hidden lg:flex bg-[url('/src/assets/undraw_doctors_hwty.svg')]">
      </div>
    </div>
  )
}

export default Header