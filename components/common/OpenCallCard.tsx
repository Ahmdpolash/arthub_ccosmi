// OpenCallCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

interface OpenCallCardProps {
  title: string;
  organization: string;
  organizationLogo: string;
  posted: string;
  tags: string[];
  applicationFee: string;
  deadline: string;
  location: string;
  badge?: string;
  imageSrc?: string;
}

const OpenCallCard = ({
  title,
  organization,
  organizationLogo,
  posted,
  tags,
  applicationFee,
  deadline,
  location,
  badge,
  imageSrc = "/feature.png",
}: OpenCallCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow py-0 relative">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />

        <span className="absolute right-2 top-2 py-1 px-3 rounded-lg text-white bg-linear-to-r from-[#FF6B6B] to-[#3B82F6] font-semibold text-[14px]">
          Premium
        </span>
      </div>
      <CardContent className="p-3">
        <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
            {organizationLogo}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              {organization}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Posted: {posted}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg">
            <DollarSign className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Application Fee
              </p>
              <p className="text-sm font-semibold text-foreground">
                {applicationFee}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Deadline</p>
              <p className="text-sm font-semibold text-foreground">
                {deadline}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6 bg-gray-50 p-2 rounded-lg">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Location</p>
            <p className="text-sm font-medium text-foreground">{location}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-end justify-end gap-3 mb-3">
          <Link href={"/"} className="cursor-pointer bg-gray-100">
            <Button variant="outline" className="cursor-pointer bg-gray-100">
              Apply Link
            </Button>
          </Link>
          <Link href={`/open-calls/${title}`} className="flex-">
            <Button variant="default" className="flex-">
              See Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpenCallCard;
