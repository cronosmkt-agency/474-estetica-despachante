import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car, ShieldCheck, FileText, Sparkles, Clock, MapPin, Phone, MessageCircle,
  ChevronDown, Star, ArrowRight, Menu, X, CheckCircle2, Wrench, Send, Zap,
  Check, Award, Layers, RefreshCw, Truck, Calendar, Navigation, ExternalLink,
  ShieldAlert, Eye, ThumbsUp
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
    "Olá! Acessei o site oficial da 474 Estética & Despachante e gostaria de tirar dúvidas e agendar um atendimento."
  )}`;

  const levaETrazWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar o serviço exclusivo de Leva e Traz da 474 para retirar e cuidar do meu veículo."
  )}`;

  const despachanteWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Preciso de assessoria de Despachante Veicular (transferência, licenciamento ou débitos) na 474."
  )}`;

  const googleMapsUrl = "https://maps.google.com/?q=Av.+Feliciano+Sodr%C3%A9,+168+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ,+25963-081";

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
      `_Enviado pelo site oficial da 474 Estética e Despachante Automotivo_`
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const esteticaServices = [
    {
      title: "Lavagem Técnica Detalhada & Chassis",
      desc: "Pré-lavagem com snow foam de pH neutro, pincelamento minucioso de emblemas, caixas de roda e cantos de porta. Secagem técnica sem redemoinhos nem riscos no verniz.",
      tag: "Cuidado Essencial",
      badge: "pH Neutro",
      features: ["Espuma ativa de pH neutro", "Pincéis anti-estáticos para frestas", "Limpeza detalhada de chassis", "Secagem técnica com microfibra premium"]
    },
    {
      title: "Higienização Interna & Oxi-Sanitização",
      desc: "Limpeza profunda com extratora a quente e vapor para tecidos ou hidratação nobre para bancos de couro, higienização de cintos, teto, carpetes e esterilização do ar-condicionado.",
      tag: "Saúde & Conforto",
      badge: "Vapor & Extração",
      features: ["Eliminação de fungos e ácaros", "Hidratação de bancos de couro", "Remoção de manchas e odores", "Purificação do sistema de ar"]
    },
    {
      title: "Polimento Técnico & Proteção Cerâmica",
      desc: "Correção de verniz para eliminar micro-riscos, teias de aranha e marcas circulares (swirls). Aplicação de selantes hidrofóbicos ou vitrificadores de longa durabilidade.",
      tag: "Brilho Espelhado",
      badge: "Correção de Verniz",
      features: ["Eliminação de até 95% dos micro-riscos", "Brilho profundo efeito espelho", "Proteção cerâmica hidrofóbica", "Resistência contra raios UV e dejetos"]
    },
    {
      title: "Descontaminação de Vidros & Cristalização",
      desc: "Remoção profunda de chuva ácida, marcas minerais e impurezas nos vidros, com aplicação de película hidrorrepelente que garante máxima visibilidade mesmo sob chuva intensa.",
      tag: "Visibilidade & Segurança",
      badge: "Segurança na Chuva",
      features: ["Remoção total de manchas ácidas", "Efeito repelente a gotas de chuva", "Menor desgaste das palhetas", "Visibilidade noturna cristalina"]
    },
    {
      title: "Revitalização de Faróis & Plásticos",
      desc: "Restauração da transparência de lentes de faróis opacas ou amareladas com polimento térmico e selagem protetora UV, além de revitalização e hidratação de frisos plásticos.",
      tag: "Restauração",
      badge: "Proteção UV",
      features: ["Aumento da potência de iluminação", "Aspecto de farol novo de fábrica", "Verniz protetor com bloqueador UV", "Frisos e borrachas renovados"]
    },
    {
      title: "Limpeza Técnica de Motor",
      desc: "Limpeza detalhada com isolamento completo de centrais, chicotes e sensores elétricos, produtos desengraxantes biodegradáveis e acabamento com verniz protetor térmico.",
      tag: "Conservação Mecânica",
      badge: "Isolamento Seguro",
      features: ["Isolamento elétrico preventivo", "Desengraxe seguro sem solventes", "Verniz protetor de motor", "Facilidade na identificação de vazamentos"]
    }
  ];

  const despachanteServices = [
    {
      title: "Transferência de Propriedade Veicular",
      desc: "Processo ágil e seguro de compra e venda de veículos com conferência jurídica documental, vistoria e emissão do novo Certificado de Registro sem filas no Detran.",
      tag: "Compra & Venda",
      badge: "Sem Burocracia",
      features: ["Segurança jurídica completa", "Conferência prévia de gravames", "Agilidade para comprador e vendedor", "Acompanhamento até a emissão final"]
    },
    {
      title: "Licenciamento Anual Digital (CRLV-e)",
      desc: "Regularização completa do exercício anual do veículo, quitação de taxas e emissão rápida do CRLV-e oficial em PDF para você rodar 100% legalizado em todo o território nacional.",
      tag: "Documento Anual",
      badge: "Emissão Rápida",
      features: ["Quitação de taxa de licenciamento", "Emissão do CRLV-e oficial digital", "Envio direto no seu WhatsApp", "Sem necessidade de deslocamento"]
    },
    {
      title: "Primeiro Emplacamento & Placas Mercosul",
      desc: "Instalação rápida e regularização de placas no padrão oficial Mercosul com QR Code para veículos zero km, transferências interestaduais ou substituição de placas danificadas.",
      tag: "Placas Oficiais",
      badge: "Padrão Mercosul",
      features: ["Padrão oficial homologado Denatran", "Troca rápida de placas cinzas", "Atendimento para carros zero km", "Fixação técnica sem avarias"]
    },
    {
      title: "Consulta & Parcelamento de Débitos e IPVA",
      desc: "Levantamento detalhado e confidencial de débitos de IPVA, multas municipais, estaduais e federais, com opções de parcelamento facilitado em até 12x no cartão de crédito.",
      tag: "Economia & Paz",
      badge: "Parcelamento Facilitado",
      features: ["Consulta completa em todas as bases", "Parcelamento em até 12x no cartão", "Baixa rápida no sistema do Detran", "Solução definitiva de bloqueios"]
    },
    {
      title: "Baixa de Gravame & Desalienação",
      desc: "Regularização de veículos quitados em financiamentos e consórcios, retirando restrições financeiras e permitindo a venda ou emissão do documento desimpedido.",
      tag: "Desalienação",
      badge: "Documento Livre",
      features: ["Baixa junto à financeira e Detran", "Atualização do cadastro veicular", "Liberação para venda imediata", "Orientação documental passo a passo"]
    },
    {
      title: "Alteração de Características & 2ª Via",
      desc: "Processos de alteração de cor, inclusão de GNV, alteração de suspensão permitida por lei e solicitação de segunda via de documentos extraviados ou rasurados.",
      tag: "Regularização Legal",
      badge: "Conformidade Total",
      features: ["Inclusão e baixa de GNV", "Troca de combustível ou cor", "Emissão de 2ª via de CRLV", "Assessoria técnica com normas Contran"]
    }
  ];

  const testimonials = [
    {
      name: "Alexandre Neves",
      role: "Local Guide · 71 avaliações no Google",
      text: "Atendimento profissional e atencioso. Usam produtos de primeira linha, se empenham no atendimento de qualidade e ainda disponibilizam possibilidade de pegar e devolver o veículo. Meu carro parece até zero km. Descobri que eles prestam serviços até para agências de veículos.",
      ownerReply: "Ficamos muito felizes com seu feedback Alexandre! Muito obrigado pela confiança em nosso serviço e é sempre um grande prazer atendê-lo."
    },
    {
      name: "Thiêssa Xavier Guimarães",
      role: "Cliente Google · 10 avaliações",
      text: "Atendimento de primeira qualidade por esse casal mega atencioso. Usam produtos de qualidade! Sucesso para vocês!",
      ownerReply: "Muito obrigado pelo carinho e pela confiança em nosso trabalho Thiêssa!"
    },
    {
      name: "Bruno Cadilha",
      role: "Cliente Google · 4 avaliações",
      text: "Atendimento personalizado e altíssima qualidade. Fiquei muito satisfeito com o serviço prestado no meu veículo.",
      ownerReply: "Muito obrigado pelo seu feedback positivo Bruno!"
    }
  ];

  const faqItems = [
    {
      q: "Como funciona o serviço de Leva e Traz da 474 em Teresópolis?",
      a: "Você entra em contato conosco pelo WhatsApp, informa os serviços desejados e passa sua localização (residência, consultório ou empresa). Nossa equipe agenda o horário ideal, busca o veículo com checklist fotográfico de entrada e o devolve impecavelmente limpo e/ou com a documentação do Detran concluída."
    },
    {
      q: "Qual a diferença entre a lavagem técnica da 474 e um lava-rápido comum?",
      a: "Na 474 praticamos Estética Automotiva Detalhada. Não utilizamos solupan ou detergentes agressivos que ressecam borrachas e esbranquiçam plásticos. Utilizamos shampoos com pH neutro, baldes com grelha anti-riscos, pincéis macios para frestas e toalhas de microfibra de alta densidade que preservam o verniz original sem teias de aranha (swirls)."
    },
    {
      q: "Quais serviços de despachante veicular vocês realizam?",
      a: "Atendemos todas as demandas veiculares oficiais: transferência de propriedade de compra e venda, emissão de licenciamento anual digital (CRLV-e), troca e fixação de placas padrão Mercosul, levantamento e parcelamento de débitos e multas, baixa de gravames de financiamento e alterações de características."
    },
    {
      q: "É verdade que vocês atendem agências e concessionárias de veículos?",
      a: "Sim! Diversas agências e revendas de seminovos de Teresópolis confiam a preparação estética de seus carros de showroom e a documentação veicular à equipe da 474. Esse mesmo padrão de excelência e cuidado rigoroso é aplicado no veículo de cada cliente particular."
    },
    {
      q: "Posso fazer um serviço combinado de estética e despachante no mesmo dia?",
      a: "Com certeza! Essa é a nossa maior vantagem integrada: você pode agendar o serviço de Leva e Traz, e nós cuidamos da higienização completa ou polimento enquanto protocolamos a transferência ou o licenciamento do seu veículo, devolvendo tudo pronto."
    },
    {
      q: "Onde fica a oficina física da 474 e quais são os horários?",
      a: "Estamos localizados em ponto nobre na Av. Feliciano Sodré, 168 - Várzea, Teresópolis - RJ (em frente à principal avenida da cidade, com fácil acesso e parada). Funcionamos de Segunda a Sexta das 08:00 às 18:00 e aos Sábados das 08:00 às 13:00."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-sky-500/30 selection:text-white pb-24 md:pb-0">
      {/* 0. TOP ANNOUNCEMENT RIBBON */}
      <div className="border-b border-sky-500/20 bg-gradient-to-r from-sky-950 via-[#0a1528] to-sky-950 px-4 py-2 text-center text-xs font-medium text-sky-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Sistema Leva e Traz em toda Teresópolis</span>
          </div>
          <p className="mx-auto text-[11px] sm:text-xs">
            Estética Automotiva de Alta Precisão & Despachante Oficial na Av. Feliciano Sodré, 168 · Aberto a partir das 08h
          </p>
          <div className="hidden md:flex items-center gap-2 font-semibold text-white">
            <Phone className="h-3.5 w-3.5 text-sky-400" />
            <span>{phoneDisplay}</span>
          </div>
        </div>
      </div>

      {/* 1. NAVBAR (HEADER STRICTLY WITHOUT ICON - TYPOGRAPHIC BRAND ONLY) */}
      <header className="sticky top-0 z-50 border-b border-sky-950/80 bg-[#070a12]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* Typographic Branding Only - Zero Icon */}
          <a href="#" className="flex flex-col min-w-0 text-left group">
            <span className="text-base sm:text-xl font-black tracking-tight text-white group-hover:text-sky-400 transition-colors">
              474 Estética & Despachante
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-400">
              Centro Automotivo · Teresópolis - RJ
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            <a href="#leva-e-traz" className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Leva e Traz
            </a>
            <a href="#servicos" className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Serviços 2 em 1
            </a>
            <a href="#diferenciais" className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Diferenciais
            </a>
            <a href="#sobre" className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Sobre a 474
            </a>
            <a href="#avaliacoes" className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Avaliações 5.0
            </a>
            <a href="#faq" className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-sky-400">
              Dúvidas
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition-all hover:opacity-95 hover:shadow-sky-500/40 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 text-slate-200 active:bg-slate-800 lg:hidden"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-sky-950 bg-[#0b101c] px-4 py-4 sm:px-6 sm:py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <a
                href="#leva-e-traz"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Truck className="h-4 w-4 text-sky-400" />
                <span>Serviço Leva e Traz em Terê</span>
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Layers className="h-4 w-4 text-sky-400" />
                <span>Serviços (Estética & Despachante)</span>
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Award className="h-4 w-4 text-sky-400" />
                <span>Diferenciais & Padrão Concessionária</span>
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Sobre a 474 na Feliciano Sodré</span>
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span>Avaliações Google Maps (Nota 5.0)</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 active:bg-sky-950/40"
              >
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span>Perguntas Frequentes</span>
              </a>

              <div className="pt-3 border-t border-slate-800/80">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/30 active:scale-98"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Falar com a 474 no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[400px] bg-sky-600/10 blur-[110px] sm:blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/2 right-4 sm:right-10 w-[200px] sm:w-[350px] h-[150px] sm:h-[220px] bg-amber-500/10 blur-[90px] pointer-events-none rounded-full"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/70 px-3.5 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>O Único Centro Automotivo Integrado de Teresópolis</span>
              </div>

              <h1 className="mt-5 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                Cuidado estético impecável e regularização veicular,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">
                  sem sair de casa ou do trabalho.
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-lg leading-relaxed text-slate-300 sm:text-xl">
                A <strong>474</strong> une o padrão refinado de um estúdio de detalhamento com a assessoria documental completa de despachante veicular. Aproveite a comodidade do nosso <strong>serviço exclusivo de Leva e Traz em Teresópolis</strong>.
              </p>

              {/* Dual Hero CTAs */}
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#agendamento"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 px-7 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-sky-600/30 transition-all hover:opacity-95 hover:shadow-sky-500/40 active:scale-95"
                >
                  <Truck className="h-5 w-5 shrink-0" />
                  <span>Agendar Serviço Leva e Traz</span>
                </a>
                <a
                  href={despachanteWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm sm:text-base font-bold text-slate-200 transition-all hover:bg-slate-800 hover:border-slate-600 active:scale-95"
                >
                  <FileText className="h-4 w-4 shrink-0 text-sky-400" />
                  <span>Falar com Despachante</span>
                </a>
              </div>

              {/* Social Proof Strip - Strictly Zero Emojis */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 border-t border-slate-800/80 pt-6">
                <div className="flex gap-1 text-amber-400 shrink-0">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>5,0 Estrelas no Google Maps</span>
                    <span className="text-slate-400 font-normal">(23 avaliações unânimes)</span>
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Parceiro homologado por agências e revendas de veículos de Teresópolis
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Institutional Reassurance Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-sky-500/30 bg-[#0f172a]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                  <div>
                    <span className="block text-base font-bold text-white">
                      474 Estética & Despachante
                    </span>
                    <span className="block text-xs text-slate-400">
                      Av. Feliciano Sodré, 168 · Várzea
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-300">
                    <Check className="h-3.5 w-3.5" />
                    100% 5 Estrelas
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Sistema Leva e Traz:</strong> Retiramos e entregamos seu carro no trabalho ou residência com checklist fotográfico de entrada.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Padrão de Concessionária:</strong> Escolhidos pelas principais agências de seminovos da cidade para preparação de showroom.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Despachante Credenciado:</strong> Transferência de propriedade, licenciamento anual digital e débitos sem filas no Detran.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Produtos de Linha Nobre:</strong> Shampoos com pH neutro e ceras que protegem o verniz sem agressão química ou marcas de lavagem.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#090d16] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-950 text-sky-400 border border-sky-500/30">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400">Atendimento Direto no WhatsApp</p>
                        <p className="text-sm font-bold text-white">{phoneDisplay}</p>
                      </div>
                    </div>
                    <a
                      href={defaultWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 px-3 py-1.5 text-xs font-bold text-sky-300 transition"
                    >
                      Conversar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS & CREDIBILITY BAR (STRICTLY ZERO EMOJIS) */}
      <section className="border-y border-slate-800/80 bg-[#0b101c]/80 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 sm:p-5 text-center transition hover:border-slate-700">
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">5,0</span>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-400 text-amber-400" />
              </div>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">
                100% 5 Estrelas no Google
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 sm:p-5 text-center transition hover:border-slate-700">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-400">Leva & Traz</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">
                Coleta e Entrega em Teresópolis
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 sm:p-5 text-center transition hover:border-slate-700">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400">2 em 1</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">
                Estética + Despachante Oficial
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/60 p-4 sm:p-5 text-center transition hover:border-slate-700">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Showroom</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">
                Parceiro de Concessionárias
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO LEVA E TRAZ EXCLUSIVA (COMODIDADE TOTAL) */}
      <section id="leva-e-traz" className="py-16 sm:py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-[#0f172a] via-[#111c33] to-[#0a1020] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-sky-950 border border-sky-500/40 px-3.5 py-1 text-xs font-bold text-sky-300 uppercase tracking-wider">
                Comodidade Sem Sair da Rotina
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Como Funciona o Serviço Leva e Traz da 474
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Você não precisa enfrentar trânsito, esperar no lava-rápido ou perder horas preciosas do seu dia. Cuidamos do seu veículo enquanto você trabalha ou aproveita sua família:
              </p>
            </div>

            {/* 3 Etapas Claras */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-6 flex flex-col justify-between hover:border-sky-500/40 transition">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 border border-sky-500/30 text-sky-400 font-black text-xl">
                    1
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">Agendamento via WhatsApp</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Envie uma mensagem informando o serviço desejado (estética, despachante ou ambos) e o seu endereço em Teresópolis (casa, clínica ou escritório).
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80 text-xs font-medium text-sky-400 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Horários combinados com pontualidade</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-6 flex flex-col justify-between hover:border-sky-500/40 transition">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 border border-sky-500/30 text-sky-400 font-black text-xl">
                    2
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">Coleta com Checklist Fotográfico</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Nossa equipe retira o seu veículo com total responsabilidade, registrando um checklist de entrada para garantir total transparência e tranquilidade.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Guarda segura da chave e do veículo</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-6 flex flex-col justify-between hover:border-sky-500/40 transition">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 border border-sky-500/30 text-sky-400 font-black text-xl">
                    3
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">Devolução com Padrão Showroom</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Seu carro é entregue limpo, perfumado, com proteção na pintura e/ou com a documentação do Detran concluída em mãos, onde você estiver.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80 text-xs font-medium text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Sensação de carro zero km</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout in Leva e Traz */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-amber-400 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">Atendimento em toda Teresópolis:</strong> Várzea, Alto, Agriões, Comary, Golfe, Barra e bairros adjacentes.
                </p>
              </div>
              <a
                href={levaETrazWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition active:scale-95"
              >
                <Truck className="h-4 w-4" />
                <span>Solicitar Leva e Traz no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS 2 EM 1 (INTERACTIVE TABS: ESTÉTICA vs DESPACHANTE) */}
      <section id="servicos" className="border-t border-slate-800/80 bg-[#0b101c] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Solução Completa e Integrada
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Nossos Serviços Especializados
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
              Selecione a modalidade abaixo para conhecer os procedimentos da nossa oficina de estética e assessoria de despachante:
            </p>

            {/* Responsive Tab Buttons */}
            <div className="mt-8 w-full max-w-md mx-auto grid grid-cols-2 p-1.5 rounded-2xl bg-[#070a12] border border-slate-800 shadow-xl">
              <button
                onClick={() => setActiveTab("estetica")}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "estetica"
                    ? "bg-sky-600 text-white shadow-lg shadow-sky-600/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>Estética Detalhada</span>
              </button>
              <button
                onClick={() => setActiveTab("despachante")}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "despachante"
                    ? "bg-sky-600 text-white shadow-lg shadow-sky-600/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="h-4 w-4 shrink-0" />
                <span>Despachante Oficial</span>
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(activeTab === "estetica" ? esteticaServices : despachanteServices).map((srv, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 sm:p-7 shadow-lg transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-950/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-slate-800/90 border border-slate-700/60 px-3 py-1 text-xs font-semibold text-slate-300">
                      {srv.tag}
                    </span>
                    <span className="text-xs font-bold text-sky-400 bg-sky-950/60 border border-sky-500/30 px-2.5 py-0.5 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">{srv.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">{srv.desc}</p>

                  <ul className="mt-4 space-y-2 pt-4 border-t border-slate-800/80">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de um orçamento para: ${srv.title} na 474.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-500/30 bg-sky-950/50 py-3 px-4 text-xs sm:text-sm font-semibold text-sky-300 hover:bg-sky-900/60 transition active:scale-98"
                  >
                    <span>Consultar Orçamento</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tab Banner */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-[#090d16] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Precisa de um combo sob medida?</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                Você pode combinar qualquer serviço de estética com o processo de despachante em uma única visita.
              </p>
            </div>
            <a
              href="#agendamento"
              className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-sky-500"
            >
              <span>Montar Meu Combo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. PILARES & DIFERENCIAIS */}
      <section id="diferenciais" className="py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Por Que a 474 é Referência
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Diferenciais Que Conquistaram a Nota Máxima 5.0
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
              A confiança de entregar as chaves e os documentos do seu carro a quem trata o seu patrimônio com o máximo respeito:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/80 p-6 sm:p-7 shadow-sm transition hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Leva e Traz Exclusivo</h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                A comodidade de ter seu carro recolhido e devolvido no horário desejado, sem interferir na sua rotina de trabalho ou reuniões.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#111827]/80 p-6 sm:p-7 shadow-sm transition hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Padrão de Concessionária</h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                Preparação estética rigorosa de nível showroom. É por isso que agências e lojas de seminovos de Teresópolis escolhem a 474 como parceira.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#111827]/80 p-6 sm:p-7 shadow-sm transition hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Atendimento Familiar & Honesto</h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                Gerenciado por um casal dedicado que acompanha cada processo pessoalmente, garantindo total transparência com seu carro e documentos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#111827]/80 p-6 sm:p-7 shadow-sm transition hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 border border-sky-500/30">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Produtos com pH Neutro</h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                Zero uso de produtos cáusticos ou abrasivos que danificam borrachas e frisos. Químicos nobres que preservam o verniz original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOBRE O ESPAÇO FÍSICO NA FELICIANO SODRÉ */}
      <section id="sobre" className="border-t border-slate-800/80 bg-[#0c1220] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-br from-[#111827] to-[#090d16] p-7 sm:p-10 shadow-xl">
                {/* Clean Typographic Branding Only */}
                <h4 className="text-2xl sm:text-3xl font-black text-white">
                  474 Estética & Despachante
                </h4>
                <p className="mt-1 text-xs font-semibold tracking-wider text-sky-400 uppercase">
                  Av. Feliciano Sodré, 168 · Várzea, Teresópolis - RJ
                </p>

                <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ponto de máxima visibilidade e fácil acesso em plena avenida principal de Teresópolis, oferecendo conforto na entrega e retirada de veículos.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="rounded-2xl border border-slate-800 bg-[#070a12] p-4">
                    <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-sky-400" />
                      Endereço Oficial
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">{address}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-[#070a12] p-4">
                    <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-amber-400" />
                      Horários de Atendimento
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">{hours}</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Como Chegar via Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                Quem Somos
              </span>
              <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                Mais que uma lavagem: o parceiro completo do seu veículo em Teresópolis
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                Localizada na tradicional <strong>Av. Feliciano Sodré</strong>, a 474 nasceu para suprir a maior carência dos motoristas da serra: a necessidade de cuidar da estética do carro com carinho e precisão técnica, aliada à agilidade para resolver a burocracia veicular sem filas no Detran.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Nosso diferencial está na seriedade: usamos químicos de pH neutro, produtos com homologação internacional e entregamos uma assessoria jurídica transparente para que você dirija com prazer, orgulho e tranquilidade.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#agendamento"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-500 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Agendar Atendimento</span>
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-slate-800"
                >
                  <MapPin className="h-4 w-4 text-sky-400" />
                  <span>Ver Localização</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL / AVALIAÇÕES GOOGLE MAPS (100% 5 ESTRELAS) */}
      <section id="avaliacoes" className="py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              100% 5 Estrelas Unânimes
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              O Que Dizem os Nossos Clientes no Google Maps
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
              Depoimentos reais extraídos diretamente da nossa ficha verificada no Google Maps em Teresópolis:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800 bg-[#111827] p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300 italic">
                    "{t.text}"
                  </p>

                  {t.ownerReply && (
                    <div className="mt-4 rounded-2xl border border-slate-800 bg-[#090d16] p-3.5 text-xs text-slate-400">
                      <strong className="text-sky-400 block mb-1">Resposta do Proprietário:</strong>
                      "{t.ownerReply}"
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-950 text-sky-400 font-black text-sm border border-sky-500/30">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-white">{t.name}</span>
                    <span className="block text-[11px] sm:text-xs text-slate-400">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Badge */}
          <div className="mt-10 text-center">
            <a
              href="https://maps.google.com/?q=474+Estetica+e+Despachante+Automotivo+Teresopolis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-[#090d16] px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Ver ficha verificada no Google Maps (23 avaliações 5.0)</span>
              <ExternalLink className="h-3 w-3 text-slate-500" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. SIMULADOR INTERATIVO / AGENDAMENTO DIRETO NO WHATSAPP */}
      <section id="agendamento" className="border-t border-slate-800/80 bg-[#0c1220] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-sky-500/30 bg-[#111827] p-6 sm:p-10 md:p-12 shadow-2xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-sky-950 border border-sky-500/40 px-3.5 py-1 text-xs font-semibold text-sky-300">
                Atendimento Rápido e Sem Burocracia
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Agendamento & Orçamento Imediato
              </h2>
              <p className="mt-2 text-xs sm:text-base text-slate-400">
                Preencha os campos abaixo para gerar sua solicitação personalizada e enviar diretamente ao WhatsApp da 474:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Alberto Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                    Categoria do Atendimento:
                  </label>
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
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-sm sm:text-base text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    <option value="Estética Automotiva Detalhada">Estética Automotiva Detalhada</option>
                    <option value="Despachante Veicular Completo">Despachante Veicular Completo</option>
                    <option value="Combo Integrado (Estética + Despachante)">Combo Integrado (Estética + Despachante)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                    Serviço de Interesse:
                  </label>
                  <select
                    value={specificService}
                    onChange={(e) => setSpecificService(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-sm sm:text-base text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    {serviceType.includes("Estética") && (
                      <>
                        <option value="Lavagem Técnica Detalhada & Chassis">Lavagem Técnica Detalhada & Chassis</option>
                        <option value="Higienização Interna Profunda & Extração">Higienização Interna Profunda & Extração</option>
                        <option value="Polimento Técnico & Proteção Cerâmica">Polimento Técnico & Proteção Cerâmica</option>
                        <option value="Descontaminação de Vidros & Cristalização">Descontaminação de Vidros & Cristalização</option>
                        <option value="Revitalização de Faróis & Plásticos">Revitalização de Faróis & Plásticos</option>
                        <option value="Limpeza Técnica de Motor">Limpeza Técnica de Motor</option>
                      </>
                    )}
                    {serviceType.includes("Despachante") && (
                      <>
                        <option value="Transferência de Propriedade Veicular">Transferência de Propriedade Veicular</option>
                        <option value="Licenciamento Anual Digital (CRLV-e)">Licenciamento Anual Digital (CRLV-e)</option>
                        <option value="Primeiro Emplacamento & Placas Mercosul">Primeiro Emplacamento & Placas Mercosul</option>
                        <option value="Consulta & Parcelamento de Débitos/IPVA">Consulta & Parcelamento de Débitos/IPVA</option>
                        <option value="Baixa de Gravame & Desalienação">Baixa de Gravame & Desalienação</option>
                        <option value="Alteração de Características / 2ª Via">Alteração de Características / 2ª Via</option>
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                    Deseja o Serviço Leva e Traz?
                  </label>
                  <select
                    value={levaETraz}
                    onChange={(e) => setLevaETraz(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-sm sm:text-base text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    <option value="Sim, quero agendar Leva e Traz no meu endereço">Sim, quero agendar Leva e Traz no meu endereço</option>
                    <option value="Não, levarei o veículo na Av. Feliciano Sodré, 168">Não, levarei o veículo na Av. Feliciano Sodré, 168</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                    Bairro em Teresópolis (Opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Várzea, Alto, Agriões, Comary..."
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                  Modelo do Veículo ou Observações (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Corolla 2022 prata, gostaria de fazer na quinta-feira pela manhã..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#090d16] px-4 py-3 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full min-h-[54px] items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.01] active:scale-95"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Enviar Solicitação no WhatsApp da 474</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. LOCALIZAÇÃO / GOOGLE MAPS EMBED */}
      <section id="localizacao" className="py-16 sm:py-20 md:py-28 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Localização Central
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Como Chegar à 474 na Av. Feliciano Sodré
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
              Estamos na principal avenida de Teresópolis, no bairro da Várzea, com fácil acesso e parada para desembarque e atendimento imediato.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-center">
            {/* Map Frame */}
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] shadow-xl">
              <iframe
                title="Localização 474 Estética e Despachante Automotivo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1969299446215!2d-42.9734125!3d-22.420658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9852ae7ca7bb53%3A0xe9eaee7859d5718a!2sAv.%20Feliciano%20Sodr%C3%A9%2C%20168%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025963-081!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              ></iframe>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-950 text-sky-400 border border-sky-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Endereço</h5>
                    <p className="text-sm font-bold text-white leading-snug">{address}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-950 text-sky-400 border border-sky-500/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Horários</h5>
                    <p className="text-sm font-bold text-white leading-snug">{hours}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-950 text-sky-400 border border-sky-500/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Oficial</h5>
                    <p className="text-sm font-bold text-white leading-snug">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 hover:bg-sky-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition active:scale-95"
              >
                <Navigation className="h-4 w-4" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SANFONADO */}
      <section id="faq" className="py-16 sm:py-20 md:py-28 border-t border-slate-800/80 bg-[#090d16]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="mt-10 sm:mt-12 space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] transition"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-bold text-white hover:bg-slate-800/40 active:bg-slate-800/60"
                >
                  <span className="pr-3">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-sky-400 shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-slate-800/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FOOTER (TYPOGRAPHIC BRAND ONLY) */}
      <footer className="border-t border-slate-900 bg-black py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-black text-white">
                  474 Estética & Despachante Automotivo
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mt-0.5">
                  Centro Automotivo Integrado · Teresópolis - RJ
                </span>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-md">
                O único centro automotivo integrado de Teresópolis que une estética detalhada de showroom com serviços completos de despachante veicular e sistema exclusivo de Leva e Traz em domicílio.
              </p>
              <div className="mt-5 flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider text-white uppercase">Links Rápidos</h5>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li><a href="#leva-e-traz" className="hover:text-sky-400 transition">Serviço Leva e Traz</a></li>
                <li><a href="#servicos" className="hover:text-sky-400 transition">Estética Automotiva</a></li>
                <li><a href="#servicos" className="hover:text-sky-400 transition">Despachante Detran</a></li>
                <li><a href="#diferenciais" className="hover:text-sky-400 transition">Padrão Concessionária</a></li>
                <li><a href="#avaliacoes" className="hover:text-sky-400 transition">Depoimentos Google 5.0</a></li>
                <li><a href="#agendamento" className="hover:text-sky-400 transition">Agendar Atendimento</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider text-white uppercase">Horários & Contato</h5>
              <p className="mt-4 text-xs font-medium text-slate-400">{hours}</p>
              <p className="mt-2 text-xs font-bold text-white">WhatsApp: {phoneDisplay}</p>
              <div className="mt-5">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-950 border border-sky-500/40 px-4 py-2.5 text-xs font-bold text-sky-300 hover:bg-sky-900 transition active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-xs text-slate-500 sm:flex-row text-center sm:text-left">
            <p>© {new Date().getFullYear()} 474 Estética e Despachante Automotivo. Todos os direitos reservados.</p>
            <p className="font-semibold text-slate-400">
              Desenvolvido estrategicamente por <span className="text-white">Cronos Agency</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING STICKY MOBILE BOTTOM BAR (HIGH CONVERSION CTA) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-sky-500/30 bg-[#070a12]/95 backdrop-blur-lg px-4 py-3 md:hidden">
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
            aria-label="Ir para simulador de agendamento"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20474%20Est%C3%A9tica%20%26%20Despachante%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
