import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Events() {
  return (
    <div className=" py-5 lg:py-7">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h2 className="text-xl md:text-3xl font-medium lg:font-bold text-foreground">
          Events
        </h2>
        <Link
          href="/open-calls"
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-y-3">
        {[1, 2, 3].map((items) => (
          <div>
            <div className="bg-white p-4 flex flex-col lg:flex-row rounded-xl border border-gray-200 shadow-md w-full ">
              {/* 1. Image Section (Left) */}
              <div className="flex-shrink-0   overflow-hidden rounded-lg lg:mr-4">
                {/* Placeholder image closely mimicking the style in the screenshot */}
                <Image
                  src={"/event.png"}
                  width={110}
                  height={90}
                  alt="img"
                  className="h-full w-full"
                />
              </div>

              {/* 2. Content Section (Right) */}
              <div className="flex-grow flex flex-col justify-between py-1 space-y- mt-2 lg:mt-0">
                {/* Top Row: Title and Tags */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-2">
                  <h2 className="text-xl md:text-2xl font-semibold lg:font-bold text-gray-900 font-inter">
                    Art Fusion Festival 2025
                  </h2>
                  {/* <div className="py-2 lg:py-0 flex space-x-2 flex-shrink-0 lg:ml-4 text-start items-start">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full  text-red-500 border-red-300 bg-opacity-5 border`}
                    >
                      Offline
                    </span>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full  text-purple-600 border-purple-300bg-opacity-5 border`}
                    >
                      Paid
                    </span>
                  </div> */}
                </div>

                {/* Middle Section: Details */}
                <div className="mb-4 space-y-1 flex items-center gap-2">
                  <div className="flex items-center gap-x-1">
                    <MapPin />
                    <p>Dhaka Art Center, Dhanmondi,Bangladesh</p>
                  </div>
                </div>

                {/* Bottom Row: Button */}
                <div>
                  <button className="flex items-center justify-center px-4 py-2 bg-[#222222] text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-150 text-sm">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
