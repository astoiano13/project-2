$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const charInput = $("#char-input")
  // const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      charClass: charInput.val().trim()
    };

    if (!userData.email || !userData.charClass) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.charClass);
    emailInput.val("");
    charClass.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, charClass) {
    $.post("/api/signup", {
      email: email,
      charClass: charClass
    })
      .then(() => {
        window.location.replace("/startgame");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
