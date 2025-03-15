import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        {/* Text Content - Centered on top */}
        <div className="py-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            My Name, My Pride
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            100 Visiting Cards at Rs 200
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded">
            Shop Now
          </Button>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent h-8 z-10"></div>
          <img
            src="/image/heroimage1.jpg"
            alt="Person holding a business card"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* You can create a similar component for the T-shirts or add another one below */}
      <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden">
        <div className="py-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Wear your brand with pride
          </h2>
          <p className="text-lg text-gray-800 mb-6">1 Starting at Rs. 550</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-6">
              Custom Polo T-shirts
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white px-6">
              Custom T-shirts
            </Button>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent h-8 z-10"></div>
          <img
            src="/image/heroimage2.jpg"
            alt="People wearing custom t-shirts"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
