import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCategoryCarousel() {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Product categories data
  const categories = [
    {
      id: 1,
      name: "Visiting Cards",
      image: "/image/dressImage4.jpg",
      link: "/visiting-cards",
    },
    {
      id: 2,
      name: "Custom Polo T-shirts",
      image: "/image/dressImage5.jpg",
      link: "/custom-polo-tshirts",
    },
    {
      id: 3,
      name: "Office Shirts",
      image: "/image/dressImage1.jpg",
      link: "/office-shirts",
    },
    {
      id: 4,
      name: "Custom T-shirts",
      image: "/image/dressImage2.jpg",
      link: "/custom-tshirts",
    },
    {
      id: 5,
      name: "Custom Stamps & Ink",
      image: "/image/dressImage1.jpg",
      link: "/custom-stamps",
    },
    {
      id: 6,
      name: "Photo Gifts",
      image: "/image/dressImage4.jpg",
      link: "/photo-gifts",
    },
    {
      id: 7,
      name: "Labels, Stickers & Packaging",
      image: "/image/dressImage5.jpg",
      link: "/labels-stickers",
    },
    {
      id: 8,
      name: "Custom Stationery",
      image: "/image/dressImage1.jpg",
      link: "/custom-stationery",
    },
    {
      id: 9,
      name: "Signs, Posters & Marketing Materials",
      image: "/image/dressImage2.jpg",
      link: "/signs-posters",
    },
    {
      id: 10,
      name: "Signs, Posters & Marketing Materials",
      image: "/image/dressImage5.jpg",
      link: "/signs-posters",
    },
    {
      id: 11,
      name: "Signs, Posters & Marketing Materials",
      image: "/image/dressImage4.jpg",
      link: "/signs-posters",
    },
  ];

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Update scroll position for arrow visibility
    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
    }, 300);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = carouselRef.current
    ? scrollPosition <
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    : true;

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Explore all categories
      </h2>

      <div className="relative">
        {/* Left Navigation Arrow */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-2/5 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1.5 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-10 py-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className="snap-start flex-none w-20 sm:w-28 md:w-36 text-center"
            >
              <div className="bg-gray-50 rounded-full w-full aspect-square flex items-center justify-center mb-3 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={500}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-center px-1">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-2/5 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1.5 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Optional: Add dot indicators for mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(categories.length / 3) }).map(
            (_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  scrollPosition / 300 >= index &&
                  scrollPosition / 300 < index + 1
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

// Add this CSS to your global.css file to hide scrollbars
/* 
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
*/
