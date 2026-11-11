const tombolTema = document.getElementById("tombol-tema");

// Mengambil tema yang tersimpan
let temaTersimpan = localStorage.getItem("tema");

if (temaTersimpan === "gelap") {
    document.body.classList.add("gelap");
}

// Mengatur tulisan tombol
function perbaruiTombol() {
    if (document.body.classList.contains("gelap")) {
        tombolTema.textContent = "☀️ Mode Terang";
    } else {
        tombolTema.textContent = "🌙 Mode Gelap";
    }
}

perbaruiTombol();

// Ketika tombol ditekan
tombolTema.addEventListener("click", function () {

    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
        localStorage.setItem("tema", "gelap");
    } else {
        localStorage.setItem("tema", "terang");
    }

    perbaruiTombol();
});