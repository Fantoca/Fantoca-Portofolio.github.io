// Mendapatkan referensi ke elemen button menggunakan id
const emailButton = document.getElementById("emailButton");

// Fungsi untuk membuka link email
function openEmailLink(event) {
  // Mencegah aksi default dari tombol (jika ada)
  event.preventDefault();

  // Alamat email yang akan digunakan sebagai tujuan
  const email = "fantocaa17@gmail.com";

  // Subject email (opsional)
  const subject = "Halo, Saya tertarik untuk bekerja sama!";

  // Body email (opsional)
  const body =
    "Halo,\n\nSaya tertarik untuk bekerja sama dengan Anda. Silakan beri tahu saya lebih lanjut tentang kesempatan tersebut.\n\nTerima kasih.";

  // Membentuk URL email dengan memasukkan email, subject, dan body
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Membuka link email di jendela baru
  window.open(emailLink, "_blank");
}
// Menambahkan event listener untuk mengaktifkan fungsi openEmailLink saat tombol diklik
emailButton.addEventListener("click", openEmailLink);

//hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const offset = 0; // Sesuaikan offset dengan kebutuhan Anda
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scroll({
    behavior: "smooth",
    left: 0,
    top: offsetPosition,
  });
}

// Ambil semua elemen anchor link pada navbar
const navLinks = document.querySelectorAll("nav ul li a");

// Tambahkan event listener pada setiap elemen anchor link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Agar link tidak mengarah ke halaman lain

    const targetSectionId = link.getAttribute("href").substring(1); // Ambil ID dari href
    scrollToSection(targetSectionId);
  });
});

//pindah ke page1.html

// Fungsi untuk menampilkan konten di div1 dan menyembunyikan konten di div2
function showDiv(id) {
  if (id === "div1") {
    document.getElementById("contentDiv1").style.display = "block";
    document.getElementById("contentDiv2").style.display = "none";
    document.getElementById("div1").classList.add("text-kuningPorto");
    document.getElementById("div2").classList.remove("text-kuningPorto");
  } else {
    document.getElementById("contentDiv1").style.display = "none";
    document.getElementById("contentDiv2").style.display = "block";
    document.getElementById("div1").classList.remove("text-kuningPorto");
    document.getElementById("div2").classList.add("text-kuningPorto");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Default tampilkan konten di div1
  document.getElementById("contentDiv1").style.display = "block";
  document.getElementById("contentDiv2").style.display = "none";
});
