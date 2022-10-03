<template>
  <section id="certificate" class="bg-light pt-36 pb-32 dark:bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold text-primary">Certificates</h4>
          <h2 class="mb-4 text-3xl font-bold text-slate-700 dark:text-light">
            My Certificates
          </h2>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div
          class="w-full px-4 lg:w-1/2 xl:w-1/3"
          v-for="certificate in certificates"
          :key="certificate.id"
        >
          <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
            <img
              :src="certificate.image"
              :alt="certificate.altImage"
              class="w-full"
            />
            <div class="py-8 px-6">
              <h3 class="text-xl font-semibold">
                {{ certificate.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import frontend from "../assets/img/certificate/front-end.png";
import react from "../assets/img/certificate/react.png";
import sass from "../assets/img/certificate/sass.png";
import wordpress from "../assets/img/certificate/wordpress.png";
import web from "../assets/img/certificate/web.png";
import javascript from "../assets/img/certificate/javascript.jpg";
export default {
  data() {
    return {
      certificates: [
        {
          id: "javascript",
          title: "Belajar Dasar Pemrograman Javascript",
          altImage: "javascript",
          image: javascript,
        },
        {
          id: "web",
          title: "Belajar Dasar Pemrograman Web",
          altImage: "web",
          image: web,
        },
        {
          id: "frontend",
          title: "Belajar Membuat Front-End Pemula",
          altImage: "frontend",
          image: frontend,
        },
        {
          id: "sass",
          title: "SASS Workshop: Design Website",
          altImage: "sass",
          image: sass,
        },
        {
          id: "react",
          title: "Fullstack JavaScript Developer",
          altImage: "react",
          image: react,
        },
        {
          id: "wordpress",
          title: "Kelas Wordpress Dari Dasar Hingga Mahir",
          altImage: "wordpress",
          image: wordpress,
        },
      ],
    };
  },
};
</script>
