'use client';

import SectionContainer from '@/shared/SectionContainer';
import React from 'react';
import Button from '../ui/Button';
 

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <header className="relative z-50 bg-transparent">
      <SectionContainer
        containerWrapperProps={{
          className: 'py-4'
        }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-heading1 font-bold text-[color:var(--color-black)]">
              DEVLOP.ME
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-body2 font-medium text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button 
              variant="outline" 
              size="md"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 6.66667L16.6667 10M16.6667 10L13.3333 13.3333M16.6667 10H3.33333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              iconPosition="right"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-[color:var(--color-gray-100)] transition-colors duration-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </SectionContainer>
    </header>
  );
};

export default Header;