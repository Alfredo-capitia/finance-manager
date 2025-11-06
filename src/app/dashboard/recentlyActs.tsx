import { Card , CardContent } from "@/components/ui/card"
import { Car, Euro, House, ShoppingBag, ShoppingCart, Utensils } from "lucide-react";

interface RecentActivity {
    id: number;
    title: string;
    amount: string;
    date: string;
    status: string;
    icon?: React.ReactNode;
}
const recentlyActivities: RecentActivity[] = [
    {
        id:1,
        title: "Super Mercado",
        amount: "€250.00",
        date: "2024-06-10",
        status: "Concluído",
        icon: <ShoppingCart/>
    },
    {
        id:2,
        title: "Salário",
        amount: "€450.00",
        date: "2024-06-09",
        status: "Pendente",
        icon: <Euro />
    },
    {
        id:3,
        title: "Aluguel",
        amount: "€99.99",
        date: "2024-06-08",
        status: "Concluído",
        icon: <House />
    },
    {
        id:4,
        title: "Restaurante",
        amount: "€75.00",
        date: "2024-06-07",
        status: "Concluído",
        icon: <Utensils/>

    },
    {
        id: 5,
        title: "Combustível",
        amount: "€150.00",
        date: "2024-06-06",
        status: "Concluído",
        icon: <Car />
    }

];  
export function RecentlyActs(){
    return (
        <div className=" mt-6">
            <Card className=" p-4">
           {recentlyActivities.map((a) => (
            <CardContent key={a.id} className=" flex justify-between items-center p-1">
                <div className=" flex items-center gap-3">
                    <div className=" p-2 bg-zinc-200/50 rounded-md text-zinc-700/50">
                        {a.icon}
                    </div>
                    <div className=" flex flex-col">
                        <span className=" font-bold text-neutral-800">{a.title}</span>
                        <span className=" text-sm text-muted-foreground">{a.date}</span>
                    </div>
                </div>
                <div className=" flex flex-col items-center">
                    <span className=" font-bold text-neutral-800 text-xl">{a.amount}</span>
                    <span className={` text-xs font-semibold py-1 px-2 rounded-md ${a.status === "Concluído" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                        {a.status}
                    </span>
                </div>
            </CardContent>
           ))}     
            </Card>
        </div>
    )
}