<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "PRESIDEN MAHASISWA",
    title: "Muhammad Haikal Faruq",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
    image: "haikal.svg",
  },
  {
    badgeTitle: "WAKIL PRESIDEN MAHASISWA",
    title: "Alfa Rizq Dhiya'ulhaq",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, sint reiciendis quidem iure veritatis optio facere tenetur.",
    image: "alfa.svg",
  },
  {
    badgeTitle: "SEKRETARIS JENDERAL",
    title: "Devita Rahma Savitri",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit similique quasi sint.",
    image: "devita.svg",
  },
  {
    badgeTitle: "BENDAHARA UMUM",
    title: "Rahma Cahya Ningsih",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
    image: "rachma.svg",
  },
];
</script>

<template>
  <section
    id="hoiw"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        -------------------
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        SAMBUTAN - SAMBUTAN
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto"
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
