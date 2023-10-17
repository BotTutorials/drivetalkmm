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
    const loginlink = document.querySelector('.login');
    const loginphoto = document.querySelector('.loginphoto');
    loginlink.style.display = "none";
    loginphoto.opacity = 0.5;
    loginphoto.style.display = "none";
    return;
  }
  window.location.href = LOGIN_URL;
}

