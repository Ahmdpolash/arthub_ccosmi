import { Navbar } from "@/components/common/Navbar";
import Footer from "@/components/shared/Footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Navbar />

        {children}

        <Footer />
      </div>
    </div>
  );
}
