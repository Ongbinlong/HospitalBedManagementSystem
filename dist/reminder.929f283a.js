var bedData = [];
var waitingList = [];
var bedTableContent = "<table class='bedTable'>";
function initFetchJSONFile() {
    bedData = JSON.parse(sessionStorage.getItem("data"));
    populateTable();
}
function populateTable() {
    if (!bedData) return;
    combineAllList();
    populateTableContent();
    bedTableContent += "</table>";
    document.getElementById("bedTable").outerHTML = bedTableContent;
}
function combineAllList() {
    for(var key in bedData){
        for(var entry in bedData[key])if (bedData[key][entry].checkOutDate != null && bedData[key][entry].checkOutDate == getTodayDate()) waitingList.push(bedData[key][entry]);
    }
}
function populateTableContent() {
    // bedTableContent += "<tr><td colspan='8' class='wardTitle generalTitle'>Waiting List - Bed <a class='remainingBed'>#" + waitingList.length + "</a></td></tr>"
    bedTableContent += "<tr><th>No #</th><th>Name</th><th>Check In</th><th>Check Out</th><th>Age</th><th>Doctor</th><th>Ward</th><th>Remark</th></tr>";
    for(i = 0; i < waitingList.length; i++){
        var index = i + 1;
        bedTableContent += "<tr><td>" + index + "</td><td>" + waitingList[i].name + "</td><td>" + waitingList[i].checkInDate + "</td><td>" + waitingList[i].checkOutDate + "</td><td>" + waitingList[i].age + "</td><td>" + waitingList[i].doctor + "</td><td>" + (waitingList[i].ward ? waitingList[i].ward : "-") + "</td><td>" + (waitingList[i].remark ? waitingList[i].remark : "-") + "</td></tr>";
    }
    if (waitingList.length == 0) bedTableContent += "<tr><td colspan='8'>No patient pending check out today.</td></tr>";
}

//# sourceMappingURL=reminder.929f283a.js.map
