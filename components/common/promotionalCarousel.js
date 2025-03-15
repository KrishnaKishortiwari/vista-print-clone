"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function PromotionalCarousel() {
  const promotions = [
    {
      id: 1,
      text: "Special One Time Offer! Flat 5% OFF on Orders ₹5,000+ | Code: MAR5OFF | Ends Mar 31",
    },
    {
      id: 2,
      text: "Free Shipping on Orders Above ₹2,500 | Limited Time Offer",
    },
    {
      id: 3,
      text: "New Customers: Get 10% OFF on Your First Order | Use Code: WELCOME10",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate through promotions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [promotions.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  return (
    <div className="relative bg-black text-white py-4.5 px-2 flex items-center justify-center">
      <button
        onClick={goToPrevious}
        className="absolute left-2 text-white p-1"
        aria-label="Previous promotion"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="text-center text-sm font-medium px-8">
        {promotions[currentIndex].text}
      </div>

      <button
        onClick={goToNext}
        className="absolute right-2 text-white p-1"
        aria-label="Next promotion"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
