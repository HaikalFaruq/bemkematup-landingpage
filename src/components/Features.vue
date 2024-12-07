<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Fokus Pengembangan",
    description:
      "Berusaha untuk meningkatkan potensi mahasiswa dalam bidang akademik maupun non-akademik, dengan tujuan mengaktualisasikan Tri Dharma Perguruan Tinggi.",
  },
  {
    icon: "badgeCheck",
    title: "Kolaborasi",
    description:
      "Memperkuat hubungan sinergjtas antara mahasiswa, organisasi kemahasiswaan, civitas akademika, dan pemerintah untuk mendukung kepentingan bersama.",
  },
  {
    icon: "goal",
    title: "Advokasi",
    description:
      "Berjuang untuk memperjuangkan hak-hak mahasiswa dan mencapai kesejahteraan mereka.",
  },
  {
    icon: "pictureInPicture",
    title: "Pemberdayaan Mahasiswa",
    description:
      "Mengajak dan mendayagunakan mahasiswa untuk saling membantu dalam membangun dan mengembangkan potensi yang dimiliki.",
  },
  {
    icon: "mousePointerClick",
    title: "Pengembangan Kualitas SDM",
    description:
      "Berupaya untuk membangun kualitas SDM organisasi mahasiswa yang berlandaskan profesionalitas dan semangat kekeluargaan.",
  },
  {
    icon: "newspaper",
    title: "Inklusif dan Apresiatif",
    description:
      "Berusaha untuk membangun lingkungan internal yang apresiatif dan inklusif dalam upaya peningkatan peran dan fungsi organisasi.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      ---------
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      WHAT MAKE US DIFFERENT
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Sebagai organisasi eksekutif di tingkat universitas, kami memandang perlunya melakukan 
      transformasi mendasar guna menghadirkan visi dan misi yang lebih visioner 
      serta implementasi yang lebih impaktif dibandingkan periode kepengurusan 
      sebelumnya. Enam poin yang kami jadikan fokus perjuangan selama satu periode 
      ke depan merepresentasikan upaya kami untuk membedakan diri dan membawa perubahan 
      signifikan bagi organisasi mahasiswa yang kami layani.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
