function onload() {
    const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const AUTH_CODE = PARAMS.code;
    const SCOPE = PARAMS.scope;

    if (!AUTH_CODE) {
        document.querySelector('.auth-code').textContent = "Authorization failed because authorization code is missing";
        return;
    }

    if (SCOPE !== "https://www.googleapis.com/auth/drive") {
        document.querySelector('.auth-code').textContent = "Authorization failed due to wrong Google Drive API scope";
        return;
    }

    document.querySelector('.auth-code').textContent = AUTH_CODE;

    setupCopyButton(document.querySelector('.copy'), AUTH_CODE);
}

function setupCopyButton(button, text) {
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
        button.textContent = "Verification Code Copied";
        setTimeout(() => {
            // Remove the aria-live label so that when the
            // button text changes back to "Copy", it is
            // not read out.
            button.removeAttribute("aria-live");
            button.textContent = "Copy";
        }, 1000);

        // Re-Add the aria-live attribute to enable speech for
        // when button text changes next time.
        setTimeout(() => {
            button.setAttribute("aria-live", "assertive");
        }, 2000);
    });
}
