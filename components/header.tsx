'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from '@/components/logo';
import { navItems, restaurant } from '@/lib/restaurant-data';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isLight = scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          'bg-cream/95 backdrop-blur-md shadow-sm py-2'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo
            variant={isLight ? 'dark' : 'dark'}
            className={cn('shrink-0', scrolled ? 'h-12' : 'h-16')}
          />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium tracking-wide transition-colors duration-200',
                    'after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full',
                    active
                      ? 'text-olive after:w-full'
                      : 'text-charcoal/70 hover:text-olive'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-olive-dark hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Reservar
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-400',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={cn(
            'absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-cream px-6 py-24 shadow-2xl transition-transform duration-400',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    active ? 'text-olive' : 'text-charcoal hover:text-olive'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-olive px-5 py-3 text-sm font-medium text-cream transition-all hover:bg-olive-dark"
            >
              <Phone className="h-4 w-4" />
              Reservar pelo WhatsApp
            </a>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="text-sm text-charcoal/60 hover:text-olive"
            >
              {restaurant.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
