import { CardsBanner } from "./components/cards"
import { ChartItem } from "./components/chart"
import { RecentlyActs } from "./components/recentlyActs"
export default function DashboardPage(){
    return (
    
       <div className=" flex flex-col gap-2 px-4 ">
        <h1 className="text-4xl font-semibold text-neutral-800">Dashboard Financeiro</h1>
        <p className="text-neutral-500">Bem-vindo ao seu painel financeiro, aqui está o resumo das suas finanças </p>
        <CardsBanner /> 
        <ChartItem />
        <RecentlyActs />
        </div>
    
    )
}   