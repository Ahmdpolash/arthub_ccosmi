import OpenCallCard from "@/components/common/OpenCallCard";
import { openCalls } from "@/constant/dummy";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function OpenCallsSection() {
  return (
    <section className=" py-5 lg:py-7">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h2 className="text-xl md:text-3xl font-medium lg:font-bold text-foreground">
          Featured Open Calls
        </h2>
        <Link
          href="/open-calls"
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {openCalls.map((call) => (
          <OpenCallCard key={call.id} {...call} />
        ))}
      </div>
    </section>
  );
}
