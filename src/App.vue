<script>
import ThePortfolio from "./components/ThePortfolio.vue";
import TheExperience from "./components/TheExperience.vue";
import TheCertificate from "./components/TheCertificate.vue";
import TheContact from "./components/TheContact.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHero from "./components/TheHero.vue";
import TheHeader from "./components/TheHeader.vue";
import TheParticles from "./components/TheParticles.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
  components: {
    TheHeader,
    TheHero,
    ThePortfolio,
    TheExperience,
    TheCertificate,
    TheContact,
    TheFooter,
    TheParticles,
    ScrollToTop,
  },
};
</script>

<template>
  <a
    href="#home"
    id="to-top"
    class="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-bounce"
  >
    <span class="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
  </a>
  <the-particles></the-particles>
  <the-header></the-header>
  <the-hero></the-hero>
  <the-portfolio></the-portfolio>
  <the-experience></the-experience>
  <the-certificate></the-certificate>
  <the-contact></the-contact>
  <the-footer></the-footer>
</template>
