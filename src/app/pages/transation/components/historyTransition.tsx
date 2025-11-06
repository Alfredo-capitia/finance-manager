"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDownUp, Download, Search } from "lucide-react";
import { exportPDF , exportCSV } from "@/app/utils/export";
import { ExportButton } from "./exportButtom";
interface Transacao {
  id: number;
  titulo: string;
  tipo: "entrada" | "saida";
  valor: number;
  data: string;
}

const transacoes: Transacao[] = [
  { id: 1, titulo: "Salário mensal", tipo: "entrada", valor: 350000, data: "2025-10-01" },
  { id: 2, titulo: "Compra de equipamentos", tipo: "saida", valor: 125000, data: "2025-10-02" },
  { id: 3, titulo: "Venda de produto", tipo: "entrada", valor: 80000, data: "2025-10-03" },
  { id: 4, titulo: "Pagamento de energia", tipo: "saida", valor: 25000, data: "2025-10-04" },
  { id: 5, titulo: "Serviço de design", tipo: "entrada", valor: 60000, data: "2025-10-05" },
  { id: 6, titulo: "Assinatura Netflix", tipo: "saida", valor: 8500, data: "2025-10-06" },
  { id: 7, titulo: "Venda de ações", tipo: "entrada", valor: 200000, data: "2025-10-07" },
  { id: 8, titulo: "Aluguel do escritório", tipo: "saida", valor: 75000, data: "2025-10-08" },
  { id: 9, titulo: "Freelancer Front-end", tipo: "entrada", valor: 95000, data: "2025-10-09" },
  { id: 10, titulo: "Manutenção do carro", tipo: "saida", valor: 30000, data: "2025-10-10" },
  { id: 11, titulo: "Comissão de vendas", tipo: "entrada", valor: 40000, data: "2025-10-11" },
  { id: 12, titulo: "Compra de snacks", tipo: "saida", valor: 5000, data: "2025-10-12" },
  { id: 13, titulo: "Investimento cripto", tipo: "saida", valor: 50000, data: "2025-10-13" },
  { id: 14, titulo: "Venda de laptop usado", tipo: "entrada", valor: 100000, data: "2025-10-14" },
  { id: 15, titulo: "Compra de celular", tipo: "saida", valor: 200000, data: "2025-10-15" },
  { id: 16, titulo: "Curso online", tipo: "saida", valor: 35000, data: "2025-10-16" },
  { id: 17, titulo: "Consultoria de software", tipo: "entrada", valor: 150000, data: "2025-10-17" },
  { id: 18, titulo: "Compra de livros", tipo: "saida", valor: 12000, data: "2025-10-18" },
  { id: 19, titulo: "Venda de arte digital", tipo: "entrada", valor: 70000, data: "2025-10-19" },
  { id: 20, titulo: "Doação", tipo: "saida", valor: 10000, data: "2025-10-20" },
  { id: 21, titulo: "Investimento em startup", tipo: "saida", valor: 80000, data: "2025-10-21" },
  { id: 22, titulo: "Prêmio de produtividade", tipo: "entrada", valor: 50000, data: "2025-10-22" },
  { id: 23, titulo: "Compra de móveis", tipo: "saida", valor: 90000, data: "2025-10-23" },
  { id: 24, titulo: "Venda de bicicleta", tipo: "entrada", valor: 40000, data: "2025-10-24" },
  { id: 25, titulo: "Transporte urbano", tipo: "saida", valor: 6000, data: "2025-10-25" },
  { id: 26, titulo: "Venda de domínio web", tipo: "entrada", valor: 15000, data: "2025-10-26" },
  { id: 27, titulo: "Café com cliente", tipo: "saida", valor: 2500, data: "2025-10-27" },
  { id: 28, titulo: "Serviço de edição de vídeo", tipo: "entrada", valor: 85000, data: "2025-10-28" },
  { id: 29, titulo: "Compra de material de escritório", tipo: "saida", valor: 15000, data: "2025-10-29" },
  { id: 30, titulo: "Venda de consultoria", tipo: "entrada", valor: 180000, data: "2025-10-30" },
];

export function HistoryTransition() {
  const [search, setSearch] = useState("");
  const [sortDesc, setSortDesc] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const filtered = transacoes
    .filter((t) =>
      t.titulo.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortDesc
        ? new Date(b.data).getTime() - new Date(a.data).getTime()
        : new Date(a.data).getTime() - new Date(b.data).getTime()
    );

  const displayed = showAll ? filtered : filtered.slice(0, 10);

  return (
    <Card className="mt-4 py-4 px-2">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-neutral-800">Histórico de Transações</h1>
            <p className="text-zinc-500">Lista completa das suas movimentações</p>
          </div>

          <div className="flex gap-3">
            <div
              onClick={() => setSortDesc((prev) => !prev)}
              className="flex items-center gap-2 cursor-pointer bg-zinc-100/50 p-3 rounded-xl hover:bg-zinc-200 transition"
            >
              <ArrowDownUp size={14} />
              <p className="text-sm">{sortDesc ? "Mais recentes" : "Mais antigas"}</p>
            </div>

            <ExportButton transacoes={filtered} />
          </div>
        </div>

        <div className="flex gap-4 mt-7">
          <div className="flex flex-1 items-center gap-4 bg-zinc-50 py-2 px-4 rounded-lg">
            <Search size={16} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Pesquisar transação..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full text-zinc-600 placeholder:text-zinc-400"
            />
          </div>
        </div>
      </CardHeader>

      {displayed.map((t) => (
        <CardContent
          key={t.id}
          className="flex justify-between items-center border-b last:border-b-0 py-3 px-6 hover:bg-zinc-50 rounded-lg transition-colors"
        >
          <div>
            <span className="font-semibold text-neutral-800">{t.titulo}</span>
            <div className="text-sm text-zinc-500">
              {new Date(t.data).toLocaleDateString("pt-BR")}
            </div>
          </div>

          <div>
            <span
              className={`font-bold text-lg ${
                t.tipo === "entrada" ? "text-green-600" : "text-red-600"
              }`}
            >
              {t.tipo === "entrada" ? "+" : "-"}{" "}
              {t.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "AOA",
              })}
            </span>
          </div>
        </CardContent>
      ))}

      {filtered.length > 10 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition"
          >
            {showAll ? "Ver menos" : `Ver todos (${filtered.length})`}
          </button>
        </div>
      )}
    </Card>
  );
}
