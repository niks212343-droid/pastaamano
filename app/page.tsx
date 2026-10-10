import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Phone, Music, Wine, UtensilsCrossed } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';
import { restaurant } from '@/lib/restaurant-data';

export default function HomePage() {
  const featuredDishes = [
    {
      name: 'Gastronomia da casa',
      desc: 'Um prato fotografado no Pasta a Mano',
      image: '/images/Screenshot_54 copy.png',
    },
    {
      name: 'Bastidores da cozinha',
      desc: 'Preparo e cuidado em cada detalhe',
      image: '/images/Screenshot_55 copy.png',
    },
    {
      name: 'Um espaço para ficar',
      desc: 'Ambiente, jardim e acolhimento',
      image: '/images/Screenshot_55 copy.png',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <div className="hero-kenburns h-full w-full">
              <Image
                src="/images/Screenshot_54 copy.png"
                alt="Prato servido no Pasta a Mano"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center pt-20 pb-16">
            <Reveal delay={200}>
              <p className="mb-4 text-gold text-sm font-medium uppercase tracking-[0.3em]">
                cozinha autoral · Volta Redonda
              </p>
            </Reveal>
            <Reveal delay={400}>
              <h1 className="font-serif text-5xl font-600 leading-[1.1] text-cream text-shadow-dark sm:text-6xl md:text-7xl lg:text-8xl text-balance max-w-4xl">
                Pasta a Mano
              </h1>
            </Reveal>
            <Reveal delay={600}>
              <div className="mt-6 h-px w-20 bg-gold mx-auto" />
            </Reveal>
            <Reveal delay={700}>
              <p className="mt-6 max-w-xl text-lg text-cream/90 text-shadow-dark font-light leading-relaxed">
                Massas feitas à mão, ingredientes frescos e uma experiência
                acolhedora que transforma cada refeição em um momento memorável.
              </p>
            </Reveal>
            <Reveal delay={900}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="/cardapio"
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-gold hover:text-charcoal hover:shadow-xl"
                >
                  Explorar cardápio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/reservas"
                  className="group inline-flex items-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:border-gold hover:bg-olive/30 hover:shadow-xl"
                >
                  Reservar uma mesa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-col items-center gap-2 text-cream/60">
              <span className="text-xs uppercase tracking-widest">Role para descobrir</span>
              <div className="h-12 w-px bg-gradient-to-b from-cream/60 to-transparent animate-pulse" />
            </div>
          </div>
        </section>

        {/* GASTRONOMY SECTION */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                A Gastronomia
              </p>
              <h2 className="font-serif text-4xl font-500 text-olive md:text-5xl text-balance">
                Massas artesanais, sabores autorais
              </h2>
              <div className="mt-6 h-px w-16 bg-gold mx-auto" />
              <p className="mt-6 mx-auto max-w-2xl text-charcoal/70 leading-relaxed">
                Cada prato é uma expressão da cozinha autoral do Pasta a Mano,
                onde a massa fresca feita à mão encontra ingredientes
                selecionados e o cuidado de quem cozinha com intenção.
              </p>
            </Reveal>

            {/* Asymmetric dish grid */}
            <div className="grid gap-6 md:grid-cols-12 md:gap-8">
              {/* Large left dish */}
              <Reveal className="md:col-span-7" delay={100}>
                <Link href="/cardapio" className="group block overflow-hidden rounded-sm relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={featuredDishes[0].image}
                      alt={featuredDishes[0].name}
                      width={940}
                      height={650}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-serif text-2xl text-cream font-500">{featuredDishes[0].name}</h3>
                    <p className="mt-1 text-sm text-cream/80">{featuredDishes[0].desc}</p>
                  </div>
                </Link>
              </Reveal>

              {/* Right two dishes stacked */}
              <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                <Reveal delay={200}>
                  <Link href="/cardapio" className="group block overflow-hidden rounded-sm relative">
                    <div className="aspect-[16/10] overflow-hidden">
                      <Image
                        src={featuredDishes[1].image}
                        alt={featuredDishes[1].name}
                        width={940}
                        height={650}
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-serif text-xl text-cream font-500">{featuredDishes[1].name}</h3>
                      <p className="mt-1 text-sm text-cream/80">{featuredDishes[1].desc}</p>
                    </div>
                  </Link>
                </Reveal>
                <Reveal delay={300}>
                  <Link href="/cardapio" className="group block overflow-hidden rounded-sm relative">
                    <div className="aspect-[16/10] overflow-hidden">
                      <Image
                        src={featuredDishes[2].image}
                        alt={featuredDishes[2].name}
                        width={940}
                        height={650}
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-serif text-xl text-cream font-500">{featuredDishes[2].name}</h3>
                      <p className="mt-1 text-sm text-cream/80">{featuredDishes[2].desc}</p>
                    </div>
                  </Link>
                </Reveal>
              </div>
            </div>

            <Reveal className="mt-12 text-center" delay={400}>
              <Link
                href="/cardapio"
                className="group inline-flex items-center gap-2 text-olive font-medium text-sm uppercase tracking-widest transition-colors hover:text-gold"
              >
                Ver cardápio completo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE SECTION — olive background */}
        <section className="bg-olive py-24 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Text */}
              <Reveal>
                <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                  A Experiência
                </p>
                <h2 className="font-serif text-4xl font-500 text-cream md:text-5xl text-balance leading-tight">
                  Uma casa para almoçar, jantar e voltar
                </h2>
                <div className="mt-6 h-px w-16 bg-gold" />
                <p className="mt-6 text-cream/80 leading-relaxed">
                  Ambiente aconchegante, casual e ao mesmo tempo sofisticado.
                  Mesas internas e externas, música ao vivo e uma carta de vinhos
                  pensada para acompanhar cada momento.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { icon: Music, label: 'Música ao vivo' },
                    { icon: Wine, label: 'Carta de vinhos' },
                    { icon: UtensilsCrossed, label: 'Almoço e jantar' },
                    { icon: Clock, label: 'Mesas externas' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 border border-gold/30">
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="text-sm text-cream/90">{item.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/a-casa"
                  className="mt-10 group inline-flex items-center gap-2 text-gold font-medium text-sm uppercase tracking-widest transition-colors hover:text-cream"
                >
                  Conhecer a casa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>

              {/* Image */}
              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-sm">
                  <div className="aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/Screenshot_57 copy.png"
                      alt="Interior aconchegante do restaurante"
                      width={800}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CRAFT SECTION */}
        <section className="bg-cream-light py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image */}
              <Reveal>
                <div className="relative overflow-hidden rounded-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/Screenshot_55 copy.png"
                      alt="Mãos preparando massa fresca com farinha"
                      width={1000}
                      height={750}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Text */}
              <Reveal delay={200}>
                <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                  O Ofício
                </p>
                <h2 className="font-serif text-4xl font-500 text-olive md:text-5xl text-balance leading-tight">
                  Feito à mão, todos os dias
                </h2>
                <div className="mt-6 h-px w-16 bg-gold" />
                <p className="mt-6 text-charcoal/70 leading-relaxed">
                  A massa fresca é o coração da casa. Preparada artesanalmente,
                  com técnica e cuidado, cada lote reflete o compromisso com a
                  qualidade e o sabor que definem a cozinha autoral do Pasta a
                  Mano.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    'Massa fresca feita à mão diariamente',
                    'Ingredientes selecionados com critério',
                    'Receitas autorais com personalidade',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      <span className="text-sm text-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RESERVATION CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Screenshot_57 copy.png"
              alt="Mesa elegante com taças de vinho"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-olive/85" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center md:py-32">
            <Reveal>
              <p className="text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
                Reservas
              </p>
              <h2 className="font-serif text-4xl font-500 text-cream md:text-5xl text-balance">
                Reserve sua mesa
              </h2>
              <div className="mt-6 h-px w-16 bg-gold mx-auto" />
              <p className="mt-6 text-cream/80 leading-relaxed">
                Entre em contato pelo WhatsApp ou telefone para garantir seu
                lugar. Almoço e jantar, de segunda a sábado das 11h às 23h, e
                domingo das 11h às 16h.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-gold-light hover:shadow-xl"
                >
                  <Phone className="h-4 w-4" />
                  Reservar pelo WhatsApp
                </a>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:border-gold hover:bg-cream/10"
                >
                  {restaurant.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LOCATION PREVIEW */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              <Reveal>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 border border-olive/20">
                    <MapPin className="h-6 w-6 text-olive" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-500 text-olive">Endereço</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{restaurant.address.full}</p>
                  <a
                    href={restaurant.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm text-gold hover:underline"
                  >
                    Abrir no mapa →
                  </a>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 border border-olive/20">
                    <Clock className="h-6 w-6 text-olive" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-500 text-olive">Horários</h3>
                  <p className="mt-2 text-sm text-charcoal/70">Segunda a Sábado: 11h às 23h</p>
                  <p className="text-sm text-charcoal/70">Domingo: 11h às 16h</p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 border border-olive/20">
                    <Phone className="h-6 w-6 text-olive" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-500 text-olive">Contato</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{restaurant.phoneDisplay}</p>
                  <a
                    href={restaurant.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm text-gold hover:underline"
                  >
                    {restaurant.instagramHandle} →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
