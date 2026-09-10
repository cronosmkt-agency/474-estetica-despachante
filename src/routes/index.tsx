import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car, ShieldCheck, FileText, Sparkles, Clock, MapPin, Phone, MessageCircle,
  ChevronDown, Star, ArrowRight, Menu, X, CheckCircle2, Wrench, Send, Zap,
  Check, Award, Layers, RefreshCw, Truck
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ClientLandingPage,
});

export default function ClientLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"estetica" | "despachante">("estetica");

  // Form State
  const [name, setName] = useState("");
  const [serviceType, setServiceType] = useState("Estética Automotiva Detalhada");
  const [specificService, setSpecificService] = useState("Lavagem Técnica Detalhada & Chassis");
  const [levaETraz, setLevaETraz] = useState("Sim, quero agendar Leva e Traz no meu endereço");
  const [neighborhood, setNeighborhood] = useState("");
  const [notes, setNotes] = useState("");

  const phone = "5521968043583";
  const phoneDisplay = "(21) 96804-3583";
  const address = "Av. Feliciano Sodré, 168 - Várzea, Teresópolis - RJ, 25963-081";
  const hours = "Segunda a Sexta: 08:00 às 18:00 | Sábados: 08:00 às 13:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Acessei o site da 474 Estética e Despachante e gostaria de tirar dúvidas e agendar um atendimento."
  )}`;

  const levaETrazWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar o serviço de Leva e Traz da 474 para buscar meu veículo."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*Solicitação de Agendamento — 474 Estética & Despachante*`,
      ``,
      `*Cliente:* ${name.trim()}`,
      `*Categoria:* ${serviceType}`,
      `*Serviço Escolhido:* ${specificService}`,
      `*Serviço Leva e Traz:* ${levaETraz}`,
      neighborhood.trim() ? `*Bairro / Endereço:* ${neighborhood.trim()}` : null,
      notes.trim() ? `*Observações:* ${notes.trim()}` : null,
      ``,
      `_Enviado pelo site oficial 474 Estética e Despachante Automotivo_`
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const esteticaServices = [
    {
      title: "Lavagem Técnica Detalhada & Chassis",
      desc: "Snow foam com pH neutro, pincelamento minucioso de emblemas, frestas, cantos de portas e caixas de roda. Secagem técnica sem redemoinhos.",
      tag: "Cuidado Essencial",
      badge: "pH Neutro"
    },
    {
      title: "Higienização Interna & Vapor",
      desc: "Limpeza profunda de estofados ou hidratação de bancos de couro, assepsia de carpetes, teto e desinfecção contra fungos, ácaros e maus odores.",
      tag: "Saúde & Conforto",
      badge: "Vapor & Extração"
    },
    {
      title: "Polimento Técnico & Proteção Cerâmica",
      desc: "Correção cirúrgica de verniz para eliminar micro-riscos e teias de aranha, brilho espelhado profundo e proteção com selante ou vitrificador.",
      tag: "Brilho Espelhado",
      badge: "Correção de Verniz"
    },
    {
      title: "Descontaminação de Vidros & Oxi-Sanitização",
      desc: "Remoção de chuva ácida nos vidros com repelência extrema na chuva e oxi-sanitização do duto de ar-condicionado para purificação total do habitáculo.",
      tag: "Visibilidade & Ar Puro",
      badge: "Segurança na Chuva"
    }
  ];

  const despachanteServices = [
    {
      title: "Transferência de Propriedade Veicular",
      desc: "Processo ágil de compra e venda de veículos com segurança jurídica, conferência rigorosa de laudos e emissão do novo registro sem filas no Detran.",
      tag: "Compra & Venda",
      badge: "Sem Burocracia"
    },
    {
      title: "Licenciamento Anual Digital (CRLV-e)",
      desc: "Regularização completa do exercício anual e emissão rápida do documento digital para você rodar 100% legalizado em qualquer lugar do Brasil.",
      tag: "Documento Anual",
      badge: "Emissão Rápida"
    },
    {
      title: "Primeiro Emplacamento & Placas Mercosul",
      desc: "Instalação rápida e regularização de placas no padrão oficial Mercosul para veículos novos, transferidos ou com tarjetas danificadas.",
      tag: "Placas Oficiais",
      badge: "Padrão Mercosul"
    },
    {
      title: "Consulta & Parcelamento de Débitos",
      desc: "Levantamento detalhado de débitos de IPVA, multas estaduais/municipais e facilidade de parcelamento para baixa de gravames sem dor de cabeça.",
      tag: "Economia & Paz",
      badge: "Parcelamento Ágil"
    }
  ];

  const testimonials = [
    {
      name: "Alexandre Neves",
      role: "Local Guide · 71 avaliações",
      text: "Atendimento profissional e atencioso. Usam produtos de primeira linha, se empenham no atendimento de qualidade e ainda disponibilizam possibilidade de pegar e devolver o veículo. Meu carro parece até zero km. Descobri que eles prestam serviços até para agências de veículos.",
      ownerReply: "Ficamos muito felizes com seu feedback Alexandre! Muito obrigado pela confiança em nosso serviço e é sempre um prazer atendê-lo."
    },
    {
      name: "Thiêssa Xavier Guimarães",
      role: "Cliente Satisfeita · 10 avaliações",
      text: "Atendimento de primeira qualidade por esse casal mega atencioso. Usam produtos de qualidade! Sucesso para vocês!",
      ownerReply: null
    },
    {
      name: "Bruno Cadilha",
      role: "Cliente Frequente · 4 avaliações",
      text: "Atendimento personalizado e altíssima qualidade. Fiquei muito satisfeito com o serviço prestado no meu carro.",
      ownerReply: "Muito obrigado pelo seu feedback Bruno!"
    }
  ];

  const faqItems = [
    {
      q: "Como funciona o serviço de Leva e Traz da 474?",
      a: "Você entra em contato conosco pelo WhatsApp e passa sua localização em Teresópolis (casa, consultório ou empresa). Nossa equipe agenda o horário, busca o veículo com checklist fotográfico de entrada e devolve o carro impecável e/ou com a documentação em mãos no mesmo dia."
    },
    {
      q: "A 474 faz apenas lava-rápido ou estética completa?",
      a: "Trabalhamos com Estética Automotiva de Alta Precisão. Não usamos produtos agressivos nem panos abrasivos: aplicamos formulações de pH neutro, pincéis de detalhamento e máquinas de extração a quente que protegem o verniz e os acabamentos internos."
    },
    {
      q: "Quais serviços de despachante vocês executam?",
      a: "Atendemos todas as demandas do Detran: transferência de propriedade, licenciamento anual digital (CRLV-e), troca de placas padrão Mercosul, quitação/parcelamento de multas e IPVA, e baixa de gravames bancários."
    },
    {
      q: "É verdade que vocês atendem agências e lojas de carros?",
      a: "Sim! Diversas agências de seminovos de Teresópolis confiam a preparação estética e a documentação dos seus estoques à 474. Esse mesmo rigor profissional é aplicado no carro de cada cliente particular."
    },
    {
      q: "Onde fica localizada a oficina física da 474?",
      a: "Estamos na Av. Feliciano Sodré, 168 - Várzea, Teresópolis - RJ (em plena avenida principal, com fácil acesso de parada e entrada)."
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500/30 selection:text-white pb-20 md:pb-0">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-sky-950/80 bg-[#090d16]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-950 border border-sky-500/40 text-sky-400 font-extrabold text-sm sm:text-lg shadow-md shadow-sky-950/50">
              474
            </div>
            <div className="min-w-0">
              <span className="block text-sm font-bold tracking-tight text-white sm:text-xl truncate">
                474 Estética & Despachante
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-wider text-sky-400 uppercase truncate">
                Centro Automotivo · Teresópolis
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#leva-e-traz" className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Leva e Traz
            </a>
            <a href="#servicos" className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Serviços
            </a>
            <a href="#diferenciais" className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Diferenciais
            </a>
            <a href="#sobre" className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Sobre Nós
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Avaliações 5.0
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Dúvidas
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 transition-all hover:bg-sky-500 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 text-slate-200 active:bg-slate-800 md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-sky-950 bg-[#0d1322] px-4 py-4 sm:px-6 sm:py-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <a
                href="#leva-e-traz"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Truck className="h-4 w-4 text-sky-400" />
                Serviço Leva e Traz
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Layers className="h-4 w-4 text-sky-400" />
                Serviços (Estética & Despachante)
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Award className="h-4 w-4 text-sky-400" />
                Diferenciais Exclusivos
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <MapPin className="h-4 w-4 text-sky-400" />
                Sobre a 474 na Feliciano Sodré
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                Avaliações Google Maps (5.0)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                Dúvidas Frequentes
              </a>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/30 active:scale-98"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com a 474 no WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden py-10 sm:py-16 md:py-24">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-sky-600/10 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[200px] sm:w-[300px] h-[150px] sm:h-[200px] bg-amber-500/10 blur-[80px] pointer-events-none rounded-full"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Text Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/60 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-sky-300 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Estética de Alta Precisão & Despachante Veicular</span>
              </div>

              <h1 className="mt-4 sm:mt-6 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
                O cuidado estético de um estúdio e a agilidade de um despachante,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">
                  sem sair de casa ou do trabalho.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-300 sm:text-xl">
                A <strong>474</strong> combina lavagem técnica detalhada, polimento espelhado e higienização profunda com assessoria documental completa no Detran. Conforto total com nosso exclusivo <strong>serviço de Leva e Traz em Teresópolis</strong>.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#agendamento"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-sky-600/30 transition-all active:scale-95"
                >
                  <Truck className="h-5 w-5 shrink-0" />
                  <span>Solicitar Serviço Leva e Traz</span>
                </a>
                <a
                  href="#servicos"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-slate-200 transition-all active:bg-slate-800"
                >
                  <span>Conhecer Nossos Serviços</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>

              {/* Social Proof Pill */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 border-t border-slate-800 pt-5">
                <div className="flex gap-1 text-amber-400 shrink-0">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    ⭐ 5,0 Estrelas no Google Maps (23 avaliações unânimes)
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Homologado por concessionárias e revendas de Teresópolis
                  </p>
                </div>
              </div>
            </div>

            {/* Reassurance Card Right */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl border border-sky-500/30 bg-[#0f172a]/95 p-5 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4 sm:pb-5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-950 border border-sky-500/40 text-sky-400 font-black text-sm sm:text-base">
                      474
                    </div>
                    <div>
                      <span className="block text-sm sm:text-base font-bold text-white">
                        474 Estética & Despachante
                      </span>
                      <span className="block text-[11px] sm:text-xs text-slate-400">
                        Av. Feliciano Sodré, 168 · Várzea
                      </span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-emerald-300">
                    100% 5 Estrelas
                  </span>
                </div>

                <div className="space-y-3.5 sm:space-y-4 py-5 sm:py-6">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Sistema Leva e Traz:</strong> Retiramos e entregamos seu veículo no trabalho ou residência com checklist fotográfico.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Padrão Homologado:</strong> Escolhidos por agências de veículos para preparação estética de showroom.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Despachante Credenciado:</strong> Transferências, licenciamento CRLV-e e débitos sem filas no Detran.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Produtos de Linha Nobre:</strong> Shampoos com pH neutro e ceras que preservam o verniz sem agressão química.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-[#090d16] p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-sky-400 shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-slate-400">Atendimento Direto no WhatsApp</p>
                      <p className="text-xs sm:text-sm font-bold text-white">{phoneDisplay}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="border-y border-slate-800/80 bg-[#0d1322]/80 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">5,0 ★</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">100% 5 Estrelas Google</span>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sky-400">Leva e Traz</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">Coleta e Entrega em Terê</span>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400">2 em 1</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">Estética + Despachante</span>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">Showroom</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">Parceiro de Concessionárias</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO LEVA E TRAZ EXCLUSIVA */}
      <section id="leva-e-traz" className="py-14 sm:py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-sky-500/40 bg-gradient-to-br from-[#0f172a] via-[#111c33] to-[#0a1020] p-5 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-sky-950 border border-sky-500/40 px-3 py-1 sm:px-4 sm:py-1 text-[11px] sm:text-xs font-bold text-sky-300 uppercase tracking-wider">
                Comodidade Absoluta
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Como Funciona o Serviço Leva e Traz da 474
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
                Você não precisa perder tempo no trânsito nem esperar no lava-rápido. Cuidamos de tudo enquanto você foca no seu trabalho ou descansa:
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-5 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-950 text-sky-400 font-extrabold text-lg sm:text-xl">
                  1
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Agendamento no WhatsApp</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Informe o serviço que precisa e passe seu endereço em Teresópolis (casa, escritório ou consultório).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-5 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-950 text-sky-400 font-extrabold text-lg sm:text-xl">
                  2
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Coleta com Vistoria Segura</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Nossa equipe busca o veículo no horário combinado com protocolo de checklist fotográfico de entrada.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-5 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-950 text-sky-400 font-extrabold text-lg sm:text-xl">
                  3
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Devolução Impecável</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Seu carro é entregue limpo, perfumado, com proteção na pintura e/ou com a documentação do Detran regularizada.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 border-t border-slate-800 pt-6 sm:pt-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">Horários Flexíveis:</strong> Atendimento pontual de segunda a sábado.
                </p>
              </div>
              <a
                href="#agendamento"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-full bg-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-95"
              >
                <span>Solicitar Leva e Traz Agora</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS & ABAS INTERATIVAS (ESTÉTICA vs DESPACHANTE) */}
      <section id="servicos" className="border-t border-slate-800/80 bg-[#0b101c] py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase">
              Solução Completa 2 em 1
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Nossas Especialidades em Teresópolis
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
              Selecione a área abaixo para visualizar nossos serviços especializados:
            </p>

            {/* RESPONSIVE TABS SELECTOR */}
            <div className="mt-6 sm:mt-8 w-full max-w-md mx-auto grid grid-cols-2 p-1 rounded-2xl bg-[#090d16] border border-slate-800 shadow-xl">
              <button
                onClick={() => setActiveTab("estetica")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl py-3 px-2 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "estetica"
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>Estética Auto</span>
              </button>
              <button
                onClick={() => setActiveTab("despachante")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl py-3 px-2 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "despachante"
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>Despachante</span>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(activeTab === "estetica" ? esteticaServices : despachanteServices).map((srv, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#111827]/90 p-5 sm:p-7 shadow-lg transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-950/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-slate-800 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-slate-300">
                      {srv.tag}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-sky-400">{srv.badge}</span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-white">{srv.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">{srv.desc}</p>
                </div>
                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de um orçamento para: ${srv.title} na 474.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-500/30 bg-sky-950/40 py-2.5 px-4 text-xs sm:text-sm font-semibold text-sky-300 hover:bg-sky-900/60 transition active:scale-98"
                  >
                    <span>Consultar Orçamento</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PILARES & DIFERENCIAIS */}
      <section id="diferenciais" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase">
              Por que a 474 é Referência
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Diferenciais que Conquistaram a Nota Máxima 5.0
            </h2>
          </div>

          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-8 md:grid-cols-3">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#111827]/80 p-5 sm:p-8 shadow-sm transition hover:border-slate-700">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-white">Leva e Traz de Confiança</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                A comodidade de ter seu veículo retirado e entregue no horário desejado, sem atrapalhar sua jornada de trabalho ou compromissos familiares.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#111827]/80 p-5 sm:p-8 shadow-sm transition hover:border-slate-700">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <Award className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-white">Padrão de Concessionária</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                Preparação estética rigorosa de nível showroom. É por isso que agências e lojas de seminovos de Teresópolis escolhem a 474 como parceira.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#111827]/80 p-5 sm:p-8 shadow-sm transition hover:border-slate-700">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-white">Atendimento Familiar & Honesto</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                Gerenciado por um casal dedicado que acompanha cada processo pessoalmente, garantindo respeito com seu carro e com seus documentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOBRE O ESPAÇO NA FELICIANO SODRÉ */}
      <section id="sobre" className="border-t border-slate-800/80 bg-[#0c1220] py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="rounded-2xl sm:rounded-3xl border border-sky-500/30 bg-gradient-to-br from-[#111827] to-[#090d16] p-6 sm:p-10 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-sky-950 border border-sky-500/40 text-sky-400 font-black text-2xl sm:text-3xl shadow-xl">
                  474
                </div>
                <h4 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-white">474 Estética e Despachante Automotivo</h4>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold tracking-wider text-sky-400 uppercase">
                  Av. Feliciano Sodré, 168 · Várzea, Teresópolis
                </p>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                  <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-[#090d16] p-3.5 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-400">Endereço Principal</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-white leading-snug">{address}</p>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-[#090d16] p-3.5 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-400">Horários de Atendimento</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-white leading-snug">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase">
                Quem Somos
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Mais que uma lavagem: o parceiro completo do seu veículo em Teresópolis
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-slate-300">
                Localizada na tradicional <strong>Av. Feliciano Sodré</strong>, a 474 nasceu para suprir a maior carência dos motoristas da serra: a necessidade de cuidar da estética do carro com carinho e precisão técnica, aliada à agilidade para resolver a burocracia veicular sem filas no Detran.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Nosso diferencial está na seriedade: usamos químicos de pH neutro, produtos com homologação internacional e entregamos uma assessoria jurídica transparente para que você dirija com prazer e tranquilidade.
              </p>

              <div className="mt-6 sm:mt-8 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">{address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL / AVALIAÇÕES GOOGLE MAPS */}
      <section id="avaliacoes" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase">
              100% 5 Estrelas Unânimes
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              O que os Clientes Dizem no Google Maps
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#111827] p-5 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-300 italic">
                    "{t.text}"
                  </p>

                  {t.ownerReply && (
                    <div className="mt-3 sm:mt-4 rounded-xl border border-slate-800 bg-[#090d16] p-3 text-[11px] sm:text-xs text-slate-400">
                      <strong className="text-sky-400 block mb-1">Resposta do Proprietário:</strong>
                      "{t.ownerReply}"
                    </div>
                  )}
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-sky-950 text-sky-400 font-bold text-xs sm:text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">{t.name}</span>
                    <span className="block text-[10px] sm:text-xs text-slate-400">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SIMULADOR INTERATIVO / AGENDAMENTO WHATSAPP */}
      <section id="agendamento" className="border-t border-slate-800/80 bg-[#0c1220] py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-sky-500/30 bg-[#111827] p-5 sm:p-10 md:p-12 shadow-2xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-sky-950 border border-sky-500/40 px-3 py-1 text-[11px] sm:text-xs font-semibold text-sky-300">
                Atendimento Ágil
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Agendamento & Orçamento Imediato
              </h2>
              <p className="mt-2 text-xs sm:text-base text-slate-400">
                Preencha os campos abaixo para enviar sua solicitação pronta direto ao WhatsApp da 474:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">Categoria do Atendimento:</label>
                  <select
                    value={serviceType}
                    onChange={(e) => {
                      setServiceType(e.target.value);
                      if (e.target.value.includes("Estética")) {
                        setSpecificService("Lavagem Técnica Detalhada & Chassis");
                      } else if (e.target.value.includes("Despachante")) {
                        setSpecificService("Transferência de Propriedade Veicular");
                      } else {
                        setSpecificService("Combo: Lavagem Técnica + Licenciamento/Transferência");
                      }
                    }}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-base text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    <option value="Estética Automotiva Detalhada">Estética Automotiva Detalhada</option>
                    <option value="Despachante Veicular Completo">Despachante Veicular Completo</option>
                    <option value="Combo Integrado (Estética + Despachante)">Combo Integrado (Estética + Despachante)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">Serviço de Interesse:</label>
                  <select
                    value={specificService}
                    onChange={(e) => setSpecificService(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-base text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    {serviceType.includes("Estética") && (
                      <>
                        <option value="Lavagem Técnica Detalhada & Chassis">Lavagem Técnica Detalhada & Chassis</option>
                        <option value="Higienização Interna Profunda & Extração">Higienização Interna Profunda & Extração</option>
                        <option value="Polimento Técnico & Proteção Cerâmica">Polimento Técnico & Proteção Cerâmica</option>
                        <option value="Descontaminação de Vidros & Oxi-Sanitização">Descontaminação de Vidros & Oxi-Sanitização</option>
                      </>
                    )}
                    {serviceType.includes("Despachante") && (
                      <>
                        <option value="Transferência de Propriedade Veicular">Transferência de Propriedade Veicular</option>
                        <option value="Licenciamento Anual Digital (CRLV-e)">Licenciamento Anual Digital (CRLV-e)</option>
                        <option value="Primeiro Emplacamento & Placas Mercosul">Primeiro Emplacamento & Placas Mercosul</option>
                        <option value="Consulta & Parcelamento de Débitos/IPVA">Consulta & Parcelamento de Débitos/IPVA</option>
                      </>
                    )}
                    {serviceType.includes("Combo") && (
                      <>
                        <option value="Combo: Lavagem Técnica + Licenciamento Anual">Combo: Lavagem Técnica + Licenciamento Anual</option>
                        <option value="Combo: Higienização Completa + Transferência de Veículo">Combo: Higienização Completa + Transferência de Veículo</option>
                        <option value="Combo Personalizado de Estética e Documentos">Combo Personalizado de Estética e Documentos</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">Deseja o Serviço Leva e Traz?</label>
                  <select
                    value={levaETraz}
                    onChange={(e) => setLevaETraz(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-base text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    <option value="Sim, quero agendar Leva e Traz no meu endereço">Sim, quero agendar Leva e Traz no meu endereço</option>
                    <option value="Não, levarei o veículo na Av. Feliciano Sodré, 168">Não, levarei o veículo na Av. Feliciano Sodré, 168</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">Bairro em Teresópolis (Opcional):</label>
                  <input
                    type="text"
                    placeholder="Ex: Várzea, Alto, Agriões, Comary..."
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">Observações ou Modelo do Carro (Opcional):</label>
                <textarea
                  rows={3}
                  placeholder="Ex: Corolla 2022, necessito retirar na quinta-feira de manhã..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full min-h-[52px] items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.01] active:scale-95"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Enviar Solicitação no WhatsApp da 474</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. FAQ SANFONADO */}
      <section id="faq" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800 bg-[#111827] transition"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left text-xs sm:text-base font-bold text-white hover:bg-slate-800/40 active:bg-slate-800/60"
                >
                  <span className="pr-2">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-sky-400 shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-slate-900 bg-black py-10 sm:py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-sky-950 border border-sky-500/40 text-sky-400 font-extrabold text-sm sm:text-base">
                  474
                </div>
                <span className="text-base sm:text-lg font-bold text-white">474 Estética & Despachante Automotivo</span>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-md">
                O único centro automotivo integrado de Teresópolis que une estética detalhada de showroom com serviços completos de despachante veicular e sistema exclusivo de Leva e Traz.
              </p>
              <div className="mt-4 sm:mt-6 flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider text-white uppercase">Links Rápidos</h5>
              <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm">
                <li><a href="#leva-e-traz" className="hover:text-sky-400">Serviço Leva e Traz</a></li>
                <li><a href="#servicos" className="hover:text-sky-400">Estética Automotiva</a></li>
                <li><a href="#servicos" className="hover:text-sky-400">Despachante Detran</a></li>
                <li><a href="#avaliacoes" className="hover:text-sky-400">Depoimentos Google</a></li>
                <li><a href="#agendamento" className="hover:text-sky-400">Agendar Atendimento</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider text-white uppercase">Horários & Contato</h5>
              <p className="mt-3 sm:mt-4 text-xs font-medium text-slate-400">{hours}</p>
              <p className="mt-2 text-xs font-bold text-white">WhatsApp: {phoneDisplay}</p>
              <div className="mt-4 sm:mt-6">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-950 border border-sky-500/40 px-4 py-2 text-xs font-bold text-sky-300 hover:bg-sky-900 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-slate-900 pt-6 sm:pt-8 text-[11px] sm:text-xs text-slate-400 sm:flex-row text-center sm:text-left">
            <p>© {new Date().getFullYear()} 474 Estética e Despachante Automotivo. Todos os direitos reservados.</p>
            <p className="font-semibold text-slate-400">
              Desenvolvido estrategicamente por <span className="text-white">Cronos Agency</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING STICKY MOBILE BOTTOM BAR (HIGH CONVERSION CTA) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-sky-500/30 bg-[#090d16]/95 backdrop-blur-lg px-4 py-3 md:hidden">
        <div className="flex items-center gap-2.5">
          <a
            href={levaETrazWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 py-3 text-xs font-bold text-white shadow-lg shadow-sky-600/30 active:scale-95"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <Truck className="h-4 w-4" />
            <span>Pedir Leva e Traz no WhatsApp</span>
          </a>
          <a
            href="#agendamento"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/40 bg-sky-950 text-sky-300 active:bg-sky-900"
            aria-label="Ir para formulário"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
