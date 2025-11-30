"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  Users,
  Play,
  Menu,
  X,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  Smartphone,
  Award,
  BookOpen,
  Globe,
  Lock,
  Calendar,
  ChevronDown,
  HelpCircle,
  Youtube,
} from "lucide-react";

// --- CONFIGURATION DU THEME ---
// Utilisation de couleurs "Pierre" (Stone) et "Émeraude" (Emerald) pour le côté Premium/Nature
const THEME = {
  bg: "bg-[#FDFCF8]", // Fond crème très léger (Papier haut de gamme)
  textMain: "text-stone-900",
  textMuted: "text-stone-600",
  primary: "bg-emerald-900", // Vert profond institutionnel
  accent: "bg-amber-600", // Terre de sienne (Action)
  surface: "bg-white",
};

// --- COMPOSANTS UI REUTILISABLES ---

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ text, color = "emerald" }: any) => (
  <div
    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${
      color === "amber"
        ? "bg-amber-50 text-amber-700 border border-amber-100"
        : "bg-emerald-50 text-emerald-800 border border-emerald-100"
    }`}
  >
    <span
      className={`w-1.5 h-1.5 rounded-full ${
        color === "amber" ? "bg-amber-600" : "bg-emerald-600"
      }`}
    ></span>
    {text}
  </div>
);

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}: {
  children: any;
  variant: "primary" | "dark" | "outline";
  className?: string;
  icon?: any;
}) => {
  const base =
    "px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1";

  const styles = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700 shadow-amber-900/10 border border-transparent", // Contraste fort corrigé
    dark: "bg-emerald-950 text-white hover:bg-emerald-900 shadow-emerald-900/20 border border-transparent",
    outline:
      "bg-transparent border-2 border-emerald-900/10 text-emerald-950 hover:bg-emerald-50 backdrop-blur-sm",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className || ''}`}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

// --- COMPOSANT MOCKUP APPLICATION (Repensé pour être stable) ---
const AppMockup = () => (
  <div className="relative mx-auto w-[280px] h-[580px] bg-emerald-950 rounded-[3rem] border-4 border-emerald-900 shadow-2xl overflow-hidden">
    {/* StatusBar */}
    <div className="absolute top-0 w-full h-6 bg-emerald-950 z-20 flex justify-between px-6 items-center pt-2">
      <div className="text-[10px] text-white font-bold">9:41</div>
      <div className="flex gap-1">
        <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>

    {/* Screen Content */}
    <div className="w-full h-full bg-stone-50 pt-8 flex flex-col relative">
      {/* Header App */}
      <div className="px-5 pb-4 flex justify-between items-center bg-white shadow-sm z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&h=100"
              className="w-full h-full object-cover"
              alt="Avatar"
            />
          </div>
          <div>
            <p className="text-[10px] text-stone-500 font-bold uppercase">
              Niveau 3
            </p>
            <p className="text-sm font-bold text-emerald-950 leading-none">
              Kofi.Builder
            </p>
          </div>
        </div>
        <div className="bg-amber-100 px-2 py-1 rounded-lg flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-[8px] text-white">
            ₵
          </div>
          <span className="text-xs font-bold text-amber-700">850</span>
        </div>
      </div>

      {/* Body App */}
      <div className="p-4 space-y-3 overflow-hidden relative">
        {/* Daily Mission Card */}
        <div className="bg-emerald-900 rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-800 rounded-full -mr-10 -mt-10 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-emerald-800 text-[10px] px-2 py-0.5 rounded text-emerald-200">
                Mission du jour
              </span>
              <TrendingUp size={16} className="text-emerald-400" />
            </div>
            <h4 className="font-bold text-lg leading-tight mb-1">
              Stand de Jus
            </h4>
            <p className="text-xs text-emerald-300 mb-3">
              Étape 2: Fixer ton prix
            </p>
            <div className="w-full bg-emerald-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-500 w-2/3 h-full rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center justify-center gap-2 aspect-square">
            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <Lightbulb size={20} />
            </div>
            <span className="text-xs font-bold text-stone-600">Quiz</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center justify-center gap-2 aspect-square">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xs font-bold text-stone-600">Coffre</span>
          </div>
        </div>

        {/* Mascotte Dialog */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl border border-stone-200 shadow-lg flex gap-3 items-center animate-bounce-slow">
          <div className="text-2xl">🐿️</div>
          <p className="text-xs text-stone-600 font-medium">
            "N'oublie pas de mettre 10% dans ton épargne !"
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur border-stone-200 py-3"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Premium */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-950 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-amber-500 font-serif font-bold text-xl">
              R
            </span>
          </div>
          <div className="leading-none hidden md:block">
            <span className="block font-bold text-emerald-950 tracking-tight text-lg">
              Chrildren Finance
            </span>
            <span className="block text-[9px] text-emerald-700 uppercase tracking-[0.2em] font-medium">
              Academy
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#vision"
            className="hover:text-emerald-900 transition-colors"
          >
            Notre Vision
          </a>
          <a
            href="#programme"
            className="hover:text-emerald-900 transition-colors"
          >
            Le Cursus
          </a>
          <a
            href="#methode"
            className="hover:text-emerald-900 transition-colors"
          >
            La Méthode
          </a>
          <a
            href="#tarifs"
            className="hover:text-emerald-900 transition-colors"
          >
            Tarifs
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-emerald-900 font-medium text-sm hover:underline decoration-amber-500 underline-offset-4">
            Espace Enfant
          </button>
          <Button variant="dark" className="py-2.5 px-6 text-sm !shadow-none">
            Espace Parents
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-950"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 text-center">
              <a
                href="#programme"
                onClick={() => setIsOpen(false)}
                className="text-emerald-900 font-medium py-2"
              >
                Le Programme
              </a>
              <a
                href="#tarifs"
                onClick={() => setIsOpen(false)}
                className="text-emerald-900 font-medium py-2"
              >
                Tarifs
              </a>
              <Button variant="primary" className="w-full justify-center">
                Connexion Parents
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#FDFCF8]">
    {/* Background Patterns */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      {/* Colonne Texte */}
      <div className="max-w-xl">
        <FadeIn>
          <SectionLabel text="Rentrée Académique 2025" color="amber" />
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-emerald-950 font-medium leading-[1.05] mb-6">
            L'excellence financière <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700 italic pr-2">
              s'apprend tôt.
            </span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg">
            La première académie digitale qui transforme
            l'argent de poche en leçons de leadership. Une pédagogie inspirée
            des cultures africaines pour les 5-16 ans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" icon={ArrowRight}>
              Inscrire mon enfant
            </Button>
            <Button variant="outline" icon={Play}>
              Découvrir la vidéo
            </Button>
          </div>

          <div className="flex items-center gap-6 border-t border-stone-200 pt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden"
                >
                  <img
                    src={
                      `https://images.unsplash.com/photo-${
                      1500000000000 + i
                    }?auto=format&fit=crop&w=64&h=64`
                  }
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-500 text-xs">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-emerald-950">
                Approuvé par +500 parents
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Colonne Visuelle (Composition Robuste) */}
      <FadeIn
        delay={0.2}
        className="relative flex justify-center lg:justify-end h-[600px] items-center"
      >
        {/* Cercle de fond */}
        <div className="absolute w-[500px] h-[500px] bg-stone-100 rounded-full -z-10"></div>

        {/* Photo Enfant Principale */}
        <div className="relative z-10 w-72 md:w-80 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 md:mr-20">
          <img
            src="https://lirp.cdn-website.com/546572dd/dms3rep/multi/opt/cursos-kids-san-francisco-english-school-97dcd3b1-598w.jpg"
            alt="Enfant étudiant"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex flex-col justify-end p-6">
            <p className="text-white font-serif font-bold text-xl">
              L'avenir se prépare.
            </p>
            <p className="text-emerald-200 text-xs mt-1">Programme 9-12 ans</p>
          </div>
        </div>

        {/* Carte Flottante "Résultat" */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-0 md:right-10 z-20 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 max-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-emerald-100 rounded-full text-emerald-700">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-[10px] text-stone-500 uppercase font-bold">
                Investissement
              </p>
              <p className="font-bold text-emerald-950">+ 15% Intérêts</p>
            </div>
          </div>
          <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4"></div>
          </div>
        </motion.div>

        {/* Carte Flottante "App" */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 left-0 md:left-10 z-30 bg-emerald-950 p-5 rounded-2xl shadow-xl max-w-[220px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl">
              🏆
            </div>
            <div>
              <p className="text-xs text-emerald-300 font-medium">
                Mission Accomplie
              </p>
              <p className="font-bold text-white text-sm">Premier Budget !</p>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  </section>
);

const Logos = () => (
  <div className="border-y border-stone-200 bg-white py-10">
    <div className="container mx-auto px-6">
      <p className="text-center text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-8">
        Recommandé par les experts
      </p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Logos Textuels Stylisés pour éviter les SVG brisés */}
        <span className="text-xl font-bold font-serif text-emerald-900">
          EdTech Africa
        </span>
        <span className="text-xl font-bold font-serif text-emerald-900">
          FinanceWatch
        </span>
        <span className="text-xl font-bold font-serif text-emerald-900">
          Parenting+
        </span>
        <span className="text-xl font-bold font-serif text-emerald-900">
          FutureLeaders
        </span>
      </div>
    </div>
  </div>
);

// --- NOUVELLE SECTION 1 : STEPHANIE & YOUTUBE ---
const FounderAuthority = () => (
  <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
    {/* Fond décoratif abstrait */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Colonne Texte & Preuve Sociale */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Youtube size={16} fill="currentColor" />
            Vu sur YouTube
          </div>

          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            La référence de la finance en Afrique pour nos Enfants
          </h2>

          <p className="text-emerald-200/80 text-lg mb-10 leading-relaxed font-light">
            Stéphanie Mbida ne se contente pas d'enseigner la théorie. Suivie
            par plus de <strong>600 000 personnes</strong>, elle démocratise
            l'intelligence financière avec une pédagogie qui a fait ses preuves.
          </p>

          <div className="flex flex-wrap gap-8 border-t border-emerald-800 pt-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">600k+</p>
              <p className="text-xs text-emerald-400 uppercase tracking-widest">
                Abonnés YouTube
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">5M+</p>
              <p className="text-xs text-emerald-400 uppercase tracking-widest">
                Vues Cumulées
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">Top 10</p>
              <p className="text-xs text-emerald-400 uppercase tracking-widest">
                Influenceurs Finance
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Colonne Vidéo (Cadre Premium) */}
        <FadeIn delay={0.2} className="relative group">
          {/* Effet de lueur dorée derrière la vidéo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative rounded-2xl overflow-hidden border border-emerald-800 shadow-2xl bg-black aspect-video">
            {/* REMPLACER L'URL 'src' PAR L'ID DE LA VIDEO DE STEPHANIE */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/EtcNMncv2mA?si=PlaceholderID"
              title="Stephanie Mbida Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Caption sous la vidéo */}
          <div className="flex items-center gap-3 mt-4 text-sm text-emerald-400/60 italic">
            <Play size={14} /> Regardez pourquoi l'éducation financière change
            des vies.
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

// --- NOUVELLE SECTION 2 : LES FORMATEURS (FACULTY) ---
const Faculty = () => {
  const trainers = [
    {
      name: "Dr. Paul N.",
      role: "Pédagogue & Psychologue",
      desc: "Spécialiste du développement cognitif de l'enfant. Il veille à ce que chaque leçon soit adaptée à l'âge de l'élève.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Sarah K. MBA",
      role: "Expert en Investissement",
      desc: "Ex-banquière d'affaires à Londres. Elle simplifie les concepts complexes (Bourse, Crypto) pour les rendre ludiques.",
      img: "https://images.unsplash.com/photo-1573497019-9e6a575a8316?auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Jean-Marc E.",
      role: "Entrepreneur Tech",
      desc: "Fondateur de 2 startups. Il guide les enfants dans la création de leur 'Business Plan' simplifié.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Amina B.",
      role: "Coach Certifiée",
      desc: "Elle anime les sessions live et motive la communauté pour transformer les échecs en apprentissages.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
    },
  ];

  return (
    <section
      id="experts"
      className="py-24 bg-stone-50 border-t border-stone-200"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Corps Enseignant" color="emerald" />
          <h2 className="font-serif text-4xl text-emerald-950 mb-4">
            Encadrés par l'élite
          </h2>
          <p className="text-stone-600 text-lg">
            Vos enfants méritent les meilleurs mentors. Notre équipe combine
            expertise académique et réussite terrain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((expert, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-amber-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-full border-2 border-stone-100 group-hover:border-amber-500 transition-colors"
                />
                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-stone-100 text-emerald-700 shadow-sm">
                  <Award size={14} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-1">
                  {expert.name}
                </h3>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-4">
                  {expert.role}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {expert.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FoundersNote = () => (
  <section id="vision" className="py-24 bg-stone-50">
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl shadow-stone-200/50 border border-stone-100 flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3 text-center">
          <div className="w-48 h-48 mx-auto rounded-full p-1 border-2 border-emerald-100 mb-6">
            <img
              src="https://theafricabusinessindex.com/wp-content/uploads/2024/01/Stephanie-Mbida.jpg"
              alt="Stéphanie Mbida"
              className="w-full h-full object-cover rounded-full filter transition-all duration-500"
            />
          </div>
          <h3 className="font-serif text-2xl text-emerald-950 font-bold">
            Stéphanie Mbida
          </h3>
          <p className="text-sm text-amber-700 font-bold uppercase tracking-wider mt-2">
            Fondatrice, Parlons de Business
          </p>
        </div>
        <div className="lg:w-2/3 relative">
          <Quote className="text-emerald-900/10 w-20 h-20 absolute -top-10 -left-6 transform rotate-180" />
          <h2 className="font-serif text-3xl md:text-4xl text-emerald-950 leading-tight mb-6 relative z-10">
            "L'école apprend à nos enfants à travailler pour l'argent. Nous leur
            apprenons à faire travailler l'argent pour eux."
          </h2>
          <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
            <p>
              En tant que parents, nous voulons tous que nos enfants
              réussissent. Mais dans un monde économique complexe, les bonnes
              notes ne suffisent plus. Il faut développer le{" "}
              <strong>quotient financier</strong>.
            </p>
            <p>
              J'ai créé cette académie pour combler ce vide, avec une exigence :
              que ce soit aussi amusant qu'un jeu vidéo, mais aussi sérieux
              qu'une école de commerce.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="h-px w-12 bg-emerald-900"></div>
            <span className="font-serif italic text-emerald-900 text-xl">
              Stéphanie M.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- NOUVEAU COMPOSANT : SECTION AUTORITÉ & MEDIA (YOUTUBE) ---
const AuthorityMedia = () => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Colonne Texte & Stats */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Vu sur YouTube
            </div>

            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Rejoignez la plus grande communauté financière de la diaspora.
            </h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Stéphanie Mbida ne se contente pas d'enseigner, elle inspire.
              Suivie par plus de 600,000 personnes, elle partage chaque semaine
              les clés de la liberté financière.
            </p>

            <div className="flex items-center gap-6">
              <div className="text-center px-4 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <span className="block text-2xl font-bold text-white">
                  600k+
                </span>
                <span className="text-xs text-stone-500 uppercase tracking-wider">
                  Abonnés
                </span>
              </div>
              <div className="text-center px-4 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <span className="block text-2xl font-bold text-white">5M+</span>
                <span className="text-xs text-stone-500 uppercase tracking-wider">
                  Vues Cumulées
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-stone-500 hover:text-white transition-colors cursor-pointer group">
              <span>Visiter la chaîne officielle</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>

          {/* Colonne Vidéo (Cadre Cinéma) */}
          <div className="lg:w-2/3 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video group cursor-pointer">
              {/* Thumbnail Overlay (Image statique pour performance avant clic) */}
              <img
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=1200&h=675"
                alt="Présentation Plateforme"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

              {/* Play Button Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play size={24} className="fill-white text-white ml-1" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold text-lg">
                  Découverte de la plateforme Graines de Richesse
                </p>
                <p className="text-stone-300 text-sm">
                  Stéphanie Mbida • 12 min
                </p>
              </div>

              {/* Note: Dans un vrai projet, un onClick ici remplacerait l'image par l'iframe Youtube */}
              {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/VIDEO_ID" ... ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NOUVEAU COMPOSANT : CARROUSEL FORMATEURS (Mentors) ---
const MentorsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mentors = [
    {
      name: "Dr. Alain Foka",
      role: "Expert Économiste",
      bio: "Ancien analyste Banque Mondiale, il simplifie la macro-économie pour les 9-12 ans.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Sarah K. Diop",
      role: "Pédo-Psychologue",
      bio: "Spécialiste de l'apprentissage cognitif, elle valide chaque module pédagogique.",
      image:
        "https://images.unsplash.com/photo-1573497019-9e6a575a8316?auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Jean-Marc E.",
      role: "Tech Entrepreneur",
      bio: "Fondateur de 2 startups Fintech, il anime les sessions 'Projet' des 13-16 ans.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Amina Bakayoko",
      role: "Coach Certifiée",
      bio: "Elle accompagne les enfants timides pour révéler leur potentiel de leadership.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400",
    },
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % mentors.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + mentors.length) % mentors.length);

  return (
    <section
      id="experts"
      className="py-24 bg-stone-50 border-t border-stone-200"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <SectionLabel text="Corps Enseignant" />
            <h2 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-4">
              Formés par les meilleurs experts
            </h2>
            <p className="text-stone-600">
              Notre équipe combine expertise académique et succès
              entrepreneurial réel. Vos enfants sont entre de bonnes mains.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-emerald-900/20 flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors"
            >
              <ChevronDown className="rotate-90" size={20} />{" "}
              {/* Utilisation de ChevronDown rotate pour simuler Left si ChevronLeft manque */}
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-emerald-900/20 flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors"
            >
              <ChevronDown className="-rotate-90" size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Desktop: Grid view / Mobile: Scroll view. 
               Pour simplifier le code React sans librairie lourde de carousel, 
               on affiche une grille responsive élégante. */}
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border border-stone-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group
                  ${
                    index === activeIndex
                      ? "ring-2 ring-emerald-500 md:ring-0"
                      : ""
                  }
                `}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-stone-100 mx-auto group-hover:border-emerald-500 transition-colors">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider whitespace-nowrap">
                    {mentor.role}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-serif font-bold text-lg text-emerald-950 mb-2">
                  {mentor.name}
                </h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {mentor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => (
  <section id="methode" className="py-24 bg-emerald-950 text-stone-50">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <SectionLabel text="Notre Approche" color="amber" />
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
        Un trimestre pour tout changer
      </h2>
      <p className="text-emerald-200/80 text-lg mb-16 max-w-2xl mx-auto">
        Notre méthode unique "3M" (Monnaie, Multiplication, Mission) guide
        l'enfant de la théorie à la pratique en 12 semaines.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          {
            step: "Mois 1",
            title: "Les Fondations",
            desc: "Comprendre la valeur, différencier besoin/envie et maîtriser le budget.",
            icon: BookOpen,
          },
          {
            step: "Mois 2",
            title: "L'Investissement",
            desc: "Découvrir les intérêts composés et faire grandir sa tirelire virtuelle.",
            icon: TrendingUp,
          },
          {
            step: "Mois 3",
            title: "L'Entreprise",
            desc: "Passage à l'action : lancement d'un micro-projet concret guidé.",
            icon: RocketIcon, // Placeholder func below
          },
        ].map((item, i) => (
          <FadeIn
            key={i}
            delay={i * 0.2}
            className="bg-emerald-900/50 border border-emerald-800 p-8 rounded-3xl hover:bg-emerald-800 transition-colors group"
          >
            <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              <item.icon size={24} />
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 block">
              {item.step}
            </span>
            <h3 className="font-serif text-2xl text-white mb-3">
              {item.title}
            </h3>
            <p className="text-emerald-200/70 leading-relaxed">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// Helper for icon
const RocketIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const AppFeatureSection = () => (
  <section className="py-24 bg-[#FDFCF8] overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Mockup Side */}
        <FadeIn className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-emerald-100 rounded-full blur-[100px] opacity-50 z-0"></div>
          <div className="relative z-10">
            <AppMockup />
          </div>

          {/* Floating Features */}
          <div className="absolute top-1/2 -right-4 md:right-10 bg-white p-4 rounded-xl shadow-lg border border-stone-100 z-20 hidden md:block">
            <div className="flex items-center gap-3">
              <Lock className="text-emerald-600" size={20} />
              <div>
                <p className="font-bold text-stone-900 text-sm">
                  Walled Garden
                </p>
                <p className="text-xs text-stone-500">Pas de liens sortants</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Text Side */}
        <div className="order-1 lg:order-2">
          <SectionLabel text="La Plateforme" />
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-8 leading-tight">
            Conçue pour captiver,
            <br />
            sécurisée pour rassurer.
          </h2>

          <div className="space-y-8">
            {[
              {
                t: "Univers Ludique",
                d: "Pas de tableaux Excel. L'enfant explore une ville interactive qui évolue avec ses progrès.",
              },
              {
                t: "Ancrage Culturel",
                d: "Les avatars, les histoires et les missions sont inspirés de la réalité africaine moderne.",
              },
              {
                t: "Sécurité Totale",
                d: "Anonymat complet (pseudos), aucune publicité, modération IA + Humaine 24/7.",
              },
            ].map((feat, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-1 flex-shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">
                    {feat.t}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">{feat.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Curriculum = () => (
  <section id="programme" className="py-24 bg-white border-t border-stone-100">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SectionLabel text="Programme Sur-Mesure" />
        <h2 className="font-serif text-4xl text-emerald-950 mb-4">
          À chaque âge ses défis
        </h2>
        <p className="text-stone-600">
          Le programme évolue avec la maturité de l'enfant pour garantir un
          apprentissage pertinent.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Carte 5-8 */}
        <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-200 hover:border-emerald-200 transition-colors hover:shadow-xl">
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-6 inline-block">
            5 - 8 ans
          </span>
          <h3 className="font-serif text-2xl text-emerald-950 mb-4">
            Les Explorateurs
          </h3>
          <p className="text-sm text-stone-500 mb-6 min-h-[40px]">
            Découverte ludique de la monnaie et des premières notions d'échange.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Reconnaître pièces & billets",
              "Le concept du troc",
              "Tirelire physique vs virtuelle",
              "Patience et objectifs",
            ].map((l, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-700">
                <CheckCircle2
                  size={16}
                  className="text-amber-500 flex-shrink-0"
                />{" "}
                {l}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full text-sm py-3">
            Voir le détail
          </Button>
        </div>

        {/* Carte 9-12 (Featured) */}
        <div className="bg-emerald-900 rounded-[2rem] p-8 border border-emerald-800 text-white shadow-2xl relative transform md:-translate-y-4">
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
            Populaire
          </div>
          <span className="bg-emerald-800 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold mb-6 inline-block">
            9 - 12 ans
          </span>
          <h3 className="font-serif text-2xl text-white mb-4">
            Les Bâtisseurs
          </h3>
          <p className="text-sm text-emerald-200/80 mb-6 min-h-[40px]">
            Passage à l'action avec la gestion de budget et l'entrepreneuriat.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Créer un budget simple",
              "Sécurité en ligne & Arnaques",
              "Lancer une mini-vente",
              "Notion de profit",
            ].map((l, i) => (
              <li key={i} className="flex gap-2 text-sm text-emerald-50">
                <CheckCircle2
                  size={16}
                  className="text-amber-500 flex-shrink-0"
                />{" "}
                {l}
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full text-sm py-3">
            Voir le détail
          </Button>
        </div>

        {/* Carte 13-16 */}
        <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-200 hover:border-emerald-200 transition-colors hover:shadow-xl">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-6 inline-block">
            13 - 16 ans
          </span>
          <h3 className="font-serif text-2xl text-emerald-950 mb-4">
            Les Visionnaires
          </h3>
          <p className="text-sm text-stone-500 mb-6 min-h-[40px]">
            Préparation au monde réel, investissement et planification.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Compte bancaire & Carte",
              "Introduction à la Bourse",
              "Business Plan complet",
              "Dette : bonne vs mauvaise",
            ].map((l, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-700">
                <CheckCircle2
                  size={16}
                  className="text-amber-500 flex-shrink-0"
                />{" "}
                {l}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full text-sm py-3">
            Voir le détail
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-[#F5F2EA]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel text="Témoignages" color="amber" />
          <h2 className="font-serif text-4xl text-emerald-950 mb-8">
            La confiance des familles
          </h2>
          <div className="space-y-6">
            {[
              {
                quote:
                  "Mon fils de 10 ans m'a demandé pourquoi on achetait des choses dont on n'avait pas besoin. Cette formation a changé notre dynamique familiale.",
                author: "Aïssa D.",
                role: "Maman de 2 enfants",
              },
              {
                quote:
                  "Le côté ludique est incroyable. Ils apprennent sans s'en rendre compte, mais les résultats sont là.",
                author: "Marc O.",
                role: "Papa entrepreneur",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm"
              >
                <div className="flex text-amber-500 mb-3">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-stone-700 italic mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-emerald-900 text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-stone-500 uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://th.bing.com/th/id/R.191de6915d8ea1f6c64d77fd215bf10f?rik=g0nnNBmrQp%2b0Ag&riu=http%3a%2f%2fvertexsmarter.com%2fwp-content%2fuploads%2f2024%2f05%2fKings-Inter-High-secondary.jpg&ehk=kuedLrQ8VscJh2np4DerE%2fX7997f2kaN1vaO4AP%2fSNk%3d&risl=&pid=ImgRaw&r=0"
            className="rounded-2xl shadow-lg mt-8"
            alt="Happy Kid"
          />
          <img
            src="https://tse1.explicit.bing.net/th/id/OIP.7DvmsgTX-ucDUCCPHAGRPQHaL3?pid=ImgDet&w=198&h=316&c=7&dpr=1.3&o=7&rm=3"
            className="rounded-2xl shadow-lg"
            alt="Happy Kid Learning"
          />
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const monthlyPrice = 15000;
  const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount
  const displayPrice = billingCycle === "monthly" ? monthlyPrice : annualPrice;
  const billingText = billingCycle === "monthly" ? "FCFA / mois" : "FCFA / an";

  return (
    <section id="tarifs" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <SectionLabel text="Investissement" />
        <h2 className="font-serif text-4xl text-emerald-950 mb-6">
          Des tarifs simples et transparents
        </h2>

        <div className="bg-stone-50 p-1 rounded-full inline-flex mb-12">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              billingCycle === "monthly"
                ? "bg-white text-emerald-950 shadow-sm"
                : "text-stone-500 hover:text-emerald-900"
            }`}
          >
            Trimestriel
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative ${
              billingCycle === "annual"
                ? "bg-white text-emerald-950 shadow-sm"
                : "text-stone-500 hover:text-emerald-900"
            }`}
          >
            Annuel
            {billingCycle === "annual" && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            )}
          </button>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-[2.5rem] p-8 border-2 border-emerald-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
          <h3 className="text-emerald-900 font-bold text-xl mb-2">
            Programme Complet
          </h3>
          <div className="flex justify-center items-baseline gap-1 mb-6">
            <span className="text-4xl font-serif font-bold text-emerald-950">
              {displayPrice.toLocaleString()}
            </span>
            <span className="text-stone-500 font-medium">{billingText}</span>
          </div>
          <p className="text-sm text-stone-500 mb-8 px-4">
            {billingCycle === "monthly"
              ? "Facturé trimestriellement. Accès illimité à la plateforme, aux sessions live et au coaching."
              : "Facturé annuellement avec 20% de réduction. Accès illimité à la plateforme, aux sessions live et au coaching."}
          </p>

          <Button variant="primary" className="w-full mb-4">
            Commencer l'essai gratuit
          </Button>
          <p className="text-xs text-stone-400">
            14 jours satisfait ou remboursé. Sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- COMPOSANT FAQ INTERACTIF ET ANIMÉ ---
const FAQ = () => {
  // État pour suivre quelle question est ouverte (null = aucune)
  const [openIndex, setOpenIndex] = useState(null);

  // Données des Questions/Réponses (Basées sur le PDF)
  const faqs = [
    {
      question: "Mon enfant a-t-il besoin d'un smartphone personnel ?",
      answer:
        "Pas nécessairement. La plateforme est accessible depuis n'importe quel ordinateur, tablette ou smartphone. De nombreux parents prêtent leur tablette ou installent l'application sur le téléphone familial. L'expérience est conçue pour être confortable sur tous les écrans.",
    },
    {
      question: "Comment les parents suivent-ils les progrès ?",
      answer:
        "Vous disposez d'un 'Espace Parent' dédié. Vous y verrez en temps réel les modules complétés, les badges obtenus par votre enfant, et même ses projets de mini-entreprise. Vous recevez également un résumé hebdomadaire par email.",
    },
    {
      question: "Est-ce que l'application est vraiment sécurisée ?",
      answer:
        "Absolument. Nous appliquons le principe de 'Safety-First'. Pas de publicité, pas de liens vers l'extérieur, et les données sont chiffrées (SSL/TLS). De plus, les enfants utilisent des pseudonymes pour garantir leur anonymat total au sein de la communauté.",
    },
    {
      question: "Quelle est la différence entre les tranches d'âge ?",
      answer:
        "Le contenu s'adapte à la maturité de l'enfant. Les 5-8 ans apprennent par le jeu et l'histoire (visuel). Les 9-12 ans commencent la gestion de budget et l'épargne (logique). Les 13-16 ans abordent l'investissement réel et le business plan (analytique).",
    },
    {
      question: "Puis-je annuler l'abonnement si mon enfant n'accroche pas ?",
      answer:
        "Oui, sans aucune condition. Vous pouvez annuler le renouvellement automatique à tout moment depuis votre espace parent. De plus, nous offrons une garantie 'Satisfait ou Remboursé' durant les 14 premiers jours.",
    },
  ];

  // Fonction pour basculer l'état
  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <SectionLabel text="Support" />
          <h2 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-stone-600">
            Tout ce que vous devez savoir avant de commencer l'aventure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-500 shadow-lg shadow-emerald-900/5"
                    : "border-stone-200 hover:border-emerald-300"
                }`}
              >
                {/* Header de la question (Cliquable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span
                    className={`font-serif text-lg font-medium ${
                      isOpen ? "text-emerald-900" : "text-stone-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-stone-50 text-stone-400"
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Corps de la réponse (Animé) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-500 text-sm">
            Une autre question ?{" "}
            <a href="#" className="text-emerald-700 font-bold hover:underline">
              Contactez notre équipe support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-emerald-950 text-emerald-100/60 py-20">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <span className="text-white font-serif text-2xl font-bold tracking-tight block mb-6">
          REVOLUTION
        </span>
        <p className="text-sm leading-relaxed mb-6">
          L'académie d'excellence pour les futurs leaders africains. Siège
          social : Bandjoun, Cameroun.
        </p>
        <div className="flex gap-4 text-white">
          {/* Social Icons Placeholders */}
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition-colors">
            <Globe size={14} />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Plateforme</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="hover:text-white transition">
              Connexion
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Tarifs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Devenir Partenaire
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Support</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="hover:text-white transition">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Centre d'aide
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Légal</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="hover:text-white transition">
              Conditions Générales
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Politique de Confidentialité
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Mentions Légales
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-6 mt-16 pt-8 border-t border-emerald-900 text-center text-xs">
      © 2025 Groupe REVOLUTION. Tous droits réservés.
    </div>
  </footer>
);

// --- APPLICATION PRINCIPALE ---

const App = () => {
  return (
    <div
      className={`font-sans ${THEME.bg} text-stone-900 selection:bg-amber-200 selection:text-emerald-950`}
    >
      <Navbar />
      <Hero />
      <Logos />
      <FoundersNote />
      <Methodology />
      <AppFeatureSection />
      <Curriculum />
      <MentorsCarousel />
      <FounderAuthority />
      <Testimonials />
      <Pricing />
      <FAQ />

      {/* CTA Final */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
            Les places pour la rentrée sont limitées
          </h2>
          <p className="text-emerald-200 text-lg mb-10">
            Ne manquez pas l'opportunité d'offrir à votre enfant les compétences
            qui feront la différence.
          </p>
          <Button
            variant="primary"
            className="mx-auto px-10 py-5 text-lg shadow-2xl shadow-amber-900/40"
          >
            Réserver sa place maintenant
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
