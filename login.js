function onload() {
    const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const URl = PARAMS.url;
    document.querySelector('.url').textContent = URL;
