import React from "react";
import { Calendar, MapPin, Mail, DollarSign, Award } from "lucide-react";
import Container from "@/components/shared/Container";

const SingleCallsPage = () => {
  const categories = [
    "Painting",
    "Digital Art",
    "Mixed Media",
    "Printmaking",
    "Drawing",
    "Installation Art",
    "Textile Art",
    "Ceramics",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="flex flex-col gap-y-7">
          {/* Main Content - Left Side */}
          <div className="">
            {/* Hero Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/call.png"
                alt="Art Gallery Event"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              {/* Title and Organization */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  The New Wave: Emerging Artist Showcase
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CC</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Crafted Chaos
                    </h3>
                    <p className="text-sm text-gray-500">
                      Post Date: 20 October 2025
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                {/* Description */}
                <div className="">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Contemporary Art Residency Program – Winter 2025 invites
                    visual artists, sculptors, digital creators, photographers,
                    and mixed-media practitioners to participate in a
                    transformative 4-week residency experience designed to
                    support artistic growth, experimentation, and collaboration.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This program offers dedicated studio space, access to
                    professional equipment, mentorship from established artists,
                    and opportunities to showcase your work in our gallery.
                    Residents will also participate in group critiques,
                    workshops, and networking events with art professionals and
                    collectors.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We welcome artists working in all mediums who are looking to
                    push their creative boundaries and develop new bodies of
                    work in a supportive, inspiring environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
                {/* Application Fee */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Application Fee
                    </p>
                    <p className="text-lg font-semibold text-gray-900">25$</p>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Deadline</p>
                    <p className="text-lg font-semibold text-gray-900">
                      22 Feb 2025
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="text-lg font-semibold text-gray-900">
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Contact Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-600 mb-1">Contact Email</p>
                    <p className="text-lg font-semibold text-gray-900 break-words">
                      abc123@gmail.com
                    </p>
                  </div>
                </div>

                {/* Tier */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Tier (Opportunities Categories)
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      Platinum
                    </p>
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#3B82F6] text-white font-semibold py-4 rounded-xl  transition-all duration-200 shadow-lg hover:shadow-xl mt-8">
                  Apply Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleCallsPage;
