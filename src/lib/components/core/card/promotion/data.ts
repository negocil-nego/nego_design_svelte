import { GlobalIcon, MapPin, NecklaceIcon } from "@hugeicons/core-free-icons";
import type { CardPromotionProps } from "../types";

const items: CardPromotionProps[] = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Hotel Baía Azul',
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isFavorite: true,
        newPrice: 1000,
        oldPrice: 2000,
        buttonBuyText: 'Comprar',
        onClickBuy: () => alert('Comprar'),
        onClickShop: (id: string | number) => alert(`Shop ${id}`),
        isCart: true,
        tags: [
            { icon: GlobalIcon, text: 'Luanda', },
            { icon: MapPin, text: 'Kilamba', },
            { icon: NecklaceIcon, text: 'Rua 19', },
        ]
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Miramar Suites',
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        newPrice: 1000,
        oldPrice: 2000,
        buttonBuyText: 'Comprar',
        onClickBuy: (id: string | number) => alert(`Buy ${id}`),
        onClickShop: (id: string | number) => alert(`Shop ${id}`),
        isCart: true,
        tags: [
            { icon: GlobalIcon, text: 'Luanda', },
            { icon: MapPin, text: 'Kilamba', },
            { icon: NecklaceIcon, text: 'Rua 19', },
        ]
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Palm Resort & Spa',
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isFavorite: true,
        newPrice: 1000,
        oldPrice: 2000,
        buttonBuyText: 'Comprar',
        onClickBuy: (id: string | number) => alert(`Buy ${id}`),
        onClickShop: (id: string | number) => alert(`Shop ${id}`),
        isCart: true,
        tags: [
            { icon: GlobalIcon, text: 'Luanda', },
            { icon: MapPin, text: 'Kilamba', },
            { icon: NecklaceIcon, text: 'Rua 19', },
        ]
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Hotel Central Park',
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        newPrice: 1000,
        oldPrice: 2000,
        buttonBuyText: 'Comprar',
        onClickBuy: (id: string | number) => alert(`Buy ${id}`),
        onClickShop: (id: string | number) => alert(`Shop ${id}`),
        isCart: true,
        tags: [
            { icon: GlobalIcon, text: 'Luanda', },
            { icon: MapPin, text: 'Kilamba', },
            { icon: NecklaceIcon, text: 'Rua 19', },
        ]
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Villa Serena Boutique',
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isFavorite: true,
        newPrice: 1000,
        oldPrice: 2000,
        buttonBuyText: 'Comprar',
        onClickBuy: (id: string | number) => alert(`Buy ${id}`),
        onClickShop: (id: string | number) => alert(`Shop ${id}`),
        isCart: true,
        tags: [
            { icon: GlobalIcon, text: 'Luanda', },
            { icon: MapPin, text: 'Kilamba', },
            { icon: NecklaceIcon, text: 'Rua 19', },
        ]
    },
];

export default items;