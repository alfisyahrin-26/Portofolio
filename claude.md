# Project Overview: Creative Portfolio & Case Study

Dokumen ini berisi panduan gaya, token warna, arsitektur tata letak, dan konvensi implementasi untuk proyek portofolio/case study bertema bento-grid.

---

## 🎨 Design System & Color Tokens

Gunakan token warna berikut secara konsisten di seluruh komponen:

| Token Name | HEX Code | Peran / Penggunaan Utama |
| :--- | :--- | :--- |
| `primary-navy` | `#1E3A68` | Latar kartu gelap, headline teks utama, border luar grid, ikon primer |
| `primary-navy-dark` | `#19335A` | Varian gelap untuk hover state / shadow border |
| `accent-blue` | `#6FA4D8` | Teks aksen/script, button CTA, indikator aktif, highlight badges |
| `accent-pastel` | `#E4EDF7` | Latar sekunder kartu terang, badge background, hover overlay |
| `surface-light` | `#F7F9FC` | Latar belakang kanvas/halaman utama, kartu off-white |
| `surface-white` | `#FFFFFF` | Kontainer kartu putih bersih, teks di atas latar navy |
| `border-soft` | `#DCE3EB` | Garis pembatas (divider), outline kartu terang, ornamen grafik |
| `text-muted` | `#555E68` | Paragraf deskripsi, label footer, meta info sekunder |

---

## 📐 Layout Architecture: Bento Grid

Struktur tata letak mengadopsi model **Modern Bento Grid / Dashboard Case Study**:

1. **Header Section:**
   - Navigasi minimalis di bagian atas (`Target Audience`, `Marketing Funnel`, `Contact`).
   - Area hero dengan tipografi bold sans-serif dipadukan dengan aksen script font (`accent-blue`).
   - Mockup foto utama dengan latar transparan/cutout.

2. **Main Grid Cards:**
   - Menggunakan sistem CSS Grid / Flexbox responsif dengan rasio modular.
   - **Kartu Primer (Latar Navy `#1E3A68`):** Digunakan untuk bagian penting seperti *Brand Identity*, *Target Audience*, *Funnel Overview*. Teks di dalamnya wajib putih (`#FFFFFF`) dengan kontras tinggi.
   - **Kartu Sekunder (Latar Putih `#FFFFFF` / Soft Pastel `#E4EDF7`):** Digunakan untuk konten visual, galeri foto, persona pengguna, dan roadmap teks pendek.
   - **Rounded Corners:** Sudut kartu konsisten (misal: `border-radius: 8px` hingga `12px`).
   - **Border Outline:** Kartu memiliki outline tipis dengan `#DCE3EB` atau `#1E3A68` sesuai kontras latar belakang.

---

## 🔤 Typography Guidelines

- **Primary Headings:** Sans-serif tebal (e.g., *Inter*, *Plus Jakarta Sans*, atau *Montserrat*), uppercase untuk kategori section.
- **Accent Headings:** Script / handwritten font (e.g., gaya *Signature* atau *Cursive*) untuk kata kunci dinamis seperti "Strategy".
- **Body & Captions:** Sans-serif bersih dengan ukuran font terkontrol (12px–14px untuk metadata/keterangan kartu bento).

---

## 💻 Code Conventions (Tailwind CSS / Web)

Jika diimplementasikan ke dalam proyek web (Tailwind CSS):

```javascript
// tailwind.config.js snippet
module.exports = {
  theme: {
    extend: {
      colors: {
        portfolio: {
          navy: '#1E3A68',
          'navy-dark': '#19335A',
          blue: '#6FA4D8',
          pastel: '#E4EDF7',
          canvas: '#F7F9FC',
          border: '#DCE3EB',
          muted: '#555E68',
        }
      }
    }
  }
}

footprinting kan tentang saya Muhammad Alfisyahrin Muzhaffar PNL
