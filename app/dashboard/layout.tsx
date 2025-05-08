"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import AddNavbar from "@/components/add-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    
    >
      <SidebarProvider>
        <div className="flex min-h-screen  w-full bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content Area */}
          <div className="flex flex-col flex-1 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30  w-full">
            <div className="bg-white dark:bg-gray-900 border shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-2">
            <h1 className="float-start p-1">Stuff </h1>
            <AddNavbar />
            </div>
            {/* Navbar */}
            

            {/* Optional Sidebar Trigger */}
            <div className="px-4 pt-4">
            <SidebarTrigger className="md:hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30" />
            </div>

            {/* Main page content */}
            <main className="flex-1 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 w-full px-4 md:px-8 py-6">
              <div className="w-full border bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
