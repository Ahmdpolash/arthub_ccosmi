import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Magazine = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h2 className="text-xl md:text-3xl font-medium lg:font-bold text-foreground">
          Magazine
        </h2>
        <Link
          href="/open-calls"
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* card */}

      <div className="flex flex-col gap-y-4">
        {[1, 2].map((item,idx:number) => (
          <Card key={idx} className="overflow-hidden bg-white border p-4 border-none shadow-none">
            <div className="space-y-3 lg:space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                  The Rise of New Voices in Contemporary Art
                </h3>
                <p className="text-sm text-muted-foreground">20 October 2025</p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                From digital experiments to community-driven installations —
                discover how the next generation of artists is reshaping
                creative culture across the globe. In a world where technology
                and emotion intersect, these emerging creators are finding new
                languages to express identity, belonging, and transformation.
                This issue celebrates their voices, their visions, and the
                evolving definition of what it means to be an artist today.
              </p>
              <Link href="/magazine/the-rise-of-new-voices">
                <div className="relative w-full rounded-lg ">
                  <Image
                    src="/magazine.png" // ✅ replace with your actual image path in /public
                    alt="Contemporary art studio"
                    height={400}
                    width={1200}
                    className="object-cover transition-transform duration-300 hover:scale-105 w-full lg:h-96"
                    priority
                  />
                </div>
              </Link>
            </div>
          </Card>
        ))}

        <div className="mx-auto text-center ">
          <Button className="cursor-pointer">View All</Button>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
