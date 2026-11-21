"use client";

import LiquidText from "@/components/ui/liquid-text";

export default function LiquidTextDemo() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black px-8">
      <LiquidText
        text="Liquid"
        tone="dark"
        fontSize={200}
        className="w-full max-w-4xl"
      />
    </div>
  );
}
