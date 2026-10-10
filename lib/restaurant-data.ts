export const restaurant = {
  name: "Pasta a Mano",
  tagline: "cozinha autoral",
  phone: "+55 24 99931-5969",
  phoneDisplay: "+55 24 99931-5969",
  whatsapp: "5524999315969",
  instagram: "https://www.instagram.com/pastaamanovr/",
  instagramHandle: "@pastaamanovr",
  address: {
    street: "Rua Vinte e Sete, 54",
    neighborhood: "Vila Santa Cecília",
    city: "Volta Redonda",
    state: "RJ",
    full: "Rua Vinte e Sete, 54, Vila Santa Cecília, Volta Redonda — RJ",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pasta+a+Mano+Rua+Vinte+e+Sete+54+Volta+Redonda+RJ",
  hours: [
    { day: "Segunda", time: "11h às 23h" },
    { day: "Terça", time: "11h às 23h" },
    { day: "Quarta", time: "11h às 23h" },
    { day: "Quinta", time: "11h às 23h" },
    { day: "Sexta", time: "11h às 23h" },
    { day: "Sábado", time: "11h às 23h" },
    { day: "Domingo", time: "11h às 16h" },
  ],
  accessibility: [
    "Entrada acessível para cadeira de rodas",
    "Banheiro acessível para cadeira de rodas",
  ],
  services: [
    "Mesas externas",
    "Refeição no local",
    "Opção para viagem",
    "Reservas para almoço e jantar",
  ],
  meals: [
    "Almoço",
    "Jantar",
    "Sobremesas",
    "Possibilidade de comer a sós",
  ],
  drinks: [
    "Carta de vinhos",
    "Bebidas alcoólicas e destiladas",
    "Cerveja",
    "Café",
    "Coquetéis",
    "Música ao vivo",
  ],
  payments: [
    "Cartões de crédito",
    "Cartões de débito",
    "Pagamentos móveis via NFC",
    "Pluxee",
    "Ticket Restaurante",
    "Vale-refeição",
  ],
  families: [
    "Cardápio infantil",
    "Cadeirinhas altas para crianças",
  ],
  parking: [
    "Estacionamento gratuito na rua",
    "Pode ser difícil encontrar uma vaga",
  ],
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "A Casa", href: "/a-casa" },
  { label: "Reservas", href: "/reservas" },
];
