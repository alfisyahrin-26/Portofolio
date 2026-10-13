# Rangkuman Percakapan Sesi 2 (Pengembangan Portofolio)

Pada sesi kedua ini, kita melakukan berbagai eksperimen desain dan integrasi komponen interaktif, serta berfokus pada responsivitas tampilan mobile. Berikut adalah poin-poin utama yang telah kita kerjakan:

## 1. Eksperimen Efek Kursor Interaktif (React Bits)
*   **SplashCursor:** Kita sempat mengintegrasikan komponen efek cairan fluida (*fluid simulation*) pada kursor.
    *   Mengubah warnanya menjadi biru tema (`#6FA4D8`) alih-alih warna pelangi.
    *   Mengembalikannya ke warna pelangi, sebelum akhirnya Anda memutuskan untuk **tidak menggunakannya** karena dirasa terlalu mendistraksi.
*   **CursorGrid:** Sebagai alternatif yang lebih rapi, kita memasukkan komponen *CursorGrid*.
    *   Efek ini memunculkan jaring-jaring bercahaya warna biru (`#6FA4D8`) yang bereaksi terhadap pergerakan dan klik (*pulse*) kursor.
    *   Posisinya dipindahkan ke lapisan paling belakang (`z-index: 0`) agar hanya menjadi efek latar belakang yang tidak menimpa teks maupun foto.

## 2. Eksperimen Struktur Navigasi (Single Page vs Scrollable Bento)
*   **Mode SPA (Single Page Application):** Kita merombak kerangka agar ketika salah satu menu di navbar diklik (misal: *About* atau *Focus*), konten yang muncul hanya bagian itu saja di tengah layar, dan menyembunyikan yang lainnya.
*   **Rollback ke Bento Grid Scroll:** Karena kurang sesuai selera, kita mengembalikannya ke format awal yang bisa di-scroll ke bawah. Kini semua bagian berada sejajar di dalam tatanan Bento Grid yang mulus.

## 3. Optimasi Responsivitas (Mobile Friendly)
*   Menambahkan dan merombak query `@media (max-width: 768px)` di dalam `index.css` agar website tampil sempurna di layar HP.
*   **Perbaikan Utama:**
    *   **Navbar:** Mengubah susunan menjadi berjejer dengan fasilitas *scroll horizontal* jika layarnya terlalu sempit.
    *   **Hero Section:** Menyusun teks besar ke tengah (*center-aligned*), menyesuaikan ukuran font secara dinamis (`vw`), dan meletakkan foto profil di posisi yang optimal tanpa menabrak teks.
    *   **Bento Grid:** Memecah *layout* yang awalnya terdiri dari 2 kolom menjadi **1 kolom** utuh yang memanjang ke bawah, sehingga kartu informasi (termasuk *Who Am I*, *Qualifications*, dan kotak *My Core Focus*) tidak terpotong. 
    *   Menyesuaikan *padding* di dalam masing-masing kartu agar terasa lebih luas di layar HP yang kecil.

Semua penyesuaian awal dipastikan aman dan tidak menggunakan *library* tambahan selain murni CSS Vanilla + React State. 

## 4. Redesain Hero Section & Pembaruan Tema (Full Referensi Gambar)
*   **Perubahan Layout Hero:**
    *   Tampilan Hero kini dibuat memanjang penuh (*Full Width* 100vw).
    *   Latar belakang menggunakan warna biru sangat terang/vibrant (`#1C24D4`) sesuai referensi yang disepakati. Warna tema lain (`--primary-navy`) dan `CursorGrid` juga diselaraskan menjadi biru terang.
    *   Teks latar belakang diganti menjadi raksasa dengan efek bayangan 3D (*drop shadow*) bertuliskan **CREATIVE DEVELOPER**.
    *   Badge tulisan diletakkan melayang dengan desain pil neon kuning ("IT STUDENT & ATHLETE").
    *   Foto profil ditempatkan lurus di tengah menimpa teks 3D.
    *   **Pita Marquee:** Menambahkan efek pita tulisan berjalan (animasi *infinite scroll*) di posisi terbawah Hero yang agak dimiringkan, menampilkan fokus (*Software Eng | IT Research*, dll).

## 5. Penyempurnaan Tampilan Mobile (UI/UX)
*   **Perbaikan Hero Mobile:**
    *   Tata letak Hero tidak lagi menggunakan *absolute positioning* yang menumpuk, melainkan *relative flow* (menyusun berurutan ke bawah). 
    *   Teks 3D diletakkan paling atas, diikuti badge neon kuning, lalu foto diri yang besarnya dibuat proporsional (80%) agar tidak ada celah kosong (*gap*) raksasa, langsung menempel pada teks sambutan.
    *   Menambahkan ruang/celah pada ujung bawah agar pita *marquee* tidak menimpa tombol.
*   **Hamburger Menu (Ikon 3 Garis):**
    *   Merombak navbar mobile yang awalnya menggunakan *scroll horizontal* berantakan, menjadi **Hamburger Menu** yang rapi, modern, dan compact layaknya *App Bar*.
    *   Jika ikon 3 garis diklik, menu link akan muncul/turun (*slide down*) dengan animasi *fade-in*. Mengeklik sembarang link akan otomatis menutup menu.
