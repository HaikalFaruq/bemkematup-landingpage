<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa itu BEM dan apa perannya di kampus?",
    answer: "BEM (Badan Eksekutif Mahasiswa) merupakan organisasi mahasiswa tertinggi di tingkat universitas/fakultas yang berperan sebagai lembaga eksekutif. Dalam menjalankan fungsinya, BEM berperan sebagai wadah aspirasi mahasiswa dan menjadi jembatan komunikasi antara mahasiswa dengan pihak kampus. Organisasi ini bertanggung jawab dalam menyelenggarakan berbagai program kerja yang bermanfaat bagi seluruh mahasiswa dan civitas akademika. BEM juga memiliki peran penting dalam mengadvokasi kepentingan mahasiswa terkait kebijakan kampus serta membantu mengembangkan soft skill dan jiwa kepemimpinan mahasiswa melalui berbagai kegiatan yang diselenggarakan.",
    value: "item-1",
  },
  {
    question: "Bagaimana cara bergabung dengan BEM?",
    answer:
      "Proses bergabung dengan BEM dimulai saat open recruitment yang biasanya dibuka di awal tahun kepengurusan. Mahasiswa yang berminat perlu melengkapi berbagai berkas administrasi seperti CV, transkrip nilai, dan surat motivasi. Selanjutnya, calon anggota akan mengikuti serangkaian tahapan seleksi yang meliputi tes tulis, wawancara, dan screening. Tentu saja, setiap calon anggota harus memenuhi persyaratan IPK minimal sesuai ketentuan yang berlaku. Yang terpenting, setiap calon anggota harus memiliki komitmen untuk aktif berkontribusi selama satu periode kepengurusan.",
    value: "item-2",
  },
  {
    question:
      "Apa saja kementerian yang ada di BEM?",
    answer:
      "8 sayap ambaraya sudah dijelaskan di slide atas, silahkan untuk membacanya.",
    value: "item-3",
  },
  {
    question: "Bagaimana cara menyampaikan aspirasi ke BEM?",
    answer: "Mahasiswa memiliki berbagai jalur untuk menyampaikan aspirasi kepada BEM. Cara yang paling langsung adalah dengan menghubungi pengurus BEM baik secara tatap muka maupun melalui media sosial resmi BEM. Untuk kemudahan akses, BEM juga menyediakan form aspirasi online di website resmi mereka. Selain itu, BEM secara rutin mengadakan forum aspirasi yang dapat dihadiri oleh seluruh mahasiswa. Aspirasi juga dapat disampaikan melalui perwakilan kelas atau himpunan jurusan. BEM juga kerap mengadakan survei dan jajak pendapat untuk menampung masukan dari mahasiswa.",
    value: "item-4",
  },
  {
    question:
      "Apa manfaat yang bisa didapat dengan aktif di BEM?",
    answer: "Bergabung dengan BEM memberikan berbagai manfaat berharga bagi pengembangan diri mahasiswa. Melalui keterlibatan aktif di BEM, mahasiswa dapat mengembangkan kemampuan kepemimpinan dan manajemen organisasi yang sangat berguna untuk masa depan. BEM juga membuka kesempatan untuk memperluas jaringan dan relasi, baik di lingkungan internal maupun eksternal kampus. Pengalaman dalam mengerjakan project dan program kerja akan memberikan pembelajaran berharga dalam hal manajemen dan eksekusi kegiatan. Selain itu, aktivitas di BEM membantu meningkatkan berbagai soft skill penting seperti public speaking, time management, dan team work. Yang tak kalah penting, mahasiswa berkesempatan untuk berkontribusi langsung dalam memajukan kualitas kehidupan kampus. Sebagai bonus, sertifikat keaktifan organisasi yang didapatkan dapat menjadi nilai tambah dalam CV ketika melamar pekerjaan  .",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">-------------------------------</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        FREQUENTLY ASKED QUESTION (FAQ)
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Masih memiliki pertanyaan?
      <a
        href="#"
        class="text-muted-foreground"
      >
        <a
          href="#contact"
          class="underline"
          >Kontak Kami</a
        >
      </a>
    </h3>
  </section>
</template>
