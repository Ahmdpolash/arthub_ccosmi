"use client";

import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { eventsData } from "@/constant/dummy";
import { ChevronRight, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EventsPage = () => {
  // pagination state (example with shadcn)
  const [page, setPage] = useState(1);
  const totalPages = 8; // change according to your data
  return (
    <div className="bg-grayBg">
      <Container>
        <div className="space-y-2">
          <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold">
            Event
          </h1>
          <p className="text-[18px]">
            Join exhibitions, talks, and creative gatherings that bring artists
            and audiences together — where every event tells a story.
          </p>
        </div>

        <div className="w-full my-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search event by name"
              className="pl-10 h-11 rounded-lg border-gray-300 bg-white"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-y-3">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="bg-white p-4 flex flex-col lg:flex-row rounded-xl border border-gray-200 shadow-md w-full"
              >
                {/* Image */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg lg:mr-4">
                  <Image
                    src={event.image}
                    width={110}
                    height={90}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-between py-1 mt-2 lg:mt-0">
                  {/* Title */}
                  <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-2">
                    <h2 className="text-xl md:text-2xl font-semibold lg:font-bold text-gray-900 font-inter">
                      {event.title}
                    </h2>
                  </div>

                  {/* Location */}
                  <div className="mb-4 space-y-1 flex items-center gap-2">
                    <div className="flex items-center gap-x-1">
                      <MapPin />
                      <p>{event.location}</p>
                    </div>
                  </div>

                  {/* Button */}
                  <div>
                    <Link href={`/events/${event.id}`}>
                      <button className="flex items-center justify-center px-4 py-2 bg-[#222222] text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-150 text-sm">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
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
};

export default EventsPage;
