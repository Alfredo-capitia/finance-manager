 import { SideBar } from "../components/SideBar"
 import { SidebarProvider } from "@/components/ui/sidebar"
export default function Layout ({children}: {children : React.ReactNode}){
    return (
        <div className="">
            <SidebarProvider className="flex ">
                <SideBar/>
                <div className="my-8 px-3 flex-1 w-full ">
            {children}
                </div>
            </SidebarProvider>
        </div>
    )
}