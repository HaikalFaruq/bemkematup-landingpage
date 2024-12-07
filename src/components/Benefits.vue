<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Crosshair,
  Boxes,
  HeartHandshake,
  ArrowUpNarrowWide,
  UsersRound,
  UserPlus,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "crosshair",
    title: "MISI AMBARAYA",
    description:
      "Berikut adalah 5 Misi yang dibentuk untuk menyelaraskan upaya-upaya dan mengarahkan sumber daya secara efisien untuk mencapai target yang diinginkan, ini juga dapat menjadi instrumen evaluasi kinerja BEM, dengan mengukur sejauh mana aktivitas dan program telah selaras dengan tujuan organisasi.",
  },
  {
    icon: "arrowupnarrowWide",
    title: "MISI 01 AMBARAYA",
    description:
      "Membangun lingkungan internal yang apresiatif dan inklusif dalam upaya peningkatan peran dan fungsi Keluarga Mahasiswa (KEMA) Telkom University Purwokerto.",
  },
  {
    icon: "boxes",
    title: "MISI 02 AMBARAYA",
    description:
      "Memperkuat hubungan sinergjtas antara mahasiswa, organisasi kemahasiswaan, civitas akademika dan pemerintah untuk mendukung kepentingan Telkom University Purwokerto.",
  },
  {
    icon: "usersround",
    title: "MISI 03 AMBARAYA",
    description:
      "Memperjuangkan hak-hak Mahasiswa Telkom University Purwokerto untuk mencapai kesejahteraan Keluarga Mahasiswa (KEMA) Telkom University Purwokerto.",
  },
  {
    icon: "hearthandshake",
    title: "MISI 04 AMBARAYA",
    description:
      "Mengajak dan mendayagunakan mahasiswa untuk bersama-sama saling membantu membangun dan mengembangkan potensi yang kita miliki.",
  },
  {
    icon: "userplus",
    title: "MISI 05 AMBARAYA",
    description:
      "Membangun kualitas Sumber Daya Manusia (SDM) organisasi mahasiswa yang berlandaskan profesionalitas dan pengembangan dengan semangat kekeluargaan.",
  },
];

const iconMap: Record<
  string,
  | typeof Crosshair
  | typeof Boxes
  | typeof HeartHandshake
  | typeof ArrowUpNarrowWide
  | typeof UsersRound
  | typeof UserPlus
> = {
  crosshair: Crosshair,
  boxes: Boxes,
  hearthandshake: HeartHandshake,
  arrowupnarrowWide: ArrowUpNarrowWide,
  usersround: UsersRound,
  userplus: UserPlus,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">VISI & MISI</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          VISI KABINET AMBARAYA
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Menjadikan BEM KEMA Telkom University Purwokerto sebagai dinamisator
          pergerakan intelektual mahasiswa yang eksploratif dan kohesif untuk
          meningkatkan potensi mahasiswa dalam bidang akademik maupun non-akademik
          demi mencapai Keluarga Mahasiswa (KEMA) yang inklusif untuk mengaktualkan
          TRI DHARMA PERGURUAN TINGGI
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
