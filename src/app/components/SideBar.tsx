"use client"

import { LayoutDashboard, TrendingUp, Wallet, Settings, Dock , BadgeEuro } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const sidebarItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/pages/dashboard" },
  { title: "Transições", icon: Wallet, href: "/pages/transation" },
  { title: "Investimento", icon: TrendingUp, href: "/pages/investiment" },
  { title: "Orçamentos", icon: Dock, href: "/pages/orcament" },
  { title: "Carteira", icon: Wallet, href: "/pages/wallet" },
  { title: "Configurações", icon: Settings, href: "/pages/more" },
]

export function SideBar() {
  const pathname = usePathname()

  return (
    <Sidebar  className="max-h-ful max-w-[245px] w-full  h-full bg-slate-800 fixed inset-0 z-50 text-zinc-300 px-2 py-2">
      <SidebarContent  className="h-full bg-slate-800  text-zinc-300 px-1 py-4">
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex  text-white items-center space-x-2">
              <div className="bg-blue-800 p-2 rounded-2xl">
                <BadgeEuro className="h-8 w-8" />
              </div>
              <span className="text-xl font-semibold">FinanceHub</span>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-8 gap-5">
            <SidebarMenu>
              <SidebarGroupLabel className="uppercase text-xs tracking-wider text-zinc-400 mb-2">
                Menu
              </SidebarGroupLabel>

              {sidebarItems.map(({ title, icon: Icon, href }) => {
                const isActive = pathname === href

                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "font-semibold transition-colors duration-200 rounded-md",
                        "hover:bg-slate-700 hover:text-zinc-100",
                        isActive
                          ? "bg-zinc-100 text-stone-700 hover:bg-zinc-100 hover:text-stone-700"
                          : "text-zinc-300"
                      )}
                    >
                      <Link href={href}>
                        <Icon className="mr-2 h-6 w-6" />
                        <span>{title}</span>
                      </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}