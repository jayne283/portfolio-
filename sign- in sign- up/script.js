function toggleForm() {
    var signInForm = document.getElementById("signInForm");
    var signUpForm = document.getElementById("signUpForm");
    var formContainer = document.getElementById("formContainer");
    var toggleText = document.getElementById("toggleText");

    if (signInForm.style.display === "none") {
      signInForm.style.display = "block";
      signUpForm.style.display = "none";
      toggleText.innerHTML = '<a href="#" onclick="toggleForm()">Don\'t have an account? Sign Up</a>';
      formContainer.style.justifyContent = "center";
    } else {
      signInForm.style.display = "none";
      signUpForm.style.display = "block";
      toggleText.innerHTML = '<a href="#" onclick="toggleForm()">Already have an account? Sign In</a>';
      formContainer.style.justifyContent = "flex-end";
    }
  }

  function validateSignIn() {
    var email = document.getElementById("signInEmail").value;
    var password = document.getElementById("signInPassword").value;
    var signInError = document.getElementById("signInError");

    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      signInError.textContent = "Please enter a valid email address.";
      return false;
    }

    // Password length validation (example: minimum 6 characters)
    if (password.length < 6) {
      signInError.textContent = "Password must be at least 6 characters long.";
      return false;
    }

    // Clear any previous error messages
    signInError.textContent = "";
    return true;
  }

  function validateSignUp() {
    var username = document.getElementById("signUpUsername").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;
    var signUpError = document.getElementById("signUpError");

    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      signUpError.textContent = "Please enter a valid email address.";
      return false;
    }

    // Password length validation (example: minimum 6 characters)
    if (password.length < 6) {
      signUpError.textContent = "Password must be at least 6 characters long.";
      return false;
    }

    // Clear any previous error messages
    signUpError.textContent = "";
    return true;
  }