$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $('form.signup');
    const emailInput = $('input#email-input');
    const charInput = $('#char-input');
    const passwordInput = $('input#password-input');
    // const passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on('submit', event => {
        event.preventDefault();

        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            charClass: charInput.val().trim(),
        };

        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password, userData.charClass);
        emailInput.val('');
        passwordInput.val('');
        charClass.val('');
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, charClass) {
        $.post('/api/signup', {
            email: email,
            password: password,
            charClass: charClass,
        })
            .then(() => {
                window.location.replace('/startgame');
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $('#alert .msg').text(err.responseJSON);
        $('#alert').fadeIn(500);
    }
});
