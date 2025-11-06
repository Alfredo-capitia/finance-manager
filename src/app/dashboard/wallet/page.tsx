import { Card , CardHeader , CardContent } from "@/components/ui/card"
import { icons } from "lucide-react"

interface WalletPageInfo {
    title: string;
    value: string;
    description:  string;
    subdescription: string;
    icon: React.ReactNode;
    color?: string;
    bg?: string;
}
const walletPage: WalletPageInfo[] = [
    {
        title: "Conta Principal",
        value: "Kz 25 032,50",
        description: "Saldo actual",
        subdescription: "cheking",
        icon : <icons.Receipt />,
        color: "bg-neutral-800",
        bg: "bg-blue-600"
    },
    {
        title: "Cartão de Crédito",
        value: "Kz 1200,00",
        description: "Saldo actual",
        subdescription: "credit",
        icon : <icons.CreditCard />,
        color: "text-rose-700",
        bg: "bg-violet-600"
    }
    ,
    {
        title: "Poupança",
        value: "Kz 8 500,75",
        description: "Saldo actual",
        subdescription: "savings",
        icon : <icons.PiggyBank />,
        color: "text-neutral-800",
        bg: "bg-green-700"
    }   ,
    {
        title: "Investimento",
        value: "Kz 18 500,75",
        description: "Saldo actual",
        subdescription: "investments",
        icon : <icons.TrendingUp />,
        color: "text-neutral-800",
        bg: "bg-amber-700"
    }

]
export default function WalletPage(){
    return (
      <div className="flex flex-col h-full w-full px-4">
        <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-extrabold text-neutral-800">Carteiras</h1>
            <p className="text-muted-foreground">Gerir as suas contas e carteiras financeiras</p>
        </div>
        <div className="mt-10">
            <Card>
                <CardHeader>
                    <p className="text-muted-foreground text-sm">Saldo Total</p>
                    <h1 className="text-3xl font-bold">Kz 25 032,50</h1>
                </CardHeader>
            </Card>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {walletPage.map((w , i) => (
                <Card key={i} className="mt-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${w.bg || "bg-blue-600"} text-white`}>
                                {w.icon}
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-extrabold">{w.title}</h1>
                                <p className="text-muted-foreground text-sm">{w.subdescription}</p>
                            </div>
                        </div>
                    </CardHeader>
             <CardContent>
                <div>
                    <p className="text-muted-foreground text-sm">{w.description}</p>
                    <h1 className="text-2xl font-bold">{w.value}</h1>
                </div>
             </CardContent>
                </Card>
            ))}
        </div>
      </div>
    )
}   