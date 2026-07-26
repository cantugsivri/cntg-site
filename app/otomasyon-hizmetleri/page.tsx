"use client";

import React, { type ReactElement } from "react";
import { ArrowRight, ArrowLeft, Cpu, Zap, BarChart3, Mail, Linkedin } from "lucide-react";

type IconElement = ReactElement<{ className?: string }>;
type ServiceCardProps = { icon: IconElement; title: string; text: string };

function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[1.5rem] sm:p-6 flex flex-col">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#6B0F1A]/10 text-[#6B0F1A]">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <h3 className="text-lg font-bold sm:text-xl text-[#171717]">{title}</h3>
      {text && <p className="mt-2 text-sm leading-6 text-[#5A5A5A]">{text}</p>}
    </div>
  );
}

export default function OtomasyonHizmetleri() {
  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#1E1E1E] overflow-x-hidden">
      {/* HEADER */}
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-[#F4E9DC] to-[#D8C8B8]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#F7F2EA] to-transparent" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-6 pt-4 sm:px-6 lg:px-10">
          <header className="relative flex items-center justify-center py-4 sm:py-6 border-b border-[#6B0F1A]/10">
            <a href="/" className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center w-[200px] sm:w-[280px] md:w-[320px]">
                <div className="h-[2.5px] w-full bg-[#6B0F1A] mb-1"></div>
                <div className="font-serif text-[2.4rem] sm:text-[3.5rem] md:text-[4.2rem] leading-none font-bold tracking-wider text-[#6B0F1A]">
                  CNTG
                </div>
                <div className="h-[2.5px] w-full bg-[#6B0F1A] mt-1 mb-1"></div>
              </div>
              <div className="whitespace-nowrap text-[0.5rem] sm:text-[0.65rem] md:text-xs font-semibold tracking-[0.3em] text-[#6B0F1A] mt-0.5">
                GROWTH PARTNERS
              </div>
            </a>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <a
                href="/#contact"
                className="z-10 inline-flex items-center justify-center rounded-full bg-[#6B0F1A] px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-md transition hover:bg-[#530A13]"
              >
                İletişime Geç <ArrowRight className="ml-1 sm:ml-1.5 h-3.5 w-3.5" />
              </a>
            </div>
          </header>
        </div>
      </section>

      {/* BACK + TITLE */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-4 sm:px-6 lg:px-10 w-full">
        <a href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B0F1A] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" /> Ana Sayfa
        </a>
        <h1 className="text-2xl font-bold tracking-[-0.03em] sm:text-4xl">
          2. İş Süreçleri Analizi, Verimlilik ve Otomasyon Hizmetleri
        </h1>
      </section>

      {/* SERVICE CARDS */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 w-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={<Cpu />} title="Süreç Analizi - Şirket Check-Up Çalışması" text="" />
          <ServiceCard icon={<Zap />} title="Gelişim Alanlarını Yönlendirme" text="" />
          <ServiceCard icon={<BarChart3 />} title="Yeni Düzen Süreç Yönetimi" text="" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10 w-full">
        <div className="rounded-3xl bg-[#6B0F1A] p-4 text-white sm:rounded-[2rem] sm:p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Projenizi konuşalım.</h2>
          <p className="mt-4 max-w-2xl text-white/75">
            İş süreçleri analizi ve otomasyon hizmetleri için ön görüşme yapabiliriz.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="mailto:cantug.sivri@gmail.com" className="group">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl sm:p-4">
                <Mail className="h-5 w-5 text-[#D7B982]" />
                <span className="text-sm sm:text-base">cantug.sivri@gmail.com</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/cntg-growth-partners" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl sm:p-4">
                <Linkedin className="h-5 w-5 text-[#D7B982]" />
                <span className="text-sm sm:text-base">LinkedIn Profilimiz</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
