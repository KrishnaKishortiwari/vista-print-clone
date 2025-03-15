import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "View All",
    href: "/all",
    submenu: null,
  },
  {
    title: "Stationery, Letterheads & Notebooks",
    href: "/stationery",
    submenu: {
      sections: [
        {
          title: "Business Essentials",
          links: [
            { name: "Visiting Cards", href: "/visiting-cards" },
            {
              name: "Signs, Posters & Marketing Materials",
              href: "/signs-posters",
            },
            {
              name: "Stationery, Letterheads & Notebooks",
              href: "/stationery",
            },
            { name: "Labels, Stickers & Packaging", href: "/labels-stickers" },
            { name: "Stamps & Ink", href: "/stamps" },
            { name: "Office Supplies", href: "/office-supplies" },
          ],
        },
        {
          title: "Love your new look",
          links: [
            { name: "Clothing, Caps & Bags", href: "/clothing" },
            { name: "Custom Polo T-Shirts", href: "/custom-polo" },
            { name: "Printed T-Shirts", href: "/printed-tshirts" },
            { name: "Custom Office Shirts", href: "/office-shirts" },
            { name: "Caps", href: "/caps" },
            { name: "Bags", href: "/bags" },
            { name: "Reflective Safety Vest", href: "/safety-vest" },
          ],
        },
        {
          title: "Made by You",
          links: [
            { name: "Photo Albums", href: "/photo-albums" },
            { name: "Personalised Pens", href: "/personalised-pens" },
            { name: "Magnets", href: "/magnets" },
            { name: "Notebooks & Diaries", href: "/notebooks" },
            { name: "Calendars", href: "/calendars" },
          ],
        },
        {
          title: "Home & Gifts",
          links: [
            { name: "Mugs, Albums & Gifts", href: "/mugs-albums" },
            { name: "Drinkware", href: "/drinkware" },
            { name: "Mugs", href: "/mugs" },
            { name: "Gift Hampers", href: "/gift-hampers" },
          ],
        },
        {
          title: "Design & Logo",
          links: [
            { name: "Design Services", href: "/design-services" },
            { name: "Logo Maker", href: "/logo-maker" },
            { name: "QR Code Generator", href: "/qr-code-generator" },
            { name: "Ideas and Advice", href: "/ideas-advice" },
          ],
        },
        {
          title: "Looking for more?",
          links: [
            { name: "Technology", href: "/technology" },
            { name: "Invitations & Announcements", href: "/invitations" },
            { name: "Weddings", href: "/weddings" },
            { name: "Passport Size Photographs", href: "/passport-photos" },
          ],
        },
      ],
    },
  },
  {
    title: "Personalised Pens",
    href: "/personalised-pens",
    submenu: null,
  },
  {
    title: "Stamps and Ink",
    href: "/stamps",
    submenu: null,
  },
  {
    title: "Signs, Posters & Marketing Materials",
    href: "/signs-posters",
    submenu: null,
  },
  {
    title: "Notebooks",
    href: "/stationery",
    submenu: {
      sections: [
        {
          title: "Business Essentials",
          links: [
            { name: "Visiting Cards", href: "/visiting-cards" },
            {
              name: "Signs, Posters & Marketing Materials",
              href: "/signs-posters",
            },
            {
              name: "Stationery, Letterheads & Notebooks",
              href: "/stationery",
            },
            { name: "Labels, Stickers & Packaging", href: "/labels-stickers" },
            { name: "Stamps & Ink", href: "/stamps" },
            { name: "Office Supplies", href: "/office-supplies" },
          ],
        },
        {
          title: "Love your new look",
          links: [
            { name: "Clothing, Caps & Bags", href: "/clothing" },
            { name: "Custom Polo T-Shirts", href: "/custom-polo" },
            { name: "Printed T-Shirts", href: "/printed-tshirts" },
            { name: "Custom Office Shirts", href: "/office-shirts" },
            { name: "Caps", href: "/caps" },
            { name: "Bags", href: "/bags" },
            { name: "Reflective Safety Vest", href: "/safety-vest" },
          ],
        },
        {
          title: "Made by You",
          links: [
            { name: "Photo Albums", href: "/photo-albums" },
            { name: "Personalised Pens", href: "/personalised-pens" },
            { name: "Magnets", href: "/magnets" },
            { name: "Notebooks & Diaries", href: "/notebooks" },
            { name: "Calendars", href: "/calendars" },
          ],
        },
        {
          title: "Home & Gifts",
          links: [
            { name: "Mugs, Albums & Gifts", href: "/mugs-albums" },
            { name: "Drinkware", href: "/drinkware" },
            { name: "Mugs", href: "/mugs" },
            { name: "Gift Hampers", href: "/gift-hampers" },
          ],
        },
        {
          title: "Design & Logo",
          links: [
            { name: "Design Services", href: "/design-services" },
            { name: "Logo Maker", href: "/logo-maker" },
            { name: "QR Code Generator", href: "/qr-code-generator" },
            { name: "Ideas and Advice", href: "/ideas-advice" },
          ],
        },
        {
          title: "Looking for more?",
          links: [
            { name: "Technology", href: "/technology" },
            { name: "Invitations & Announcements", href: "/invitations" },
            { name: "Weddings", href: "/weddings" },
            { name: "Passport Size Photographs", href: "/passport-photos" },
          ],
        },
      ],
    },
  },
  {
    title: "Mugs, Albums & Gifts",
    href: "/mugs-albums",
    submenu: null,
  },
];

// You'll need to add this CSS to your globals.css or a component CSS file
const navMenuStyles = `
  /* Override shadcn default styles for NavigationMenuTrigger */
  .nav-menu-trigger {
    font-weight: normal;
    background: transparent;
    height: auto;
    padding: 0.75rem 1rem;
    border-radius: 0;
  }
  
  .nav-menu-trigger:hover {
    text-decoration: underline;
    background-color: #f3f4f6;
  }
  
  .nav-menu-trigger[data-state='open'] {
    background-color: #f3f4f6;
  }
  
  /* Remove the downward caret */
  .nav-menu-trigger > svg {
    display: none;
  }
`;

const MegaMenu = () => {
  return (
    <>
      {/* Include the CSS styles */}
      <style jsx global>
        {navMenuStyles}
      </style>

      <NavigationMenu className="max-w-full w-full justify-center border-b border-gray-200">
        <NavigationMenuList className="flex-wrap gap-1 p-1">
          {categories.map((category, index) => (
            <NavigationMenuItem key={index}>
              {category.submenu ? (
                <>
                  <NavigationMenuTrigger className="nav-menu-trigger text-sm hover:underline hover:bg-gray-100">
                    {category.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-screen bg-white p-6 shadow-lg">
                      <div className="grid grid-cols-6 gap-6">
                        {category.submenu.sections.map(
                          (section, sectionIndex) => (
                            <div
                              key={sectionIndex}
                              className="flex flex-col gap-3"
                            >
                              <h3 className="text-md font-medium text-gray-900">
                                {section.title}
                              </h3>
                              <ul className="flex flex-col gap-2">
                                {section.links.map((link, linkIndex) => (
                                  <li key={linkIndex}>
                                    <Link
                                      href={link.href}
                                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                      <div className="mt-6 flex justify-end">
                        <Link
                          href="/all"
                          className="text-sm text-gray-500 hover:text-gray-900"
                        >
                          see all view all
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={category.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "block select-none hover:underline px-4 py-3 text-sm hover:bg-gray-100"
                    )}
                  >
                    {category.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default MegaMenu;
