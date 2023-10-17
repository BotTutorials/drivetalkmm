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
  if (!PARAMS.login_url) {
    const loginLink = document.getElementById('login');
    loginLink.removeAttribute('onclick');
    loginLink.href = "javascript:void(0)";
    const loginImage = document.getElementById('loginphoto');
    loginImage.style.opacity = 0.5; // Adjust the opacity to visually disable the image
    return;
  }
  window.location.href = LOGIN_URL;
}

