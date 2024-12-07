<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Instagram from "@/icons/Instagram.vue";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Component
                class="w-20 h-20 m-auto mb-4"
                :is="Instagram"
              />
              IKUTI KAMI DI
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                SOSIAL MEDIA
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            1 LANGIT - 1 BANGSA  - 1 AMBARAYA
     
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a
                href="https://www.instagram.com/bemkematelupurwokerto/"
                target="_blank"
              >
                FOLLOW US
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
