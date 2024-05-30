"use client";

import { cn } from "../../lib/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { it } from "node:test";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    messages: number;
    chain: string;
    role: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 pt-2 pb-1 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-fit sm:w-[350px] max-w-full shadow dark:shadow-0 relative rounded-full dark:border  flex-shrink-0 border-slate-700 px-4 sm:px-8 py-1 sm:py-2 md:w-fit bg-gradient-to-br dark:from-[#111111] dark:via-[#111111] dark:to-black from-white via-white to-gray-100"           
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className=" relative z-20 text-xs sm:text-sm leading-[1.6] text-gray-400 font-normal flex flex-row items-center">
                <span className="mr-1 text-gray-800 dark:text-gray-100 ">{item.messages} messages </span> {item.role === "src" ? <><p className="hidden sm:inline-block">have left</p><p className="inline-block sm:hidden">from</p></> : <><p className="hidden sm:inline-block">have arrived on</p><p className="inline-block sm:hidden">to</p></>}
                <div className="flex flex-row items-center ml-2 space-x-2"> 
                  <Image priority className="w-4" src={`/chainlogos/${item.image}`} alt={item.chain} height={40} width={40}/>
                  <span className="text-xs sm:text-sm leading-[1.6] text-gray-800 dark:text-gray-100 font-normal">
                    {item.chain}
                  </span>
                </div> 
              </div>
              
              
              
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
