/* Tombol ke destinasi */
const btnLihatDestinasi = document.getElementById("btnLihatDestinasi");
const destinasiSection = document.getElementById("destinasi");
btnLihatDestinasi.addEventListener("click", function () {
  // Menggulir halaman smoothly ke destinasi
  destinasiSection.scrollIntoView({ behavior: "smooth" });
});

/* Show pesan misi */
const btnPesanMisi = document.getElementById("btnPesanMisi");
const pesanMisi = document.getElementById("pesanMisi");
btnPesanMisi.addEventListener("click", function () {

  // Ubah teks tombol setelah user interaksi
  btnPesanMisi.textContent = "Pesan Diterima ✓";

  // Warna tombol as feedback visual
  btnPesanMisi.style.backgroundColor = "#245f46";

  pesanMisi.textContent =
    "MISSION CONTROL: Sistem siap. Jalur eksplorasi Mars terbuka.";

  // Memberikan class untuk styling pesan di CSS
  pesanMisi.classList.add("mission-message");

  // Tombol dinonaktifkan agar pesan tidak dibuat berulang
  btnPesanMisi.disabled = true;
});

/* Hitung mundur keberangkatan */
const countdown = document.getElementById("countdown");
let sisaDetik = 60 * 60; // simulasi 1 jam to keberangkatan

function tampilkanCountdown() {
  const jam = Math.floor(sisaDetik / 3600);
  const menit = Math.floor((sisaDetik % 3600) / 60);
  const detik = sisaDetik % 60;
  // Show waktu format 00:00:00
  countdown.textContent =
    String(jam).padStart(2, "0") + ":" +
    String(menit).padStart(2, "0") + ":" +
    String(detik).padStart(2, "0");
}

const timerKeberangkatan = setInterval(function () {
  if (sisaDetik > 0) {
    sisaDetik--;
    tampilkanCountdown();
  } else {
    clearInterval(timerKeberangkatan);
    countdown.textContent = "SIAP BERANGKAT";
  }
}, 1000);

/* Show lebar layar pengguna */
const lebarLayar = document.getElementById("lebarLayar");
function tampilkanLebarLayar() {
  // baca lebar viewport
  lebarLayar.textContent = window.innerWidth;
}

tampilkanLebarLayar();
// Nilai diupdate tiap kali ukuran layar berubah
window.addEventListener("resize", tampilkanLebarLayar);