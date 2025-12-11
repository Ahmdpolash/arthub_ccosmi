"use client";
import React, { useState } from "react";
import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ArtworksPage = () => {
  // pagination state (example with shadcn)
  const [page, setPage] = useState(1);
  const totalPages = 8; // change according to your data

  let role = "ARTIST";
  return (
    <div className="bg-grayBg">
      <Container>
        <div className="space-y-2">
          <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold">
            Artwork
          </h1>
          <p className="text-[18px]">
            Discover artist residencies, grants, and exhibitions hosted by
            leading art organizations. Apply easily, share your work, and grow
            your creative network.
          </p>
        </div>

        <div className="w-full my-3 flex items-center gap-4">
          {role === "ARTIST" && (
            <Link href="/artworks/create">
              <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 rounded-lg px-5 h-10">
                <Plus className="w-5 h-5" />
                Upload Artwork
              </Button>
            </Link>
          )}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search artwork by name"
              className="pl-10 h-11 rounded-lg border-gray-300 bg-white"
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, idx) => (
              <div key={idx} className="rounded-lg bg-white p-3 shadow-md">
                <div className="h- w-full ">
                  <Image
                    src={"/art.png"}
                    height={120}
                    width={170}
                    alt="art"
                    className="w-full"
                  />
                </div>

                <Link href={`/artworks/${3}`}>
                  <div className="my-4 ">
                    <p className="my-2 text-gray-600">
                      Northern Celestial Swirl
                    </p>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                      <Image
                        src={"/art.png"}
                        height={60}
                        width={60}
                        alt="owner"
                        className="rounded-full h-7 w-7 lg:h-9 lg:w-9"
                      />
                      <h1 className="text-[15px] lg:text-xl">Crafted Chaos</h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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

export default ArtworksPage;
