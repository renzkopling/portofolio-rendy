

// Soal 1: Ganjil atau Genap
const ganjilGenap = (n) => {
    return n % 2 === 0 ? "genap" : "ganjil";
};


// Soal 2: Celsius ke Fahrenheit
const celsiusKeFahrenheit = (c) => {
    return c * 9 / 5 + 32;
};


// Soal 3: Nilai terbesar dari banyak angka
const nilaiTerbesarBanyak = (...angka) => {
    return Math.max(...angka);
};


// Soal 4: Tahun Kabisat
const tahunKabisat = (tahun) => {
    return (tahun % 4 === 0 && tahun % 100 !== 0)
        || tahun % 400 === 0;
};


// Soal 5: Harga setelah diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }
}


// Tantangan 1: Nilai terbesar dari 3 angka
const nilaiTerbesar = (a, b, c) => {
    return Math.max(a, b, c);
};


// Tantangan 2: Menghitung rata-rata nilai
const hitungRataRata = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
};


// Tantangan 3: Menentukan predikat nilai
function predikat(rataRata) {
    if (rataRata >= 90) {
        return "A";
    } else if (rataRata >= 80) {
        return "B";
    } else if (rataRata >= 70) {
        return "C";
    } else if (rataRata >= 60) {
        return "D";
    } else {
        return "E";
    }
}


// Pengujian fungsi
console.log("Soal 1:", ganjilGenap(8));
console.log("Soal 2:", celsiusKeFahrenheit(25));
console.log("Soal 3:", nilaiTerbesarBanyak(10, 25, 15));
console.log("Soal 4:", tahunKabisat(2024));
console.log("Soal 5:", hargaSetelahDiskon(200000));

console.log("Tantangan 1:", nilaiTerbesar(10, 20, 15));
console.log("Tantangan 2:", hitungRataRata(85, 78, 89));
console.log("Tantangan 3:", predikat(84));


// Pengujian predikat
console.log("Predikat 95:", predikat(95));
console.log("Predikat 90:", predikat(90));
console.log("Predikat 84:", predikat(84));
console.log("Predikat 70:", predikat(70));
console.log("Predikat 69:", predikat(69));
// JavaScript portofolio Mukhammad Rendy Putranto
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian (halaman Beranda)
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];
skills.push({ nama: "JavaScript", level: "Dasar" });

console.log("Mukhammad Rendy Putranto:");
console.table(skills);

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });

  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

const hobi = ["Bermain futsal", "Membaca komik", "Mendesain poster"];
for (const item of hobi) {
  console.log(`Hobi saya: ${item}`);
}
console.log(`Jumlah hobi: ${hobi.length}`);

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    tombolTema.textContent = document.body.classList.contains("gelap")
      ? "Mode Terang"
      : "Mode Gelap";
  });
}

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/portofolio-rendy.png",
    alt: "Tangkapan layar halaman profil Mukhammad Rendy Putranto",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/apuy.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
  {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/kalkulator.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/soal.png",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Lima fungsi logika yang masing-masing diuji 3 masukan.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
    <article class="kartu">
      <span class="label">${item.kategori}</span>
      <h3>${item.judul}</h3>
      <img src="${item.gambar}" alt="${item.alt}" width="280">
      <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);

  if (!tombol) {
    return;
  }

  tombol.addEventListener("click", () => {
    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }

    const tombolAktif = document.querySelector(".tombol-filter.aktif");

    if (tombolAktif) {
      tombolAktif.classList.remove("aktif");
    }

    tombol.classList.add("aktif");
  });
}

if (daftarProyek && jumlahProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-javascript", "JavaScript");
}