<template>
  <section id="portfolio" class="bg-[#EEE3CB] pt-36 pb-16 dark:bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-4 text-lg font-semibold text-primary">Portfolio</h4>
          <h2 class="mb-4 text-3xl font-bold text-slate-700 dark:text-light">
            My Project
          </h2>
        </div>
      </div>
      <div class="flex w-full flex-wrap justify-center px-4">
        <div
          class="mb-12 pl-6 md:w-1/2"
          v-for="portfolio in portfolios"
          :key="portfolio.id"
        >
          <a :href="portfolio.url" target="_blank">
            <div class="overflow-hidden rounded-md shadow-md">
              <img :src="portfolio.image" alt="admin" class="w-full" />
            </div>
            <h3
              class="mt-5 mb-3 text-xl font-semibold text-slate-700 dark:text-light"
            >
              {{ portfolio.title }}
            </h3>
            <p class="text-base font-medium text-slate-700 dark:text-light">
              {{ portfolio.description }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portfolio1 from "../assets/img/portfolio/1.png";
import portfolio2 from "../assets/img/portfolio/2.png";
import portfolio3 from "../assets/img/portfolio/3.png";
import portfolio4 from "../assets/img/portfolio/4.png";
export default {
  data() {
    return {
      portfolios: [
        {
          id: "admin",
          title: "Website Admin Staycation",
          description:
            "create a staycation admin website using HTML CSS Framework Bootstrap Javascript",
          image: portfolio1,
          url: "https://admin-staycation5.herokuapp.com/",
        },
        {
          id: "bootstrap",
          title: "Website Portfolio Bootstrap",
          description:
            "create a website portfolio with css Framework Bootstrap",
          image: portfolio2,
          url: "https://adin-pramudya.netlify.app/",
        },
        {
          id: "staycation",
          title: "Website Staycation",
          description:
            "create a website staycation with React JS and CSS Preprocessor",
          image: portfolio3,
          url: "https://staycation-house.netlify.app/",
        },
        {
          id: "e-commerce",
          title: "E-Commerce Furniture",
          description: "create a website e-commerce with wordpress",
          image: portfolio4,
          url: "https://dinamikainti.com/",
        },
      ],
    };
  },
};
</script>
