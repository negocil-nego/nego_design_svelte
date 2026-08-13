import type { ProductDetailsData } from "$lib/components/pages/product-details/types";

export const productData: ProductDetailsData = {
  id: 1,
  breadcrumb: [
    { label: "Início", href: "/" },
    { label: "Turismo", href: "/turismo" },
    { label: "Hotel Baía Azul" },
  ],
  title: "Hotel Baía Azul",
  subtitle: "Luanda, Kilamba — Rua 19",
  description:
    "Um hotel à beira-mar com vistas panorâmicas para a baía, quartos espaçosos e serviços premium. A experiência ideal para relaxar e explorar a cidade.",
  longDescription:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  tags: [
    { text: "Luanda" },
    { text: "Kilamba" },
    { text: "Rua 19" },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
      alt: "Praia e mar",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop",
      alt: "Piscina do hotel",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1170&auto=format&fit=crop",
      alt: "Quarto do hotel",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop",
      alt: "Restaurante",
    },
  ],
  location: {
    label: "Luanda, Kilamba",
    address: "Rua 19, Kilamba, Luanda",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=13.2292%2C-8.8486%2C13.2462%2C-8.8339&layer=mapnik&marker=-8.8412%2C13.2377",
  },
  rating: 4.5,
  reviewsCount: 120,
  reviews: [
    {
      id: 1,
      author: "Ana Silva",
      rating: 5,
      date: "12 Jul 2026",
      comment:
        "Excelente atendimento e vistas incríveis. Recomendo o pequeno-almoço com vista para a baía.",
    },
    {
      id: 2,
      author: "Carlos Ndalu",
      rating: 4,
      date: "3 Jul 2026",
      comment:
        "Quartos confortáveis e localização perfeita. O Wi-Fi podia ser mais rápido.",
    },
    {
      id: 3,
      author: "Maria Fernandes",
      rating: 5,
      date: "28 Jun 2026",
      comment:
        "Voltarei com certeza. Equipa muito profissional e ambiente tranquilo.",
    },
  ],
  newPrice: 1000,
  oldPrice: 2000,
  currency: "Kz",
  buttonBuyText: "Comprar",
  isFavorite: true,
  features: [
    "Pequeno-almoço incluído",
    "Wi-Fi gratuito em todo o hotel",
    "Piscina exterior e acesso à praia",
    "Serviço de quarto 24 horas",
  ],
};
