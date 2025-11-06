import { Plus } from "lucide-react";
import { CardsAnalitics } from "./components/cards";
import { WalletInvest } from "./components/walletInvest";
export default function RelatóriosPage()
{
    return (
        <div className="flex flex-col h-full w-full px-4">
      <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold text-neutral-800">Investimentos</h1>
            <p>Acompanhe a performance da sua carteira de investimentos</p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer bg-blue-500 
            px-4 py-2 rounded-lg hover:bg-blue-600 transition text-white">
                <Plus className="h-6 w-6  cursor-pointer" />
                <p>
                    Novo Investimento
                </p>
            </div>
     </div>
            <CardsAnalitics />
            <WalletInvest />
        </div>
    )
}