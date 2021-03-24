window.onload = onInit;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    c = document.cookie;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function getCookieIntDefault(cname, defaultval) {
    v = parseInt(getCookie(cname));
    return !isNaN(v) ? v : defaultval;
}

function onInit() {
    mjol = getCookieIntDefault("mjol", 500);
    mjol2 = getCookieIntDefault("mjol2", 500);
    vatten = getCookieIntDefault("vatten", 72);
    salt = getCookieIntDefault("salt", 3);
    levain = getCookieIntDefault("levain", 25);

    document.getElementById("mjol").value = mjol;
    document.getElementById("mjol2").value = mjol2;
    document.getElementById("vatten").value = vatten;
    document.getElementById("salt").value = salt;
    document.getElementById("levain").value = levain;
    calcValues();
}

function calcValues() {
    mjol = parseInt(document.getElementById("mjol").value);
    mjol2 = parseInt(document.getElementById("mjol2").value);
    vatten = parseInt(document.getElementById("vatten").value);
    salt = parseInt(document.getElementById("salt").value);
    levain = parseInt(document.getElementById("levain").value);

    setCookie("mjol", mjol, 365);
    setCookie("mjol2", mjol, 365);
    setCookie("vatten", vatten, 365);
    setCookie("salt", salt, 365);
    setCookie("levain", levain, 365);

    document.getElementById("vatten_value").innerHTML = (mjol + mjol2) * vatten / 100 + " g";   
    document.getElementById("salt_value").innerHTML = (mjol + mjol2) * salt / 100 + " g";   
    document.getElementById("levain_value").innerHTML = (mjol + mjol2) * levain / 100 + " g";   
}
