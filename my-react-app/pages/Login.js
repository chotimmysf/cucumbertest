class Login {
    get url() {
        return "?controller=authentication"
    }

    get emailInput() {
        return $("#email");
    }

    get passwordInput() {
        return $("#password");
    }

    get signInButton() {
        return $("SubmitLogin");
    }

    /* Sign In */
    signIn(email, password) {
        this.emailInput.waitForDisplayed(5000);
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.signInButton(click);
    }
}