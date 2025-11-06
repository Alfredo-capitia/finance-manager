import { Plus } from "lucide-react";
import { HistoryTransition } from "./components/historyTransition";

export default function TransitionPage(){
    return (
     <main className="flex flex-col gap-2 w-full px-5">
    <header  className=" flex justify-between w-full">
    <div className="">
   <h1 className="text-3xl font-bold text-neutral-800">Transações</h1>
   <p className="text-zinc-500">Gerir e acompanhar todas as suas transações financeiras</p>
      </div>
      <div className="flex gap-3 cursor-pointer h-fit
      hover:bg-blue-500 hover:text-white font-bold dark:hover:bg-neutral-800 
      w-max px-3 py-2 rounded-lg transition-colors"
      >
        <Plus className=" hover:text-white" />
        <p>Nova transação</p>
      </div>
    </header>
    <HistoryTransition />
        </main>
    )
}   