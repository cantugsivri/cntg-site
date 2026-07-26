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
  Target,
  Cpu,
  Zap,
  Briefcase,
  TrendingUp,
  Users,
  Building2,
  Sparkles,
  ChevronRight,
  Layers,
  Bot
} from "lucide-react";

type IconElement = ReactElement<{ className?: string }>;

type ServiceCardProps = {
  icon: IconElement;
  title: string;
  text: string;
  badge?: string;
};

type StepProps = {
  number: string;
  title: string;
  text: string;
};

export default function CNTGLandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#1E1E1E] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-[#F4E9DC] to-[#D8C8B8]" />
        <div className="absolute -right-28 top-0 h-[320px] w-[320px] rounded-full bg-[#6B0F1A]/10 blur-3xl sm:h-[520px] sm:w-[720px]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#F7F2EA] to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 sm:py-8 lg:px-10">
          {/* HEADER (PERFECTLY CENTERED LOGO) */}
          <header className="relative flex items-center justify-center py-4 sm:py-6 border-b border-[#6B0F1A]/10">
            <div className="flex flex-col items-center text-center">
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
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <a
                href="#contact"
                className="z-10 inline-flex items-center justify-center rounded-full bg-[#6B0F1A] px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-md transition hover:bg-[#530A13]"
              >
                İletişime Geç <ArrowRight className="ml-1 sm:ml-1.5 h-3.5 w-3.5" />
              </a>
            </div>
          </header>

          {/* HERO CONTENT (SHORT & CLEAN) */}
          <div className="pt-8 sm:pt-10 pb-4 max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl md:tracking-[-0.04em]">
              İşletmeniz için sürdürülebilir büyüme ve operasyonel verimlilik sistemleri kuruyoruz.
            </h1>
          </div>

          {/* 3 MAIN INTERACTIVE SERVICE BOXES (GRID) */}
          <div className="mt-6 sm:mt-8" id="services-overview">
            <div className="text-center mb-5">
              <p className="text-base sm:text-xl font-bold tracking-[0.15em] text-[#6B0F1A] uppercase">
                3 Ana Hizmet Alanımız
              </p>
              <h2 className="text-sm sm:text-base font-medium mt-1 text-[#4B4B4B]">İlgilendiğiniz hizmet kutusunu seçin</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {/* Pillar 1 Box */}
              <a
                href="/saha-hizmetleri"
                className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-2xl hover:ring-[#6B0F1A]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#6B0F1A]/10 text-[#6B0F1A] transition group-hover:bg-[#6B0F1A] group-hover:text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold sm:text-xl text-[#171717] group-hover:text-[#6B0F1A] transition">
                    Saha Satış ve İş Geliştirme, Operasyonel Büyüme Hizmetleri
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#6B0F1A]">
                  <span>Detayları İncele</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>

              {/* Pillar 2 Box */}
              <a
                href="/otomasyon-hizmetleri"
                className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-2xl hover:ring-[#6B0F1A]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#6B0F1A]/10 text-[#6B0F1A] transition group-hover:bg-[#6B0F1A] group-hover:text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold sm:text-xl text-[#171717] group-hover:text-[#6B0F1A] transition">
                    İş Süreçleri Analizi, Verimlilik ve Otomasyon Hizmetleri
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#6B0F1A]">
                  <span>Detayları İncele</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>

              {/* Pillar 3 Box */}
              <a
                href="/buyume-danismanligi"
                className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-2xl hover:ring-[#6B0F1A]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#6B0F1A]/10 text-[#6B0F1A] transition group-hover:bg-[#6B0F1A] group-hover:text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold sm:text-xl text-[#171717] group-hover:text-[#6B0F1A] transition">
                    Şirket Stratejik Büyüme ve Yönetim Partnerliği
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#6B0F1A]">
                  <span>Detayları İncele</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* CONTACT & CHATBOT SECTION */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-10 w-full">
        <div className="rounded-3xl bg-[#6B0F1A] p-4 text-white sm:rounded-[2rem] sm:p-8 md:p-12 overflow-hidden">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Projenizi konuşalım.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Saha satış hizmetleri, süreç otomasyonu veya kurumsallaşma & büyüme danışmanlığı için ön görüşme yapabiliriz.
          </p>
          
          <div className="mt-7 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[1fr_1.5fr]">
            {/* Direct Contact Links */}
            <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
              <a href="mailto:cantug.sivri@gmail.com" className="group">
                <div className="flex min-w-0 items-center gap-3 break-words rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl sm:p-4">
                  <Mail className="h-5 w-5 text-[#D7B982]" />
                  <span className="min-w-0 break-words text-sm sm:text-base">cantug.sivri@gmail.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/122203956" target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex min-w-0 items-center gap-3 break-words rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition group-hover:bg-white/20 sm:rounded-2xl sm:p-4">
                  <Linkedin className="h-5 w-5 text-[#D7B982]" />
                  <span className="text-sm sm:text-base">LinkedIn Profilimiz</span>
                </div>
              </a>
            </div>

            {/* AI Chatbot Area */}
            <div className="min-w-0 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm sm:p-6">
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
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, text, badge }: ServiceCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[1.5rem] sm:p-6 flex flex-col justify-between">
      <div>
        {badge && (
          <span className="inline-block rounded-full bg-[#6B0F1A]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#6B0F1A] uppercase tracking-wider mb-3">
            {badge}
          </span>
        )}
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#6B0F1A]/10 text-[#6B0F1A]">
          {React.cloneElement(icon, { className: "h-5 w-5" })}
        </div>
        <h3 className="text-lg font-bold sm:text-xl text-[#171717]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#5A5A5A]">{text}</p>
      </div>
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
        Değerli ziyaretçimiz, merhaba! Ben CNTG Growth Partners dijital asistanı. Sizinle en doğru şekilde iletişime geçebilmemiz için kısaca tanışmak isterim. <br /><br />
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
    
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: userText }]);
    setInputValue("");
    setIsTyping(true);

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
            İletişim bilgilerinizi kaydettim, çok naziksiniz. Son olarak, <strong>aşağıdaki ana hizmetlerimizden hangisiyle ilgilenmektesiniz?</strong>
            <div className="mt-4 flex flex-col gap-2">
              {[
                "1. Saha Satış, Büyüme ve Operasyon Hizmetleri",
                "2. İş Süreçleri Otomasyonu, Verimlilik ve Analiz Çalışmaları",
                "3. Stratejik Büyüme, Kurumsallığa Geçiş Danışmanlığı & Mentörlük",
                "Diğer / Genel Bilgi"
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => handleServiceSelect(item)}
                  className="rounded-lg bg-[#D7B982]/20 px-4 py-2.5 text-left text-xs sm:text-sm font-medium text-[#D7B982] transition hover:bg-[#D7B982]/30"
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
            <strong>Bilgileriniz için çok teşekkür ederiz!</strong> İhtiyaçlarınızı kaydettik. Ekibimiz en kısa sürede tarafınıza dönüş sağlayacaktır. İyi çalışmalar dileriz!
          </>
        );
        setStep(6);
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
      
      if (service !== "Diğer / Genel Bilgi") {
        nextBotMessage = (
          <>
            <strong>Tercihiniz için çok teşekkür ederiz!</strong> İlgili konunuzla alakalı uzman ekibimiz en kısa sürede sizinle iletişime geçecektir. Güzel bir gün dileriz!
          </>
        );
        setStep(6);
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
                  ? "bg-[#D7B982] text-[#6B0F1A] rounded-tr-sm font-medium" 
                  : "bg-white/10 text-[#ffffff] rounded-tl-sm"
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
