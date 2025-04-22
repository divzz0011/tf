
// script.js
const PASSWORD = "123321";

document.getElementById("loginBtn").addEventListener("click", cekPassword);
document.getElementById("previewBtn").addEventListener("click", tampilkanBukti);

function cekPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("formInput").style.display = "block";
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
}

function tampilkanBukti() {
  const now = new Date();
  document.getElementById("formInput").style.display = "none";
  document.getElementById("buktiTransfer").style.display = "block";

  document.getElementById("refID").textContent = "TRX-" + Math.floor(Math.random() * 1e9);
  document.getElementById("tanggal").textContent =
    now.toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' });
  document.getElementById("waktu").textContent =
    now.toLocaleTimeString("id-ID");

  document.getElementById("dariRek").textContent = document.getElementById("rekeningPengirim").value;
  document.getElementById("dariNama").textContent = document.getElementById("namaPengirim").value;
  document.getElementById("keRek").textContent = document.getElementById("rekeningPenerima").value;
  document.getElementById("keNama").textContent = document.getElementById("namaPenerima").value;
  document.getElementById("bankTujuanOut").textContent = document.getElementById("bankTujuan").value;

  const jumlah = parseInt(document.getElementById("jumlah").value)
    .toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  document.getElementById("jumlahOut").textContent = jumlah;
  document.getElementById("beritaOut").textContent = document.getElementById("berita").value;
}
