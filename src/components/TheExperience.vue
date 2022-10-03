<template>
  <section id="experience" class="bg-[#343434] pt-36 pb-32 dark:bg-dark">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold text-primary">Experience</h4>
          <h2 class="mb-4 text-3xl font-bold text-slate-200">My Experience</h2>
        </div>
      </div>
      <div class="w-full px-4">
        <div class="flex flex-wrap items-center justify-center">
          <img
            src="../assets/img/experience/html.svg"
            alt="html"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/css3.svg"
            alt="css"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/javascript.svg"
            alt="javascript"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/bootstrap.svg"
            alt="bootstrap"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/tailwind-css-icon.svg"
            alt="tailwind"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/react.svg"
            alt="react"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/vue.svg"
            alt="vue"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
          <img
            src="../assets/img/experience/wordpress.svg"
            alt="vue"
            class="mx-7 max-w-[140px] py-8 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-8 lg:max-w-[200px] lg:py-8"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import html from "../assets/img/experience/html.svg";
import css from "../assets/img/experience/css3.svg";
import javascript from "../assets/img/experience/javascript.svg";
import bootstrap from "../assets/img/experience/bootstrap.svg";
import taildwind from "../assets/img/experience/tailwind-css-icon.svg";
import react from "../assets/img/experience/react.svg";
import vue from "../assets/img/experience/vue.svg";
import wordpress from "../assets/img/experience/wordpress.svg";
export default {
  data() {
    return {
      images: [
        {
          id: "html",
          title: "html",
          file: html,
        },
        {
          id: "css",
          title: "css",
          file: css,
        },
        {
          id: "javascript",
          title: "javascript",
          file: javascript,
        },
        {
          id: "bootstrap",
          title: "bootstrap",
          file: bootstrap,
        },
        {
          id: "tailwind",
          title: "tailwind",
          file: taildwind,
        },
        {
          id: "react",
          title: "react",
          file: react,
        },
        {
          id: "vue",
          title: "vue",
          file: vue,
        },
        {
          id: "wordpress",
          title: "wordpress",
          file: wordpress,
        },
      ],
    };
  },
};
</script>
