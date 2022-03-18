import CaseCard from "../Stats/CaseCard"

const Stats = () => {
  return (
    <div className="py-4 mt-5">
      <h1 className="text-3xl text-center">Global Stats</h1>
      <div className="flex flex-col md:flex-row gap-4 p-10 justify-center">
        <CaseCard title="Total Cases" cases="41M" />
        <CaseCard title="Recovered" cases="41M" />
        <CaseCard title="Deaths" cases="41M" />
      </div>
    </div>
  )
}

export default Stats