import React, { useState, useEffect, useMemo } from 'react';
import { FaLaptopCode, FaMedal, FaGraduationCap, FaEnvelope, FaInstagram, FaLinkedin, FaBars, FaTimes, FaGlobe, FaEye, FaTrophy, FaAward } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion';
import CursorGrid from './components/CursorGrid';
import profileImage from './assets/alfi.png';
import whoamiImage from './assets/syahrin.jpeg';
import komitImage from './assets/komit.jpeg';
import ketumImage from './assets/ketum.jpeg';
import sabukImage from './assets/sabuk.png';
import cardImage from './assets/card.jpeg';
import logoImage from './assets/logo.png';
import pangdamImage from './assets/sertifikat/pangdam.png';
import kotaImage from './assets/sertifikat/kota.png';
import ptcImage from './assets/sertifikat/ptc.png';
import pomdaImage from './assets/sertifikat/pomda.png';
import gsiImage from './assets/sertifikat/gsi.png';
import elcImage from './assets/sertifikat/elc.png';
import DecayCard from './components/DecayCard';
import { translations } from './i18n';
import './index.css';

const certImageMap = {
  'pangdam-2023': pangdamImage,
  'lhokseumawe-2024': kotaImage,
  'polytechnic-cup-2023': ptcImage,
  'pomda-aceh-2025': pomdaImage,
  'gsi-matematika-2023': gsiImage,
  'elc-english-2023': elcImage,
};

function App() {
  const [activeNav, setActiveNav] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const t = translations[lang];

  const [currentExpImgIndex, setCurrentExpImgIndex] = useState(0);
  const expImages = useMemo(() => [komitImage, ketumImage], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpImgIndex((prev) => (prev + 1) % expImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [expImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedCert(null);
      } else if (selectedProject && t.work?.projects?.length) {
        const idx = t.work.projects.findIndex((p) => p.id === selectedProject.id);
        if (idx !== -1) {
          if (e.key === 'ArrowRight') {
            const nextIdx = (idx + 1) % t.work.projects.length;
            setSelectedProject(t.work.projects[nextIdx]);
          } else if (e.key === 'ArrowLeft') {
            const prevIdx = (idx - 1 + t.work.projects.length) % t.work.projects.length;
            setSelectedProject(t.work.projects[prevIdx]);
          }
        }
      } else if (selectedCert && t.certificates?.items?.length) {
        const cIdx = t.certificates.items.findIndex((c) => c.id === selectedCert.id);
        if (cIdx !== -1) {
          if (e.key === 'ArrowRight') {
            const nextIdx = (cIdx + 1) % t.certificates.items.length;
            setSelectedCert(t.certificates.items[nextIdx]);
          } else if (e.key === 'ArrowLeft') {
            const prevIdx = (cIdx - 1 + t.certificates.items.length) % t.certificates.items.length;
            setSelectedCert(t.certificates.items[prevIdx]);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, selectedCert, t.work?.projects, t.certificates?.items]);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Stagger wrapper untuk Card
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Varian animasi untuk teks, ikon, gambar di dalam card
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  // Varian khusus untuk Hero
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  // Varian pop-up untuk elemen khusus
  const popVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <CursorGrid color="#1C24D4" />
      </div>
      <motion.header  
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="navbar-ref">
          <div className="nav-brand" onClick={() => { handleNavClick('#home'); window.scrollTo(0,0); }} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logoImage} alt="Alfisyahrin" className="nav-logo-img" style={{ height: '32px', width: 'auto', display: 'block' }} />
            <div className="brand-name" style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.8rem', 
              fontWeight: '900', 
              color: '#1A368F', 
              letterSpacing: '1px', 
              lineHeight: '1',
              transform: 'translateY(1px)'
            }}>
              ALFISYAHRIN
            </div>
          </div>
          
          <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links-ref ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" className={activeNav === '#home' ? 'active-pill' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>{t.nav.home}</a></li>
            <li><a href="#work" className={activeNav === '#work' ? 'active-pill' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('#work'); }}>{t.nav.work}</a></li>
            <li><a href="#certificates" className={activeNav === '#certificates' ? 'active-pill' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('#certificates'); }}>{t.nav.certificates}</a></li>
            <li><a href="#achievements" className={activeNav === '#achievements' ? 'active-pill' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('#achievements'); }}>{t.nav.achievements}</a></li>
            <li><a href="#experience" className={activeNav === '#experience' ? 'active-pill' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('#experience'); }}>{t.nav.experience}</a></li>
            <li><a href="#contact" className={activeNav === '#contact' ? 'active-pill' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>{t.nav.contact}</a></li>
            <li style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-navy)', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.preventDefault(); setLang(lang === 'EN' ? 'ID' : 'EN'); }}
                style={{ 
                  background: 'transparent', 
                  border: '2px solid var(--primary-navy)', 
                  color: 'var(--primary-navy)', 
                  padding: '6px 14px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  transition: 'background 0.3s, color 0.3s'
                }}>
                <FaGlobe style={{ marginRight: '6px' }} /> {lang}
              </motion.button>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      {(activeNav === '#home' || activeNav === '#whoami') && (
        <motion.section 
          className="hero-section" 
          id="home"
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Large Background Text */}
          <div className="hero-bg-text">
             <motion.h1 className="huge-text-3d" variants={itemVariants}>CREATIVE</motion.h1>
             <motion.h1 className="huge-text-3d" variants={itemVariants}>DEVELOPER</motion.h1>
          </div>

          {/* Top Right Badge */}
          <motion.div className="hero-badge" variants={popVariants}>
            IT STUDENT<br/>& ATHLETE
          </motion.div>
          
          {/* Foreground Image */}
          <motion.div className="hero-person" variants={itemVariants}>
            <img src={profileImage} alt="Alfisyahrin" className="hero-photo-new" />
          </motion.div>
          
          {/* Left Description and Button */}
          <motion.div className="hero-content-left" variants={itemVariants}>
            <p className="hero-text-desc">
              Welcome to my portfolio, where code meets creativity to produce 
              interactive digital experiences. Join me on this journey and 
              discover the magic of unforgettable design.
            </p>
            <motion.button 
              className="hero-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED &nbsp; <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>&gt;</span>
            </motion.button>
          </motion.div>

          {/* Marquee Ticker */}
          <div className="hero-marquee-container">
             <div className="hero-marquee">
                <span>SOFTWARE ENG <span className="marquee-separator">|</span> IT RESEARCH <span className="marquee-separator">|</span> PROBLEM SOLVING <span className="marquee-separator">|</span> ATHLETE <span className="marquee-separator">|</span> SOFTWARE ENG <span className="marquee-separator">|</span> IT RESEARCH <span className="marquee-separator">|</span> PROBLEM SOLVING <span className="marquee-separator">|</span> ATHLETE <span className="marquee-separator">|</span> SOFTWARE ENG <span className="marquee-separator">|</span> IT RESEARCH <span className="marquee-separator">|</span> PROBLEM SOLVING <span className="marquee-separator">|</span> ATHLETE</span>
             </div>
          </div>
        </motion.section>
      )}

      {/* Main Container for all Bento items */}
      <main className="bento-container">
        <div className="bento-grid-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', margin: '0 auto' }}>
          
          {/* WHO AM I (Combined with Home) */}
          {activeNav === '#home' && (
            <motion.section 
              className="bento-item who-am-i-card" 
              id="whoami"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="whoami-left">
                <motion.div variants={itemVariants} className="section-subtitle">{t.about.subtitle}</motion.div>
                <motion.h2 variants={itemVariants} dangerouslySetInnerHTML={{__html: t.about.title}}></motion.h2>
                <motion.div variants={popVariants} className="whoami-image-container">
                  <img src={whoamiImage} alt="Alfisyahrin" className="whoami-photo" />
                </motion.div>
              </div>
              <div className="whoami-right">
                <motion.p variants={itemVariants}>
                  {t.about.p1}
                </motion.p>
                <motion.p variants={itemVariants}>
                  {t.about.p2}
                </motion.p>
                <motion.blockquote variants={itemVariants} className="whoami-quote">
                  {t.about.quote}
                </motion.blockquote>
                <motion.p variants={itemVariants}>
                  {t.about.p3}
                </motion.p>
              </div>
            </motion.section>
            )}


            {/* GITHUB REPOSITORIES */}
            {activeNav === '#home' && (
            <motion.section 
              className="bento-item github-card" 
              id="github-repos"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div variants={itemVariants} className="github-section-title">{t.github.title}</motion.div>
              <motion.h2 variants={itemVariants}>{t.github.subtitle}</motion.h2>

              <div className="repo-grid">
                <motion.div variants={itemVariants} className="repo-item">
                  <div className="repo-header">
                    <div className="repo-title-wrapper">
                      <span style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 'bold' }}>&lt;/&gt;</span>
                      <h3 className="repo-title">Aqua-Sentinel-IoT</h3>
                    </div>
                    <span className="repo-badge">Public</span>
                  </div>
                  <p className="repo-desc">{t.github.repo1}</p>
                  <div className="repo-lang">
                    <div className="lang-dot cpp" style={{ backgroundColor: '#f1e05a' }}></div> C++
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="repo-item">
                  <div className="repo-header">
                    <div className="repo-title-wrapper">
                      <span style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 'bold' }}>&lt;/&gt;</span>
                      <h3 className="repo-title">PetroChain-CV</h3>
                    </div>
                    <span className="repo-badge">Public</span>
                  </div>
                  <p className="repo-desc">{t.github.repo2}</p>
                  <div className="repo-lang">
                    <div className="lang-dot python" style={{ backgroundColor: '#3572A5' }}></div> Python
                  </div>
                </motion.div>
              </div>

              <motion.a href="https://github.com/MuhammadAziz" target="_blank" rel="noreferrer" variants={itemVariants} className="github-link">VIEW ON GITHUB ↗</motion.a>
            </motion.section>
            )}



            {/* WORK PORTFOLIO (The Philosophy) */}
            {activeNav === '#home' && (
            <motion.section 
              className="bento-item philosophy-card" 
              id="philosophy"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="philosophy-left">
                <motion.div variants={itemVariants} className="philosophy-subtitle">{t.phil.subtitle}</motion.div>
                <motion.h2 variants={itemVariants} dangerouslySetInnerHTML={{__html: t.phil.title}}></motion.h2>
                <motion.a href="#work" variants={itemVariants} className="philosophy-link" onClick={(e) => { e.preventDefault(); handleNavClick('#work'); }}>{t.phil.link}</motion.a>
              </div>

              <div className="philosophy-right">
                <motion.div variants={itemVariants} className="project-card">
                  <h3>Aqua Sentinel</h3>
                  <p>{t.phil.p1}</p>
                  <div className="project-card-line"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="project-card">
                  <h3>AttackRadar</h3>
                  <p>{t.phil.p2}</p>
                  <div className="project-card-line"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="project-card full-width">
                  <h3>Security Labs</h3>
                  <p>{t.phil.p3}</p>
                  <div className="project-card-line"></div>
                </motion.div>
              </div>
            </motion.section>
            )}

            {/* INTELLIGENT SYSTEMS */}
            {activeNav === '#home' && (
            <motion.section 
              className="bento-item intelligent-card" 
              id="intelligent-systems"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="intelligent-left" style={{ border: 'none', backgroundColor: 'transparent' }}>
                <DecayCard width={480} height={600} image={cardImage}>
                </DecayCard>
              </div>

              <div className="intelligent-right">
                <motion.h2 variants={itemVariants} dangerouslySetInnerHTML={{__html: t.ai.title}}></motion.h2>
                <motion.p variants={itemVariants} className="intelligent-desc">
                  {t.ai.desc}
                </motion.p>
                <div className="intelligent-list">
                  <motion.div variants={itemVariants} className="intelligent-list-item">
                    <div className="intelligent-item-title">{t.ai.l1}</div>
                    <div className="intelligent-item-desc">{t.ai.d1}</div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="intelligent-list-item">
                    <div className="intelligent-item-title">{t.ai.l2}</div>
                    <div className="intelligent-item-desc">{t.ai.d2}</div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
            )}

            {/* SELECTED WORK (Reference Design) */}
            {activeNav === '#work' && (
            <motion.section 
              className="selected-work-section" 
              id="work"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="selected-work-header">
                <motion.div variants={itemVariants} className="work-section-subtitle">
                  {lang === 'EN' ? '/ PORTFOLIO' : '/ PORTOFOLIO'}
                </motion.div>
                <motion.h2 className="selected-work-title" variants={itemVariants}>
                  {t.work?.headerTitle || 'SELECTED WORK'}
                </motion.h2>
              </div>

              <div className="selected-work-grid">
                {t.work?.projects?.map((project, idx) => (
                  <motion.div 
                    key={project.id || idx}
                    className="work-project-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="work-card-top">
                      <div className="work-card-header-left">
                        {project.badge && (
                          <span className={`work-card-badge ${project.badge === 'LIVE' ? 'badge-live' : ''}`}>{project.badge}</span>
                        )}
                        <h3 className="work-card-title">{project.title}</h3>
                        <div className="work-card-subtitle">{project.subtitle}</div>
                      </div>
                      <button 
                        className="work-card-eye-btn" 
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View details for ${project.title}`}
                        title="View details"
                      >
                        <FaEye />
                      </button>
                    </div>

                    <div className="work-card-body">
                      <p className="work-card-desc">{project.desc}</p>
                      {project.buttonText && (
                        <a 
                          href={project.buttonLink || '#'} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="work-card-action-btn"
                        >
                          {project.buttonText}
                        </a>
                      )}
                    </div>

                    <div className="work-card-tags">
                      {project.tags?.map((tag, tagIdx) => (
                        <span key={tagIdx} className="work-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            )}

            {/* CERTIFICATES / PROFESSIONAL VALIDATION */}
            {activeNav === '#certificates' && (
            <motion.section 
              className="certificates-section" 
              id="certificates"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="certificates-header">
                <div className="certificates-header-left">
                  <motion.div variants={itemVariants} className="certificates-subtitle">
                    <FaAward className="cert-subtitle-icon" />
                    <span>{t.certificates?.subtitle || (lang === 'EN' ? '/ CERTIFICATES' : '/ SERTIFIKAT')}</span>
                  </motion.div>
                  <div className="certificates-title-wrapper">
                    <motion.h2 className="certificates-title" variants={itemVariants}>
                      {t.certificates?.title || 'PROFESSIONAL VALIDATION.'}
                    </motion.h2>
                  </div>
                  {t.certificates?.desc && (
                    <motion.p className="certificates-desc" variants={itemVariants}>
                      {t.certificates.desc}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* 3-Column Certificates Grid matching reference image */}
              <div className="certificates-grid">
                {t.certificates?.items?.map((cert, idx) => (
                    <motion.div
                      key={cert.id || idx}
                      className="cert-card"
                      variants={itemVariants}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => setSelectedCert(cert)}
                    >
                      {/* Document Preview Frame */}
                      <div className="cert-preview-frame">
                        {certImageMap[cert.id] ? (
                          <img 
                            src={certImageMap[cert.id]} 
                            alt={cert.title} 
                            className="cert-preview-img" 
                          />
                        ) : (
                          <div className="cert-doc-paper">
                            <div className="cert-doc-inner-border">
                              <div className="cert-doc-top">
                                <span className="cert-doc-badge-pill">OFFICIAL CREDENTIAL</span>
                                <span className="cert-doc-serial">{cert.credentialId}</span>
                              </div>
                              <div className="cert-doc-center">
                                <div className="cert-doc-headline">SERTIFIKAT KOMPETENSI</div>
                                <div className="cert-doc-awarded-to">DIBERIKAN KEPADA</div>
                                <div className="cert-doc-recipient-name">MUHAMMAD ALFISYAHRIN M.</div>
                                <div className="cert-doc-title-text">Kualifikasi Kompetensi Terstandarisasi</div>
                              </div>
                              <div className="cert-doc-bottom">
                                <div className="cert-doc-date-col">
                                  <span className="cert-doc-label">TANGGAL</span>
                                  <span className="cert-doc-val">{cert.date}</span>
                                </div>
                                <div className="cert-doc-seal-circle">
                                  <FaAward />
                                </div>
                                <div className="cert-doc-sig-col">
                                  <div className="cert-sig-line"></div>
                                  <span className="cert-doc-label">TERVALIDASI</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="cert-preview-overlay">
                          <span className="cert-overlay-action">
                            <FaEye /> {lang === 'EN' ? 'VIEW CREDENTIAL' : 'LIHAT DETAIL'}
                          </span>
                        </div>
                      </div>

                      {/* Card Info Below Preview */}
                      <div className="cert-card-info">
                        <div className="cert-card-issuer-tag">{cert.issuer}</div>
                        <h3 className="cert-card-title">{cert.title}</h3>
                        
                        <div className="cert-card-footer">
                          <span className="cert-card-date">{cert.date}</span>
                          <button 
                            className="cert-card-arrow-btn"
                            aria-label={`Open ${cert.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCert(cert);
                            }}
                          >
                            ↗
                          </button>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.section>
            )}

            {/* ACHIEVEMENTS */}
            {activeNav === '#achievements' && (
            <motion.section 
              className="achievements-section" 
              id="achievements"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header with Stats Counter Strip */}
              <div className="achievements-header">
                <div className="achievements-header-top">
                  <div>
                    <motion.div variants={itemVariants} className="achievements-subtitle">
                      {t.achievements?.subtitle || (lang === 'EN' ? '/ HONORS & RECOGNITION' : '/ PENGHARGAAN & PRESTASI')}
                    </motion.div>
                    <motion.h2 className="achievements-title" variants={itemVariants}>
                      {t.achievements?.title || 'ACHIEVEMENTS'}
                    </motion.h2>
                  </div>

                  {/* Summary Metric Strip */}
                  <motion.div className="achievements-stat-strip" variants={itemVariants}>
                    {t.achievements?.stats?.map((stat, sIdx) => (
                      <div key={sIdx} className={`achieve-stat-card stat-${stat.icon}`}>
                        <div className="achieve-stat-top">
                          <span className="achieve-stat-num">{stat.count}</span>
                          <span className="achieve-stat-icon">
                            {stat.icon === 'gold' && <FaTrophy />}
                            {stat.icon === 'silver' && <FaMedal />}
                            {stat.icon === 'bronze' && <FaMedal />}
                            {stat.icon === 'delegate' && <FaAward />}
                          </span>
                        </div>
                        <div className="achieve-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <motion.p className="achievements-desc" variants={itemVariants}>
                  {t.achievements?.desc}
                </motion.p>
              </div>

              {/* Bento Grid */}
              <div className="achievements-bento-grid">
                {/* 1. HERO CARD: Featured Provincial Champion */}
                {t.achievements?.items?.[0] && (
                  <motion.div 
                    className="achieve-bento-card achieve-hero-card"
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="achieve-hero-top">
                      <div className="achieve-badges-row">
                        <span className="achieve-rank-pill pill-gold">
                          <FaTrophy /> {t.achievements.items[0].rank}
                        </span>
                        <span className="achieve-level-badge">{t.achievements.items[0].level}</span>
                        <span className="achieve-year-badge">{t.achievements.items[0].year}</span>
                      </div>
                      <span className="achieve-featured-ribbon">
                        {t.achievements.featuredBadge || 'HIGHEST PROVINCIAL HONOR'}
                      </span>
                    </div>

                    <div className="achieve-hero-body">
                      <h3 className="achieve-hero-title">{t.achievements.items[0].competition}</h3>
                      <div className="achieve-event-tagline">
                        {t.achievements.items[0].event} · {t.achievements.items[0].category}
                      </div>
                      <p className="achieve-hero-desc">{t.achievements.items[0].desc}</p>
                    </div>

                    <div className="achieve-hero-footer">
                      <span className="achieve-meta-tag">Kyorugi / Sparring</span>
                      <span className="achieve-meta-tag">1st Place Podium</span>
                      <span className="achieve-meta-tag">Aceh Provincial Stage</span>
                    </div>
                  </motion.div>
                )}

                {/* 2 to 5: 2-Column Bento Grid of Medals */}
                <div className="achieve-subgrid">
                  {t.achievements?.items?.slice(1).map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className={`achieve-bento-card achieve-grid-card card-${item.badgeType}`}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="achieve-grid-card-top">
                        <span className={`achieve-rank-pill pill-${item.badgeType}`}>
                          {item.badgeType === 'gold' && <FaTrophy />}
                          {item.badgeType === 'silver' && <FaMedal />}
                          {item.badgeType === 'bronze' && <FaMedal />}
                          {item.badgeType === 'participant' && <FaAward />}
                          {item.rank}
                        </span>
                        <div className="achieve-top-meta">
                          <span className="achieve-level-badge">{item.level}</span>
                          <span className="achieve-year-badge">{item.year}</span>
                        </div>
                      </div>

                      <div className="achieve-grid-card-body">
                        <h4 className="achieve-grid-title">{item.competition}</h4>
                        <div className="achieve-category-subtitle">{item.category}</div>
                        <p className="achieve-grid-desc">{item.desc}</p>
                      </div>

                      <div className="achieve-grid-card-footer">
                        <span className="achieve-sub-tag">Taekwondo</span>
                        <span className="achieve-sub-tag">{item.event}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 6. Athletic Mindset & Synergy Showcase Card */}
                <motion.div 
                  className="achieve-bento-card achieve-mindset-banner"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div className="achieve-mindset-left">
                    <div className="achieve-photo-wrapper">
                      <img src={sabukImage} alt="Alfisyahrin Taekwondo Black Belt" className="achieve-athlete-photo" />
                      <div className="achieve-photo-badge">BLACK BELT</div>
                    </div>
                  </div>

                  <div className="achieve-mindset-right">
                    <div className="achieve-mindset-header">
                      <span className="achieve-mindset-pill">
                        {t.achievements?.mindsetTag || 'MARTIAL ARTS SYNERGY'}
                      </span>
                      <h3 className="achieve-mindset-title">
                        {t.achievements?.mindsetTitle || 'THE ATHLETIC DISCIPLINE & ENGINEERING MINDSET'}
                      </h3>
                    </div>

                    <blockquote className="achieve-mindset-quote">
                      {t.achievements?.mindsetQuote}
                    </blockquote>

                    <div className="achieve-mindset-author">
                      <div className="author-dot"></div>
                      <span>
                        <strong>MUHAMMAD ALFISYAHRIN MUZHAFFAR</strong> · {lang === 'EN' ? 'General Chairman of UKM Taekwondo Club' : 'Ketua Umum UKM Taekwondo Club'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
            )}

            {/* EXPERIENCE (Clean Minimalist Layout) */}
            {activeNav === '#experience' && (
            <motion.section 
              className="exp-clean-layout" 
              id="experience"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="exp-clean-top">
                <div className="exp-clean-text">
                  <div className="exp-clean-header">
                    <motion.div variants={itemVariants} className="exp-clean-subtitle">{t.exp.subtitle}</motion.div>
                    <motion.h2 variants={itemVariants} className="exp-clean-title">{t.exp.title}</motion.h2>
                  </div>
                  
                  <div className="exp-clean-list">
                    {t.exp.items.map((item, index) => (
                      <motion.div variants={itemVariants} className="exp-clean-item" key={index}>
                        <div className="exp-clean-date">{item.date}</div>
                        <h3 className="exp-clean-role">{item.role}</h3>
                        <h4 className="exp-clean-org">{item.org}</h4>
                        <p className="exp-clean-desc">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div variants={itemVariants} className="exp-clean-image">
                   {expImages.map((img, idx) => (
                     <img 
                       key={idx}
                       src={img} 
                       alt="Experience" 
                       className="exp-clean-photo"
                       style={{
                         opacity: idx === currentExpImgIndex ? 1 : 0
                       }}
                     />
                   ))}
                </motion.div>
              </div>
            </motion.section>
            )}

            {/* CASE STUDY (Education/Journey detail) */}
            {activeNav === '#contact' && (
            <motion.section 
              className="bento-item secondary-card case-study-card" 
              id="contact"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.div variants={itemVariants}><BsThreeDots className="card-dots dots-right" /></motion.div>
              <motion.div className="case-header" variants={itemVariants}>
                 <h2 className="text-navy">MY JOURNEY</h2>
                 <p className="case-desc">Perjalanan pendidikan dan prestasi saya mencakup dedikasi kuat dalam bidang IT maupun dunia olahraga kompetitif.</p>
              </motion.div>
              <div className="case-body">
                 <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="case-box dark-box">
                    <h3>MAHASISWA TIK</h3>
                    <p>Sebagai mahasiswa di Politeknik Negeri Lhokseumawe, saya terus berinovasi dalam barisan kode, mewujudkan gagasan menjadi sebuah aplikasi nyata yang berdampak.</p>
                 </motion.div>
                 <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="case-box light-box" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <h3 style={{marginBottom: '0.5rem'}}>LET'S CONNECT!</h3>
                    <p style={{marginBottom: '1rem'}}>Tertarik berkolaborasi atau sekadar berbincang?</p>
                    <motion.a 
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-navy-dark)' }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:hello@example.com" style={{
                        background: 'var(--primary-navy)', 
                        color: 'white', 
                        padding: '10px 20px', 
                        borderRadius: '30px', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <FaEnvelope /> Kirim Email
                    </motion.a>
                 </motion.div>
              </div>
            </motion.section>
            )}
        </div>
      </main>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="work-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="work-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="work-modal-close-btn" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="work-modal-badge">{selectedProject.badge}</div>
              <h2 className="work-modal-title">{selectedProject.title}</h2>
              <div className="work-modal-subtitle">{selectedProject.subtitle}</div>
              
              <p className="work-modal-overview">
                {selectedProject.details?.overview || selectedProject.desc}
              </p>

              {selectedProject.details?.highlights && (
                <>
                  <div className="work-modal-section-title">
                    {t.work?.modal?.architecture || "Key Architecture & Highlights"}
                  </div>
                  <ul className="work-modal-highlights">
                    {selectedProject.details.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedProject.details?.impact && (
                <>
                  <div className="work-modal-section-title">
                    {t.work?.modal?.impact || "Core Impact & Value"}
                  </div>
                  <div className="work-modal-impact">
                    {selectedProject.details.impact}
                  </div>
                </>
              )}

              <div className="work-modal-section-title">
                {t.work?.modal?.techStack || "Technology Stack"}
              </div>
              <div className="work-card-tags" style={{ marginBottom: '1.5rem' }}>
                {selectedProject.tags?.map((tag, i) => (
                  <span key={i} className="work-tag-pill">{tag}</span>
                ))}
              </div>

              {selectedProject.liveUrl && (
                <div className="work-modal-actions">
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="work-modal-btn-primary"
                  >
                    {t.work?.modal?.visit || "VISIT PLATFORM"} ↗
                  </a>
                </div>
              )}

              <div className="work-modal-footer">
                <span className="work-modal-counter">
                  {(() => {
                    const idx = t.work?.projects?.findIndex((p) => p.id === selectedProject.id) ?? -1;
                    return idx !== -1 ? `${idx + 1} / ${t.work.projects.length}` : '';
                  })()}
                </span>
                <span className="work-modal-hint">
                  {lang === 'EN'
                    ? 'Esc to close · Use ← → to navigate projects'
                    : 'Esc untuk menutup · Gunakan ← → untuk navigasi proyek'}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CERTIFICATE DETAIL MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Large Document Mockup or Real Photo in Modal */}
              <div className="cert-modal-doc-wrapper">
                {certImageMap[selectedCert.id] ? (
                  <div className="cert-modal-real-img-container">
                    <img 
                      src={certImageMap[selectedCert.id]} 
                      alt={selectedCert.title} 
                      className="cert-modal-real-img" 
                    />
                  </div>
                ) : (
                  <div className="cert-doc-paper modal-paper">
                    <div className="cert-doc-inner-border">
                      <div className="cert-doc-top">
                        <span className="cert-doc-badge-pill">{selectedCert.issuer}</span>
                        <span className="cert-doc-serial">{selectedCert.credentialId}</span>
                      </div>

                      <div className="cert-doc-center">
                        <div className="cert-doc-headline">OFFICIAL CERTIFICATION & VALIDATION</div>
                        <div className="cert-doc-awarded-to">THIS IS TO CERTIFY THAT</div>
                        <div className="cert-doc-recipient-name large-name">MUHAMMAD ALFISYAHRIN MUZHAFFAR</div>
                        <div className="cert-doc-title-text large-title">{selectedCert.title}</div>
                        <div className="cert-doc-desc-text">{selectedCert.desc}</div>
                      </div>

                      <div className="cert-doc-bottom">
                        <div className="cert-doc-date-col">
                          <span className="cert-doc-label">DATE ISSUED</span>
                          <span className="cert-doc-val">{selectedCert.date}</span>
                        </div>
                        <div className="cert-doc-seal-circle large-seal">
                          <FaAward />
                        </div>
                        <div className="cert-doc-sig-col">
                          <div className="cert-sig-line"></div>
                          <span className="cert-doc-label">OFFICIAL VALIDATION</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Detail Info */}
              <div className="cert-modal-info">
                <div className="cert-modal-issuer">{selectedCert.issuerFull || selectedCert.issuer}</div>
                <h2 className="cert-modal-title">{selectedCert.title}</h2>
                <p className="cert-modal-desc">{selectedCert.desc}</p>

                <div className="cert-modal-meta-grid">
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">{t.certificates?.modal?.credentialId || "CREDENTIAL ID"}</span>
                    <span className="cert-meta-value">{selectedCert.credentialId}</span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">{t.certificates?.modal?.validity || "VALIDITY"}</span>
                    <span className="cert-meta-value">{selectedCert.validity}</span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">{t.certificates?.modal?.issueDate || "ISSUE DATE"}</span>
                    <span className="cert-meta-value">{selectedCert.date}</span>
                  </div>
                </div>

                {selectedCert.skills && (
                  <div className="cert-modal-skills-section">
                    <div className="cert-modal-skills-title">
                      {t.certificates?.modal?.verifiedSkills || "VERIFIED SKILLS & COMPETENCIES"}
                    </div>
                    <div className="cert-modal-skills-pills">
                      {selectedCert.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="cert-skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="cert-modal-footer">
                  <span className="cert-modal-counter">
                    {t.certificates?.items ? (t.certificates.items.findIndex(c => c.id === selectedCert.id) + 1) : 1} / {t.certificates?.items?.length || 6}
                  </span>
                  <span className="cert-modal-hint">
                    {lang === 'EN' ? 'Esc to close · Use ← → to navigate' : 'Esc untuk menutup · Gunakan ← → untuk navigasi'}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-name">MUHAMMAD ALFISYAHRIN MUZHAFFAR</div>
            <div className="footer-desc">{t.footer.desc}</div>
          </div>
          <div className="footer-right">
            <div className="footer-copyright">© 2026 MUHAMMAD ALFISYAHRIN MUZHAFFAR</div>
            <div className="footer-tech">{t.footer.tech}</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
