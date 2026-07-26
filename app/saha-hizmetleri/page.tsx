"use client";

import React, { useState, type ReactElement } from "react";
import {
  ArrowRight, ArrowLeft, Target, Network, MapPinned, BarChart3, Mail, Linkedin, ChevronRight
} from "lucide-react";

type Message = { id: string; role: "user" | "bot"; content: React.ReactNode };

function ChatbotForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ company: "", name: "", email: "", phone: "", service: "", otherService: "" });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const formDataRef = React.useRef(formData);
  const hasInteractedRef = React.useRef(false);
  const messagesRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateField = (field: keyof typeof formData, value: string) => {
    const updated = { ...formDataRef.current, [field]: value };
    formDataRef.current = updated;
    setFormData(updated);
  };

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const sendEmail = async (data: typeof formData) => {
    try { await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); } catch {}
  };

  const init: Message = { id: "init", role: "bot", content: (<>Değerli ziyaretçimiz, merhaba! Ben CNTG Growth Partners dijital asistanı.<br /><br /><strong>Öncelikle, şirketinizin adını öğrenebilir miyim?</strong></>) };
  const [messages, setMessages] = useState<Message[]>([init]);

  React.useEffect(() => { if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight; }, [messages, isTyping]);
  React.useEffect(() => {
    if (!hasInteractedRef.current || isTyping || step === 4 || step === 6) return;
    const t = window.setTimeout(() => { if (document.activeElement !== inputRef.current) inputRef.current?.focus(); }, 0);
    return () => window.clearTimeout(t);
  }, [isTyping, step]);

  const handleNext = () => {
    if (!inputValue.trim()) return;
    const text = inputValue.trim(); const cur = step;
    setMessages(p => [...p, { id: Date.now().toString(), role: "user", content: text }]);
    setInputValue(""); setIsTyping(true);
    setTimeout(() => {
      let bot: React.ReactNode = "";
      if (cur === 0) { updateField("company", text); bot = (<>Çok teşekkürler. <strong>Adınız ve soyadınız nedir?</strong></>); setStep(1); }
      else if (cur === 1) { updateField("name", text); bot = (<>Tanıştığıma memnun oldum. <strong>E-posta adresinizi öğrenebilir miyim?</strong></>); setStep(2); }
      else if (cur === 2) {
        if (!isValidEmail(text)) { setMessages(p => [...p, { id: Date.now()+"_b", role: "bot", content: "Lütfen geçerli bir e-posta adresi yazın." }]); setIsTyping(false); return; }
        updateField("email", text); bot = (<><strong>Telefon numaranızı da alabilir miyim?</strong></>); setStep(3);
      } else if (cur === 3) {
        updateField("phone", text);
        bot = (<>Bilgilerinizi kaydettim. <strong>Hangi hizmetimizle ilgileniyorsunuz?</strong><div className="mt-4 flex flex-col gap-2">{["1. Saha Satış, Büyüme ve Operasyon Hizmetleri","2. İş Süreçleri Otomasyonu, Verimlilik ve Analiz","3. Stratejik Büyüme ve Yönetim Partnerliği","Diğer / Genel Bilgi"].map(s => (<button key={s} onClick={() => handleSelect(s)} className="rounded-lg bg-[#D7B982]/20 px-4 py-2.5 text-left text-xs sm:text-sm font-medium text-[#D7B982] transition hover:bg-[#D7B982]/30">{s}</button>))}</div></>);
        setStep(4);
      } else if (cur === 5) {
        bot = (<><strong>Teşekkürler!</strong> Ekibimiz en kısa sürede size dönüş yapacak.</>); setStep(6);
        const d = { ...formDataRef.current, service: "Diğer", otherService: text }; formDataRef.current = d; sendEmail(d);
      }
      setMessages(p => [...p, { id: Date.now()+"_bot", role: "bot", content: bot }]); setIsTyping(false);
    }, 600);
  };

  const handleSelect = (service: string) => {
    setMessages(p => [...p, { id: Date.now().toString(), role: "user", content: service }]); setIsTyping(true);
    setTimeout(() => {
      let bot: React.ReactNode = "";
      if (service !== "Diğer / Genel Bilgi") {
        bot = (<><strong>Tercihiniz için teşekkürler!</strong> Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.</>); setStep(6);
        const d = { ...formDataRef.current, service }; formDataRef.current = d; sendEmail(d);
      } else {
        updateField("service", service); bot = (<>Anlıyorum. <strong>İlgilendiğiniz konuyu kısaca yazabilir misiniz?</strong></>); setStep(5);
      }
      setMessages(p => [...p, { id: Date.now()+"_bot", role: "bot", content: bot }]); setIsTyping(false);
    }, 600);
  };

  return (
    <div className="flex h-[380px] flex-col justify-between rounded-xl bg-black/10">
      <div ref={messagesRef} className="flex-1 space-y-3 overflow-y-auto p-3 scroll-smooth sm:p-4">
        {messages.map(m => (<div key={m.id} className={`flex ${m.role==="user"?"justify-end":"justify-start"}`}><div className={`w-fit max-w-[min(92%,32rem)] break-words rounded-2xl p-3 text-sm leading-relaxed ${m.role==="user"?"bg-[#D7B982] text-[#6B0F1A] rounded-tr-sm font-medium":"bg-white/10 text-white rounded-tl-sm"}`}>{m.content}</div></div>))}
        {isTyping && <div className="flex justify-start"><div className="bg-white/10 text-white/50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm">Yazıyor...</div></div>}
      </div>
      <div className="border-t border-white/10 p-3 sm:p-4">
        {step !== 4 && step !== 6 ? (
          <div className="flex items-center gap-2">
            <input type="text" ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} onFocus={() => { hasInteractedRef.current = true; }} onKeyDown={e => e.key==="Enter" && handleNext()} disabled={isTyping} placeholder={isTyping?"Lütfen bekleyin...":"Yanıtınızı buraya yazın..."} className="w-full rounded-xl bg-black/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-[#D7B982] disabled:opacity-50" />
            <button onClick={handleNext} disabled={!inputValue.trim()||isTyping} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D7B982] text-[#6B0F1A] transition hover:bg-white disabled:opacity-50"><ArrowRight className="h-5 w-5" /></button>
          </div>
        ) : step === 4 ? <div className="text-center text-xs text-white/50">Lütfen yukarıdaki seçeneklerden birini seçin.</div> : <div className="text-center text-xs text-white/50">Görüşme tamamlandı.</div>}
      </div>
    </div>
  );
}

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

export default function SahaHizmetleri() {
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
          1. Saha Satış ve İş Geliştirme, Operasyonel Büyüme Hizmetleri
        </h1>
      </section>

      {/* SERVICE CARDS */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 w-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={<Target />} title="Sahada B2B Satış Gerçekleştirmek ve Mevcut Sistemi Geliştirmek" text="" />
          <ServiceCard icon={<Network />} title="Distribütör Yapılanması / Uçtan Uca Yönetim" text="" />
          <ServiceCard icon={<MapPinned />} title="Horeca Genişlemesi / +Yeni Müşteri" text="" />
          <ServiceCard icon={<BarChart3 />} title="Bölgesel Pazar Analizleri ve Strateji Geliştirme" text="" />
        </div>

        {/* Regional Banner */}
        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#6B0F1A] uppercase">AKTİF SAHA BÖLGELERİMİZ</p>
              <h3 className="mt-1 text-lg font-bold">
                <span className="font-extrabold">Bodrum</span> • Muğla • Marmaris • Fethiye • Datça
              </h3>
            </div>
            <p className="text-sm font-medium text-[#4B4B4B]">
              📍 Ege&apos;de sahada aktif olarak çalışıyoruz. Türkiye geneli projeler için de bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10 w-full">
        <div className="rounded-3xl bg-[#6B0F1A] p-4 text-white sm:rounded-[2rem] sm:p-8 md:p-12 overflow-hidden">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Projenizi konuşalım.</h2>
            <p className="mt-4 text-white/75">
              Saha satış ve iş geliştirme hizmetleri için ön görüşme yapabiliriz.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="mailto:cantug.sivri@gmail.com" className="group w-full sm:w-auto">
                <div className="flex items-center justify-center gap-3 rounded-xl bg-white/10 px-6 py-3.5 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl">
                  <Mail className="h-5 w-5 text-[#D7B982]" />
                  <span className="text-sm sm:text-base font-medium">Mail İçin Tıklayabilirsiniz</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/122203956" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
                <div className="flex items-center justify-center gap-3 rounded-xl bg-white/10 px-6 py-3.5 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl">
                  <Linkedin className="h-5 w-5 text-[#D7B982]" />
                  <span className="text-sm sm:text-base font-medium">LinkedIn Profilimiz</span>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 max-w-3xl mx-auto min-w-0 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm sm:p-6 text-left">
            <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7B982] text-[#6B0F1A] shadow-lg ring-1 ring-white/20">
                <span className="font-serif text-xl font-bold tracking-wide">C</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">CNTG Dijital Asistan</h3>
                <p className="text-xs text-white/60">Sizinle tanışmak ve ihtiyacınızı öğrenmek için burada</p>
              </div>
            </div>
            <ChatbotForm />
          </div>
        </div>
      </section>
    </main>
  );
}
