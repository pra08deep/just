import { Calendar, Home, Inbox, Search, Settings, User, Users, ListTodo } from "lucide-react"
import ThemeButton from "@/components/theme-button"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Customers",
    url: "/dashboard/customer",
    icon: Users,
  },
  {
    title: "Employee",
    url: "/dashboard/employee",
    icon: User,
  },
  {
    title: "Items",
    url: "/dashboard/items",
    icon: ListTodo,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30">
            <h1>Asuto Nakamoto</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30">
              {items.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                          isActive
                            ? "border border-primary bg-primary/10 text-primary"
                            : "hover:bg-muted"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </a>
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
