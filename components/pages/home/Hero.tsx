import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <section className="relative  md:h-[440px] overflow-hidden rounded-2xl 2 mt-4 lg:mt-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/hero.webp')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white mb-4  text-balance">
            Discover and Connect with the Art World
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 lg:max-w-2xl text-pretty">
            Explore a diverse collection of artworks, connect with artists and
            organizations, and stay updated on the latest art events and news
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 cursor-pointer"
            >
              Explore Art
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white cursor-pointer"
            >
              I am Organization
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
