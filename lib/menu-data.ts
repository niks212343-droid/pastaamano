export interface MenuCategory {
  id: string;
  label: string;
  intro: string;
}

export const menu: MenuCategory[] = [
  {
    id: 'massas',
    label: 'Massas',
    intro: 'A cozinha do Pasta a Mano tem a massa artesanal como protagonista.',
  },
  {
    id: 'entradas',
    label: 'Entradas',
    intro: 'Começos para compartilhar ou abrir a sua experiência à mesa.',
  },
  {
    id: 'sobremesas',
    label: 'Sobremesas',
    intro: 'Finalizações doces para encerrar a refeição com calma.',
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    intro: 'Carta de vinhos, café, coquetéis e outras opções para acompanhar.',
  },
];
