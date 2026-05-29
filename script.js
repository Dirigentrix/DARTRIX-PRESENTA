function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleContact(e) {
  e.preventDefault();
  const status = document.getElementById("contact-status");
  status.textContent = "Dziękuję. Formularz w wersji demo nie wysyła jeszcze danych, ale pokazuje gotowy przepływ.";
}
