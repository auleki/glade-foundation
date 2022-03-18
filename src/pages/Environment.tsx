import { GladepayButton } from "react-gladepay-2"

const Environment = () => {
  async function onSuccess(response: any) {
    console.log(response)
  }

  async function onClose() {
    console.log("dialog closed")
  }

  return (
    <>
      <h1>GladePay</h1>
      <GladepayButton
        amount={1000}
        email="123@gmail.com"
        is_production={false}
        redirect_post="/go"
        MID="GP0000001"
        onSuccess={onSuccess}
        onClose={onClose}
        text="Donate now" />
    </>
  )
}

export default Environment