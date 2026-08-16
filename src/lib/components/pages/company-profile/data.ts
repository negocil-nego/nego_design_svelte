import type { CompanyProfileData } from "./types";
import ImgPlaceholder from "$lib/assets/placeholder-image.png";
import VideoPlaceholder from "$lib/assets/lonely-404.mp4";

export const defaultCompanyProfileData: CompanyProfileData = {
  id: "cartaplast",
  banner: {
    coverImages: [
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        alt: "Armazém de bobinas e logística Cartaplast",
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        alt: "Linha de produção industrial de embalagens",
      },
    ],
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
    name: "Hotel empanados S.A",
    countryLabel: "Angola",
    countryFlag: "🇦🇴",
    contactLabel: "Contactar fábrica",
    stats: [
      { label: "Setor de atuação", value: "Papel e Embalagens" },
      { label: "Anos de Atuação", value: "8+ Anos" },
      { label: "Número de Funcionários", value: "51 - 100 Funcionários" },
      { label: "Localização", value: "Polo Industrial da Catumbela, Benguela" },
    ],
  },
  about: {
    image:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Instalações industriais da fábrica Cartaplast",
    title: "Sobre a CARTAPLAST",
    paragraphs: [
      "A Cartaplast é uma empresa de referência em Angola, especializada na fabricação de cartão canelado, caixas de papelão e soluções sustentáveis de embalagens industriais, localizada estrategicamente no Polo de Desenvolvimento Industrial da Catumbela (PDIC), na província de Benguela.",
      "A nossa capacidade instalada e tecnologia de ponta proporcionam total flexibilidade na produção de múltiplos modelos e dimensões de caixas com impressão personalizada de alta precisão, agregando valor e identidade à marca de cada parceiro.",
      "Com rigorosos padrões de controlo de qualidade e foco na sustentabilidade, atendemos com excelência os setores da Indústria Pesqueira, Agroalimentar, Avicultura, Bebidas, Farmacêutica, Distribuição e Comércio Geral em todo o país.",
    ],
  },
  gallery: {
    title: "Galeria",
    images: [
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        alt: "Linha de produção automatizada de caixas",
        type: "image",
      },
      {
        src: VideoPlaceholder,
        alt: "Vídeo institucional e processo de fabrico",
        type: "video",
      },
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        alt: "Armazém de matéria-prima e bobinas de papel",
        type: "image",
      },
      {
        src: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
        alt: "Maquinaria de corte e vincagem",
        type: "image",
      },
      {
        src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
        alt: "Área de expedição e embalamento final",
        type: "image",
      },
    ],
  },
};
