"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-950 py-10">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Next-Gen Healthcare Telemetry <br />
              <span className="text-4xl md:text-[5.5rem] font-bold mt-2 leading-none text-[#28ae70]">
                Optika Health Camps
              </span>
            </h2>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
          alt="Optika Healthcare Clinical Screening"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
