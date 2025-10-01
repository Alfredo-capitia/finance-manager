 import { SideBar } from "../components/SideBar"
 import { SidebarProvider } from "@/components/ui/sidebar"
export default function Layout ({children}: {children : React.ReactNode}){
    return (
        <div className="">
            <SidebarProvider className="flex gap-2">
                <SideBar/>
                <div>
            {children}
                </div>
            </SidebarProvider>
            

            

        </div>
    )
}