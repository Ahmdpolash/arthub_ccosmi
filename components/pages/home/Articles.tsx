"use client";

import { cards } from "@/constant/dummy";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Articles() {
  return (
    <div className="  py-5 lg:py-7">
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h2 className="text-xl md:text-3xl font-medium lg:font-bold text-foreground">
          Articles
        </h2>
        <Link
          href="/articles"
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c, idx) => (
          <article
            key={idx}
            className="relative flex flex-col lg:flex-row items-start bg-white rounded-2xl p-6 border"
          >
            <div className="flex-1 pr-4 order-2 lg:order-1 ">
              <div className="flex items-center gap-3 mb-2 lg:mb-4 mt-4 lg:mt-0">
                <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white text-sm font-semibold">
                  CC
                </div>
                <span className="text-sm text-gray-600">{c.site}</span>
              </div>

              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 leading-tight mb-3">
                {c.title}
              </h3>

              <p className="text-sm text-gray-500 max-w-prose">{c.excerpt}</p>
            </div>

            {/* right image */}
            <div className="flex-shrink-0 lg:ml-4 order-1 lg:order-2">
              <div className="w-full h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden ring-0">
                {/* Use next/image or img depending on your stack */}
                <img
                  src={"/lemon.png"}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
