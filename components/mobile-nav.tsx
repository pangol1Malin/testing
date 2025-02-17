"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <h1 className="text-lg font-semibold">Documentation</h1>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <Sidebar />
        </div>
      )}
    </div>
  );
}