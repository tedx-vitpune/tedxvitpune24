"use client";

import Hero from "@/components/home/Hero";
import AboutEvent from "@/components/home/AboutEvent";

export default function Home() {
  return (
    <main>
      <div className="overflow-clip">
        <Hero />
        <AboutEvent />
      </div>
    </main>
  );
}
