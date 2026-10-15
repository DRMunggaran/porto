// Tahun otomatis di footer
document.getElementById("tahun").textContent = new Date().getFullYear();

// Tombol ganti tema (gelap/terang), pilihan diingat di browser
const root = document.documentElement;
try {
  const saved = localStorage.getItem("tema");
  if (saved) root.dataset.theme = saved;
} catch (e) {}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("tema", next); } catch (e) {}
});
