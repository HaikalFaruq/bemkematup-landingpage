<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import WhatsappIcon from "@/icons/WhatsappIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

// import putriImage from "@/assets/putri.JPG";

const teamList: TeamProps[] = [
  {
    imageUrl: "/putri.JPG",
    firstName: "Putri Aulia",
    lastName: "Hamzah",
    positions: ["Menteri Kaderisasi"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/6282235865706",
      },
    ],
  },
  {
    imageUrl: "/wina.JPG",
    firstName: "Hafizhah Wina",
    lastName: "Rahmasari",
    positions: ["Menteri Ekonomi Kreatif"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+621380023424",
      },
    ],
  },
  {
    imageUrl: "/lintang.JPG",
    firstName: "Lintang Cahya",
    lastName: "Mulyadani",
    positions: ["Menteri Minat dan Bakat"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+6282226582646",
      },
    ],
  },
  {
    imageUrl: "/arkan.JPG",
    firstName: "Rafif Arkan Nadhifa",
    lastName: "Arkhab",
    positions: ["Menteri KOMINFO"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+6282328607967",
      },
    ],
  },
  {
    imageUrl: "/rere.JPG",
    firstName: "Theresia Claudia",
    lastName: "Tambun",
    positions: ["Menteri Riset dan Teknologi"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+6281361237675",
      },
    ],
  },
  {
    imageUrl: "/anggit.JPG",
    firstName: "Anggitya Yhusuf",
    lastName: "Fikrandi",
    positions: ["Menteri Dalam Negeri"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+6287822799070",
      },
    ],
  },
  {
    imageUrl: "/dava.JPG",
    firstName: "Dava Ardana",
    lastName: "V.A",
    positions: ["Menteri Luar Negeri"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+6288293673283",
      },
    ],
  },
  {
    imageUrl: "/izhar.JPG",
    firstName: "Muhammad",
    lastName: "Izhar",
    positions: ["Menteri ADKASTRAT"],
    socialNetworks: [
      {
        name: "Whatsapp",
        url: "https://wa.me/+6281235295087",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "Whatsapp":
      return WhatsappIcon;
  }
};
</script>

<template>
  <section
    id="team"
    class="container lg:w-[75%] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">----------------</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        KEMENTERIAN
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${name} page`"
          >
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
