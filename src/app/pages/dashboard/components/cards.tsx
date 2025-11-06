"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CalendarArrowDown, PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

interface CardData {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  bg?: string;
  descColor?: string;
  textColor?: string;
}

const cardsData: CardData[] = [
  {
    title: "Saldo Total",
    price: "€8,432.50",
    description: "+12.5% este mês",
    icon: <CalendarArrowDown className="text-white" />,
    bg: "bg-gradient-to-r from-blue-600 to-blue-400",
    textColor: "text-white",
  },
  {
    title: "Receitas",
    price: "€4,300.00",
    description: "+8.2% vs mês anterior",
    icon: <TrendingUp className="text-green-600" />,
    descColor: "text-green-600",
  },
  {
    title: "Despesas",
    price: "€2,800.00",
    description: "+3.1% vs mês anterior",
    icon: <TrendingDown className="text-red-600" />,
    descColor: "text-red-600",
  },
  {
    title: "Poupança",
    price: "€1,500.00",
    description: "+15% este mês",
    icon: <PiggyBank className="text-yellow-600" />,
    descColor: "text-green-600",
  },
];

export function CardsBanner() {
  return (
    <div className="flex justify-center w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {cardsData.map((card, i) => (
          <Card
            key={i}
            className={`p-4 transition-all hover:scale-[1.03] hover:shadow-lg cursor-pointer rounded-2xl ${
              card.bg || "bg-white dark:bg-neutral-900"
            }`}
          >
            <CardHeader className="flex items-center justify-between pb-2">
              <h3
                className={`text-sm font-medium ${
                  card.textColor || "text-neutral-500"
                }`}
              >
                {card.title}
              </h3>
              <div
                className={`flex items-center justify-center rounded-xl p-2 ${
                  card.textColor ? "bg-white/20" : "bg-zinc-100"
                }`}
              >
                {card.icon}
              </div>
            </CardHeader>

            <CardContent>
              <p
                className={`text-3xl font-bold ${
                  card.textColor || "text-neutral-800"
                }`}
              >
                {card.price}
              </p>
              <p
                className={`text-xs mt-2 ${
                  card.descColor ||
                  (card.textColor ? "text-white/80" : "text-muted-foreground")
                }`}
              >
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
