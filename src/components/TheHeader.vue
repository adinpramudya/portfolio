<template>
  <header
    class="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <a href="#home" class="block py-4 text-lg font-bold text-primary"
            >AdindaPramudya</a
          >
        </div>
        <div class="flex items-center px-4">
          <button
            @click="hamburger"
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 block lg:hidden"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
            ></span>
          </button>

          <nav
            id="nav-menu"
            class="absolute top-full right-4 hidden w-full max-w-[250px] rounded-lg bg-light py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  href="#home"
                  class="mx-8 flex py-2 text-base text-slate-700 group-hover:text-primary dark:text-light"
                  >Home</a
                >
              </li>
              <li class="group">
                <a
                  href="#portfolio"
                  class="mx-8 flex py-2 text-base text-slate-700 group-hover:text-primary dark:text-light"
                  >Portfolio</a
                >
              </li>
              <li class="group">
                <a
                  href="#experience"
                  class="mx-8 flex py-2 text-base text-slate-700 group-hover:text-primary dark:text-light"
                  >Experience</a
                >
              </li>
              <li class="group">
                <a
                  href="#certificate"
                  class="mx-8 flex py-2 text-base text-slate-700 group-hover:text-primary dark:text-light"
                  >Certificates</a
                >
              </li>

              <li class="group">
                <a
                  href="#contact"
                  class="mx-8 flex py-2 text-base text-slate-700 group-hover:text-primary dark:text-light"
                  >Contact</a
                >
              </li>

              <li class="flex pl-8">
                <button
                  class="bg-primary px-5 py-3 rounded-lg text-white flex"
                  @click="buttonDarkMode"
                >
                  <img
                    src="../assets/img/sun.png"
                    alt=""
                    v-if="mode === 'Light'"
                    class="mr-3"
                  />
                  <img
                    src="../assets/img/moon.png"
                    alt=""
                    v-else
                    class="mr-3"
                  />
                  {{ mode }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById("to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
export default {
  data() {
    return {
      mode: "Light",
      darkMode: false,
    };
  },
  methods: {
    hamburger() {
      const navMMenu = document.getElementById("nav-menu");
      hamburger.classList.toggle("hamburger-active");
      navMMenu.classList.toggle("hidden");
    },
    buttonDarkMode() {
      const html = document.querySelector("html");
      if (this.mode == "Light") {
        this.mode = "Dark";
        html.classList.add("dark");
      } else {
        this.mode = "Light";
        html.classList.remove("dark");
      }
    },
  },
};
</script>
