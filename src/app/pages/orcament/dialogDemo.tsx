"use client"

import { useForm, SubmitHandler, Resolver } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { SnackbarProvider, enqueueSnackbar } from "notistack"

const formSchema = z.object({
  title: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  total: z.coerce.number().min(1, "Valor total deve ser maior que 0"),
  used: z.coerce.number().min(0, "Valor usado não pode ser negativo"),
})

type FormData = z.infer<typeof formSchema>

interface DialogDemoProps {
  onAdd: (data: FormData) => void
}

export function DialogDemo({ onAdd }: DialogDemoProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as Resolver<FormData>,
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.used > data.total) {
      enqueueSnackbar(" O valor usado não pode ser maior que o total!", {
        variant: "error",
        autoHideDuration: 1500,
      })
      return
    }

    onAdd(data)
    form.reset()
    enqueueSnackbar(" Orçamento criado com sucesso!", {
      variant: "success",
      autoHideDuration: 1000,
    })
  }

  return (
    <SnackbarProvider maxSnack={2}>
      <Dialog>
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h1 className="text-4xl font-extrabold">Orçamento</h1>
            <p className="text-muted-foreground">Controle os seus gastos por categoria</p>
          </div>
          <DialogTrigger asChild>
            <Button variant="default">
              <Plus className="mr-2" />
              Nova Categoria
            </Button>
          </DialogTrigger>
        </div>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Criar orçamento</DialogTitle>
            <DialogDescription>Crie novos orçamentos para cada categoria.</DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Nome do orçamento</Label>
              <Input id="title" {...form.register("title")} placeholder="Ex: Alimentação" />
              {form.formState.errors.title && (
                <span className="text-red-500 text-sm">{form.formState.errors.title.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="total">Valor total</Label>
              <Input id="total" type="number" {...form.register("total")} placeholder="Ex: 500" />
              {form.formState.errors.total && (
                <span className="text-red-500 text-sm">{form.formState.errors.total.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="used">Valor utilizado</Label>
              <Input id="used" type="number" {...form.register("used")} placeholder="Ex: 150" />
              {form.formState.errors.used && (
                <span className="text-red-500 text-sm">{form.formState.errors.used.message}</span>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Criar orçamento
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </SnackbarProvider>
  )
}
