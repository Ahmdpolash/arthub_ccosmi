import Container from "@/components/shared/Container";
import { Calendar, MapPin, DollarSign, Globe, Building2 } from "lucide-react";
import Image from "next/image";

const eventDetails = [
  {
    label: "Offline",
    type: "badge",
    style: "border-pink-600 text-pink-600",
  },
  {
    label: "Paid",
    type: "badge",
    style: "border-purple-600 text-purple-600",
  },
  {
    title: "Organizer",
    value: "Crafted Chaos",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Start to End Date",
    value: "22 Feb 2025 to 25 Feb 2025",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    title: "Venue",
    value: "London, United Kingdom",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: "Application Fee",
    value: "25$",
    icon: <DollarSign className="w-5 h-5" />,
  },
];

const EmergingArtistsResidency = () => {
  return (
    <div className="bg-grayBg">
      <Container>
        {/* Banner */}
        <div>
          <Image
            src="/events.png"
            width={700}
            height={800}
            alt="eventDetailsPageImage"
            className="w-full "
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-8 lg:p-0 md:pt-8 grid grid-cols-1 lg:grid-cols-6 gap-6 mt-4">
          {/* Left Column - Description */}
          <div className="lg:col-span-4">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Emerging Artists Residency 2025
              </h2>
            </div>

            {/* Organizer Info */}
            <div className="flex items-center gap-3 mb-6">
              <div className=" ">
                <span className="text-white font-bold text-lg">
                  <Image
                    src="/art3.png"
                    alt="profileImg"
                    width={80}
                    height={80}
                    className="w-10 h-10 rounded-full"
                  />
                </span>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Crafted Chaos</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Description
              </h3>

              <p className="text-gray-700 mb-4">
                Join us for The Modern Expression Exhibition 2025, a two-day art
                event celebrating emerging and established artists from around
                the world. Explore paintings, sculptures, and digital
                installations exploring the theme of 'Reimagining Identity.
              </p>

              <p className="text-gray-700 mb-4">
                The event will include live artist talks, panel discussions, and
                a creative networking session for art enthusiasts. Whether
                you're an artist, collector, or visitor — this is your chance to
                connect, learn, and be inspired by contemporary art.
              </p>

              <p className="text-gray-700 mb-4">
                Join us for The Modern Expression Exhibition 2025, a two-day art
                event celebrating emerging and established artists from around
                the world. Explore paintings, sculptures, and digital
                installations exploring the theme of 'Reimagining Identity.
              </p>

              <p className="text-gray-700">
                The event will include live artist talks, panel discussions, and
                a creative networking session for art enthusiasts. Whether
                you're an artist, collector, or visitor — this is your chance to
                connect, learn, and be inspired by contemporary art
              </p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            <div className="space-y-6 bg-[#FFFFFF] shadow-md p-5 rounded-md">
              {/* Badges */}
              <div className="flex gap-2">
                {eventDetails
                  .filter((item) => item.type === "badge")
                  .map((badge, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 border rounded-md text-sm font-medium ${badge.style}`}
                    >
                      {badge.label}
                    </span>
                  ))}
              </div>

              {eventDetails
                .filter((item) => item.type !== "badge")
                .map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white rounded flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{item.title}</p>
                      <p className="text-sm font-medium text-gray-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}

              {/* Website Button */}
              <button className="cursor-pointer w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                Website
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EmergingArtistsResidency;
