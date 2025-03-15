import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HeroSection1() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Hero Panel - Business Cards */}
        <div className="relative h-[400px] bg-gray-100 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/image/heroimage1.jpg')] bg-cover bg-center opacity-90"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="bg-white/90 p-8 m-6 rounded-lg max-w-xs">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">My Name, My Pride</h2>
              <p className="text-gray-700 mb-6">100 Visiting Cards at Rs 200</p>
              <Button className="bg-black hover:bg-gray-800 text-white">Shop Now</Button>
            </div>
          </div>
        </div>

        {/* Right Hero Panel - Custom T-shirts */}
        <div className="relative h-[400px] bg-gray-100 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/image/heroimage2.jpg')] bg-cover bg-center opacity-90"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="bg-white/90 p-8 m-6 rounded-lg max-w-xs">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Wear your brand with pride</h2>
              <p className="text-gray-700 mb-6">1 Starting at Rs. 550</p>
              <div className="space-y-3">
                <Button className="bg-black hover:bg-gray-800 text-white w-full">Custom Polo T-shirts</Button>
                <Button className="bg-black hover:bg-gray-800 text-white w-full">Custom T-shirts</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}