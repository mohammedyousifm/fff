/*
-----------------------------
------ LOGIN SCRIPT -------
-----------------------------
*/
  // get the form before sending the data to the server side
  document.getElementById('form-login').onsubmit = function (e) {
    // Reset error messages
    document.getElementById('message').innerHTML = '';

    let adminName = document.querySelector('[name="adminName"]');
    let password = document.querySelector('[name="password"]');
    let userNameValid = false;
    let passwordValid = false;

    // Check if input fields are empty
    if (!adminName.value.trim() && !password.value.trim()) {
      displayError('<span class="span-message">خطأ:</span> يرجى تقديم معلومات صحيحة.');
      e.preventDefault();
      return;
    }

    // Check if the adminName is not empty
    if (adminName.value.trim() !== "") {
      userNameValid = true;
    } else {
      displayError('<span class="span-message">خطأ:</span> يرجى إدخال اسم المستخدم.');
      e.preventDefault();
      return;
    }

    // Check if the password is not empty
    if (password.value.trim() !== "") {
      passwordValid = true;
    } else {
      displayError('<span class="span-message">خطأ:</span> يرجى إدخال كلمة المرور.');
      e.preventDefault();
      return;
    }

    // Check if both username and password are valid
    if (!userNameValid || !passwordValid) {
      e.preventDefault();
    }
  };

  // Function to display error message
  function displayError(message) {
    document.getElementById('message').innerHTML = message;
    console.log(message);
  }