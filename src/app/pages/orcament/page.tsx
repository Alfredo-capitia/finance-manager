"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProgressBar } from "../investiment/components/progress"
import { DialogDemo } from "./dialogDemo"

interface Orcament {
  title: string
  used: number
  total: number
}

export default function OrcamentPage() {
  const [orcamentData, setOrcamentData] = useState<Orcament[]>([])

  // Carregar dados do localStorage ao iniciar e filtrar itens inválidos
  useEffect(() => {
    const storedData = localStorage.getItem("orcamentData")
    if (storedData) {
      const parsed = JSON.parse(storedData) as Orcament[]
      // Filtra apenas orçamentos válidos: used <= total
      const validData = parsed.filter(item => item.used <= item.total)
      setOrcamentData(validData)
      localStorage.setItem("orcamentData", JSON.stringify(validData))
    } else {
      setOrcamentData([
        { title: "Alimentação", used: 350, total: 500 },
        { title: "Transporte", used: 200, total: 300 },
        { title: "Saúde", used: 150, total: 250 },
        { title: "Lazer", used: 100, total: 200 },
      ])
    }
  }, [])

  // Salvar sempre que mudar
  useEffect(() => {
    localStorage.setItem("orcamentData", JSON.stringify(orcamentData))
  }, [orcamentData])

  const totalUsed = orcamentData.reduce((acc, item) => acc + item.used, 0)
  const totalValue = orcamentData.reduce((acc, item) => acc + item.total, 0)
  const percent = totalValue > 0 ? (totalUsed / totalValue) * 100 : 0

  const handleAddBudget = (data: Orcament) => {
    // Bloqueia se o used > total
    if (data.used > data.total) return
    setOrcamentData(prev => [...prev, data])
  }

  return (
    <div className="flex flex-col h-full w-full gap-2 px-4">
      <DialogDemo onAdd={handleAddBudget} />

      <Card>
        <CardHeader>
          <h2 className="text-3xl font-bold text-neutral-800">Resumo do orçamento mensal</h2>
          <p className="text-sm text-muted-foreground">
            Kz {totalUsed} de Kz {totalValue} utilizados
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <ProgressBar value={percent} />
            <p className="text-sm text-muted-foreground">
              {percent.toFixed(2)}% do orçamento total utilizado
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full mt-8">
        {orcamentData.map((o, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold">{o.title}</h2>
                <div className="flex flex-col items-end">
                  <h3 className="text-2xl font-extrabold">Kz {o.used}</h3>
                  <p className="text-sm text-muted-foreground">de Kz {o.total}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ProgressBar value={(o.used / o.total) * 100} />
              <p className="text-sm text-muted-foreground">
                {((o.used / o.total) * 100).toFixed(2)}% do orçamento utilizado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
