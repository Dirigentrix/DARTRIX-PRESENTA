function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("contact-status");

  if (typeof fetch !== "function") {
    form.submit();
    return;
  }

  const data = new FormData(form);

  fetch(form.action, {
    method: form.method || "POST",
    body: data,
    headers: {
      Accept: "application/json"
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      status.textContent = "Dziękuję. Wiadomość została wysłana.";
      form.reset();
    })
    .catch(() => {
      form.submit();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", handleContact);
  }
});
