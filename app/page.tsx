"use client";

import React, { type ReactElement } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPinned,
  Network,
  Phone,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

type IconElement = ReactElement<{ className?: string }>;

type ServiceCardProps = {
  icon: IconElement;
  title: string;
  text: string;
};

type StepProps = {
  number: string;
  title: string;
  text: string;
};

type ContactItemProps = {
  icon: IconElement;
  text: string;
};

export default function CNTGLandingPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#1E1E1E]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-[#F4E9DC] to-[#D8C8B8]" />
        <div className="absolute -right-28 top-0 h-[520px] w-[720px] rounded-full bg-[#6B0F1A]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#F7F2EA] to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-8 lg:px-10">
          <header className="flex items-center justify-between">
            <div>
              <div className="font-serif text-4xl font-bold tracking-wide text-[#6B0F1A]">
                CNTG
              </div>
              <div className="mt-1 text-xs tracking-[0.32em] text-[#4A4A4A]">
                GROWTH PARTNERS
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-[#6B0F1A]/30 px-5 py-2 text-sm font-medium text-[#6B0F1A] transition hover:bg-[#6B0F1A] hover:text-white"
            >
              İletişime Geç
            </a>
          </header>

          <div className="grid min-h-[680px] items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-[#6B0F1A]">
                SAHA • BÜYÜME • GELİŞİM
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-[#171717] md:text-7xl">
                Sahada büyüme sistemleri kuruyoruz.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4B4B4B]">
                Markanız için saha satış, distribütör optimizasyonu ve yönetimi, pazara
                giriş süreçlerini analiz eder, yapılandırır ve sahada
                uygulanabilir hale getiririz.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#6B0F1A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#6B0F1A]/20 transition hover:bg-[#530A13]"
                >
                  Projenizi Konuşalım <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-white/70 px-7 py-4 text-sm font-semibold text-[#232323] ring-1 ring-black/10 backdrop-blur transition hover:bg-white"
                >
                  Hizmetleri İncele
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-white/60 p-6 shadow-2xl shadow-black/10 ring-1 ring-white/70 backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#6B0F1A] to-[#2D1115] p-8 text-white">
                  <div className="text-sm tracking-[0.24em] text-white/70">
                    ÖRNEK CNTG MODELLERİ
                  </div>
                  <div className="mt-10 space-y-5">
                    {[
                      "Horeca'da Büyüme Yapıları",
                      "Pazara Giriş Süreçleri",
                      "Saha Satış Sistemlerinde Gelişme",
                      "Distribütör Optimizasyonu ve Yönetimi"
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#D7B982]" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#6B0F1A]">
            HİZMETLER
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Sahada sonuç üreten yapı kurarız.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<Target />}
            title="Saha Satış Sistemleri"
            text="Ekip, hedef, rota, ziyaret ve takip yapısını daha ölçülebilir hale getiririz."
          />
          <ServiceCard
            icon={<Network />}
            title="Distribütör Yapılanması"
            text="Doğru distribütör modeli, sorumluluk alanı ve performans takibini kurgularız."
          />
          <ServiceCard
            icon={<MapPinned />}
            title="Route to Market"
            text="Yeni bölge ve kanal açılımlarında uygulanabilir pazara giriş sistemi kurarız."
          />
          <ServiceCard
            icon={<BarChart3 />}
            title="Performans Analizi"
            text="Satış, müşteri, ürün ve ekip verilerini aksiyon planına dönüştürürüz."
          />
        </div>
      </section>

      <section className="bg-white/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#6B0F1A]">
              ÇALIŞMA MODELİ
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Analiz eder, planlar, sahada uygularız.
            </h2>
          </div>
          <div className="space-y-5">
            <Step
              number="01"
              title="Analiz"
              text="Mevcut saha, müşteri, ürün, distribütör ve performans yapısı incelenir."
            />
            <Step
              number="02"
              title="Aksiyon Planı"
              text="Gelişim alanları belirlenir, uygulanabilir saha ve büyüme planı hazırlanır."
            />
            <Step
              number="03"
              title="Uygulama & Takip"
              text="Plan sahaya aktarılır, sonuçlar takip edilir ve iyileştirme adımları yönetilir."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] bg-[#171717] p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#D7B982]">
                KİMLER İÇİN?
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Horeca kanalında büyümek isteyen gıda markaları.
              </h2>
            </div>
            <div className="space-y-4 text-white/80">
              <p>Yeni bölgede yapılanmak isteyen üretici ve distribütör firmalar.</p>
              <p>
                Mevcut saha ekibini geliştirmek ve verimliliğini ölçmek isteyen
                şirketler.
              </p>
              <p>
                Hotel, restoran, catering ve yerel market kanallarında daha güçlü
                yer almak isteyen markalar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2rem] bg-[#6B0F1A] p-8 text-white md:p-12">
          <h2 className="text-4xl font-semibold tracking-[-0.03em]">
            Projenizi konuşalım.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Saha satış, distribütör yapılanması veya yeni bölge büyümesi için
            kısa bir ön görüşme yapabiliriz.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ContactItem icon={<Mail />} text="cantug.sivri@gmail.com" />
            <ContactItem icon={<Phone />} text="+90 537 720 49 38" />
            <ContactItem icon={<Linkedin />} text="LinkedIn / CNTG" />
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6B0F1A]/10 text-[#6B0F1A]">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-[#5A5A5A]">{text}</p>
    </div>
  );
}

function Step({ number, title, text }: StepProps) {
  return (
    <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="flex gap-5">
        <div className="text-sm font-bold tracking-widest text-[#6B0F1A]">
          {number}
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-7 text-[#5A5A5A]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
      {React.cloneElement(icon, { className: "h-5 w-5 text-[#D7B982]" })}
      <span>{text}</span>
    </div>
  );
}
