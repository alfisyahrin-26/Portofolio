const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if(!code.includes('import { translations }')) {
  code = code.replace("import './index.css';", "import { translations } from './i18n';\nimport './index.css';");
}

// Add t variable
if(!code.includes('const t = translations[lang]')) {
  code = code.replace("const [lang, setLang] = useState('EN');", "const [lang, setLang] = useState('EN');\n  const t = translations[lang];");
}

// Navbar
code = code.replace(/>HOME<\/a>/g, '>{t.nav.home}</a>');
code = code.replace(/>WORK<\/a>/g, '>{t.nav.work}</a>');
code = code.replace(/>CERTIFICATES<\/a>/g, '>{t.nav.certificates}</a>');
code = code.replace(/>ACHIEVEMENTS<\/a>/g, '>{t.nav.achievements}</a>');
code = code.replace(/>EXPERIENCE<\/a>/g, '>{t.nav.experience}</a>');
code = code.replace(/>CONTACT<\/a>/g, '>{t.nav.contact}</a>');

// Hero
code = code.replace(/>I'M<\/motion.div>/g, '>{t.hero.im}</motion.div>');
code = code.replace(/INFORMATICS STUDENT \/ POLITEKNIK NEGERI LHOKSEUMAWE/g, '{t.hero.student}');
code = code.replace(/SCROLL TO EXPLORE/g, '{t.hero.scroll}');

// About
code = code.replace(/>ABOUT ME<\/motion.div>/g, '>{t.about.subtitle}</motion.div>');
code = code.replace(/>WHO IS<br\/>ALFISYAHRIN\?<\/motion.h2>/g, ' dangerouslySetInnerHTML={{__html: t.about.title}}></motion.h2>');
code = code.replace(/Muhammad Alfisyahrin Muzhaffar is an IT student at the Department of Information and Computer Technology \(TIK\), Politeknik Negeri Lhokseumawe \(PNL\). He bridges the gap between theoretical software engineering and practical, high-impact digital systems./g, '{t.about.p1}');
code = code.replace(/Driven by an obsessive attention to detail, he builds and experiments across multiple domains, ranging from modern web development and IT research, to creative problem-solving. He balances his academic life with martial arts, which helps him maintain discipline and focus./g, '{t.about.p2}');
code = code.replace(/\"Building useful things with code and a relentless focus on solving real-world problems, while maintaining the discipline of a martial artist.\"/g, '{t.about.quote}');
code = code.replace(/His current public footprint includes actively building software solutions, researching tech trends, and recently winning a Bronze Medal in Taekwondo \(Under 68 Kg\) at POMDA Aceh 2025 representing Universitas Teuku Umar./g, '{t.about.p3}');

// Github
code = code.replace(/>\/ GITHUB<\/motion.div>/g, '>{t.github.title}</motion.div>');
code = code.replace(/>TOP REPOSITORIES<\/motion.h2>/g, '>{t.github.subtitle}</motion.h2>');
code = code.replace(/Real-time river monitoring system using Firebase and ESP32 microcontrollers. Built for early warning flood detection./g, '{t.github.repo1}');
code = code.replace(/AI Subsidy Validation using YOLO object detection models for vehicle identification and classification./g, '{t.github.repo2}');

// Quals
code = code.replace(/>QUALIFICATIONS<\/h2>/g, '>{t.qual.title}</h2>');
code = code.replace(/>Mahasiswa TIK PNL<\/motion.div>/g, '>{t.qual.badge1}</motion.div>');
code = code.replace(/>Software Engineer<\/motion.div>/g, '>{t.qual.badge2}</motion.div>');
code = code.replace(/>Bronze Medalist<\/motion.div>/g, '>{t.qual.badge3}</motion.div>');

// Phil
code = code.replace(/>\/ 02 THE PHILOSOPHY<\/motion.div>/g, '>{t.phil.subtitle}</motion.div>');
code = code.replace(/>BRIDGING HARDWARE,<br\/>SOFTWARE, AND SECURITY\.<\/motion.h2>/g, ' dangerouslySetInnerHTML={{__html: t.phil.title}}></motion.h2>');
code = code.replace(/>SEE ALL PROJECTS ↗<\/motion.a>/g, '>{t.phil.link}</motion.a>');
code = code.replace(/>IoT River Monitoring & Firebase\.<\/p>/g, '>{t.phil.p1}</p>');
code = code.replace(/>AI Subsidy Validation \(YOLO\)\.<\/p>/g, '>{t.phil.p2}</p>');
code = code.replace(/>Practical penetration testing, network reconnaissance, and payload generation\.<\/p>/g, '>{t.phil.p3}</p>');

// AI
code = code.replace(/>INTELLIGENT SYSTEMS<br\/>ENGINEERING\.<\/motion.h2>/g, ' dangerouslySetInnerHTML={{__html: t.ai.title}}></motion.h2>');
code = code.replace(/Currently exploring the intersection of deep learning architectures, predictive modeling, and scalable data pipelines. Constantly pushing the boundaries of what is possible with artificial intelligence and data-driven solutions in the real world./g, '{t.ai.desc}');
code = code.replace(/>01\. DEEP LEARNING ARCHITECTURES<\/div>/g, '>{t.ai.l1}</div>');
code = code.replace(/>RESEARCH<\/div>/g, '>{t.ai.d1}</div>');
code = code.replace(/>02\. PREDICTIVE MODELING<\/div>/g, '>{t.ai.l2}</div>');
code = code.replace(/>IMPLEMENTATION<\/div>/g, '>{t.ai.d2}</div>');

// Footer
code = code.replace(/>INFORMATICS ENGINEERING · PNL<\/div>/g, '>{t.footer.desc}</div>');
code = code.replace(/>BUILT WITH REACT \+ TYPESCRIPT \+ FRAMER MOTION<\/div>/g, '>{t.footer.tech}</div>');

fs.writeFileSync('src/App.jsx', code);
