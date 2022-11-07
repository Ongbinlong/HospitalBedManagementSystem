var bedTableContent = "";
var bedData = [];
function initFetchJSONFile() {
    setInterval(function () {
    bedData = JSON.parse(sessionStorage.getItem("data"));
    populateTable();
    }, 100);
}

function populateTable() {
    bedTableContent = "<div id='bedTable'><table class='bedTable'>";
    if (!bedData) {
        return;
    }

    populateTableHeaderByType("general");
    populateTableHeaderByType("intensive");
    populateTableHeaderByType("infectious");
    populateTableHeaderByType("waiting");

    bedTableContent += "</table></div>";
    document.getElementById("bedTable").outerHTML = bedTableContent;
}

function populateTableHeaderByType(type) {
    var specificBedData = bedData[type];
    var tableRow = "";
    if (specificBedData == null) {
        return;
    }

    for (i = 0; i < specificBedData.length; i++) {
        var index = i + 1;
        tableRow += "<tr><td>" + index + "</td><td>" + specificBedData[i].name + "</td><td>" + specificBedData[i].checkInDate + "</td><td>" + specificBedData[i].checkOutDate + "</td><td>" + specificBedData[i].doctor + "</td></tr>"
    }

    switch (type) {
        case "general":
            bedTableContent += "<tr><td colspan='8' class='wardTitle generalTitle'>General Ward - Bed <a class='remainingBed'>#" + specificBedData.length + "</a></td></tr>"
            break;
        case "intensive":
            bedTableContent += "<tr><td colspan='8' class='wardTitle intensiveTitle'>Intensive Care Ward - Bed <a class='remainingBed'>#" + specificBedData.length + "</a></td></tr>"
            break;
        case "infectious":
            bedTableContent += "<tr><td colspan='8' class='wardTitle infectiousTitle'>Infectious Disease Ward - Bed <a class='remainingBed'>#" + specificBedData.length + "</a></td></tr>"
            break;
        case "waiting":
            bedTableContent += "<tr><td colspan='8' class='wardTitle waitingTitle'>Waiting List - Bed <a class='remainingBed'>#" + specificBedData.length + "</a></td></tr>"
            break;
        default:
            break;
    }

    bedTableContent += "<tr><th>No #</th><th>Name</th><th>Check In</th><th>Check Out</th><th>Doctor</th></tr>"
    bedTableContent += tableRow;

}