function goTo(id) {
    window.scroll(0, document.querySelector(`#${id}`).offsetTop);
}

function postRequest(route, params, fn) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(this.readyState == 4) {
            fn(req.responseText);
        }
    }
    req.open("POST", route, true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(params));

    return false;
}

function getRequest(route, fn) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(this.readyState == 4) {
            fn(req.responseText);
        }
    }
    req.open("GET", route, true);
    req.send();
}
