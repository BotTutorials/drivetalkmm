function Channel() {
  window.location.href = 'https://t.me/drivetalkchannel';
}
function Group() {
  window.location.href = 'https://t.me/drivetalk';
}
function Privacy() {
  window.location.href = '/privacy';
}
function Login() {
  const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
  const LOGIN_URL = atob(PARAMS.login_url);
  if (!LOGIN_URL) {
    const loginLink = document.querySelector('.login');
      loginLink.removeAttribute('onclick');
      loginLink.style.display = 'none';
      loginLink.style.cursor = 'not-allowed';
      return;
  }
  window.location.href = LOGIN_URL;
}
