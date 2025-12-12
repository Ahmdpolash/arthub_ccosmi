"use client";

import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cards } from "@/constant/dummy";
import Link from "next/link";

const ArticlesPage = () => {
  const [page, setPage] = useState(1);
  const totalPages = 8; // change according to your data
  return (
    <div className="bg-grayBg">
      <Container>
        <div className="space-y-2">
          <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold">
            Article
          </h1>
          <p className="text-[18px]">
            Featuring the journeys and ideas of artists from around the world.
          </p>
        </div>

        <div className="w-full my-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search Article by name"
              className="pl-10 h-11 rounded-lg border-gray-300 bg-white"
            />
          </div>
        </div>

        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <Link href={`/articles/${3}`} key={idx}>
              <article className="relative flex flex-col lg:flex-row items-start bg-white rounded-2xl p-6 border">
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

                  <p className="text-sm text-gray-500 max-w-prose">
                    {c.excerpt}
                  </p>
                </div>

                {/* right image */}
                <div className="shrink-0 lg:ml-4 order-1 lg:order-2">
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
            </Link>
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page > 1) setPage(page - 1);
                  }}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={page === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(1);
                  }}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(2);
                  }}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(3);
                  }}
                >
                  3
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(totalPages);
                  }}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page < totalPages) setPage(page + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Container>
    </div>
  );
};

export default ArticlesPage;
