"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cover Letter", href: "/cover-letter" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-cyan" />
          <span className="text-lg font-bold tracking-wider text-primary">
            CoverFlash
          </span>
        </Link>
        <div className="ml-auto flex space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative -mx-3 -my-2 px-3 py-2 text-sm transition-colors hover:text-cyan",
                  isActive
                    ? "text-cyan glow-effect"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}