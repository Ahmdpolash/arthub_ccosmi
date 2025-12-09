// src/components/modals/NewsletterModal.tsx
"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const NEWSLETTER_MODAL_KEY = "arthub_newsletter_dismissed";
const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const dismissedAt = localStorage.getItem(NEWSLETTER_MODAL_KEY);
    const now = Date.now();

    if (!dismissedAt || now - parseInt(dismissedAt) > ONE_WEEK_IN_MS) {
      const timer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(NEWSLETTER_MODAL_KEY, Date.now().toString());
    setIsOpen(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    console.log("Subscribed:", email);
    localStorage.setItem(NEWSLETTER_MODAL_KEY, Date.now().toString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-auto p-8 md:p-10 relative animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700  duration-200 hover:rotate-90 transform transition-transform"
            aria-label="Close newsletter modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              Stay updated with the latest art opportunities and creative
              insights delivered straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gray-900 hover:bg-gray-800 active:scale-95 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/*   */}
          </div>
        </div>
      </div>
    </>
  );
}
