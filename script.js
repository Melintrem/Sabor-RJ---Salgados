// === TEMA ===
const toggleThemeBtn = document.getElementById("toggleTheme");
const body = document.body;
if (localStorage.getItem("theme") === "dark") { body.classList.add("dark-mode"); }
toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// === PEDIDO NO WHATSAPP ===
function enviarPedido() {
  let carrinho = [];

  // Risole
  let qtdRisole = document.getElementById("qtdRisole").value;
  let saborRisole = document.getElementById("saborRisole").value;
  if (qtdRisole > 0) {
    carrinho.push(`${qtdRisole}x Risole (${saborRisole})`);
  }

  // Corinthiano
  let qtdCorinthiano = document.getElementById("qtdCorinthiano").value;
  if (qtdCorinthiano > 0) {
    carrinho.push(`${qtdCorinthiano}x Corinthiano`);
  }

  if (carrinho.length === 0) {
    alert("Escolha pelo menos 1 produto.");
    return;
  }

  let pedido = "Olá! Gostaria de pedir:\n\n" + carrinho.join("\n");
  let telefone = "5517991243491"; // número do WhatsApp
  let url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(pedido);

  window.open(url, "_blank");
}
