import Link from 'next/link';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { Logo } from '@/components/logo';
import { restaurant, navItems } from '@/lib/restaurant-data';

export function Footer() {
  return (
    <footer className="bg-olive text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Logo variant="light" className="h-16" />
            <p className="mt-4 text-sm text-cream/70 max-w-xs">
              Massas artesanais feitas à mão em Volta Redonda. Almoço, jantar e
              experiência gastronômica autoral.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-1">
              Navegação
            </h3>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-1">
              Contato
            </h3>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold/70" />
              {restaurant.phoneDisplay}
            </a>
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4 text-gold/70" />
              {restaurant.instagramHandle}
            </a>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
            >
              <MapPin className="h-4 w-4 text-gold/70 mt-0.5 shrink-0" />
              <span>{restaurant.address.full}</span>
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-1">
              Horários
            </h3>
            <div className="flex items-start gap-2 text-sm text-cream/80">
              <Clock className="h-4 w-4 text-gold/70 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span>Segunda a Sábado</span>
                <span>11h às 23h</span>
                <span className="mt-1">Domingo</span>
                <span>11h às 16h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px gold-divider opacity-30" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Pasta a Mano — cozinha autoral. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-cream/50">
            Volta Redonda — Rio de Janeiro, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
