'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronRight, X, Menu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  showButtons?: boolean;
  isFullPage?: boolean;
}

interface SubItem {
  name: string;
  description: string;
  link: string;
}

interface DropdownItem {
  name: string;
  description: string;
  link: string;
  subItems?: SubItem[];
}

interface NavigationItem {
  name: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const heroImages = [
  {
    url: "/hero-healthcare-1.jpg",
    alt: "Community health workers providing care"
  },
  {
    url: "/hero-healthcare-2.jpg", 
    alt: "Ubuntu Afya kiosk in action"
  },
  {
    url: "/hero-healthcare-3.jpg",
    alt: "Digital health technology in use"
  }
];

const navigation: NavigationItem[] = [
  {
    name: "Our Story",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Overview",
        description: "Our mission, values, and vision for the future.",
        link: "/our-story",
      },
      {
        name: "Our People",
        description: "The team bringing life-saving healthcare change.",
        link: "/our-people",
      },
      {
        name: "Impact Reports",
        description: "Explore the data behind our mission and milestones.",
        link: "/impact",
        subItems: [
          {
            name: "Primary Health Care",
            description: "Learn about our Ubuntu Afya kiosks and community healthcare.",
            link: "/impact#primary-healthcare",
          },
          {
            name: "Health Technology",
            description: "Discover our STONE-HMIS® system and digital health solutions.",
            link: "/impact#health-technology",
          },
          {
            name: "Research & Evidence",
            description: "Explore our research findings and evidence-based practices.",
            link: "/impact#research-evidence",
          },
        ],
      },
      {
        name: "Partnerships",
        description: "See how your church, business, or group can make an impact.",
        link: "/partnerships",
      },
    ],
  },
  {
    name: "Our Work",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Our Model",
        description: "Discover how our sustainable, locally led model delivers solutions.",
        link: "/our-model",
      },
      {
        name: "Our Strategy",
        description: "Our approach to sustainable, long-term healthcare solutions.",
        link: "/strategy",
      },
      {
        name: "Latest Updates",
        description: "Stay informed with our latest news and impact reports.",
        link: "/updates",
      },
    ],
  },
  {
    name: "Get Involved",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Volunteer",
        description: "Join one of our trips and make a real impact.",
        link: "/volunteer",
      },
      {
        name: "Donate",
        description: "Your gift brings life-saving care to communities in need.",
        link: "/donate",
      },
      {
        name: "Events",
        description: "Join us for events that support global health.",
        link: "/events",
      },
      {
        name: "Contact Us",
        description: "Get in touch with us for more information.",
        link: "/contact",
      },
    ],
  },
];

export default function Hero({ 
  title, 
  subtitle, 
  showButtons = true,
  isFullPage = true
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nestedHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (nestedHoverTimeoutRef.current) {
        clearTimeout(nestedHoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleNestedItemMouseEnter = (itemName: string) => {
    if (nestedHoverTimeoutRef.current) {
      clearTimeout(nestedHoverTimeoutRef.current);
      nestedHoverTimeoutRef.current = null;
    }
    setActiveNestedDropdown(itemName);
  };

  const handleNestedItemMouseLeave = () => {
    nestedHoverTimeoutRef.current = setTimeout(() => {
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleNestedDropdownMouseEnter = () => {
    if (nestedHoverTimeoutRef.current) {
      clearTimeout(nestedHoverTimeoutRef.current);
      nestedHoverTimeoutRef.current = null;
    }
  };

  const handleNestedDropdownMouseLeave = () => {
    nestedHoverTimeoutRef.current = setTimeout(() => {
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleDropdownItemClick = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 300);
  };

  return (
    <section className={`relative ${isFullPage ? 'h-screen' : 'min-h-[600px]'} flex flex-col overflow-hidden`}>
      {/* Background Images - Behind Everything */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header - On Top of Images */}
      <header className="relative z-20 w-full" ref={dropdownRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ubuntu-blue">
                  <span className="text-lg font-bold text-white">UA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Ubuntu Afya</span>
                  <span className="text-xs text-white/80">2010-2025</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center space-x-1 font-medium transition-all duration-200 px-4 py-2 rounded-lg text-white hover:text-ubuntu-orange ${
                      activeDropdown === item.name ? "text-ubuntu-orange" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeDropdown === item.name ? (
                      <span className="text-ubuntu-orange text-lg">×</span>
                    ) : (
                      <span className="text-white text-lg">+</span>
                    )}
                  </button>

                  {/* Full Width Horizontal Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div
                      className="fixed left-0 right-0 top-16 bg-ubuntu-blue/95 backdrop-blur-sm shadow-xl border-t border-ubuntu-blue/50 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="container mx-auto px-6 py-8">
                        <div className="grid grid-cols-4 gap-6">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <div
                              key={dropdownItem.name}
                              className="relative"
                              onMouseEnter={() =>
                                dropdownItem.subItems &&
                                handleNestedItemMouseEnter(dropdownItem.name)
                              }
                              onMouseLeave={() =>
                                dropdownItem.subItems &&
                                handleNestedItemMouseLeave()
                              }
                            >
                              <Link
                                href={dropdownItem.link}
                                onClick={handleDropdownItemClick}
                                className="block px-6 py-6 hover:bg-ubuntu-blue/70 transition-colors group rounded-lg"
                              >
                                <h3 className="text-lg font-bold text-white group-hover:text-ubuntu-orange transition-colors mb-3 flex items-center justify-between">
                                  {dropdownItem.name}
                                  {dropdownItem.subItems && (
                                    <ChevronRight className="w-5 h-5 text-ubuntu-orange" />
                                  )}
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                  {dropdownItem.description}
                                </p>
                              </Link>

                              {/* Nested Dropdown on the Right */}
                              {dropdownItem.subItems &&
                                activeNestedDropdown === dropdownItem.name && (
                                  <div
                                    className="absolute left-full top-0 w-80 bg-ubuntu-blue/90 shadow-2xl rounded-lg border-l-4 border-ubuntu-orange z-50 ml-2"
                                    onMouseEnter={
                                      handleNestedDropdownMouseEnter
                                    }
                                    onMouseLeave={handleNestedDropdownMouseLeave}
                                  >
                                    {dropdownItem.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.link}
                                        onClick={handleDropdownItemClick}
                                        className="block px-6 py-5 hover:bg-ubuntu-blue/60 transition-colors group border-b border-ubuntu-blue/30 last:border-b-0"
                                      >
                                        <h4 className="text-lg font-bold text-white group-hover:text-ubuntu-orange transition-colors mb-2">
                                          {subItem.name}
                                        </h4>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                          {subItem.description}
                                        </p>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Donate Button */}
            <div className="hidden lg:flex">
              <Button asChild className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-6 py-2">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2 border-t border-white/20">
              {navigation.map((item) => (
                <div key={item.name} className="border-t border-white/10">
                  <button
                    className="w-full text-left px-4 py-3 font-bold text-white bg-ubuntu-blue/60 hover:bg-ubuntu-blue/50 transition flex items-center justify-between"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="bg-ubuntu-blue/30 px-4 py-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          <Link
                            href={dropdownItem.link}
                            className="block px-2 py-2 text-gray-200 hover:text-ubuntu-orange transition text-sm"
                            onClick={handleDropdownItemClick}
                          >
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs text-white/60 mt-1">
                              {dropdownItem.description}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Content - On Top of Images */}
      <div className="flex-1 relative z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl drop-shadow-lg">
                {subtitle}
              </p>
            )}
            
            {showButtons && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-8 py-4 text-lg"
                >
                  <Link href="/donate" className="flex items-center gap-2">
                    Donate Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-ubuntu-blue font-semibold px-8 py-4 text-lg"
                >
                  <Link href="/our-story">
                    Read More
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-ubuntu-orange' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}