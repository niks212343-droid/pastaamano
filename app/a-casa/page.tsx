import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Music, Wine, UtensilsCrossed, Coffee, Trees, Users, MapPin } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';
import { restaurant } from '@/lib/restaurant-data';

export const metadata: Metadata = {
  title: 'A Casa — Ambiente e Experiência',
  description:
    'Conheça o Pasta a Mano: ambiente aconchegante, mesas externas, música ao vivo, carta de vinhos e coquetéis. Uma experiência gastronômica autoral em Volta Redonda.',
};

export default function ACasaPage() {
  const features = [
    { icon: Music, title: 'Música ao vivo', desc: 'Apresentações que complementam a experiência gastronômica.' },
    { icon: Wine, title: 'Carta de vinhos', desc: 'Seleção de rótulos para acompanhar cada prato.' },
    { icon: Coffee, title: 'Café e coquetéis', desc: 'Drinks assinatura e café fresco para encerrar a refeição.' },
    { icon: Trees, title: 'Mesas externas', desc: 'Espaço ao ar livre para dias agradáveis.' },
    { icon: Users, title: 'Para todos', desc: 'Grupos, turistas, quem vai sozinho e famílias com crianças.' },
    { icon: UtensilsCrossed, title: 'No local ou para viagem', desc: 'Refeição no restaurante ou para levar.' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] overflow-hidden flex items-end">
          <div className="absolute inset-0">
            <Image
              src="/images/Screenshot_57 copy.png"
              alt="Interior do restaurante Pasta a Mano"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl w-full px-4 pb-16 sm:px-6 lg:px-8 md:pb-24">
            <Reveal>
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                O Restaurante
              </p>
              <h1 className="font-serif text-5xl font-500 text-cream md:text-6xl text-balance max-w-2xl">
                A Casa
              </h1>
              <div className="mt-6 h-px w-16 bg-gold" />
              <p className="mt-6 text-cream/85 leading-relaxed max-w-xl">
                Aconchegante, casual e sofisticado. Um espaço pensado para receber
                bem — seja para um almoço tranquilo, um jantar a dois ou uma
                reunião entre amigos.
              </p>
            </Reveal>
          </div>
        </section>

        {/* INTRO TEXT */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-serif text-3xl font-500 text-olive md:text-4xl text-balance leading-tight">
                Um lugar onde a comida feita à mão encontra o acolhimento
              </h2>
              <div className="mt-6 h-px w-16 bg-gold" />
              <p className="mt-6 text-charcoal/70 leading-relaxed">
                O Pasta a Mano é um restaurante de cozinha autoral em Volta
                Redonda, onde a massa fresca e artesanal é o protagonista. O
                ambiente une conforto e sofisticação sem ostentação — um espaço
                contemporâneo, tranquilo e romântico, onde cada detalhe foi
                pensado para que a experiência seja completa.
              </p>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Atendemos para almoço e jantar, com opção de refeição no local ou
                para viagem. Recebemos grupos, turistas e quem prefere uma
                refeição a sós. Para as famílias, oferecemos cardápio infantil e
                cadeirinhas altas.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ASYMMETRIC IMAGE GRID */}
        <section className="bg-cream-light py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                O Ambiente
              </p>
              <h2 className="font-serif text-3xl font-500 text-olive md:text-4xl">
                Espaços pensados para cada momento
              </h2>
              <div className="mt-4 h-px w-16 bg-gold mx-auto" />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-12">
              <Reveal className="md:col-span-7" delay={100}>
                <div className="overflow-hidden rounded-sm">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src="/images/Screenshot_55 copy.png"
                      alt="Bastidores da cozinha e jardim do Pasta a Mano"
                      width={1100}
                      height={750}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal className="md:col-span-5" delay={200}>
                <div className="overflow-hidden rounded-sm">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/Screenshot_57 copy.png"
                      alt="Ambientes e clientes do Pasta a Mano"
                      width={750}
                      height={1000}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal className="md:col-span-5" delay={300}>
                <div className="overflow-hidden rounded-sm">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src="/images/Screenshot_57 copy.png"
                      alt="Cozinha e fachada do Pasta a Mano"
                      width={1100}
                      height={750}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal className="md:col-span-7" delay={400}>
                <div className="overflow-hidden rounded-sm">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src="/images/Screenshot_55 copy.png"
                      alt="Área externa e fachada iluminada do Pasta a Mano"
                      width={1100}
                      height={750}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-olive py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                A Experiência
              </p>
              <h2 className="font-serif text-3xl font-500 text-cream md:text-4xl">
                Tudo que oferecemos
              </h2>
              <div className="mt-4 h-px w-16 bg-gold mx-auto" />
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 100}>
                  <div className="flex flex-col items-center text-center p-6 rounded-sm border border-cream/10 hover:border-gold/30 transition-colors duration-300">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/5 border border-gold/20">
                      <feature.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-500 text-cream">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream/65 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CRAFT IMAGE BREAK */}
        <section className="bg-cream py-0">
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <Image
              src="/images/Screenshot_55 copy.png"
              alt="Bastidores do preparo na cozinha do Pasta a Mano"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/30" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <Reveal>
                <p className="font-serif text-2xl md:text-3xl text-cream text-center max-w-2xl text-balance leading-relaxed text-shadow-dark">
                  &ldquo;A massa fresca é preparada à mão, todos os dias, com a
                  técnica e o cuidado que definem a cozinha autoral.&rdquo;
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-24 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-serif text-3xl font-500 text-olive md:text-4xl text-balance">
                Venha nos visitar
              </h2>
              <div className="mt-4 h-px w-16 bg-gold mx-auto" />
              <p className="mt-6 text-charcoal/70 leading-relaxed">
                {restaurant.address.full}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/reservas"
                  className="group inline-flex items-center gap-2 rounded-full bg-olive px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-olive-dark hover:shadow-xl"
                >
                  Reservar uma mesa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/cardapio"
                  className="group inline-flex items-center gap-2 text-olive font-medium text-sm uppercase tracking-widest transition-colors hover:text-gold"
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
