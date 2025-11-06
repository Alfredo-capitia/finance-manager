
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

interface CardInfo {
    title: string;
    value: string;
    valueColor?: string;
}
const cardInfos: CardInfo[] = [
    {
        title: "Valor Total",
        value: "€12,500.00",
        valueColor: "text-neutral-800"
    },
    {
        title: "Retorno Total",
        value: "+18.3%",
        valueColor: "text-green-500"
    },
    {
        title: "Ganho/Perda Mensal",
        value: "+€127.50",
        valueColor: "text-green-500"
    },
]
export function CardsAnalitics(){
    return (
       <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {cardInfos.map((info , i) => (
            <Card key={i} className="flex flex-col space-y-2 rounded-2xl" >
               <CardHeader>
                <CardTitle className={`text-sm text-neutral-800 font-semibold`}>
                   {info.title}
                </CardTitle>
                 <div>
                        <p className={`text-4xl font-bold ${info.valueColor || "text-neutral-800"}`}>
                            {info.value}
                        </p>
                    </div>
               </CardHeader>
    
            </Card>
         ))}
        </div>
       </div>
    )
}