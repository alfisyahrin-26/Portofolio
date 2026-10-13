# Ringkasan Sesi 1: Pembuatan Web Portofolio React

Dokumen ini berisi catatan dan pengingat dari semua yang telah kita kerjakan dan sepakati pada sesi pertama pembuatan web portofolio.

## 1. Stack Teknologi
- **Framework:** React + Vite (diinstal tanpa interupsi).
- **Styling:** Vanilla CSS (`index.css`), untuk fleksibilitas maksimal, tanpa menggunakan Tailwind CSS (meskipun ada referensi di panduan awal), agar strukturnya lebih rapi dan ringan.
- **Icons:** `react-icons` (menggunakan kategori FontAwesome `/fa` dan Bootstrap `/bs`).
- **Animations:** `framer-motion` untuk interaksi dan animasi yang mulus.

## 2. Konten Profil (Hasil Footprinting)
- **Nama:** Muhammad Alfisyahrin Muzhaffar
- **Institusi/Pendidikan:** Mahasiswa Jurusan Teknologi Informasi dan Komputer (TIK) di Politeknik Negeri Lhokseumawe (PNL).
- **Prestasi Olahraga:** Atlet Taekwondo, Peraih Medali Perunggu di POMDA Aceh 2025 (Kelas Under 68 Kg, Universitas Teuku Umar).
- **Fokus Keahlian:** Software Engineering, IT Research, dan Problem Solving.

## 3. Desain & Tipografi (Sesuai Referensi Gambar & `claude.md`)
- **Konsep Tata Letak:** *Bento Grid* / *Dashboard Case Study*.
- **Warna Utama (Tokens):**
  - `primary-navy` (`#1E3A68`) untuk latar kartu gelap dan teks utama.
  - `accent-pastel` (`#E4EDF7`) untuk latar kartu terang/kombinasi.
  - `accent-blue` (`#6FA4D8`) untuk warna aksen tambahan.
- **Tipografi:**
  - **Heading/Judul Besar:** `Bebas Neue` (memberikan kesan berani, padat, dan besar seperti referensi "SOCIAL MEDIA").
  - **Body/Teks Paragraf:** `Inter`.
  - **Aksen Tangan/Script:** `Dancing Script` (digunakan untuk teks "Athlete" dengan kemiringan rotasi `-5deg`).

## 4. Animasi (Framer Motion)
Aturan animasi yang disepakati dan diimplementasikan:
1. **Scroll Reveal yang Dinamis (Tanpa Refresh):**
   - Menggunakan properti `whileInView="visible"` dan `initial="hidden"`.
   - Konfigurasi `viewport={{ once: false, amount: 0.1 }}`. Artinya, **setiap kali** Anda men-scroll ke atas atau bawah, animasi akan terus dimainkan tanpa harus me-refresh halaman web.
2. **Staggered Animations (Muncul Berurutan):**
   - Tidak ada elemen yang muncul serentak secara kaku.
   - Pembungkus (*container*) kartu memiliki `staggerChildren: 0.15`, sehingga teks, ikon, *badge*, dan gambar di dalam kartu tersebut muncul secara individual satu per satu.
3. **Peniadaan Scroll Horizontal Acak:**
   - Semua pergerakan sumbu `x` (kiri-kanan) telah dihapus dari animasi kemunculan dan *hover*.
   - Animasi hanya mengandalkan pergerakan sumbu `y` (vertikal) dan manipulasi `scale` (membesar/mengecil) agar tidak menyebabkan *glitch* horizontal.

## 5. Solusi Kendala
- Sempat terjadi error *Native Binding* pada Vite (`@rolldown`). Diselesaikan dengan melakukan instalasi ulang bersih (`rm node_modules package-lock.json` lalu `npm install`).
- Kesalahan sintaks JSX (Lupa memberikan awalan `motion.` pada tag penutup `</div>`) sudah dilacak dan diperbaiki, membuat _auto-reload_ Vite kembali berjalan lancar.
