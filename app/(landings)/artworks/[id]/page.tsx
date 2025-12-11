import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";

const SingleArtWork = () => {
  return (
    <div className="bg-grayBg">
      <Container>
        <div>
          <div className="my-4 space-y-2">
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

            <p className="text-2xl font-semibold">
              A vibrant acrylic painting of the aurora borealis swirling over a
              dark mountain peak and pine trees. The colors are striking blues,
              deep teal, and bright yellow-white.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="col-span-3">
              <Image
                src={"/art.png"}
                height={500}
                width={500}
                alt="artwork"
                className="h-full w-full"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white p-4 rounded-md space-y-2 text-gray-900 text-sm leading-relaxed">
                <h2 className="text-xl font-semibold">
                  Northern Celestial Swirl
                </h2>

                <p>
                  <span className="font-semibold">Year :</span> 2025
                </p>

                <p>
                  <span className="font-semibold">Medium :</span> Oil on Canvas
                </p>

                <p>
                  <span className="font-semibold">Size :</span> 7" x 5" (Inches)
                  / 17.8 cm x 12.7 cm
                </p>

                <p>
                  <span className="font-semibold">For Sale :</span> Yes
                </p>

                <p>
                  <span className="font-semibold">Price :</span> $150 USD
                </p>

                <p>
                  <span className="font-semibold">Purchase Link :</span>
                  <a href="#" className="text-blue-600 underline ml-1">
                    Click Here
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Series :</span> Aurora Nights
                  Collection
                </p>

                <p>
                  <span className="font-semibold">
                    Unique/Limited Edition :
                  </span>{" "}
                  Unique (1/1) Original Painting
                </p>

                <p>
                  <span className="font-semibold">Framed :</span> Unframed
                </p>
              </div>

              <div className="bg-white p-4 rounded-md space-y-2">
                <h1 className="text-xl lg:text-2xl font-semibold">
                  Description
                </h1>
                <p className="text-[#666666]">
                  A small but intensely colorful original painting capturing the
                  dynamic, flowing movement of the Northern Lights over a rugged
                  mountain landscape. Painted in a bold, stylized technique with
                  thick acrylic strokes. A perfect piece for anyone who loves
                  nature, vibrant color, and the magic of the arctic night sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleArtWork;
