'use client';

import React from 'react';
import Image from 'next/image';
import SectionContainer from '@/shared/SectionContainer';
import Button from '@/components/ui/Button';
 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home-gradient.png"
          alt="Gradient Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <SectionContainer
        containerWrapperProps={{
          className: 'relative z-10 min-h-screen'
        }}
        containerInnerProps={{
          className: 'flex flex-col justify-center min-h-screen py-20'
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Social Links - Vertical */}
            <div className="hidden lg:flex flex-col items-center gap-4 fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
              <div className="flex flex-col items-center gap-4">
                {/* Social Icons */}
                <a 
                  href="#" 
                  className="p-2 hover:bg-[color:var(--color-gray-100)] rounded-lg transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" fill="currentColor"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="p-2 hover:bg-[color:var(--color-gray-100)] rounded-lg transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill="currentColor"/>
                  </svg>
                </a>

                <a 
                  href="#" 
                  className="p-2 hover:bg-[color:var(--color-gray-100)] rounded-lg transition-colors duration-200"
                  aria-label="Dribbble"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm7.17 6.09c-.02.36-.06.7-.12 1.05-.78-.18-1.59-.27-2.41-.27-.98 0-1.93.12-2.85.35.08-.2.17-.4.25-.61C12.6 5.09 13.38 4 14.46 3.42c1.27.79 2.29 1.99 2.71 3.67zM10 1.74c2.36 0 4.49.96 6.02 2.5-.28.44-.62.84-1.02 1.19C13.93 6.01 13.05 6.97 12.51 8.16c-.8-.24-1.64-.37-2.51-.37-.35 0-.7.02-1.04.05C8.3 6.09 7.52 4.5 6.42 3.23 7.51 2.25 8.69 1.74 10 1.74zM5.23 4.18c.73.89 1.33 1.91 1.77 3.02-.67.08-1.3.24-1.89.47-.1-.37-.15-.76-.15-1.17 0-.8.1-1.58.27-2.32zM1.74 10c0-.61.07-1.2.18-1.78.68-.47 1.48-.85 2.37-1.1.25 1.32.22 2.69-.07 4.03-.21-.05-.43-.09-.65-.12C2.95 11.01 2.32 10.52 1.74 10zm2.49 3.01c.37-.21.76-.38 1.17-.5.42 1.42 1.21 2.68 2.26 3.66-.88-.16-1.69-.5-2.4-1.01-.4-.39-.74-.84-1.03-1.35.01-.27.01-.53 0-.8zm4.77 4.25c-.77-.73-1.38-1.64-1.8-2.68.55-.18 1.14-.28 1.76-.28.21 0 .41.01.61.03-.13.95-.35 1.86-.69 2.74.04.06.08.13.12.19zM10 18.26c-1.19 0-2.3-.26-3.32-.71.27-.56.47-1.17.6-1.81.68.09 1.37.13 2.07.1.24-.01.47-.03.71-.05.36.87.81 1.67 1.35 2.38-.48.06-.94.09-1.41.09zm4.18-1.41c-.4-.52-.74-1.1-1.01-1.72.88-.1 1.72-.3 2.5-.6-.31.8-.77 1.53-1.37 2.12-.04.07-.08.13-.12.2zM17.25 14c-.85.41-1.77.68-2.73.8.29-1.4.32-2.86.08-4.25.22.02.44.03.67.03.99 0 1.94-.12 2.85-.35.09.57.13 1.16.13 1.77z" fill="currentColor"/>
                  </svg>
                </a>
              </div>

              {/* Vertical line */}
              <div className="w-px h-16 bg-[color:var(--color-gray-300)]"></div>

              {/* Handle text */}
              <div className="transform -rotate-90 whitespace-nowrap">
                <span className="text-caption1 text-[color:var(--color-neutral-500)]">
                  @williamcy
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-display1 lg:text-[5rem] lg:leading-[1.2] font-bold mb-6">
              Trusted{' '}
              <span className="bg-[color:var(--color-black)] text-[color:var(--color-white)] px-2 py-1 rounded-lg inline-block">
                Partner
              </span>{' '}
              for Your Website{' '}
              <span className="bg-[color:var(--color-black)] text-[color:var(--color-white)] px-2 py-1 rounded-lg inline-block">
                Develop.
              </span>
            </h1>

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="text-body1 text-[color:var(--color-neutral-700)] max-w-lg">
                Building the worlds best marketing websites for over a{' '}
                <span className="font-semibold">decade</span>.
              </p>
              <p className="text-body1 text-[color:var(--color-neutral-700)] max-w-lg">
                Your trusted partner for strategy, design, and dev.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              variant="outline" 
              size="lg"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 8.33333L15.8333 10M15.8333 10L17.5 11.6667M15.8333 10H10M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              iconPosition="left"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Right Content - Space for additional content if needed */}
          <div className="flex-1 lg:max-w-md">
            {/* This space can be used for additional content, images, or kept empty for visual balance */}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default HeroSection;