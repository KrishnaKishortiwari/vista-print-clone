// src/app/page.jsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon } from "lucide-react";
import HeroSection from "@/components/common/heroSection";
import PromotionalCarousel from "@/components/common/promotionalCarousel";
import HeroSection1 from "@/components/common/heroSection1";
import Image from "next/image";
import ProductCategoryCarousel from "@/components/common/productCategoryCarousel";
import MegaMenu from "@/components/common/megaMenu";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        {/* Top bar */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </div>
            <Link href="/" className="text-2xl font-bold text-blue-700">
              VistaPrint
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              All Products
            </Link>
            <Link
              href="/business-cards"
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              Business Cards
            </Link>
            <Link
              href="/marketing"
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              Marketing Materials
            </Link>
            <Link
              href="/clothing"
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              Clothing & Bags
            </Link>
            <Link
              href="/signage"
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              Signs & Banners
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Promotion Section */}
      <section className="bg-blue-50 ">
        <MegaMenu />
      </section>

      {/* Promotion Section */}
      <section className="bg-blue-50 ">
        <PromotionalCarousel />
      </section>

      {/* Hero Section */}
      <section className="bg-blue-50 ">
        <HeroSection1 />
      </section>

      {/* Explore Category Section */}
      <section className="bg-blue-50 ">
        <ProductCategoryCarousel />
      </section>

      {/* Popular Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Popular Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-3">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Image
                      src={product?.imge}
                      width={500}
                      height={300}
                      alt="Person holding a business card"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-blue-700">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Starting at {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Templates */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Design Templates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-video bg-gray-100">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Image
                      src={category?.imge}
                      width={500}
                      height={300}
                      alt="Person holding a business card"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" size="sm">
                    View Templates
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                    <Image
                      src={testimonial?.imge}
                      width={40}
                      height={40}
                      alt="Person holding a business card"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Business Cards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Flyers & Brochures
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Banners & Signs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Clothing & Bags
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Design Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Ideas & Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Business Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    File Preparation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Your Company Name. This is a clone for educational
              purposes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Mock data
const popularProducts = [
  {
    id: 1,
    name: "Standard Business Cards",
    price: "$9.99",
    imge: "/image/dressImage6.jpg",
  },
  {
    id: 2,
    name: "Custom Flyers",
    price: "$14.99",
    imge: "/image/dressImage2.jpg",
  },
  {
    id: 3,
    name: "Promotional Banners",
    price: "$24.99",
    imge: "/image/dressImage3.jpg",
  },
  {
    id: 4,
    name: "Custom T-Shirts",
    price: "$19.99",
    imge: "/image/dressImage4.jpg",
  },
];

const designCategories = [
  {
    id: 1,
    name: "Business Cards",
    description:
      "Make a lasting impression with professional business card designs.",
    imge: "/image/dressImage5.jpg",
  },
  {
    id: 2,
    name: "Marketing Materials",
    description:
      "Promote your business with eye-catching brochures, flyers, and postcards.",
    imge: "/image/dressImage6.jpg",
  },
  {
    id: 3,
    name: "Signage & Banners",
    description: "Get noticed with high-quality signs, banners, and posters.",
    imge: "/image/dressImage2.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    business: "Bloom Cafe",
    quote:
      "The business cards I ordered exceeded my expectations. The quality is outstanding and they arrived earlier than expected!",
    imge: "/image/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    business: "Chen Design Studio",
    quote:
      "I've been using their services for all my marketing materials. The consistency in quality has helped build my brand.",
    imge: "/image/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    business: "Sunshine Bakery",
    quote:
      "Their custom banners helped us attract more customers to our grand opening. Will definitely order again!",
    imge: "/image/testimonial3.jpg",
  },
];
