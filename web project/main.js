function char() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("change").innerHTML = this.responseText;
    }

    xhttp.open("GET", "ajax.txt")
    xhttp.send();
}

function char1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("change1").innerHTML = this.responseURL;
    }

    xhttp.open("GET", "ajax.txt")
    xhttp.send();
}

function char2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("change2").innerHTML = this.responseType;
    }

    xhttp.open("GET", "ajax.txt")
    xhttp.send();
}

function char3() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("change3").innerHTML = this.getAllResponseHeaders;
    }

    xhttp.open("GET", "ajax.txt")
    xhttp.send();
}

function char4() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("change4").innerHTML = this.getResponseHeader;
    }

    xhttp.open("GET", "ajax.txt")
    xhttp.send();
}