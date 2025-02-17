"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-7xl font-bold mb-12">
        Testing
      </h1>
      <p className="text-xl mb-8 text-foreground/80">
        Welcome to the documentation
      </p>
      <Link 
        href="/docs/introduction" 
        className="px-10 py-3 bg-white text-black rounded-2xl hover:opacity-90 transition-opacity"
      >
        Show
      </Link>
    </main>
  );
}