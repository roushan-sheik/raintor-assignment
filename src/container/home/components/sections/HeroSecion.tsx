'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Twitter, Instagram, Dribbble } from 'lucide-react';
import SectionContainer from '@/shared/SectionContainer';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient Image - Extended to cover header area */}
      <div className="absolute top-[-100px] w-full h-[calc(100%+100px)] z-0">
        <Image
          src="/assets/home-gradient.png"
          alt="Gradient Background"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      <Header/>
      
      {/* Content */}
      <SectionContainer
        containerWrapperProps={{
          className: 'relative z-10 min-h-screen flex items-center'
        }}
        containerInnerProps={{
          className: 'flex flex-col justify-center min-h-screen py-20 xl:py-32'
        }}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile Social Links */}
          <div className="flex xl:hidden items-center justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)]"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            
            <a 
              href="#" 
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)]"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a 
              href="#" 
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)]"
              aria-label="Dribbble"
            >
              <Dribbble className="w-5 h-5" />
            </a>
            
            <div className="text-sm font-medium text-[color:var(--color-neutral-700)]">
              @williamcy
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between">
            {/* Left Side - Social Links */}
            <div className="flex flex-col items-center gap-6 self-start pt-8">
              {/* Social Icons */}
              <div className="flex flex-col items-center gap-4">
                <a 
                  href="#" 
                  className="p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)]"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                
                <a 
                  href="#" 
                  className="p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a 
                  href="#" 
                  className="p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)]"
                  aria-label="Dribbble"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>

              {/* Vertical line */}
              <div className="w-px h-24 bg-[color:var(--color-gray-400)] opacity-50"></div>

              {/* Username - Rotated */}
              <div className="transform -rotate-90 text-sm font-medium text-[color:var(--color-neutral-700)] whitespace-nowrap origin-center">
                @williamcy
              </div>
            </div>

            {/* Center - Main Content */}
            <div className="flex-1 max-w-4xl mx-8">
              {/* Main Heading */}
              <h1 className="text-3xl lg:text-5xl font-bold leading-[1.1] mb-12">
                <span className="block mb-3">
                  Trusted{' '}
                  <span className="bg-[color:var(--color-black)] text-[color:var(--color-white)] px-3 py-2 rounded-xl inline-block transform -rotate-1 mx-1">
                    Partner
                  </span>{' '}
                  for
                </span>
                <span className="block">
                  Your Website{' '}
                  <span className="bg-[color:var(--color-black)] text-[color:var(--color-white)] px-3 py-2 rounded-xl inline-block transform rotate-1 mx-1">
                    Develop.
                  </span>
                </span>
              </h1>

              {/* Description */}
              <div className="mb-12 max-w-xl">
                <p className="text-xl text-[color:var(--color-neutral-700)] mb-2 leading-relaxed">
                  Building the worlds best marketing websites for over a{' '}
                  <span className="font-semibold text-[color:var(--color-neutral-900)]">decade</span>.
                </p>
                <p className="text-xl text-[color:var(--color-neutral-700)] leading-relaxed">
                  Your trusted partner for strategy, design, and dev.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline" 
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
                className="bg-white/90 hover:bg-white border-[color:var(--color-gray-300)] hover:border-[color:var(--color-gray-400)] shadow-lg px-8 py-4 text-lg font-medium"
              >
                Schedule a Call
              </Button>
            </div>

            {/* Right Side - Empty for balance */}
            <div className="w-16"></div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="xl:hidden text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 lg:mb-8">
              <span className="block mb-2">
                Trusted{' '}
                <span className="bg-[color:var(--color-black)] text-[color:var(--color-white)] px-2 py-1 rounded-lg inline-block transform -rotate-1">
                  Partner
                </span>{' '}
                for
              </span>
              <span className="block mb-2">
                Your Website{' '}
                <span className="bg-[color:var(--color-black)] text-[color:var(--color-white)] px-2 py-1 rounded-lg inline-block transform rotate-1">
                  Develop.
                </span>
              </span>
            </h1>

            {/* Description */}
            <div className="mb-8 lg:mb-12 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-[color:var(--color-neutral-700)] mb-3">
                Building the worlds best marketing websites for over a{' '}
                <span className="font-semibold text-[color:var(--color-neutral-900)]">decade</span>.
              </p>
              <p className="text-lg sm:text-xl text-[color:var(--color-neutral-700)]">
                Your trusted partner for strategy, design, and dev.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="outline" 
              size="lg"
              icon={<Phone className="w-5 h-5" />}
              iconPosition="left"
              className="bg-white/90 hover:bg-white border-[color:var(--color-gray-300)] hover:border-[color:var(--color-gray-400)] shadow-lg"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default HeroSection;