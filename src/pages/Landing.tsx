import { Goals, Header, HowItWorks, Stats } from "../components"

const Landing = () => {
  return (
    <>
      <Header />
      {/* Covid Stats  */}
      <Stats />
      {/* Goals & Donate to students or medical fees -> clicking on donate pop opens a modal*/}
      <Goals />
    </>
  )
}

export default Landing