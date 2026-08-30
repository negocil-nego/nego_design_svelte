<script lang="ts">
  import { CtaCardImageBanner, NotificationBanner } from "$lib";
</script>

<div class="flex flex-col gap-4">
  <CtaCardImageBanner
    title="Aumente a sua produtividade. Comece a usar a nossa app hoje."
    description="Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."
    primaryText="Começar agora"
    primaryHref="#"
    secondaryText="Saber mais"
    secondaryHref="#"
    imageSrc="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
    imageAlt="Captura da app"
  />

  <CtaCardImageBanner
    title="Negoturismo — Viaje sem limites."
    description="Reserve voos, hotéis e explore destinos incríveis com apoio de guias e tradutores locais."
    primaryText="Explorar destinos"
    onClickPrimary={() => console.log("/destinos")}
    secondaryText="Falar com um guia"
    secondaryHref="/guias"
    imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    imageAlt="Destino turístico"
  />

  <NotificationBanner
    strongText="GeneriCon 2023"
    description="Join us in Denver from June 7 – 9 to see what's coming next."
    ctaText="Register now"
    ctaHref="#"
    onDismiss={() => console.log("dismiss")}
  />

  <NotificationBanner
    strongText="Negoturismo"
    description="Nova funcionalidade disponível: reserve agora os seus voos e hospedagens em um só lugar."
    ctaText="Experimentar"
    onCtaClick={() => console.log("cta clicked")}
    onDismiss={() => console.log("dismiss")}
  />

  <NotificationBanner
    description="Aviso importante: manutenção programada para amanhã das 2h às 5h."
    onDismiss={() => console.log("dismiss")}
  />
</div>
