import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';
import { menu } from '@/lib/menu-data';
import { restaurant } from '@/lib/restaurant-data';

export const metadata: Metadata = {
  title: 'Cardápio — Cozinha autoral',
  description:
    'Conheça as categorias da cozinha autoral do Pasta a Mano e consulte o cardápio atualizado pelo canal oficial de atendimento.',
};

export default function CardapioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-olive pb-20 pt-32 md:pb-24 md:pt-40">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/Screenshot_54 copy.png"
              alt="Prato servido no Pasta a Mano"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-olive/70 to-olive" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
                cozinha autoral
              </p>
              <h1 className="font-serif text-5xl font-500 text-cream md:text-6xl">
                Cardápio
              </h1>
              <div className="mx-auto mt-6 h-px w-16 bg-gold" />
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/80">
                Conheça os caminhos da nossa cozinha e consulte a seleção atual
                diretamente com o restaurante.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="sticky top-16 z-30 border-b border-olive/10 bg-cream/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
              {menu.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-olive/10 hover:text-olive"
                >
                  {category.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <Reveal>
                <div className="relative overflow-hidden rounded-sm">
                  <div className="aspect-[4/5]">
                    <Image
                      src="/images/Screenshot_54 copy.png"
                      alt="Prato de nhoque com molho e ervas, fotografado para o Pasta a Mano"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
                  Consulta atual
                </p>
                <h2 className="font-serif text-4xl font-500 leading-tight text-olive md:text-5xl">
                  O cardápio muda com a cozinha
                </h2>
                <div className="mt-6 h-px w-16 bg-gold" />
                <p className="mt-6 leading-relaxed text-charcoal/70">
                  Para manter as informações corretas, o cardápio completo e os
                  valores devem ser confirmados diretamente com o Pasta a Mano.
                  Fale com a equipe antes da visita para consultar a seleção
                  disponível no dia.
                </p>
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-olive px-7 py-3.5 text-sm font-medium text-cream transition-all hover:bg-olive-dark hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  Consultar pelo WhatsApp
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-cream-light py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12 text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
                Para escolher com calma
              </p>
              <h2 className="font-serif text-3xl font-500 text-olive md:text-4xl">
                Categorias da casa
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-gold" />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {menu.map((category, index) => (
                <Reveal key={category.id} delay={index * 80}>
                  <article id={category.id} className="scroll-mt-28 rounded-sm border border-olive/10 bg-cream p-7 transition-colors hover:border-gold/40">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-500 text-olive">
                      {category.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                      {category.intro}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-olive py-20 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-serif text-3xl font-500 text-cream md:text-4xl">
                Quer conhecer a seleção de hoje?
              </h2>
              <p className="mt-4 text-cream/70">
                A equipe informa os pratos e valores disponíveis pelo canal oficial.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-charcoal transition-all hover:bg-gold-light hover:shadow-xl"
                >
                  <Phone className="h-4 w-4" />
                  Falar com o restaurante
                </a>
                <Link
                  href="/reservas"
                  className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-cream transition-colors hover:text-gold"
                >
                  Reservar uma mesa
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
