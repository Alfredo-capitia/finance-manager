// utils/exportUtils.ts
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
interface Transacao {
  id: number;
  titulo: string;
  tipo: "entrada" | "saida";
  valor: number;
  data: string;
}


export function exportPDF(transacoes: Transacao[]) {
   const doc = new jsPDF();


  autoTable(doc, {
    head: [["Título", "Tipo", "Valor", "Data"]],
    body: transacoes.map((t) => [
      t.titulo,
      t.tipo === "entrada" ? "Entrada" : "Saída",
      t.valor.toLocaleString("pt-BR", { style: "currency", currency: "AOA" }),
      new Date(t.data).toLocaleDateString("pt-BR")
    ]),
    startY: 20
  });

  doc.text("Histórico de Transações", 14, 15);
  doc.save("transacoes.pdf");
}

export function exportCSV(transacoes: Transacao[]) {
  const headers = ["Título", "Tipo", "Valor", "Data"];
  const rows = transacoes.map((t) => [t.titulo, t.tipo, t.valor, t.data]);

  const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "transacoes.csv");
  link.click();
}
