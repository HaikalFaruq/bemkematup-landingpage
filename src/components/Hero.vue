<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
const scrollToBenefits = () => {
  const element = document.getElementById("benefits");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section 
    id="hero"
    class="container"
  >
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">
        <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 text-primary">
            <Badge>🌟</Badge>
          </span>
          <span> BEM KEMA TUP Present! </span>
        </Badge>

        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-5xl font-bold"
        >
          <h1>
            Selamat Datang Pada Website
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-5xl"
              >BADAN EKSEKUTIF MAHASISWA KELUARGA MAHASISWA <br/> Telkom University Purwokerto
            </span>
            <!-- kata-kata -->
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          KABINET AMBARAYA
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button class="w-5/6 md:w-1/4 font-bold group/arrow" @click="scrollToBenefits">
            Get Started
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-1/4 font-bold"
          >
            <a
              href="https://www.instagram.com/bemkematelupurwokerto/"
              target="_blank"
              >Instagram BEM KEMA TUP</a
            >
          </Button>
        </div>
      </div>

      <div class="relative group mt-10">
        <!-- gradient shadow -->
        <div
          class="absolute -top-1 right-20 w-[70%] h-3 lg:h-[80%] bg-primary/100 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[500px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-1 border-t-primary/30 img-border-animation"
          :src="
            mode == 'light' ? 'hero-image-light-1.svg' : 'hero-image-dark-1.svg'
          "
          alt=""
        />

      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 1;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/5;
  }
}
</style>
