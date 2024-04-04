document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");
    const form = document.querySelector(".form-container");
    const emailInput = document.getElementById("email");
    const muchMore = document.getElementById("muchMore");
    const userEmail = document.getElementById("userEmail");
  
    form.addEventListener("submit", Auth);
    function Auth(event) {
      event.preventDefault(); // Prevent form submission for now
      const emailValue = emailInput.value;
      localStorage.setItem("email", emailValue);
  
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (!emailPattern.test(emailValue)) {
        displayErrorMessage("Valid email is required");
      } else {
        form.submit();
      }
    }
    emailInput.addEventListener("keyup", () => {
      const emailValue = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (!emailPattern.test(emailValue)) {
        muchMore.style.opacity = "100%";
      } else {
        muchMore.style.opacity = "0%";
      }
    });
  
    function displayErrorMessage(message) {
      const errorMessage = document.querySelector(".error-container");
  
      errorMessage.textContent = message;
      emailInput.style.backgroundColor = "#FFE6E4";
      emailInput.style.outlineColor = "#FF6155";
      emailInput.style.color = "#FF6155";
  
      const formGroup = email.parentElement;
      formGroup.appendChild(errorElement);
    }
  });
  
  const emailValue = localStorage.getItem("email");
  userEmail.innerHTML = emailValue;
  
  