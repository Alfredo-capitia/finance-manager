import { Dialog 
    , DialogClose 
    , DialogContent , 
    DialogDescription ,
     DialogFooter ,
      DialogHeader ,
       DialogTrigger , 
       DialogTitle } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
export  function DialogDemo(){
    return (
       <div>
        <main>
           <Dialog>
            <form action="">
                    <div className="flex items-center justify-between mb-8 cursor-pointer">
                        <div className="space-y-1 flex flex-col">
                            <h1 className="text-4xl font-extrabold">Orçamento</h1>
                            <p className="text-muted-foreground ">Controle os seus gastos por categoria</p>
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
                    <DialogTitle className="text-2xl font-bold">
                        Criar orçamento
                    </DialogTitle>
                    <DialogDescription>
                        Cria seus novos orçamentos para cada categoria.
                    </DialogDescription>
                    </DialogHeader> 
                    <div className="grid gap-4 py-4">
                         <div className="flex flex-col gap-2">
                            <Label htmlFor="categoryName" className="text-sm font-medium"> Nome do orçamento</Label>
                            <Input id="categoryName" type="text" placeholder="Digite o nome do orçamento" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="categoryName" className="text-sm font-medium">Valor Total</Label>
                            <Input id="categoryName" type="number" placeholder="Digite o valor total" />
                        </div>
                       <div className="flex flex-col gap-2">
                           <Label htmlFor="categoryDescription" className="text-sm font-medium">Valor que se pretende usar</Label>
                           <Input id="categoryDescription" type="number" placeholder="Digite o valor que se pretende usar" />
                       </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant={"outline"}>
                                Cancelar
                            </Button>
                        </DialogClose>
             <Button type="submit" variant={"default"}>
                                Criar orçamento
                            </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
           </Dialog>
        </main>
       </div>
    )
}
