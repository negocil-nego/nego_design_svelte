import { GlobalIcon, MapPin, NecklaceIcon } from "@hugeicons/core-free-icons";
import type { CardProfileProps } from "../types";

const items: CardProfileProps[] = [
    {
        id: 1,
        logo: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        title: 'Hotel Baía Azul',
        content: 'Hotel à beira-mar com vista panorâmica sobre a baía, piscina infinita e restaurante gastronómico. Resort tropical rodeado de jardins, com acesso direto à praia e atividades para toda a família Resort tropical rodeado de jardins, com acesso direto à praia e atividades para toda a família',
        startNumber: 5,
        startMax: 5,
        isFavorite: true,
        imageUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        videoUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        tags: [
            {
                icon: GlobalIcon,
                text: 'Luanda',
            },
            {
                icon: MapPin,
                text: 'Kilamba',
            },
            {
                icon: NecklaceIcon,
                text: 'Rua 19',
            },
        ],
    },
    {
        id: 2,
        logo: 'https://api.dicebear.com/9.x/initials/svg?seed=Miramar%20Suites&backgroundColor=1a2420&textColor=e3b563',
        title: 'Miramar Suites',
        content: 'Suítes modernas no coração da cidade, com spa completo e serviço de quarto 24 horas.',
        startNumber: 4,
        startMax: 5,
        imageUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        videoUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        tags: [
            {
                icon: GlobalIcon,
                text: 'Benguela',
            },
            {
                icon: MapPin,
                text: 'Catumbela',
            },
            {
                icon: GlobalIcon,
                text: 'Luanda',
            },
            {
                icon: MapPin,
                text: 'Kilamba',
            },
        ],
    },
    {
        id: 3,
        logo: 'https://api.dicebear.com/9.x/initials/svg?seed=Palm%20Resort&backgroundColor=1a2420&textColor=e3b563',
        title: 'Palm Resort & Spa',
        content: 'Resort tropical rodeado de jardins, com acesso direto à praia e atividades para toda a família.',
        startNumber: 5,
        startMax: 5,
        isFavorite: true,
        imageUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        videoUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        tags: [
            {
                icon: GlobalIcon,
                text: 'Huíla',
            },
            {
                icon: MapPin,
                text: 'Huíla',
            },
        ],
    },
    {
        id: 4,
        logo: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Central%20Park&backgroundColor=1a2420&textColor=e3b563',
        title: 'Hotel Central Park',
        content: 'Localização privilegiada no centro urbano, ideal para viagens de negócios, com centro de conferências.',
        startNumber: 3,
        startMax: 5,
        imageUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        videoUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        tags: [

            {
                icon: NecklaceIcon,
                text: 'Rua 19',
            },
            {
                icon: GlobalIcon,
                text: 'Luanda',
            },
            {
                icon: MapPin,
                text: 'Kilamba',
            },
            {
                icon: NecklaceIcon,
                text: 'Rua 19',
            },
        ]
    },
    {
        id: 5,
        logo: 'https://api.dicebear.com/9.x/initials/svg?seed=Villa%20Serena&backgroundColor=1a2420&textColor=e3b563',
        title: 'Villa Serena Boutique',
        content: 'Boutique hotel intimista com decoração exclusiva, café da manhã artesanal e vista para as montanhas.',
        startNumber: 4,
        startMax: 5,
        isFavorite: true,
        imageUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
        videoUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=Hotel%20Baía%20Azul&backgroundColor=1a2420&textColor=e3b563',
    },
];

export default items;