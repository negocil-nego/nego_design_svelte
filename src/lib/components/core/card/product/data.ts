import { GlobalIcon, MapPin, NecklaceIcon } from "@hugeicons/core-free-icons";
import type { CardProductProps } from "../types";

const items: CardProductProps[] = [
  {
    id: 1,
    //imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hotel Baía Azul",
    content:
      "Acomodação premium de frente para o mar com quartos luxuosos, restaurante internacional, piscina aquecida e serviço de transfer exclusivo para hóspedes.",
    isFavorite: true,
    price: "45.000 Kz",
    buttonBuyText: "Comprar",
    onClickBuy: (id: string | number) => alert(`Comprar produto ${id}`),
    onClickShop: (id: string | number) => alert(`Adicionar ao carrinho ${id}`),
    isCart: true,
    tags: [
      { icon: GlobalIcon, text: "Luanda" },
      { icon: MapPin, text: "Ilha do Cabo" },
      { icon: NecklaceIcon, text: "Frente ao Mar" },
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop",
    title: "Miramar Suites",
    content:
      "Suítes executivas com vista panorâmica da baía, internet de alta velocidade, pequeno-almoço buffet incluído e centro de conferências moderno.",
    isFavorite: false,
    price: "38.500 Kz",
    buttonBuyText: "Comprar",
    onClickBuy: (id: string | number) => alert(`Comprar produto ${id}`),
    onClickShop: (id: string | number) => alert(`Adicionar ao carrinho ${id}`),
    isCart: true,
    tags: [
      { icon: GlobalIcon, text: "Luanda" },
      { icon: MapPin, text: "Miramar" },
      { icon: NecklaceIcon, text: "Executivo" },
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop",
    title: "Palm Resort & Spa",
    content:
      "Resort paradisíaco rodeado por palmeiras com spa completo, campos de ténis, atividades infantis e acesso privativo à praia.",
    isFavorite: true,
    price: "52.000 Kz",
    buttonBuyText: "Comprar",
    onClickBuy: (id: string | number) => alert(`Comprar produto ${id}`),
    onClickShop: (id: string | number) => alert(`Adicionar ao carrinho ${id}`),
    isCart: true,
    tags: [
      { icon: GlobalIcon, text: "Benguela" },
      { icon: MapPin, text: "Baía Farta" },
      { icon: NecklaceIcon, text: "Spa & Lazer" },
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop",
    title: "Hotel Central Park",
    content:
      "Localização privilegiada no coração financeiro da cidade, perfeito para viagens de negócios e turismo cultural.",
    isFavorite: false,
    price: "29.900 Kz",
    buttonBuyText: "Comprar",
    onClickBuy: (id: string | number) => alert(`Comprar produto ${id}`),
    onClickShop: (id: string | number) => alert(`Adicionar ao carrinho ${id}`),
    isCart: true,
    tags: [
      { icon: GlobalIcon, text: "Huambo" },
      { icon: MapPin, text: "Centro" },
      { icon: NecklaceIcon, text: "Urbano" },
    ],
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop",
    title: "Villa Serena Boutique",
    content:
      "Charme e tranquilidade num ambiente intimista com arquitetura rústica, piscina infinita e gastronomia regional selecionada.",
    isFavorite: true,
    price: "60.000 Kz",
    buttonBuyText: "Comprar",
    onClickBuy: (id: string | number) => alert(`Comprar produto ${id}`),
    onClickShop: (id: string | number) => alert(`Adicionar ao carrinho ${id}`),
    isCart: true,
    tags: [
      { icon: GlobalIcon, text: "Namibe" },
      { icon: MapPin, text: "Praia Amélia" },
      { icon: NecklaceIcon, text: "Boutique" },
    ],
  },
];

export default items;