function onload() {
    const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const GURl = PARAMS.gurl;
    document.querySelector('.gurl').textContent = GURL;
