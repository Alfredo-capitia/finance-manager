import React, { useState } from "react";
import { Download } from "lucide-react";
import { exportPDF, exportCSV } from "@/app/utils/export";


 interface Transacao {
  id: number;
  titulo: string;
  tipo: "entrada" | "saida";
  valor: number;
  data: string;
}
 export function ExportButton({ transacoes }: { transacoes: Transacao[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-lg hover:bg-zinc-200 transition"
      >
        <Download size={14} />
        Exportar
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg overflow-hidden z-10">
          <button
            onClick={() => { exportPDF(transacoes); setOpen(false); }}
            className="block px-4 py-2 w-full text-left hover:bg-zinc-100"
          >
            PDF
          </button>
          <button
            onClick={() => { exportCSV(transacoes); setOpen(false); }}
            className="block px-4 py-2 w-full text-left hover:bg-zinc-100"
          >
            CSV
          </button>
        </div>
      )}
    </div>
  );
}
