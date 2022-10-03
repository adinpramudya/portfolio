<template>
  <section id="contact" class="bg-[#EEE3CB] pt-36 pb-32 dark:bg-dark">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold text-primary">Contact</h4>
          <h2 class="mb-4 text-3xl font-bold text-slate-700 dark:text-light">
            Contact Me
          </h2>
        </div>
      </div>
      <form @submit.prevent="sendData">
        <div class="w-full lg:mx-auto lg:w-2/3">
          <div class="mb-8 w-full px-4">
            <label for="name" class="text-base font-bold text-primary"
              >Nama</label
            >
            <input
              v-model="name"
              type="text"
              id="name"
              class="w-full rounded-md bg-[#F5EDDC] p-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:text-light"
            />
          </div>
          <div class="mb-8 w-full px-4">
            <label for="email" class="text-base font-bold text-primary"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full rounded-md bg-[#F5EDDC] p-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:text-light"
            />
          </div>
          <div class="mb-8 w-full px-4">
            <label for="message" class="text-base font-bold text-primary"
              >Pesan</label
            >
            <textarea
              v-model="message"
              type="text"
              id="message"
              class="h-32 w-full rounded-md bg-[#F5EDDC] p-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:text-light"
            ></textarea>
          </div>
          <div class="w-full">
            <button
              class="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
            >
              Kirim
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendData() {
      axios({
        method: "POST",
        url: "https://portofolio-8b54c-default-rtdb.firebaseio.com/data.json",
        data: {
          name: this.name,
          email: this.email,
          message: this.message,
        },
      });
    },
  },
};
</script>
