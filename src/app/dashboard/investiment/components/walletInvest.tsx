import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { ProgressBar } from "./progress";

interface WalletInvest {
  id: number;
  name: string;
  value: number;
  percentage: number;
  color: string;
  icon: React.ReactNode;
}

const walletInvest: WalletInvest[] = [
  {
    id: 1,
    name: "Ação XYZ",
    value: 1000,
    percentage: 10.5,
    color: "text-green-500",
    icon: <TrendingUp className="text-green-500" />,
  },
  {
    id: 2,
    name: "Fundo ABC",
    value: 2000,
    percentage: 20.56,
    color: "text-green-500",
    icon: <TrendingUp className="text-green-500" />,
  },
  {
    id: 3,
    name: "Cripto DEF",
    value: 1500,
    percentage: -15.0,
    color: "text-red-500",
    icon: <TrendingDown className="text-red-500" />,
  },
  {
    id: 4,
    name: "ETF GHI",
    value: 3000,
    percentage: 5.75,
    color: "text-green-500",
    icon: <TrendingUp className="text-green-500" />,
  },
];

export function WalletInvest() {
  return (
    <div className="mt-10">
      <Card className="px-2 py-6 rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex flex-col space-y-1">
            <h2 className="text-3xl font-bold">Carteira de Investimentos</h2>
            <p className="text-sm text-muted-foreground">
              Distribuição e performance dos seus ativos
            </p>
          </div>
        </CardHeader>

        {walletInvest.map(({ id, name, value, percentage, color, icon }) => {
          const absPercentage = Math.abs(percentage);
          const isPositive = percentage > 0;

          return (
            <CardContent
              key={id}
              className="border-t last:border-b-0 border-border/40 py-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{name}</p>
                  <div className="flex gap-4 items-center text-sm">
                    <div className="flex items-center gap-1">
                      {icon}
                      <span className={`${color}`}>
                        {isPositive ? "+" : ""}
                        {percentage}%
                      </span>
                    </div>
                    <p className="font-semibold">Kz {value.toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {absPercentage}% da carteira
                  </p>
                  <ProgressBar value={absPercentage} />
                </div>
              </div>
            </CardContent>
          );
        })}
      </Card>
    </div>
  );
}
