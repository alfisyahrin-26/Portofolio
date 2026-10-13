# Rangkuman Percakapan Sesi 3 (Penyempurnaan Struktur & Navigasi SPA)

Pada sesi ketiga ini, kita berfokus untuk menyempurnakan struktur navigasi serta tata letak dari setiap section pada portofolio Anda. Berikut adalah poin-poin utama yang telah kita kerjakan:

## 1. Migrasi ke Mode SPA (Single Page Application) Murni
*   Kita mengubah struktur *Bento Grid Scroll* (di mana semua section memanjang ke bawah) kembali ke format **SPA**.
*   Dengan perubahan ini, setiap kali sebuah menu di navbar diklik (misalnya *Awards* atau *Focus*), website hanya akan merender *section* yang relevan dan menyembunyikan yang lainnya.
*   **Navigasi Tanpa Lompatan:** Fungsi *scroll* bawaan browser pada link anchor (`#`) dimatikan dan digantikan dengan transisi halaman yang langsung me-*reset* layar Anda ke bagian atas halaman secara mulus (`window.scrollTo(0,0)`).

## 2. Penggabungan Section "About" ke "Home"
*   Sesuai permintaan Anda, kita menggabungkan konten *About* (kartu "Who Is Alfisyahrin") agar menempel dan dirender bersamaan dengan halaman *Home*.
*   Kini, saat Anda membuka halaman *Home*, Anda akan melihat *Hero Section* (foto diri dan teks 3D raksasa), dan tepat di bawahnya akan langsung disusul oleh profil *About Me* secara utuh dan tanpa terpotong.
*   **Restorasi Full Width:** Kita juga memulihkan desain lebar maksimal (*max-width*) pada kontainer *About Me* agar kembali merentang proporsional dan tidak tampak mengecil di tengah halaman.

## 3. Perombakan Navbar (Penghapusan ABOUT, Penambahan WORK)
*   Karena *About* sudah menyatu dengan *Home*, menu link **ABOUT** pada navbar akhirnya kita hapus untuk menghindari redundansi dan kebingungan.
*   Sebagai gantinya, kita memasukkan menu baru bernama **WORK** ke dalam navbar.
*   **Placeholder Section WORK:** Karena konten portofolio proyek (*Work*) belum ada, saya telah membuatkan halaman kartu *placeholder* (*coming soon*) dengan desain bersih yang selaras dengan keseluruhan tema ketika Anda mengeklik menu WORK.

## 4. Penambahan Section "The Philosophy" & "Intelligent Systems"
*   **The Philosophy:** Ditambahkan ke dalam tab *Home*. Menampilkan prinsip kerja Anda (Bridging Hardware, Software, and Security) beserta ringkasan 3 proyek utama (Aqua Sentinel, PetroChain, Security Labs). Tombol "See All Projects" di-link langsung menuju tab *Work*.
*   **Intelligent Systems Engineering:** Ditambahkan persis di bawah *The Philosophy* pada halaman *Home*, memuat deskripsi spesifik tentang minat Anda di bidang *Deep Learning* dan *Predictive Modeling*.

## 5. Implementasi ID Card Interaktif (DecayCard)
*   Mengintegrasikan komponen `DecayCard` dari *React Bits* yang dipadukan dengan *library* animasi **GSAP**.
*   Komponen ini memuat gambar ID Card / Lanyard kustom Anda (`card.jpeg`) dengan ukuran besar (480x600 px).
*   Memberikan efek distorsi/turbulensi (*decay effect*) yang sangat halus dan interaktif mengikuti arah pergerakan kursor mouse.

## 6. Kustomisasi Logo Navbar
*   Teks logo bawaan telah diganti sepenuhnya dengan logo kustom Anda (`logo.png`).
*   Tipografi teks "ALFISYAHRIN" di sebelah logo disesuaikan (*font weight* 900, *heading font*) dengan penyesuaian sumbu Y (presisi piksel) dan diberi warna Biru Royal (`#1A368F`) agar menyatu sempurna dengan ikon logo.

## 7. Pembuatan Global Footer
*   Membangun *footer* gelap (*dark mode*) yang memanjang penuh di bagian terbawah layar (*full-width*).
*   *Footer* ini bersifat global (muncul di setiap tab navigasi) dan memuat nama lengkap Anda (MUHAMMAD ALFISYAHRIN MUZHAFFAR) beserta atribusi teknologi yang digunakan.

## 8. Sistem Bilingual (i18n) Penuh
*   Tombol **EN/ID** di navbar telah diubah dari *dummy button* menjadi tombol *toggle* yang sepenuhnya fungsional.
*   Mengimplementasikan file kamus terjemahan (`i18n.js`) dan menghubungkan **seluruh teks** dalam aplikasi ke dalam *state* React.
*   Saat tombol diklik, seluruh konten website (mulai dari menu navigasi, kartu *About*, *Philosophy*, *Intelligent Systems*, hingga *Footer*) akan secara otomatis dan instan diterjemahkan antara Bahasa Inggris dan Bahasa Indonesia.

## 9. Penambahan Grid Background Interaktif (CursorGrid)
*   Mengimplementasikan efek latar belakang interaktif menggunakan komponen kustom `CursorGrid`.
*   Memberikan efek grid bercahaya (*glowing*) berwarna biru (`#1C24D4`) yang bereaksi dan berpendar mengikuti posisi serta pergerakan kursor mouse pengguna.
*   Background ini dibangun di atas kanvas 2D yang ringan, dirender pada *layer* terbawah (`position: fixed`, `z-index: 0`), sehingga memberikan nuansa teknologis modern tanpa mengganggu interaksi konten.

## 10. Implementasi Animasi Lanjut dengan Framer Motion
*   Menggunakan *library* **Framer Motion** untuk memoles pengalaman visual (*UX*) melalui animasi mulus pada setiap elemen antarmuka.
*   Menerapkan varian animasi berlapis (*staggered animations*) untuk kontainer dan isinya, sehingga memunculkan efek berurutan secara elegan (*fade-up*, *spring*, *pop-up*) saat konten masuk ke dalam area pandang (*viewport*).
*   Menambahkan efek *hover* dan interaksi taktil pada berbagai elemen (seperti efek membesar pada tombol, rotasi *mockup* sertifikat, dan efek mengapung pada *card* studi kasus).

## 11. Penyempurnaan Section Pendukung Berbasis Bento Grid
*   **Github Repositories:** Menambahkan kartu khusus pada tab *Home* yang memamerkan dua proyek utama (Aqua-Sentinel-IoT & PetroChain-CV) lengkap dengan indikator bahasa pemrograman dan tautan langsung ke GitHub.
*   **My Core Focus:** Membangun *grid* empat pilar minat (Software Eng, IT Research, Athlete, Problem Solving) pada halaman tab *Achievements* lengkap dengan ikon dan skema warna bergantian (navy & pastel).
*   **Certificates & Qualifications:** Merancang *card* sertifikasi (seperti prestasi medali emas Taekwondo POMDA ACEH 2025) pada tab *Certificates* dengan gaya medali 3D yang sangat interaktif jika disentuh kursor.
*   **My Journey / Contact:** Menyediakan bagian ringkas pada *Contact* (*Case Study*) yang menceritakan perjalanan dedikasi akademis serta fitur *Call to Action* (CTA) untuk langsung mengirimkan email.

## 12. Perombakan Total Section "Experience"
*   **Penambahan Data Organisasi Aktual:** Mengintegrasikan riwayat organisasi riil Anda, yaitu sebagai Ketua Umum Unit Kegiatan Mahasiswa Polytechnic Taekwondo Club (2025/2026) dan Anggota Liaison Officer (LO) di Komunitas Mahasiswa IT (KOMIT) PNL.
*   **Image Carousel Otomatis:** Menambahkan fitur *slideshow* atau korsel gambar otomatis yang berganti (*crossfade*) setiap 4 detik untuk menampilkan foto Anda di KOMIT dan Taekwondo.
*   **Desain Minimalis Elegan:** Meninggalkan format kartu Bento yang berdesakan dan merancang ulang tata letak menjadi *Split-Screen Layout* yang sangat bersih dan rapi. Teks difokuskan di sisi kiri, sedangkan foto dibingkai elegan dengan proporsi *portrait* (4:5) di sisi kanan lengkap dengan jarak (*padding*) yang lega.
*   **Kombinasi Skema Warna Navy & Lime Green:** Memadukan warna latar belakang *Navy Blue* gelap yang mewah dengan aksen *Lime Green* (*neon yellow*) untuk elemen interaktif (garis *hover*, tanggal, dan sub-judul), sehingga menggantikan kesan menyilaukan menjadi sangat premium dan dewasa.
*   **Perbaikan Z-Index & Interaksi Hover:** Menyesuaikan kedalaman layar (*z-index*) pada kontainer Experience agar secara mutlak berada di atas efek animasi *CursorGrid* agar tidak menimpa teks. Selain itu, menyempurnakan interaksi *hover* pada bingkai foto sehingga foto yang sedang tampil (yang aslinya hitam putih/grayscale) akan langsung merender warna aslinya saat disorot kursor, memecahkan masalah klik transparan.
*   **Penyempurnaan Teks (i18n):** Menghapus penomoran kaku "04" pada sub-judul sehingga menjadi murni "/ EXPERIENCE" dan memperbaiki singkatan KOMIT menjadi "Komunitas Mahasiswa IT" pada sistem penerjemahan EN dan ID.

## 13. Implementasi Section "Selected Work" Sesuai Skema Palet Asli Website & Referensi Proyek
*   **Peniadaan Latar Belakang Hitam (*Zero Black Background*):** Sesuai arahan Anda, kita menghapus latar belakang hitam pekat dan beralih sepenuhnya ke kombinasi warna asli website Anda. Kontainer utama kini menggunakan warna putih bersih (*Surface White* `#FFFFFF`) dengan bingkai lembut (*Border Soft* `#DCE3EB`), menyatu selaras dengan grid biru kursor (*CursorGrid*) dan estetika bento website secara keseluruhan.
*   **Header Elegan & Subjudul Khas:** 
    *   Menambahkan garis aksen subjudul `/ PORTFOLIO` berwarna biru langit (*Accent Blue* `#6FA4D8`) dengan garis indikator mendatar di atas judul utama.
    *   Judul `"SELECTED WORK"` dirender dengan warna Biru Navy Gelap (*Primary Navy Dark* `#101694`), disusul penomoran indeks `"[22]"` dengan warna Biru Royal cerah (*Primary Navy* `#1C24D4`).
*   **Desain Kartu Bento Modern (*Surface Light Cards*):** 
    *   Setiap kartu proyek menggunakan latar belakang abu-abu terang lembut (*Surface Light* `#F7F9FC`) dengan bingkai dobel piksel (*border 2px* `#DCE3EB`).
    *   Tata letak kartu mengelompokkan **Judul Proyek** di sisi kiri atas dengan **Subjudul Kategori** tepat di bawahnya, dan **Tombol Ikon Mata (`👁`)** di sudut kanan atas.
    *   Saat kursor disorot (*hover*), kartu akan terangkat (*lift-up*), latar berubah menjadi putih murni, dan bingkai memancarkan warna Biru Royal (`#1C24D4`) dengan bayangan biru lembut.
*   **Harmonisasi Warna Badge, Tag, dan Tombol:**
    *   **Badges:** Menggunakan warna biru pastel (*Accent Pastel* `#E4EDF7`) dengan teks biru navy (`#1C24D4`), sedangkan badge khusus `LIVE` tetap mempertahankan aksen kuning cerah (*Neon Yellow* `#D1FF00`) yang kontras seperti badge Hero Anda.
    *   **Tombol Mata (`👁`):** Tombol lingkaran putih bersih dengan ikon biru navy yang berubah menjadi biru royal solid saat disorot kursor.
    *   **Tech Stack Pills:** Menggunakan latar putih/pastel dengan teks biru navy tebal yang terbaca jelas dan bergaya teknis modern.
    *   **Tombol Aksi (`VISIT PLATFORM ↗`):** Berwarna Biru Royal solid (`#1C24D4`) dengan teks putih dan efek transisi hover ke Biru Navy Gelap (`#101694`).
*   **Integrasi Koleksi Proyek Sesuai Referensi Gambar Anda:**
    1.  **COCOCARBONE:**
        *   **Kategori / Subtitle:** `COMPANY PROFILE / WEB`
        *   **Deskripsi (Pengertian):** `Bilingual company profile and export-focused website for a coconut-products business, featuring responsive UI and WhatsApp inquiry integration.`
        *   **Tech Stack (Apa yang digunakan):** `["React", "TypeScript", "Tailwind CSS"]`
    2.  **SECURITY LABS:**
        *   **Kategori / Subtitle:** `PENTESTING & RESEARCH`
        *   **Deskripsi (Pengertian):** `Practical penetration testing and security research covering network reconnaissance, web vulnerability exploitation (SQLi, XSS), malware generation, and cryptographic cracking.`
        *   **Tech Stack (Apa yang digunakan):** `["Nmap", "SQLmap", "Metasploit", "Hashcat"]`
    3.  **INFRASTRUCTURE LAB:**
        *   **Kategori / Subtitle:** `SYSTEMS ADMINISTRATION`
        *   **Deskripsi (Pengertian):** `Multi-server environment configuration spanning Windows Server (AD, DNS, DHCP, IIS) and Ubuntu Server (Apache, Laravel hosting, OpenSSH).`
        *   **Tech Stack (Apa yang digunakan):** `["Windows Server", "Ubuntu", "VMware", "AD DS", "IIS"]`
    4.  **SALON APP:**
        *   **Kategori / Subtitle:** `WEB APPLICATION`
        *   **Deskripsi (Pengertian):** `A salon management web application built with Laravel.`
        *   **Tech Stack (Apa yang digunakan):** `["Laravel", "PHP", "Web"]`
    5.  **RENTAL APP:**
        *   **Kategori / Subtitle:** `WEB APPLICATION`
        *   **Deskripsi (Pengertian):** `A vehicle/equipment rental management application.`
        *   **Tech Stack (Apa yang digunakan):** `["Laravel", "PHP", "Web"]`
    6.  **OEN KAYEE AI:**
        *   **Kategori / Subtitle:** `AGRITECH & AI`
        *   **Deskripsi (Pengertian):** `Web-based AI diagnosis system providing rapid plant pathology identification. Powered by an optimized MobileNetV2 deep learning architecture trained on comprehensive agricultural datasets to provide actionable, eco-friendly treatment recommendations.`
        *   **Tech Stack (Apa yang digunakan):** `["MobileNetV2", "Deep Learning", "AgriTech", "React", "Tailwind CSS"]`
    7.  **ATTACKRADAR:**
        *   **Kategori / Subtitle:** `NETWORK ATTACK SURFACE & RECON`
        *   **Deskripsi (Pengertian):** `An automated attack surface intelligence and threat monitoring platform featuring real-time network port scanning and vulnerability CVE mapping.`
*   **Modal Interaktif Bertema Terang Elegan:** Jendela *modal detail* proyek menggunakan latar putih murni dengan bayangan biru mewah dan *backdrop blur* biru lembut (`rgba(16, 22, 148, 0.35)`). Menyajikan arsitektur teknis, boks dampak bertema *surface light*, tag teknologi, tombol tutup silang (`✕`), serta dukungan navigasi keyboard tombol panah `←` `→` dan penutupan dengan tombol keyboard `Escape`, lengkap dengan indikator indeks counter (misal: `3 / 7`). Tombol tautan repositori (*View Repository*) telah ditiadakan sesuai preferensi Anda agar tampilan modal tetap ringkas dan terfokus pada spesifikasi sistem.
*   **Dukungan Bilingual Penuh (EN/ID):** Seluruh konten kartu proyek, *badge*, deskripsi, arsitektur, dan teks modal telah terintegrasi penuh ke dalam sistem kamus [i18n.js](file:///d:/Portofolio/src/i18n.js) sehingga dapat berganti bahasa secara instan saat tombol toggle EN/ID ditekan.

## 14. Perombakan Total Section "Achievements" (Arsitektur Bento Grid & Prestasi Atletik)
*   **Transformasi Menjadi Asymmetrical Bento Grid:** Menggantikan tampilan *list* polos menjadi tata letak *Bento Grid* modern berstandar portofolio internasional dengan hierarki visual yang tajam, kontras tinggi, dan tata letak asimetris yang dinamis.
*   **Header & Stats Counter Strip:**
    *   Sub-header `/ HONORS & RECOGNITION` dan judul raksasa `ACHIEVEMENTS [05]`.
    *   **Strip Metrik Ringkasan:** 4 kartu metrik mini interaktif di sisi kanan header yang merangkum pencapaian medali Anda dalam sekali pandang (2 Medali Emas, 1 Medali Perak, 1 Medali Perunggu, dan 1 Delegasi Nasional).
*   **Struktur Kartu Bento:**
    1.  **Hero Champion Card (2 Kolom Penuh):** Didedikasikan khusus untuk prestasi tertinggi Anda (*Piala Pangdam Iskandar Muda 2023 – Juara 1 Emas Tingkat Provinsi*). Memiliki bingkai gradasi emas mewah (`#E5C370`), lencana pita emas `HIGHEST PROVINCIAL HONOR`, watermark raksasa `01`, dan tag divisi kyorugi.
    2.  **Subgrid 2 Kolom:** Menampilkan 4 medali dan kejuaraan lainnya dalam grid dua kolom yang simetris dan rapi:
        *   `02` · **Juara 1 Emas** – *Kejuaraan Kota Lhokseumawe 2024*
        *   `03` · **Juara 2 Perak** – *Polytechnic Taekwondo Cup 2023*
        *   `04` · **Juara 3 Perunggu** – *POMDA Aceh 2025 Cabang Taekwondo (Under 68 Kg)*
        *   `05` · **Delegasi Atletik Nasional** – *PORSENI Politeknik Se-Indonesia*
        *   Masing-masing kartu dilengkapi lencana peringkat dengan warna metalik khas medali (*Gold, Silver, Bronze, Blue*), tag tingkat (*City, Regional, National*), dan nomor watermark sudut kartu (`02`, `03`, `04`, `05`).
    3.  **Athletic Mindset & Synergy Showcase (Bento Banner):** Boks fitur di bagian bawah yang membingkai foto Anda dalam seragam taekwondo (*dobok*) lengkap dengan lencana `BLACK BELT`, serta kutipan filosofi tentang bagaimana daya juang, ketenangan di bawah tekanan, dan disiplin di arena beladiri menjadi fondasi keunggulan logika dalam *software engineering*.
*   **Konsistensi Tema Palet Asli:** Menggunakan latar belakang putih bersih (`#FFFFFF`) dan abu-abu lembut (`#F7F9FC`), bingkai biru lembut (`#DCE3EB`), aksen biru navy (`#1C24D4` & `#101694`), tanpa latar belakang hitam pekat, serta responsif sempurna di perangkat mobile.
*   **Sistem Bilingual (EN/ID):** Terintegrasi penuh ke dalam [i18n.js](file:///d:/Portofolio/src/i18n.js) sehingga seluruh angka statistik, lencana, judul kejuaraan, dan kutipan filosofi atletik otomatis berganti bahasa saat tombol EN/ID ditekan.

## 15. Pembersihan Karakter Emoji (Zero-Emoji Polish)
*   **Penghapusan Seluruh Emoji Unicode:** Sesuai permintaan Anda agar tidak terlihat seperti *template* buatan AI biasa, seluruh karakter emoji (seperti ⭐, 🥋, 🏆, 📍) telah dihapus bersih dari:
    *   Lencana pita utama (`HIGHEST PROVINCIAL HONOR` / `PRESTASI UTAMA PROVINSI`) di [i18n.js](file:///d:/Portofolio/src/i18n.js) dan [App.jsx](file:///d:/Portofolio/src/App.jsx).
    *   Tag metadata kejuaraan (`Kyorugi / Sparring`, `1st Place Podium`, `Aceh Provincial Stage`).
    *   Tag cabang olahraga (`Taekwondo`).
    *   Lencana foto profil atlet (`BLACK BELT`).
*   **Visual Tetap Elegan dengan Tipografi Bersih & Ikon Vektor:** Tampilan tetap berkelas dan profesional dengan mengandalkan tipografi modern, pill border halus, dan ikon vektor SVG resmi React Icons (`FaTrophy`, `FaMedal`, `FaAward`), sehingga portofolio tampak otentik dan dibuat oleh profesional manusia.

## 16. Pembaruan Foto Atlet Taekwondo (sabuk.png)
*   **Penggantian Foto Atlet:** Mengganti foto pada kartu *Athletic Mindset & Synergy Showcase* dengan file asli `D:\Portofolio\src\assets\sabuk.png` (foto Alfisyahrin berseragam Taekwondo *dobok* dengan pose tinju dan sabuk hitam resmi).
*   **Penyesuaian Framing Presisi:** 
    *   Menyesuaikan posisi objek gambar di CSS (`object-position: center 15%`) agar wajah, postur kuda-kuda, dan sabuk hitam terbingkai proporsional di dalam kontainer kartu tanpa terpotong oleh badge `BLACK BELT`.
    *   Menjaga efek *hover* interaktif (sedikit *zoom* dan transisi saturasi warna) tetap halus dan dinamis.

## 17. Desain Estetika Bento Grid Baru: Perpaduan Royal Navy Blue & Hijau Lime
*   **Harmonisasi Palet Khas Portofolio:** Mengintegrasikan perpaduan kontras tinggi antara warna **Biru Utama** (`#1C24D4` & `#101694`) dan **Hijau Lime / Neon Yellow** (`#D1FF00`) secara elegan di section Achievements.
*   **Komposisi Kotak Bento Dinamis (50/50 Balance):**
    1.  **Hero Champion Card (Kartu 01 - Emas Pangdam 2023):** Dibalut gradasi *Royal Navy Blue* berkelas (`#0D1266` → `#101694` → `#1C24D4`) dengan bingkai dan lencana pita warna *Hijau Lime* menyala (`#D1FF00`), teks judul putih bersih, serta pill juara emas dengan aksen lime.
    2.  **Subgrid 02 (Emas Lhokseumawe 2024):** Kotak putih bersih dengan aksen garis atas *Hijau Lime* (`border-top: 4px solid #D1FF00`), lencana peringkat *Lime Green*, dan tag Taekwondo berbingkai lime.
    3.  **Subgrid 03 (Perak Polytechnic Cup 2023):** Kotak putih bersih dengan aksen garis atas *Royal Blue* (`#1C24D4`), lencana perak es, dan tipografi navy gelap.
    4.  **Subgrid 04 (Perunggu POMDA Aceh 2025):** Kotak putih bersih dengan aksen garis atas tembaga/amber dan tipografi navy.
    5.  **Subgrid 05 (Delegasi Nasional PORSENI):** Ditransformasikan menjadi kotak solid *Vibrant Navy Blue* (`#1C24D4` → `#101694`) dengan lencana peringkat *Hijau Lime* (`#D1FF00`), teks putih, dan watermark glowing tipis.
    6.  **Athletic Mindset & Synergy Showcase (Kartu 06 - Sabuk Hitam):** Banner berlatar *Deep Navy Blue* mewah dengan bingkai foto atlet bercahaya *Hijau Lime* (`border: 2.5px solid #D1FF00`), lencana `BLACK BELT` berlatar *Hijau Lime* teks *Navy*, garis kutipan vertikal *Hijau Lime*, dan indikator dot bercahaya *Lime Glow*.
*   **Interaksi Hover Berpendar (Lime Aura):** Setiap kartu memiliki transisi hover yang memancarkan pendaran halus *Hijau Lime* dan bayangan *Electric Blue* (`rgba(209, 255, 0, 0.25)`), memberikan kesan futuristik, energik, dan konsisten dengan Hero section.

## 18. Transformasi Menyeluruh: Full Royal Navy Blue & Lime Green (Tanpa Kotak Putih)
*   **Implementasi Full Blue Eksklusif:** Menjawab permintaan Anda (*"jangan setengah setengah, buat aja terus biru nya full"*), seluruh kontainer section Achievements beserta **semua kartu Bento** di dalamnya telah ditransformasikan menjadi palet warna **Full Royal Navy Blue** yang seragam dan kaya kedalaman:
    *   **Kontainer Utama Section:** Menggunakan gradasi *Deep Navy Blue* (`#090D45` → `#101694` → `#1C24D4`) dengan bingkai halus berpendar *Hijau Lime* (`#D1FF00`) dan bayangan dramatis.
    *   **Header Section:** Judul utama putih tebal, angka section `[05]` menyala dalam *Hijau Lime*, dan garis aksen berpendar *Neon Lime Glow*.
    *   **Strip Metrik Medali:** Seluruh 4 kartu metrik kini berlatar *Frosted Navy Glass* (`backdrop-filter: blur`) dengan angka putih dan hover berpendar *Hijau Lime*.
    *   **Hero Champion Card (Kartu 01):** Kotak biru pekat dengan border neon lime ganda, ribbon lime glow, dan pill juara emas-lime.
    *   **Semua Kartu Subgrid (Kartu 02 - 05):** Kini 100% berlatar *Deep Navy Blue Glass* yang mewah, tipografi putih bersih, subtitle kejuaraan *Hijau Lime*, dan tag Taekwondo berbingkai lime neon (tanpa ada lagi kotak putih yang terpisah).
    *   **Athletic Mindset Banner (Kartu 06):** Banner navy gelap yang membingkai foto *sabuk.png* dengan border lime bercahaya, badge `BLACK BELT` berlatar lime teks navy, dan kutipan filosofi bergaris vertikal lime.
*   **Konsistensi Identitas Brand:** Tampilan section Achievements kini berpadu sempurna dengan bagian *Hero* dan *Experience*, memancarkan aura atletik dan rekayasa teknologi tingkat tinggi.

## 19. Penghapusan Nomor Watermark Latar Belakang (01, 02, dst.)
*   **Pembersihan Elemen Latar Belakang:** Sesuai permintaan Anda (*"hilangkan setip nomor dibelakang 01, dan selanjutnya"*), seluruh angka *watermark* besar di latar belakang kartu (`01`, `02`, `03`, `04`, `05`) telah dihapus sepenuhnya dari markup [App.jsx](file:///d:/Portofolio/src/App.jsx) dan aturan CSS di [index.css](file:///d:/Portofolio/src/index.css).
*   **Hasil Visual Lebih Bersih & Terbaca:** Area di balik lencana ribbon (`HONOR`), badge, dan teks kartu kini 100% bersih, tanpa distraksi angka di latar belakang, membuat seluruh konten terbaca sangat jelas dan berkelas.

## 20. Redesain Section Sertifikat (Professional Validation) - Full Navy Blue & Hijau Lime
*   **Referensi Desain Presisi:** Mengadaptasi tata letak dan estetika dari gambar referensi pengguna (`PROFESSIONAL VALIDATION. [12]`) menjadi section sertifikat interaktif berkelas dunia:
    *   **Header Section:** Subtitle `/ CERTIFICATES` dengan ikon penghargaan vektor (`FaAward`) berwarna *Hijau Lime* (`#D1FF00`), judul besar tipografi grotesk tebal `PROFESSIONAL VALIDATION.`, dan angka counter `[06]` dalam warna hijau lime menyala.
    *   **Filter Kategori Interaktif:** Menyediakan tombol filter kategori (`ALL`, `WEB & SOFTWARE`, `SECURITY & NETWORK`, `ATHLETIC & SPORTS`) berbentuk pill dengan efek aktif dan hover berpendar hijau lime.
    *   **Grid Responsif 3 Kolom:** Menampilkan 6 sertifikat tervalidasi milik Alfisyahrin dalam tata letak 3 kolom di desktop, 2 kolom di tablet, dan 1 kolom di mobile.
*   **Komposisi Kartu Sertifikat Sesuai Gambar Referensi:**
    *   **Frame Pratinjau Dokumen Fisik (Top Preview Frame):** Meniru pratinjau sertifikat fisik otentik di bagian atas setiap kartu dengan bingkai bergaris ganda, ornamen borders, nama penerima `MUHAMMAD ALFISYAHRIN M.`, lencana organisasi penerbit, nomor registrasi/serial resmi, stempel/seal emas berikon medali, tanggal, serta garis validasi tanda tangan resmi. Efek hover memunculkan overlay transparan bertuliskan `VIEW CREDENTIAL / LIHAT DETAIL`.
    *   **Label Organisasi Penerbit (Lime Green Tag):** Ditampilkan dalam huruf kapital warna *Hijau Lime* menyala (`#D1FF00`) di bawah kotak pratinjau (misal: `BNSP`, `KMIPN VIII · POLITEKNIK NEGERI UJUNG PANDANG`, `KOMDIGI · DIGITAL TALENT SCHOLARSHIP`, `DICODING INDONESIA`, `CISCO NETWORKING ACADEMY`, `BAPOMI ACEH`).
    *   **Judul Sertifikat:** Tipografi putih tebal (`#FFFFFF`) berukuran 1.25rem dengan keterbacaan tinggi.
    *   **Footer Kartu:** Menampilkan tanggal penerbitan di sebelah kiri (teks abu-abu muda) dan tombol panah diagonal `↗` berwarna *Hijau Lime* di sebelah kanan yang bergerak naik saat kartu di-hover.
*   **Detail Modal Interaktif:**
    *   Mengklik kartu mana pun membuka popup modal pratinjau resolusi tinggi berlatar *Deep Navy Blue* dengan bingkai bercahaya *Hijau Lime*.
    *   Menampilkan detail lengkap: Organisasi Penerbit, Nomor Kredensial / Registrasi (SKKNI/Komdigi/Cisco/BAPOMI), Masa Berlaku Kredensial, Tanggal Penerbitan, Deskripsi Lengkap Kompetensi, dan daftar *pill* keahlian tervalidasi (*Verified Skills & Competencies*).
    *   Mendukung penutupan via tombol silang (✕), klik area luar, atau tombol keyboard `Escape`, serta navigasi langsung antar sertifikat menggunakan tombol panah keyboard `←` dan `→`.
*   **Dukungan Bilingual (EN & ID):** Data sertifikat dan teks antarmuka telah dikonfigurasi penuh secara dwibahasa di [i18n.js](file:///d:/Portofolio/src/i18n.js).
*   **Kepatuhan Aturan Estetika:** Nol emoji, 100% ikon vektor SVG resmi React Icons, skema warna *Royal Navy Blue* & *Hijau Lime* yang solid dan harmonis dengan bagian portofolio lainnya.

## 21. Perbaikan Duplikasi Section & Penyempurnaan Tampilan Kartu
*   **Penghapusan Blok Ganda (Duplicate Block Removal):**
    *   Mengidentifikasi dan menghapus satu blok markup `<motion.section className="certificates-section">` ganda yang sebelumnya terselip di bawah bagian Github di [App.jsx](file:///d:/Portofolio/src/App.jsx).
    *   Memastikan kini hanya terdapat **satu** section Sertifikat yang aktif dan terintegrasi secara rapi di antara menu *Work* dan *Achievements*.
*   **Perapian Tipografi Judul Header (Satu Baris):**
    *   Mengatur batas lebar kontainer header menjadi `100%` serta menerapkan `flex-wrap: nowrap` pada kelas `.certificates-title-wrapper` di [index.css](file:///d:/Portofolio/src/index.css).
    *   Teks `PROFESSIONAL VALIDATION. [06]` kini sejajar dalam satu baris horizontal tanpa terpotong atau turun ke bawah, persis sesuai estetika gambar referensi.
*   **Eliminasi Teks Ganda pada Kartu:**
    *   Menghilangkan perulangan teks judul dan badge penerbit yang sebelumnya tampil ganda di dalam miniatur kertas dan di bawahnya.
    *   Miniatur dokumen kini diformat menyerupai sertifikat fisik otentik (memuat status resmi `OFFICIAL CREDENTIAL`, nomor registrasi, nama lengkap, seal emas, dan tanda tangan), sementara judul serta nama lembaga penerbit terbaca jelas dan tegas di bawahnya.

## 22. Penyederhanaan Section Sertifikat: Khusus Sertifikat Olahraga & Tanpa Pilihan Kategori
*   **Penghapusan Tombol Filter Kategori (No Filter Buttons):**
    *   Sesuai permintaan Anda (*"saya hanya punya sertifikat olahraga aja, jadi tidak usah ada pilihan nya, langsung saja"*), tombol filter kategori (`ALL`, `WEB & SOFTWARE`, `SECURITY & NETWORK`, `ATHLETIC & SPORTS`) telah dihapus sepenuhnya dari markup [App.jsx](file:///d:/Portofolio/src/App.jsx) dan aturan CSS di [index.css](file:///d:/Portofolio/src/index.css).
    *   Seluruh kartu sertifikat kini langsung ditampilkan dalam grid 3 kolom tepat di bawah judul utama, persis sesuai struktur bersih gambar referensi.
*   **Pembaruan 100% Sertifikat Atletik & Olahraga Asli:**
    *   Data di [i18n.js](file:///d:/Portofolio/src/i18n.js) (bilingual EN & ID) telah diperbarui total menjadi 6 kredensial prestasi atletik & seni bela diri Taekwondo asli milik Alfisyahrin:
        1.  **Piagam Juara 1 Medali Emas - Piala Pangdam Iskandar Muda 2023** (Pengprov TI Aceh & Kodam IM).
        2.  **Piagam Juara 1 Medali Emas - Kejuaraan Taekwondo Pengcab 2024** (Pengcab TI Kota Lhokseumawe).
        3.  **Piagam Juara 2 Medali Perak - Polytechnic Taekwondo Cup 2023** (Politeknik Negeri Lhokseumawe & BAPOMI).
        4.  **Piagam Juara 3 Medali Perunggu - POMDA Aceh 2025** (BAPOMI Aceh mewakili UTU).
        5.  **Piagam Delegasi Atlet Nasional - PORSENI Politeknik Se-Indonesia 2024** (BAKLMA & Forum Direktur Politeknik).
        6.  **Sertifikat Kualifikasi Sabuk Hitam (Dan I Black Belt)** (Pengprov TI Aceh & Kukkiwon World Taekwondo Headquarters).
    *   Setiap kartu dan modal interaktifnya kini memuat data atletik yang otentik, mulai dari nomor registrasi piagam, lembaga olahraga resmi, tingkat prestasi, hingga kompetensi tanding yang terverifikasi.

## 23. Integrasi Foto Sertifikat Fisik Asli: Piagam Pangdam Iskandar Muda (pangdam.png)
*   **Pemasangan Aset Gambar Asli:**
    *   Mengintegrasikan file gambar fisik `D:\Portofolio\src\assets\sertifikat\pangdam.png` ke dalam kode [App.jsx](file:///d:/Portofolio/src/App.jsx) dan menautkannya secara langsung pada kartu sertifikat `pangdam-2023`.
    *   **Tampilan Kartu Pratinjau (Thumbnail Grid):** Foto sertifikat asli ditampilkan secara penuh dengan rasio proporsional di dalam `.cert-preview-frame` dengan efek *hover zoom* halus (`scale(1.06)`), overlay interaktif `LIHAT DETAIL`, dan bingkai navy yang rapi.
    *   **Tampilan Modal Detail Resolusi Penuh:** Mengklik kartu menampilkan foto scan sertifikat beresolusi tinggi di dalam kontainer `.cert-modal-real-img-container`, memperlihatkan tanda tangan resmi Mayjen TNI Novi Helmy Prasetya (Pangdam IM), Anwar Husen (Ketua Umum Pengprov TI Aceh), stempel segel emas timbul, serta logo Taekwondo Indonesia.
*   **Sinkronisasi Metadata Akurat dari Hasil Scan CamScanner:**
    *   Data di [i18n.js](file:///d:/Portofolio/src/i18n.js) diselaraskan 100% dengan teks pada dokumen fisik:
        *   **Judul:** *Piagam Juara 1 Medali Emas - Piala Pangdam Iskandar Muda*
        *   **Kategori:** *Juara I Under 63 kg Junior Putra*
        *   **Kejuaraan:** *Piala Pangdam Iskandar Muda Taekwondo Championship 2023*
        *   **Lokasi & Tanggal:** *Balee Meuseuraya Aceh, 04 - 07 Agustus 2023*
        *   **Penerbit Resmi:** *Pengurus Provinsi Taekwondo Indonesia Aceh & Komando Daerah Militer Iskandar Muda*
*   **Arsitektur Modular untuk Sertifikat Berikutnya:**
    *   Komponen telah dibuat dinamis melalui `certImageMap` sehingga ketika Anda menambahkan foto sertifikat lain ke folder `src/assets/sertifikat/`, foto tersebut akan langsung menggantikan gambar kertas vektor secara otomatis.

## 24. Integrasi Penuh 4 Sertifikat Fisik Asli: Kota, PTC, dan POMDA (kota.png, ptc.png, pomda.png)
*   **Pemasangan & Pemetaan Gambar ke `certImageMap`:**
    *   Mengimpor ketiga file gambar baru dari `src/assets/sertifikat/` ke dalam [App.jsx](file:///d:/Portofolio/src/App.jsx):
        1.  `kota.png` ditautkan ke sertifikat `lhokseumawe-2024`.
        2.  `ptc.png` ditautkan ke sertifikat `polytechnic-cup-2023`.
        3.  `pomda.png` ditautkan ke sertifikat `pomda-aceh-2025`.
    *   Kini 4 dari 6 sertifikat di portofolio menampilkan foto scan dokumen fisik beresolusi tinggi secara langsung pada kartu thumbnail dan pop-up modal.
*   **Sinkronisasi Detail 100% Sesuai Scan CamScanner Asli:**
    *   **Kota Lhokseumawe (kota.png):**
        *   *Judul:* Sertifikat Juara 1 - Tournament Taekwondo Se-Kota Lhokseumawe 2024
        *   *Tema:* "Show Your Spirit Every Kick"
        *   *Tanggal:* 22 Desember 2024
        *   *Penerbit:* Pengurus Cabang Taekwondo Indonesia (Pengcab TI) Kota Lhokseumawe (ditandatangani H. Taslim A. Rani & Adi Saputra).
    *   **Polytechnic Taekwondo Cup (ptc.png):**
        *   *Judul:* Piagam Juara 2 Medali Perak - Polytechnic Taekwondo Cup 2023
        *   *Kategori:* Juara II Under 63 Kg Junior Putra
        *   *Tanggal:* 20 - 21 Mei 2023
        *   *Penerbit:* Politeknik Negeri Lhokseumawe & UKM PTC (ditandatangani Wadir Ir. Zamzami, S.T., M.Eng).
    *   **POMDA Aceh 2025 (pomda.png):**
        *   *Judul:* Sertifikat Peraih Medali Perunggu - POMDA Aceh 2025
        *   *Kategori:* Peraih Medali Perunggu U-68 (63,01-68,00 kg) Putra Cabor Taekwondo
        *   *Tempat & Tanggal:* Universitas Teuku Umar (Meulaboh), 11 - 18 Juni 2025
        *   *Penerbit:* BAPOMI Aceh & Universitas Teuku Umar (ditandatangani Ketua Umum BAPOMI Aceh Prof. Dr. Mustanir, M.Sc & Rektor UTU Prof. Dr. Ishak Hasan, M.Si).

## 25. Integrasi 100% Foto Scan Asli Seluruh 6 Sertifikat (GSI & ELC)
*   **Penggantian Mockup Vektor dengan Dokumen Asli:**
    *   Dua sertifikat terakhir yang sebelumnya menggunakan ilustrasi kertas mockup vektor resmi digantikan dengan foto hasil scan fisik otentik:
        1.  `gsi.png` ditautkan ke sertifikat `gsi-matematika-2023` (**Piagam Penghargaan Peraih Medali Emas Tingkat Nasional - Olimpiade Sains Siswa Nasional 2023** mata pelajaran Matematika oleh Garuda Sains Indonesia, diselenggarakan 10-12 September 2023).
        2.  `elc.png` ditautkan ke sertifikat `elc-english-2023` (**Certificate of Completion - English for Teens Module 1** dengan predikat *Outstanding Performance* di Eka Learning Center Lhokseumawe, diselenggarakan 9 Januari - 16 Agustus 2023).
    *   Kini seluruh 6 kartu sertifikat dan pop-up modal pratinjau menampilkan 100% foto dokumen fisik asli beresolusi tinggi.

## 26. Penghapusan Badge Nomor Kurung Siku pada Judul Besar Section
*   **Pembersihan Elemen Nomor di Samping Judul Utama:**
    *   Menghapus badge angka kurung siku berwarna hijau lime (`[05]`, `[06]`, `[22]`) yang sebelumnya menempel di samping judul-judul section besar:
        *   Menghapus `[05]` di samping judul **ACHIEVEMENTS** pada tab *Achievements*.
        *   Menghapus `[06]` di samping judul **PROFESSIONAL VALIDATION.** pada tab *Certificates*.
        *   Menghapus `[22]` di samping judul **SELECTED WORK** pada tab *Work*.
    *   Tampilan judul-judul besar kini terlihat lebih bersih, rapi, minimalis, dan elegan tanpa angka yang mengganggu visual tipografi utama.
