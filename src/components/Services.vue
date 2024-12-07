<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Pusat Informasi dan Konsultasi",
    description:
      "Menyediakan informasi terkait akademik, kemahasiswaan, dan kegiatan di dalam kampus serta memberikan konsultasi dan pendampingan bagi mahasiswa yang membutuhkan.",
    pro: 0,
  },
  {
    title: "Pengabdian dan Aksi Sosial",
    description:
      "Melaksanakan program-program pengabdian masyarakat di luar kampus serta terlibat dalam aksi-aksi sosial untuk membantu masyarakat sekitar.",
    pro: 0,
  },
  {
    title: "Pengembanan dan Pembinaan",
    description: "Mengembangkan ragam UKM yang dapat mengembangkan minat dan bakat mahasiswa serta memberikan pelatihan dan pembinaan bagi organisasi kemahasiswaan dan mahasiswa di dalam kampus.",
    pro: 0,
  },
  {
    title: "Advokasi dan Aspirasi Mahasiswa",
    description: "Menjadi jembatan antara mahasiswa dengan pihak kampus dan luar kampus serta memperjuangkan hak-hak dan kepentingan mahasiswa.",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      -----------------
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      SERVICES
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Berikut adalah beberapa komitmen kami untuk mahasiswa dan masyarakat.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >EXCLUSIVE</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
