const CaseCard = ({ title, cases }: { title: string, cases: string }) => {
  return (
    <div className="bg-slate-200 p-10 text-center border rounded drop-shadow-md hover:drop-shadow-none">
      <h2>{title}</h2>
      <span className="text-3xl">{cases}</span>
    </div>
  )
}

export default CaseCard