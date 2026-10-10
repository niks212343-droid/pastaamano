import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Instagram, MapPin, Clock, Accessibility, CreditCard,
  Car, Baby, UtensilsCrossed, Wine, Music, Trees, Coffee, ArrowRight,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';
import { restaurant } from '@/lib/restaurant-data';

export const metadata: Metadata = {
  title: 'Reservas — Contato, Horários e Informações',
  description:
    'Reserve sua mesa no Pasta a Mano em Volta Redonda. Telefone, WhatsApp, horários de funcionamento, endereço, acessibilidade, formas de pagamento e serviços.',
};

export default function ReservasPage() {
  const infoSections = [
    {
      title: 'Acessibilidade',
      icon: Accessibility,
      items: restaurant.accessibility,
    },
    {
      title: 'Serviços',
      icon: UtensilsCrossed,
      items: restaurant.services,
    },
    {
      title: 'Refeições',
      icon: UtensilsCrossed,
      items: restaurant.meals,
    },
    {
      title: 'Bebidas e destaques',
      icon: Wine,
      items: restaurant.drinks,
    },
    {
      title: 'Pagamentos',
      icon: CreditCard,
      items: restaurant.payments,
    },
    {
      title: 'Famílias',
      icon: Baby,
      items: restaurant.families,
    },
    {
      title: 'Estacionamento',
      icon: Car,
      items: restaurant.parking,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-olive overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/Screenshot_57 copy.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-olive/80 to-olive" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                Bem-vindo
              </p>
              <h1 className="font-serif text-5xl font-500 text-cream md:text-6xl text-balance">
                Reservas
              </h1>
              <div className="mt-6 h-px w-16 bg-gold mx-auto" />
              <p className="mt-6 text-cream/80 leading-relaxed max-w-2xl mx-auto">
                Entre em contato para reservar sua mesa. Será um prazer receber
                você no Pasta a Mano.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-cream py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* WhatsApp */}
              <Reveal>
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-8 rounded-sm border border-olive/15 hover:border-gold/40 hover:shadow-lg transition-all duration-300 bg-cream-light"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-500 text-olive">WhatsApp</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{restaurant.phoneDisplay}</p>
                  <span className="mt-4 text-sm text-gold font-medium group-hover:underline">
                    Iniciar conversa →
                  </span>
                </a>
              </Reveal>

              {/* Phone */}
              <Reveal delay={100}>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                  className="group flex flex-col items-center text-center p-8 rounded-sm border border-olive/15 hover:border-gold/40 hover:shadow-lg transition-all duration-300 bg-cream-light"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-500 text-olive">Telefone</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{restaurant.phoneDisplay}</p>
                  <span className="mt-4 text-sm text-gold font-medium group-hover:underline">
                    Ligar agora →
                  </span>
                </a>
              </Reveal>

              {/* Instagram */}
              <Reveal delay={200}>
                <a
                  href={restaurant.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-8 rounded-sm border border-olive/15 hover:border-gold/40 hover:shadow-lg transition-all duration-300 bg-cream-light"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-500 text-olive">Instagram</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{restaurant.instagramHandle}</p>
                  <span className="mt-4 text-sm text-gold font-medium group-hover:underline">
                    Seguir →
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOURS & ADDRESS */}
        <section className="bg-cream-light py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Hours */}
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="h-6 w-6 text-gold" />
                  <h2 className="font-serif text-2xl font-500 text-olive">Horários de funcionamento</h2>
                </div>
                <div className="divide-y divide-olive/10">
                  {restaurant.hours.map((entry) => {
                    const isSunday = entry.day === 'Domingo';
                    return (
                      <div
                        key={entry.day}
                        className="flex items-center justify-between py-3"
                      >
                        <span className="text-sm font-medium text-charcoal/80">{entry.day}</span>
                        <span className={`text-sm ${isSunday ? 'text-gold-dark' : 'text-charcoal/70'}`}>
                          {entry.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              {/* Address */}
              <Reveal delay={200}>
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="h-6 w-6 text-gold" />
                  <h2 className="font-serif text-2xl font-500 text-olive">Endereço</h2>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-charcoal/80">{restaurant.address.street}</p>
                  <p className="text-charcoal/70">{restaurant.address.neighborhood}</p>
                  <p className="text-charcoal/70">{restaurant.address.city} — {restaurant.address.state}</p>
                </div>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-gold font-medium text-sm hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Abrir localização no mapa
                </a>

                {/* Quick services icons */}
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { icon: Trees, label: 'Mesas externas' },
                    { icon: Music, label: 'Música ao vivo' },
                    { icon: Coffee, label: 'Café' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive/10">
                        <item.icon className="h-5 w-5 text-olive" />
                      </div>
                      <span className="text-xs text-charcoal/60">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PRACTICAL INFO */}
        <section className="bg-cream py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12 text-center">
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                Informações práticas
              </p>
              <h2 className="font-serif text-3xl font-500 text-olive md:text-4xl">
                Tudo o que você precisa saber
              </h2>
              <div className="mt-4 h-px w-16 bg-gold mx-auto" />
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {infoSections.map((section, i) => (
                <Reveal key={section.title} delay={i * 80}>
                  <div className="p-6 rounded-sm border border-olive/10 bg-cream-light hover:border-gold/25 transition-colors duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive/10">
                        <section.icon className="h-5 w-5 text-olive" />
                      </div>
                      <h3 className="font-serif text-lg font-500 text-olive">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-olive py-20 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-serif text-3xl font-500 text-cream md:text-4xl text-balance">
                Pronto para reservar?
              </h2>
              <p className="mt-4 text-cream/70">
                Entre em contato agora e garanta sua mesa no Pasta a Mano.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-gold-light hover:shadow-xl"
                >
                  <Phone className="h-4 w-4" />
                  Reservar pelo WhatsApp
                </a>
                <Link
                  href="/cardapio"
                  className="group inline-flex items-center gap-2 text-cream font-medium text-sm uppercase tracking-widest transition-colors hover:text-gold"
                >
                  Ver cardápio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
