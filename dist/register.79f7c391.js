function display_ct6() {
    var x = new Date();
    var ampm = x.getHours() >= 12 ? " PM" : " AM";
    hours = x.getHours() % 12;
    hours = hours ? hours : 12;
    var month = x.getMonth() + 1;
    var x1 = x.getDate() + "/" + month + "/" + x.getFullYear();
    x1 = x1 + " - " + addZero(hours) + ":" + addZero(x.getMinutes()) + ":" + addZero(x.getSeconds()) + ampm;
    document.getElementById("clockText").innerHTML = x1;
    display_c6();
}
function display_c6() {
    var refresh = 1000; // Refresh rate in milli seconds, 1000 = 1 second
    mytime = setTimeout("display_ct6()", refresh);
}
function addZero(i) {
    if (i < 10) i = "0" + i;
    return i;
}
function clockInit() {
    display_c6();
}
function getTodayDate() {
    // format = dd/mm/yyyy
    var x = new Date();
    var month = x.getMonth() + 1;
    return x.getFullYear() + "-" + addZero(month) + "-" + addZero(x.getDate());
}

//# sourceMappingURL=register.79f7c391.js.map
