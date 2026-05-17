"use client";

import React, { useState, type ReactElement } from "react";
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
// CSS animations used instead of framer-motion for reliable mobile rendering

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
    <main className="min-h-screen bg-[#F7F2EA] text-[#1E1E1E] overflow-x-hidden">
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-[#F4E9DC] to-[#D8C8B8]" />
        <div className="absolute -right-28 top-0 h-[320px] w-[320px] rounded-full bg-[#6B0F1A]/10 blur-3xl sm:h-[520px] sm:w-[720px]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#F7F2EA] to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-4 pt-5 sm:px-6 sm:py-8 lg:px-10">
          <header className="relative flex h-[5.25rem] items-center justify-center sm:h-28 lg:h-28">
            <div className="flex min-w-0 flex-col items-center sm:absolute sm:left-[10%] sm:-translate-x-1/2 lg:left-[20%]">
              <div className="flex flex-col items-center w-full max-w-[90vw]">
                <div className="h-[3px] w-full bg-[#6B0F1A] mb-1"></div>
                <div className="font-serif text-[2.5rem] leading-none font-bold tracking-wide text-[#6B0F1A] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem]">
                  CNTG
                </div>
                <div className="h-[3px] w-full bg-[#6B0F1A] mt-2 mb-2"></div>
              </div>
              <div className="whitespace-nowrap text-[0.5rem] font-semibold tracking-[0.22em] text-[#6B0F1A] sm:text-[0.65rem] sm:tracking-[0.4em] md:text-xs">
                GROWTH PARTNERS
              </div>
            </div>
            <div className="absolute right-0 top-1/2 flex -translate-y-1/2 justify-end">
              <a
                href="#contact"
                aria-label="Iletisime gec"
                className="z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#6B0F1A]/25 bg-white/35 text-[0] text-[#6B0F1A] transition hover:bg-[#6B0F1A] hover:text-white sm:hidden"
              >
                <ArrowRight className="h-4 w-4 rotate-90" />
                İletişime Geç
              </a>
              <a
                href="#contact"
                className="z-10 hidden whitespace-nowrap rounded-full border border-[#6B0F1A]/30 px-5 py-2 text-sm font-medium text-[#6B0F1A] transition hover:bg-[#6B0F1A] hover:text-white sm:inline-flex"
              >
                &#304;leti&#351;ime Ge&#231;
              </a>
            </div>
          </header>

          <div className="grid items-start gap-6 pb-10 pt-0 sm:gap-10 sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20 w-full">
            <div className="animate-fade-in-up">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#6B0F1A] sm:mb-5 sm:text-sm sm:tracking-[0.28em]">
                SAHA • BÜYÜME • GELİŞİM
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#171717] sm:text-5xl md:text-7xl md:tracking-[-0.04em]">
                Sahada büyüme sistemleri kuruyoruz.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#4B4B4B] sm:mt-7 sm:text-lg sm:leading-8">
                CNTG Growth Partners; saha satış, iş geliştirme, distribütör
                yapılanması, route-to-market ve Horeca büyüme yapılarında
                markalara uygulanabilir saha sistemleri kurar.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#6B0F1A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#6B0F1A]/20 transition hover:bg-[#530A13] sm:w-auto"
                >
                  Projenizi Konuşalım <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white/70 px-7 py-4 text-sm font-semibold text-[#232323] ring-1 ring-black/10 backdrop-blur transition hover:bg-white sm:w-auto"
                >
                  Hizmetleri İncele
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-scale">
              <div className="rounded-3xl bg-white/60 p-4 shadow-2xl shadow-black/10 ring-1 ring-white/70 backdrop-blur sm:rounded-[2rem] sm:p-6">
                <div className="rounded-2xl bg-gradient-to-br from-[#6B0F1A] to-[#2D1115] p-5 text-white sm:rounded-[1.5rem] sm:p-8">
                  <div className="text-xs tracking-[0.18em] text-white/70 sm:text-sm sm:tracking-[0.24em]">
                    CNTG ODAK ALANLARI
                  </div>
                  <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-5">
                    {[
                      "Horeca büyüme yapıları",
                      "Bölgesel pazar geliştirme",
                      "Saha satış sistemi",
                      "Distribütör optimizasyonu"
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/10 sm:gap-4 sm:rounded-2xl sm:p-4"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#D7B982]" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-10 w-full">
        <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-8">
          <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#6B0F1A] sm:text-sm sm:tracking-[0.28em]">
                BÖLGESEL ODAK
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Sahada yerel ritmi okuyarak büyürüz.
              </h2>
            </div>
            <p className="text-sm font-medium leading-7 text-[#4B4B4B] sm:text-base">
              Muğla • Bodrum • Marmaris • Fethiye • Ege Bölgesi
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:py-24 lg:px-10 w-full">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#6B0F1A] sm:text-sm sm:tracking-[0.28em]">
            HİZMETLER
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-4xl md:text-5xl">
            Sahada sonuç üreten yapı kurarız.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5A5A5A] sm:text-lg">
            Butik danışmanlık yaklaşımıyla kanal, ekip, rota ve müşteri geliştirme
            süreçlerini sahada uygulanabilir hale getiririz.
          </p>
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

      <section className="bg-white/70 py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-[#6B0F1A] sm:text-sm sm:tracking-[0.28em]">
              NASIL ÇALIŞIYORUZ?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-4xl md:text-5xl">
              Analizden sürdürülebilir büyümeye net bir saha akışı.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5A5A5A]">
              Her projede önce bölgeyi ve kanalı okur, sonra uygulanabilir saha
              ritmini kurarız.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-5">
            <Step
              number="01"
              title="Bölge ve kanal analizi"
              text="Mevcut pazar, müşteri profili, kanal yapısı ve büyüme fırsatları netleştirilir."
            />
            <Step
              number="02"
              title="Saha yapılanması"
              text="Ekip, rota, hedef, ziyaret ve takip ritmi uygulanabilir bir düzene alınır."
            />
            <Step
              number="03"
              title="Aktif müşteri geliştirme"
              text="Doğru nokta, doğru teklif ve düzenli temasla müşteri portföyü güçlendirilir."
            />
            <Step
              number="04"
              title="Operasyon & raporlama"
              text="Saha çıktıları düzenli raporlanır, aksiyonlar ölçülebilir hale getirilir."
            />
            <Step
              number="05"
              title="Sürdürülebilir büyüme"
              text="İyileştirme döngüsüyle model kalıcı ve tekrar edilebilir bir yapıya dönüşür."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="rounded-3xl bg-[#171717] p-6 text-white sm:rounded-[2rem] sm:p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#D7B982] sm:text-sm sm:tracking-[0.28em]">
                KİMLER İÇİN?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-4xl">
                Hizmetlerini büyütmek isteyen firmalar.
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

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10 w-full">
        <div className="rounded-3xl bg-[#6B0F1A] p-4 text-white sm:rounded-[2rem] sm:p-8 md:p-12 overflow-hidden">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Projenizi konuşalım.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Saha ve iş gelişimi, distribütör yapılanması veya yeni bölge büyümesi için
            kısa bir ön görüşme yapabiliriz.
          </p>
          
          <div className="mt-7 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[1fr_1.5fr]">
            {/* Direct Contact Links */}
            <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
              <a href="mailto:cantug.sivri@gmail.com" className="group">
                <div className="flex min-w-0 items-center gap-3 break-words rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl sm:p-4">
                  <Mail className="h-5 w-5 text-[#D7B982]" />
                  <span className="min-w-0 break-words">cantug.sivri@gmail.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/cntg-growth-partners" target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex min-w-0 items-center gap-3 break-words rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl sm:p-4">
                  <Linkedin className="h-5 w-5 text-[#D7B982]" />
                  <span>LinkedIn Profilimiz</span>
                </div>
              </a>
            </div>

            {/* AI Chatbot Area */}
            <div className="min-w-0 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7B982] text-[#6B0F1A] shadow-lg ring-1 ring-white/20">
                  <div className="flex flex-col items-center leading-none">
                    <span className="font-serif text-xl font-bold tracking-wide">C</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">CNTG Dijital Asistan</h3>
                  <p className="text-xs text-white/60">Sizinle tanışmak için burada</p>
                </div>
              </div>
              <ChatbotForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[1.5rem] sm:p-6">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#6B0F1A]/10 text-[#6B0F1A] sm:mb-6 sm:h-12 sm:w-12 sm:rounded-2xl">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
      <p className="mt-3 leading-7 text-[#5A5A5A]">{text}</p>
    </div>
  );
}

function Step({ number, title, text }: StepProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:rounded-[1.5rem] sm:p-6">
      <div className="flex gap-4 sm:gap-5">
        <div className="text-sm font-bold tracking-widest text-[#6B0F1A]">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
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

type Message = {
  id: string;
  role: "bot" | "user";
  content: React.ReactNode;
};

function ChatbotForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: ""
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const formDataRef = React.useRef(formData);
  const hasInteractedWithInputRef = React.useRef(false);
  const messagesContainerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateFormData = (data: typeof formData) => {
    formDataRef.current = data;
    setFormData(data);
  };

  const updateFormDataField = (field: keyof typeof formData, value: string) => {
    updateFormData({ ...formDataRef.current, [field]: value });
  };

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const sendEmailNotification = async (data: typeof formData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(errorBody?.error || "Email gönderimi başarısız oldu.");
      }

    } catch (error) {
      console.error("Email gönderim hatası:", error);
    }
  };

  const initialMessage: Message = {
    id: "init",
    role: "bot",
    content: (
      <>
        Değerli ziyaretçimiz, merhaba! Ben CNTG'nin dijital asistanı. Sizinle en doğru şekilde iletişime geçebilmemiz için kısaca tanışmak isterim. <br /><br />
        <strong>Öncelikle, değerli şirketinizin adını öğrenebilir miyim lütfen?</strong>
      </>
    )
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  React.useEffect(() => {
    if (!hasInteractedWithInputRef.current || isTyping || step === 4 || step === 6) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      if (document.activeElement !== inputRef.current && !inputRef.current?.disabled) {
        inputRef.current?.focus();
      }
    }, 0);

    return () => window.clearTimeout(focusTimer);
  }, [isTyping, step]);


  const handleNext = () => {
    if (inputValue.trim() === "") return;
    
    const userText = inputValue.trim();
    const currentStep = step;
    
    // Ziyaretçinin mesajını ekle
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: userText }]);
    setInputValue("");
    setIsTyping(true);

    // Yarım saniye sonra botun cevabını ekle
    setTimeout(() => {
      let nextBotMessage: React.ReactNode = "";
      
      if (currentStep === 0) {
        updateFormDataField("company", userText);
        nextBotMessage = (
          <>
            Çok teşekkür ederim. <strong>Sizin adınız ve soyadınız nedir acaba?</strong>
          </>
        );
        setStep(1);
      } else if (currentStep === 1) {
        updateFormDataField("name", userText);
        nextBotMessage = (
          <>
            Tanıştığıma çok memnun oldum {userText} Bey/Hanım. <br /><br />
            <strong>Size ulaşabilmemiz için e-posta adresinizi öğrenebilir miyim?</strong>
          </>
        );
        setStep(2);
      } else if (currentStep === 2) {
        if (!isValidEmail(userText)) {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString() + "_bot",
              role: "bot",
              content: "Lütfen geçerli bir e-posta adresi yazın."
            }
          ]);
          setIsTyping(false);
          return;
        }

        updateFormDataField("email", userText);
        nextBotMessage = (
          <>
            Teşekkür ederim. <strong>Son olarak iletişim için telefon numaranızı da rica edebilir miyim?</strong>
          </>
        );
        setStep(3);
      } else if (currentStep === 3) {
        updateFormDataField("phone", userText);
        nextBotMessage = (
          <>
            İletişim bilgilerinizi kaydettim, çok naziksiniz. Son olarak, <strong>aşağıdaki hizmetlerimizden hangisiyle ilgilenmektesiniz?</strong>
            <div className="mt-4 flex flex-col gap-2">
              {[
                "Sıfırdan Bölge ve Saha Yapılanması",
                "Mevcut Ekip Verimlilik ve Gelişim Analizi",
                "Distribütör Yapılandırması ve Yönetimi",
                "Diğer"
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => handleServiceSelect(item)}
                  className="rounded-lg bg-[#D7B982]/20 px-4 py-2 text-left text-sm font-medium text-[#D7B982] transition hover:bg-[#D7B982]/30"
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        );
        setStep(4);
      } else if (currentStep === 5) {
        nextBotMessage = (
          <>
            <strong>Bilgileriniz için çok teşekkür ederiz!</strong> İhtiyaçlarınızı kaydettik. Ekibimiz "Biz İletişime Geçelim Sizlerle" prensibiyle en kısa sürede tarafınıza dönüş sağlayacaktır. İyi çalışmalar dileriz!
          </>
        );
        setStep(6);
        // Step 6'ya geçerken mail gönderimini tetikle (OtherService bittiğinde)
        const finalData = { ...formDataRef.current, service: "Diğer", otherService: userText };
        updateFormData(finalData);
        sendEmailNotification(finalData);
      }

      setMessages(prev => [...prev, { id: Date.now().toString() + "_bot", role: "bot", content: nextBotMessage }]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  const handleServiceSelect = (service: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: service }]);
    setIsTyping(true);
    
    setTimeout(() => {
      let nextBotMessage: React.ReactNode = "";
      
      if (service !== "Diğer") {
        nextBotMessage = (
          <>
            <strong>Tercihiniz için çok teşekkür ederiz!</strong> İlgili ekibimiz "Biz İletişime Geçelim Sizlerle" prensibiyle en kısa sürede sizinle iletişime geçecektir. Güzel bir gün dileriz!
          </>
        );
        setStep(6);
        // Step 6'ya geçerken mail gönderimini tetikle (Normal hizmet bittiğinde)
        const finalData = { ...formDataRef.current, service };
        updateFormData(finalData);
        sendEmailNotification(finalData);
      } else {
        updateFormDataField("service", service);
        nextBotMessage = (
          <>
            Anlıyorum. <strong>Lütfen ilgilendiğiniz konuyu veya hizmeti bize kısaca yazabilir misiniz?</strong>
          </>
        );
        setStep(5);
      }
      
      setMessages(prev => [...prev, { id: Date.now().toString() + "_bot", role: "bot", content: nextBotMessage }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="flex h-[400px] flex-col justify-between rounded-xl bg-black/10 sm:h-[380px]">
      {/* Messages Area */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 space-y-3 overflow-y-auto p-3 scroll-smooth sm:space-y-4 sm:p-4"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`flex animate-fade-in ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`w-fit max-w-[min(92%,32rem)] break-words rounded-2xl p-3 text-sm leading-relaxed sm:max-w-[min(85%,32rem)] sm:p-4 ${
                msg.role === "user" 
                  ? "bg-[#D7B982] text-[#6B0F1A] rounded-tr-sm" 
                  : "bg-white/10 text-white rounded-tl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white/10 text-white/50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
              Yazıyor...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-white/10 p-3 sm:p-4">
        {step !== 4 && step !== 6 ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => {
                hasInteractedWithInputRef.current = true;
              }}
              onKeyDown={handleKeyPress}
              disabled={isTyping}
              placeholder={isTyping ? "Lütfen bekleyin..." : "Yanıtınızı buraya yazın..."}
              className="w-full rounded-xl bg-black/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-[#D7B982] disabled:opacity-50"
            />
            <button
              onClick={handleNext}
              disabled={inputValue.trim() === "" || isTyping}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D7B982] text-[#6B0F1A] transition hover:bg-white disabled:opacity-50"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        ) : step === 4 ? (
          <div className="text-center text-xs text-white/50">Lütfen yukarıdaki seçeneklerden birini işaretleyin.</div>
        ) : (
          <div className="text-center text-xs text-white/50">Görüşme tamamlandı.</div>
        )}
      </div>
    </div>
  );
}
