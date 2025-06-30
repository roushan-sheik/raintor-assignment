'use client';

import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import SectionContainer from '@/shared/SectionContainer';
import Button from '../ui/Button';
 
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <h1 className="text-xl sm:text-2xl lg:text-heading1 font-bold text-[color:var(--color-black)]">
              DEVLOP.ME
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex flex-shrink-0">
            <Button
              variant="outline" 
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="bg-white/90 hover:bg-white border-[color:var(--color-gray-300)] hover:border-[color:var(--color-gray-400)] shadow-sm"
            >
              <span className="hidden md:inline">Start Project</span>
              <span className="md:hidden">Start</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[color:var(--color-gray-200)]">
            <h1 className="text-xl font-bold text-[color:var(--color-black)]">
              DEVLOP.ME
            </h1>
            <button 
              className="p-2 rounded-lg hover:bg-[color:var(--color-gray-100)] transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6 text-[color:var(--color-neutral-900)]" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-5 py-6">
            {/* Mobile Navigation */}
            <nav className="space-y-1 mb-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-lg font-medium text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)] hover:bg-[color:var(--color-gray-50)] transition-all duration-200 py-3 px-2 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mb-8">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                fullWidth
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Project
              </Button>
            </div>

            {/* Contact Info for Mobile */}
            <div className="pt-6 border-t border-[color:var(--color-gray-200)]">
              <p className="text-sm text-[color:var(--color-neutral-500)] mb-3">
                Ready to start your project?
              </p>
              <a 
                href="mailto:hello@devlop.me" 
                className="text-base font-medium text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)] transition-colors duration-200"
              >
                hello@devlop.me
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Tablet Navigation Overlay */}
      <div className="hidden sm:flex lg:hidden fixed top-20 left-0 right-0 z-40 justify-center">
        <nav className="flex items-center space-x-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-[color:var(--color-gray-200)]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-body3 font-medium text-[color:var(--color-neutral-900)] hover:text-[color:var(--color-brand-500)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;