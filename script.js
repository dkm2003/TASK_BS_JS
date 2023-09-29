document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission for now
  
      // Reset the validation styles and messages
      resetValidation();
  
      // Validate each input field
      const firstName = document.getElementById("first_name");
      validateField(firstName, "first_name_message", "Please enter First Name");
  
      const lastName = document.getElementById("name");
      validateField(lastName, "name_message", "Please enter Last Name");
  
      const email = document.getElementById("email");
      validateField(email, "email_message", "Please enter E-mail Address");
  
      const phoneNumber = document.getElementById("number");
      validateField(phoneNumber, "number_message", "Please enter Phone Number");
  
      const address = document.getElementById("Address");
      validateField(address, "Address_message", "Please enter Address");
  
      const city = document.getElementById("City");
      validateField(city, "City_message", "Please enter City");
  
      const state = document.getElementById("state");
      validateSelectField(state, "state_message", "Please select a State");
  
      const about = document.getElementById("about");
      validateField(about, "about_message", "Please enter Project Description");
  
      // Check if there are any validation errors
      if (form.querySelectorAll(".invalid-input").length === 0) {
        // If no errors, submit the form
        form.submit();
      }
    });
    });