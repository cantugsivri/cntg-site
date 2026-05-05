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
              <div className="font-serif text-[4rem] md:text-[5.5rem] leading-none font-bold tracking-wide text-[#6B0F1A]">
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

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2rem] bg-[#6B0F1A] p-8 text-white md:p-12">
          <h2 className="text-4xl font-semibold tracking-[-0.03em]">
            Projenizi konuşalım.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Saha ve iş gelişimi, distribütör yapılanması veya yeni bölge büyümesi için
            kısa bir ön görüşme yapabiliriz.
          </p>
          
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            {/* Direct Contact Links */}
            <div className="flex flex-col gap-4">
              <a href="mailto:cantug.sivri@gmail.com" className="group">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 transition group-hover:bg-white/20">
                  <Mail className="h-5 w-5 text-[#D7B982]" />
                  <span>cantug.sivri@gmail.com</span>
                </div>
              </a>
              <a href="#" className="group" onClick={(e) => e.preventDefault()}>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 transition group-hover:bg-white/20">
                  <Linkedin className="h-5 w-5 text-[#D7B982]" />
                  <span>LinkedIn / Yakında Eklenecek</span>
                </div>
              </a>
            </div>

            {/* AI Chatbot Area */}
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7B982] text-[#6B0F1A] font-bold shadow-lg">
                  AI
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
    contact: "",
    service: "",
    otherService: ""
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleNext = () => {
    if (inputValue.trim() === "") return;
    
    const userText = inputValue;
    const currentStep = step;
    
    // Ziyaretçinin mesajını ekle
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: userText }]);
    setInputValue("");
    setIsTyping(true);

    // Yarım saniye sonra botun cevabını ekle
    setTimeout(() => {
      let nextBotMessage: React.ReactNode = "";
      
      if (currentStep === 0) {
        setFormData(prev => ({ ...prev, company: userText }));
        nextBotMessage = (
          <>
            Çok teşekkür ederim. <strong>Sizin adınız ve soyadınız nedir acaba?</strong>
          </>
        );
        setStep(1);
      } else if (currentStep === 1) {
        setFormData(prev => ({ ...prev, name: userText }));
        nextBotMessage = (
          <>
            Tanıştığıma çok memnun oldum {userText} Bey/Hanım. <br /><br />
            <strong>Size en kısa sürede ulaşabilmemiz için e-posta adresinizi veya telefon numaranızı rica edebilir miyim?</strong>
          </>
        );
        setStep(2);
      } else if (currentStep === 2) {
        setFormData(prev => ({ ...prev, contact: userText }));
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
        setStep(3);
      } else if (currentStep === 4) {
        setFormData(prev => ({ ...prev, otherService: userText }));
        nextBotMessage = (
          <>
            <strong>Bilgileriniz için çok teşekkür ederiz!</strong> İhtiyaçlarınızı kaydettik. Ekibimiz "Biz İletişime Geçelim Sizlerle" prensibiyle en kısa sürede verdiğiniz iletişim bilgileri üzerinden tarafınıza dönüş sağlayacaktır. İyi çalışmalar dileriz!
          </>
        );
        setStep(5);
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
        setFormData(prev => ({ ...prev, service }));
        nextBotMessage = (
          <>
            <strong>Tercihiniz için çok teşekkür ederiz!</strong> İlgili ekibimiz "Biz İletişime Geçelim Sizlerle" prensibiyle en kısa sürede sizinle iletişime geçecektir. Güzel bir gün dileriz!
          </>
        );
        setStep(5);
      } else {
        setFormData(prev => ({ ...prev, service }));
        nextBotMessage = (
          <>
            Anlıyorum. <strong>Lütfen ilgilendiğiniz konuyu veya hizmeti bize kısaca yazabilir misiniz?</strong>
          </>
        );
        setStep(4);
      }
      
      setMessages(prev => [...prev, { id: Date.now().toString() + "_bot", role: "bot", content: nextBotMessage }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="flex h-[380px] flex-col justify-between rounded-xl bg-black/10">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <motion.div 
            key={msg.id}
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.role === "user" 
                  ? "bg-[#D7B982] text-[#6B0F1A] rounded-tr-sm" 
                  : "bg-white/10 text-white rounded-tl-sm"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-white/10 text-white/50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
              Yazıyor...
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10">
        {step !== 3 && step !== 5 ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
        ) : step === 3 ? (
          <div className="text-center text-xs text-white/50">Lütfen yukarıdaki seçeneklerden birini işaretleyin.</div>
        ) : (
          <div className="text-center text-xs text-white/50">Görüşme tamamlandı.</div>
        )}
      </div>
    </div>
  );
}
