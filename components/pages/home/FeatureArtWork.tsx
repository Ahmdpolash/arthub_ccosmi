import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeatureArtWork() {
  return (
    <div className=" py-5 lg:py-7">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h2 className="text-xl md:text-3xl font-medium lg:font-bold text-foreground">
          Featured ArtWork
        </h2>
        <Link
          href="/artworks"
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* grid */}
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

            <div className="my-4 ">
              <p className="my-2 text-gray-600">Northern Celestial Swirl</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
