function onload() {
    const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const GURl = PARAMS.url;
    document.querySelector('.gurl').textContent = GURL;
