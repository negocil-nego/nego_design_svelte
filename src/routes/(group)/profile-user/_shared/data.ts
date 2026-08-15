import type { ProfileUserData } from "$lib/components/pages/profile-user/types";

export const userData: ProfileUserData = {
  id: 1,
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
  bannerUrl:
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop",
  firstName: "Helena",
  lastName: "Gaspar",
  fullName: "Helena Gaspar",
  email: "helena.gaspar@example.com",
  phone: "+244 923 456 789",
  role: "Administrador de Turismo",
  status: "Ativo",
  username: "helenagaspar",
  location: "Luanda, Angola",
  addresses: [
    {
      id: 1,
      label: "Residência Principal",
      street: "Rua Comandante Gika, 150",
      apartment: "Apt 4B",
      state: "Luanda",
      zip: "1000",
      isDefault: true,
    },
    {
      id: 2,
      label: "Escritório Kilamba",
      street: "Avenida 21 de Janeiro, Bloco C",
      apartment: "Sala 12",
      state: "Luanda",
      zip: "1020",
      isDefault: false,
    },
  ],
  notificationPref: {
    emailEnabled: true,
    webEnabled: true,
    appEnabled: false,
  },
  enableNotification: {
    email: true,
    web: true,
    app: true,
  },
  marketingPrefs: [
    {
      id: "promotions",
      label: "Promoções e Ofertas Exclusivas",
      email: true,
      push: true,
    },
    {
      id: "newsletter",
      label: "Newsletter Semanal de Turismo",
      email: true,
      push: false,
    },
    {
      id: "updates",
      label: "Novidades e Atualizações da Plataforma",
      email: false,
      push: true,
    },
  ],
};
