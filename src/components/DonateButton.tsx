import { GladepayButton } from "react-gladepay-2"
import { DonateButtonProps } from "../global"

const DonateButton = ({ amount, text, description }: DonateButtonProps) => {
  const MID = "GP0000001"

  function onSuccess(response: any) {
    console.log(response)
  }

  function onClose() {
    console.log('You closed the dialog button')
  }
  return (
    <GladepayButton
      amount={amount}
      onSuccess={onSuccess}
      onClose={onClose}
      is_production={false}
      email="abc@gmail.com"
      description={description || "Covid-19 donation"}
      text={text}
      MID={MID} />
  )
}

export default DonateButton