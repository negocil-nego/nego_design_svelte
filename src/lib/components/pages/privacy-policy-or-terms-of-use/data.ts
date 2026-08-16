import type { DocPageData } from "./types";

export const privacyPolicyData: DocPageData = {
  title: "Política de Privacidade e Termos de Uso",
  lastUpdated: "15 de Agosto de 2026",
  breadcrumb: [
    { label: "Início", href: "/" },
    { label: "Institucional", href: "#" },
    { label: "Termos & Privacidade" },
  ],
  sections: [
    {
      id: "introducao",
      number: "1",
      title: "Introdução",
      level: 1,
      blocks: [
        {
          type: "paragraph",
          text: "Bem-vindo à plataforma Negoturismo. A sua privacidade e a transparência nas relações com os nossos utilizadores, parceiros e clientes são valores fundamentais para a nossa organização.",
        },
        {
          type: "paragraph",
          text: "Este documento estabelece as diretrizes de utilização da plataforma digital Negoturismo, bem como as políticas de recolha, tratamento e proteção dos dados pessoais fornecidos durante o acesso aos nossos serviços turísticos, reservas de hotelaria, voos e contratação de guias e tradutores.",
        },
      ],
      subsections: [
        {
          id: "aceitacao-termos",
          number: "1.1",
          title: "Aceitação dos Termos",
          level: 2,
          blocks: [
            {
              type: "paragraph",
              text: "Ao aceder, navegar ou utilizar qualquer funcionalidade do portal Negoturismo, o utilizador declara expressamente que leu, compreendeu e concorda com todas as disposições aqui estipuladas.",
            },
            {
              type: "list",
              items: [
                "Utilizadores registados têm acesso a funcionalidades exclusivas de gestão de reservas.",
                "Parceiros comerciais e fornecedores de serviços sujeitam-se ainda aos contratos específicos de afiliação.",
                "O uso continuado da plataforma após eventuais alterações implica aceitação tácita das novas condições.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "recolha-dados",
      number: "2",
      title: "Recolha e Tratamento de Dados Pessoais",
      level: 1,
      blocks: [
        {
          type: "paragraph",
          text: "Para garantir a prestação eficaz dos nossos serviços e proporcionar uma experiência personalizada, recolhemos dados necessários para processamento de pagamentos, validação de identidade e emissão de vouchers de viagem.",
        },
      ],
      subsections: [
        {
          id: "dados-fornecidos",
          number: "2.1",
          title: "Dados Fornecidos Diretamente",
          level: 2,
          blocks: [
            {
              type: "list",
              items: [
                "Nome completo, número de identificação civil ou passaporte.",
                "Endereço de correio eletrónico, número de telefone e morada de faturação.",
                "Informações de pagamento (processadas de forma encriptada através de gateways certificados).",
                "Preferências de viagem, itinerários e histórico de reservas efetuadas.",
              ],
            },
          ],
        },
        {
          id: "finalidade-tratamento",
          number: "2.2",
          title: "Finalidades do Tratamento",
          level: 2,
          blocks: [
            {
              type: "paragraph",
              text: "Os dados recolhidos destinam-se exclusivamente às seguintes finalidades legítimas:",
            },
            {
              type: "list",
              items: [
                "Processamento e confirmação de reservas junto a companhias aéreas, hotéis e parceiros locais.",
                "Comunicação com o cliente sobre alterações de voos, confirmações e avisos de suporte ao cliente.",
                "Prevenção contra fraudes e garantia da segurança operacional da plataforma.",
                "Envio de ofertas e recomendações personalizadas quando previamente autorizado pelo utilizador.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "reservas-pagamentos",
      number: "3",
      title: "Reservas, Preços e Pagamentos",
      level: 1,
      blocks: [
        {
          type: "paragraph",
          text: "Todas as transações financeiras efetuadas na plataforma são expressas na moeda indicada no momento da compra (Kwanza - AOA ou moeda estrangeira correspondente) e incluem todas as taxas aplicáveis por lei.",
        },
        {
          type: "list",
          items: [
            "A confirmação da reserva está sujeita à validação do pagamento pela instituição financeira emissora.",
            "Preços e disponibilidades de quartos e voos são dinâmicos e sujeitos a alteração até à finalização da compra.",
            "O cliente é responsável pela verificação da exatidão dos dados antes da confirmação do pagamento.",
          ],
        },
      ],
    },
    {
      id: "cancelamentos-reembolsos",
      number: "4",
      title: "Cancelamentos e Reembolsos",
      level: 1,
      blocks: [
        {
          type: "paragraph",
          text: "As condições de cancelamento, alteração de datas e direito a reembolso variam de acordo com as políticas individuais de cada fornecedor de serviços (hotel, companhia aérea, operadora de turismo).",
        },
        {
          type: "list",
          items: [
            "Tarifas não-reembolsáveis não conferem direito à devolução dos valores pagos em caso de desistência.",
            "Pedidos de cancelamento dentro do prazo legal são processados num prazo estimado de 5 a 15 dias úteis.",
            "Eventuais taxas administrativas de intermediação poderão ser deduzidas do montante a reembolsar conforme o regulamento da tarifa.",
          ],
        },
      ],
    },
    {
      id: "seguranca-cookies",
      number: "5",
      title: "Segurança da Informação e Cookies",
      level: 1,
      blocks: [
        {
          type: "paragraph",
          text: "Implementamos protocolos de segurança modernos, incluindo encriptação TLS/SSL e padrões de controlo de acesso rigorosos para proteger os seus dados contra acessos não autorizados, perda ou destruição.",
        },
        {
          type: "paragraph",
          text: "Utilizamos cookies de sessão e analíticos para melhorar a navegação, memorizar preferências e compreender como os nossos serviços são utilizados pelos visitantes.",
        },
      ],
    },
    {
      id: "contacto-suporte",
      number: "6",
      title: "Contactos e Apoio ao Cliente",
      level: 1,
      blocks: [
        {
          type: "paragraph",
          text: "Caso tenha qualquer dúvida sobre esta Política de Privacidade ou pretenda exercer os seus direitos de acesso, retificação ou eliminação de dados, contacte a nossa equipa de encarregados de proteção de dados:",
        },
        {
          type: "list",
          items: [
            "E-mail: privacidade@negoturismo.ao",
            "Suporte Geral: suporte@negoturismo.ao",
            "Telefone: +244 923 000 000 / +244 945 000 000",
            "Endereço: Luanda, Angola",
          ],
        },
      ],
    },
  ],
};

export default privacyPolicyData;
