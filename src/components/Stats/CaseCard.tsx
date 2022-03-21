import { BiErrorCircle, BiShield, BiPulse } from "react-icons/bi";

const CaseCard = ({ title, cases, type }: { title: string, cases: string, type: string }) => {

  function showIcon(caseType: string) {
    switch (caseType) {
      case 'death':
        return <BiErrorCircle />
      case 'recovered':
        return <BiPulse />
      case 'total':
        return <BiShield />
      default:
        return 'no such case'
    }
  }

  return (
    <div className={`bg-slate-200 p-10 px-20 text-slate-500 text-center border rounded drop-shadow-md hover:drop-shadow-none`}>
      <div className="flex flex-col items-center gap-4">
        <span className="text-2xl">{showIcon(type)}</span>
        <p>{title}</p>
      </div>
      <span className="text-3xl">{cases}</span>
    </div>
  )
}

export default CaseCard