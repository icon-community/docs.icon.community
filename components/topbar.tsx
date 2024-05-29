"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Topbar() {
  return (
    <div className="h-fit rounded-md flex flex-col antialiased bg-transparent w-full dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    messages: 2110,
    chain: "ICON",
    role: "src",
  },
  {
    messages: 1926,
    chain: "ICON",
    role: "dest",
  },
  {
    messages: 1092,
    chain: "Archway",
    role: "src",
  },
  {
    messages: 1292,
    chain: "Archway",
    role: "dest",
  },
  {
    messages: 78,
    chain: "Injective",
    role: "src",
  },
  {
    messages: 54,
    chain: "Injective",
    role: "dest",
  },
];
