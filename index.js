function validateForm() {
    // Get the form values
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
  
    // Check if the name field is empty
    if (name.trim() === "") {
      displayErrorMessage("name-error", "Name must be filled out");
      return false;
    } else {
      hideErrorMessage("name-error");
    }
  
    // Check if the email field is empty and valid
    if (email.trim() === "") {
      displayErrorMessage("email-error", "Email must be filled out");
      return false;
    } else if (!validateEmail(email)) {
      displayErrorMessage("email-error", "Invalid email address");
      return false;
    } else {
      hideErrorMessage("email-error");
    }
  
    // Check if the password field is empty and meets the minimum length requirement
    if (password.trim() === "") {
      displayErrorMessage("password-error", "Password must be filled out");
      return false;
    } else if (password.length < 6) {
      displayErrorMessage("password-error", "Password must be at least 6 characters long");
      return false;
    } else {
      hideErrorMessage("password-error");
    }
  
    // If all validations pass, the form is valid
    return true;
  }
  
  function validateEmail(email) {
    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function displayErrorMessage(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.style.display = "block";
  }
  
  function hideErrorMessage(id) {
    var errorElement = document.getElementById(id);
    errorElement.style.display = "none";
  }
  