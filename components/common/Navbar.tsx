"use client";

import {
  Building2,
  ChevronDown,
  Menu,
  Palette,
  Settings,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const pathname = "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Open Calls", href: "/open-calls" },
    { name: "Artworks", href: "/artworks" },
    { name: "Events", href: "/events" },
    { name: "Articles", href: "/articles" },
    { name: "Magazine", href: "/magazine" },
    { name: "About Us", href: "/about-us" },
    { name: "Become a Member", href: "/membership" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const handleSignupClick = () => {
    setSignupModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleRoleSelect = (role: string) => {
    const route = role === "organization" ? "/be-organizer" : "/artist";
    window.location.href = route;
    setSignupModalOpen(false);
  };

  let user = false;
  let role = "artist";

  return (
    <>
      <nav className="bg-white lg:border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.webp"
                alt="logo"
                width={140}
                height={140}
                className="w-[90px] lg:w-[115px]"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 relative">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] text-gray-900 hover:text-gray-600 transition-colors ${
                    pathname === link.href ? "font-semibold" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Auth Buttons / User Menu */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full border-2 border-gray-200"
                    />
                    <ChevronDown
                      className={`w-4 h-4 text-gray-600 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsDropdownOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                        <a
                          href={`${role === "artist" ? "/profile/artist" : "/profile/organization"}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <User className="w-5 h-5 text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">
                            My Profile
                          </span>
                        </a>
                        <a
                          href="/settings"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Settings className="w-5 h-5 text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">
                            Settings
                          </span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={handleSignupClick}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Get Started
                  </button>
                  <button className="px-6 py-2 bg-transparent border border-gray-200 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    Login
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-sm text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                {user ? (
                  <>
                    <a
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <User className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">
                        My Profile
                      </span>
                    </a>
                    <a
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Settings className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Settings
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleSignupClick}
                      className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Sign Up
                    </button>
                    <button className="w-full px-4 py-2 bg-transparent text-gray-900 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sign Up Modal */}
      {signupModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
            onClick={() => setSignupModalOpen(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto p-8 relative animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSignupModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Join ArtHub
                </h2>
                <p className="text-gray-600 text-base">
                  Choose how you'd like to sign up
                </p>
              </div>

              {/* Role Selection Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => handleRoleSelect("organization")}
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                      <Building2 className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        As an Organization
                      </h3>
                      <p className="text-sm text-gray-600">
                        Post opportunities and manage events
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleRoleSelect("artist")}
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                      <Palette className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        As an Artist
                      </h3>
                      <p className="text-sm text-gray-600">
                        Showcase your work and find opportunities
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
