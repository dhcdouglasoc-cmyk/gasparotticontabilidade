function scrollToForm() {
  document.getElementById("form").scrollIntoView({ 
    behavior: "smooth" 
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});