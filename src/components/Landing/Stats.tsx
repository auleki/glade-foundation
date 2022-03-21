import CaseCard from "../Stats/CaseCard"

const Stats = () => {
  return (
    <div className="py-4 mt-20">
      <h1 className="text-3xl text-center">Global Stats</h1>
      <div className="flex flex-col md:flex-row gap-4 p-10 justify-center">
        <CaseCard type="total" title="Total Cases" cases="21M" />
        <CaseCard type="recovered" title="Recovered" cases="18M" />
        <CaseCard type="death" title="Deaths" cases="9M" />
      </div>
    </div>
  )
}

export default Stats