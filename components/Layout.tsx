"use client";

import { ThemeToggle } from "./theme-toggle";
import { Sidebar } from "./ui/sidebar";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = "Documentation" }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 header-bg border-b backdrop-blur-sm p-6">
        <div className="container mx-auto px-6 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <MobileNav />
              <Link href="/" className="text-5xl font-bold text-slate-700 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">
                {title}
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="flex-1 px-4 py-8 lg:px-8 content-bg w-full">
          <div className="prose dark:prose-invert max-w-none w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}