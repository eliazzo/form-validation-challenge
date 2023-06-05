const fields = document.querySelectorAll("input, textarea");
const form = document.querySelector("form");
form.setAttribute("novalidate", "");

fields.forEach((field) => {
  const message = document.createElement("p");
  const id = field.id + "Error";
  message.setAttribute("id", id);
  
  const prevId = field.getAttribute("aria-describedBy");
  const describedBy = prevId ? prevId + " " + id : id;
  field.setAttribute("aria-describedBy", describedBy);
  field.after(message);

  field.setAttribute("aria-invalid", "false");
  
  field.addEventListener("invalid", () => {
    field.setAttribute("aria-invalid", "true");
    const feedback = field.validationMessage;
    message.textContent = feedback;
  });
  
  field.addEventListener("input", () => {
    field.setAttribute("aria-invalid", "false");
    message.textContent = "";
  })
})


form.addEventListener("submit", (event) => {
  const allValid = form.checkValidity();
  if (!allValid) {
    event.preventDefault();
  }
})