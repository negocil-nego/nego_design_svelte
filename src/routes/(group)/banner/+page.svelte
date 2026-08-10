<script lang="ts">
  import { BannerNotification } from "negodesign";
</script>

<div class="flex flex-col gap-4">
  <BannerNotification
    strongText="GeneriCon 2023"
    description="Join us in Denver from June 7 – 9 to see what's coming next."
    ctaText="Register now"
    ctaHref="#"
    onDismiss={() => console.log("dismiss")}
  />

  <BannerNotification
    strongText="Negoturismo"
    description="Nova funcionalidade disponível: reserve agora os seus voos e hospedagens em um só lugar."
    ctaText="Experimentar"
    onCtaClick={() => console.log("cta clicked")}
    onDismiss={() => console.log("dismiss")}
  />

  <BannerNotification
    description="Aviso importante: manutenção programada para amanhã das 2h às 5h."
    onDismiss={() => console.log("dismiss")}
  />
</div>
