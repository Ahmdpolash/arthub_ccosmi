import { BookOpenText } from "lucide-react";
import Container from "@/components/shared/Container";
import Image from "next/image";

const ArticleDetailsPage = () => {
  const isPremium = true;
  const isPaid = false;

  const articleData = {
    title:
      "The Rise of Digital Expression: How Technology Is Redefining Contemporary Art",
    status: "Paid",
    postedDate: "Posted 18 Sept 2025",
  };

  return (
    <Container>
      {/* Hero Image */}
      <div className="mb-6">
        <img
          src="/image.png"
          alt="Digital Art"
          className="w-full h-96  object-cover rounded-2xl aspect-video"
        />
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1
          className="text-xl md:text-2xl lg:text-3xl 
        text-center lg:text-left font-bold text-gray-900"
        >
          {articleData.title}
        </h1>
      </div>
      <div className="relative bg-white rounded-lg overflow-hidden">
        <div
          className={`p-2 lg:p-0 md:p-3 ${
            isPremium && !isPaid ? " pointer-events-none" : ""
          }`}
        >
          <div className="flex items-center lg:justify-end justify-start gap-3 mb-6">
            <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
              {isPremium && !isPaid ? "Paid" : "free"}
            </span>
            <span className="text-sm text-gray-500">
              {articleData.postedDate}
            </span>
          </div>
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="text-black">
                <BookOpenText />
              </span>
              Body (Detailed Content):
            </h2>
          </div>
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Introduction
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Over the last decade, the art world has witnessed a revolutionary
              shift — from physical canvases to digital screens. Artists today
              aren't just painters or sculptors: they're coders, 3D designers,
              and AI collaborators. The rise of technology has given birth to an
              entirely new creative movement — Digital Art.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Over the last decade, the art world has witnessed a revolutionary
              shift — from physical canvases to digital screens. Artists today
              aren't just painters or sculptors: they're coders, 3D designers,
              and AI collaborators. The rise of technology has given birth to an
              entirely new creative movement — Digital Art. Over the last
              decade, the art world has witnessed a revolutionary shift — from
              physical canvases to digital screens. Artists today aren't just
              painters or sculptors: they're coders, 3D designers, and AI
              collaborators. The rise of technology has given birth to an
              entirely new creative movement — Digital Art.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Over the last decade, the art world has witnessed a revolutionary
              shift — from physical canvases to digital screens. Artists today
              aren't just painters or sculptors: they're coders, 3D designers,
              and AI collaborators. The rise of technology has given birth to an
              entirely new creative movement — Digital Art.
            </p>
          </div>

          {/* The Evolution of Digital Tools */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              The Evolution of Digital Tools
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              It all began with simple tools like Adobe Photoshop and CoreDRAW,
              but now artists are using AI tools such as Midjourney, DAL·E, and
              Procreate to create masterpieces that blend human imagination with
              machine intelligence.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Platforms like Instagram and Bechance have also made it easier for
              digital artists to reach global audiences instantly.
            </p>
          </div>

          {/* NFTs and the Blockchain Revolution */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              $NFTs and the Blockchain Revolution
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              In 2021, NFTs (Non-Fungible Tokens) exploded onto the scene.
              Suddenly, digital art could be owned, traded, and valued — just
              like traditional paintings.
            </p>
          </div>
        </div>

        {/* Premium Overlay And Bottom Section */}
        {isPremium && !isPaid && (
          <div className="absolute w-full bottom-0 h-3/4 bg-linear-to-b from-transparent via-white to-white flex items-end lg:items-center md:items-center justify-center lg:justify-center  rounded-b-lg">
            <div className="text-center py-16 px-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  {/* <Lock className="w-12 h-12 text-gray-900" /> */}
                  <Image
                    src={"/Frame.svg"}
                    width={160}
                    height={180}
                    alt="lockIcon"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                This article is for premium
              </h2>
              <p className="text-4xl font-bold text-gray-900 mb-8">
                members only.
              </p>
              <button className="px-8 py-3 cursor-pointer bg-gray-900 text-white rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Become a Member
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ArticleDetailsPage;
