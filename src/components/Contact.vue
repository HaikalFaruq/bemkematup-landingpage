<script setup lang="ts">
import { reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Building2, Mail, Clock } from "lucide-vue-next";

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  subject: "",
  message: "",
});

const sendMessage = () => {
  const { firstName, lastName, subject, message } = contactForm;

  // Validasi input
  if (!firstName || !lastName || !subject || !message) {
    alert("Semua field harus diisi!");
    return;
  }

  // Template pesan WhatsApp
  const whatsappMessage = `*${firstName} ${lastName}*\n\n*Subject:*\n${subject}\n\n*Message:*\n${message}`;
  const whatsappUrl = `https://wa.me/6285156634579?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Redirect ke WhatsApp
  window.open(whatsappUrl, "_blank");
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">------------</h2>

          <h2 class="text-3xl md:text-4xl font-bold">KONTAK KAMI</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Mari terhubung dengan kami, dengan melengkapi form disamping
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 />
              <div class="font-bold">SEKRETARIAT BEM KEMA TUP</div>
            </div>

            <div>
              Jl. DI Panjaitan No.128 53147 Purwokerto Jawa Tengah - Gedung DSP
              lt.02
            </div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">EMAIL BEM KEMA TUP</div>
            </div>

            <div>bemkema@ittelkom-pwt.ac.id</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock />
              <div class="font-bold">KUNJUNGAN SEKRETARIAT</div>
            </div>

            <div>
              <div>Senin - Jumat</div>
              <div>7AM - 5PM</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form class="grid gap-4" @submit.prevent="sendMessage">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Nama Depan"
                  v-model="contactForm.firstName"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Nama Belakang"
                  v-model="contactForm.lastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Subject</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Subjek" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Aspirasi">Aspirasi</SelectItem>
                    <SelectItem value="Kerja Sama">Kerja Sama</SelectItem>
                    <SelectItem value="Kontak">Kontak</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Isi Pesan Anda ..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Button class="mt-4" type="submit">KIRIM PESAN</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
