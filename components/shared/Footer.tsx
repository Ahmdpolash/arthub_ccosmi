import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#222222] text-white pt-8 pb-8 px-6 md:px-8">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between py-4 border-b border-gray-500">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo2.png"
                alt="logo"
                width={170}
                height={140}
                className="w-[90px] lg:w-[125px]"
              />
            </Link>

            <div className="flex items-center gap-3">
              <h3 className="font-semibold">Ready to get Started ? </h3>

              <Link href={"/signin"}>
                <Button
                  variant={"default"}
                  className="bg-white text-black cursor-pointer hover:bg-white"
                >
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8 mt-4">
            <div className="md:col-span-4 lg:col-span-6 lg:max-w-md">
              <h3 className="text-2xl font-normal mb-6 leading-tight">
                Subcribe to Our Newsletter
              </h3>
              <div className="mt-4 space-y-4">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  className="newsletter-input w-full px-4 py-3 bg-zinc-900 rounded text-white border border-zinc-800 focus:outline-none focus:border-zinc-700"
                />
                <button className="bg-white text-black px-6 py-2.5 rounded-full flex items-center font-medium hover:bg-gray-200 transition-colors">
                  Subscribe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:block md:col-span-1 lg:hidden" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
              <div>
                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-100 mb-5">
                  Quick Link
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Artists
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Open Calls
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Magazine
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Articles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-100 mb-5">
                  Membership And Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Help & Faqs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Become a Member ($1/99/month)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Newsletter Subcribe
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-100 mb-5">
                  Legal And Polices
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      GDRP Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-[16px] text-gray-300">
                © 2025, ArtConnect . All Rights Reserved.
              </div>
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-xs text-gray-200 hover:text-gray-300"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="text-xs text-gray-200 hover:text-gray-300"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-xs text-gray-200 hover:text-gray-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
