<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="flex justify-between "
      >
        <div class="col-span-full xl:col-span-2">
          <a
            href="#"
            class="flex font-bold items-center"
          >
            <img 
        src="/src/assets/logobem.jpg" 
        alt="BEM KEMA Logo"
        className="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border p-1"
      />

            <h3 class="text-2xl">BEM KEMA TUP</h3>
          </a>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-bold text-lg">BANTUAN</h3>
          <div>
            <a
              href="http://www.youtube.com/@bemkematelupurwokerto"
              class="opacity-60 hover:opacity-100 flex justify-end"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/bemkematelupurwokerto/"
              class="opacity-60 hover:opacity-100 flex justify-end"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/+6285156634579"
              class="opacity-60 hover:opacity-100 flex justify-end"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          &copy; 2024 Designed and developed by
          <a
            target="_blank"
            href="https://github.com/leoMirandaa"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Muhammad Haikal Faruq
          </a>
        </h3>
      </section>
    </div>
  </footer>
</template>
