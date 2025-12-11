"use client";

import OpenCallCard from "@/components/common/OpenCallCard";
import Container from "@/components/shared/Container";
import { openCalls } from "@/constant/dummy";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import Link from "next/link";

function OpenCallsPage() {
  const [page, setPage] = useState(1);
  const totalPages = 8;

  let role = "ORGANIZATION";

  return (
    <div className="py-4 bg-grayBg">
      <Container>
        <div>
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold">
              Open Calls
            </h1>
            <p className="text-[18px]">
              Discover artist residencies, grants, and exhibitions hosted by
              leading art organizations. Apply easily, share your work, and grow
              your creative network.
            </p>
          </div>

          {/* Create Button + Filtering Row */}
          <div className="mt-8 flex gap-4 items-center justify-between">
            {/* Create Open Call Button - ONLY FOR ORGANIZATION */}
            {role === "ORGANIZATION" && (
              <Link href="/open-calls/create">
                <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 rounded-lg px-5 h-10">
                  <Plus className="w-5 h-5" />
                  Create Open Call
                </Button>
              </Link>
            )}

            {/* Your existing filtering bar - moved inside flex to align right when button exists */}
            <div className="w-full ">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 items-center">
                <div className="col-span-1 w-full">
                  <div className="flex items-center gap-3">
                    <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                    <Select defaultValue="tier-deadline">
                      <SelectTrigger className="w-full h-11 rounded-lg border-gray-300 bg-white">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent className="w-full border border-gray-300">
                        <SelectItem value="tier-deadline">
                          Sort by Tier to Deadline
                        </SelectItem>
                        <SelectItem value="deadline">
                          Deadline (soonest first)
                        </SelectItem>
                        <SelectItem value="newest">Newest first</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="col-span-1">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full h-11 rounded-lg border-gray-300 bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full border-gray-300 bg-white">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="silver">Silver</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="platinum">Platinum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-3">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search open calls by name"
                      className="pl-10 h-11 rounded-lg border-gray-300 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {openCalls.map((call) => (
                <OpenCallCard key={call.id} {...call} />
              ))}
            </div>
          </div>

          {/* centered shadcn pagination */}
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
        </div>
      </Container>
    </div>
  );
}

export default OpenCallsPage;
