var bedData = [];
var bedTableContent = "<table class='bedTable'>";
function initFetchJSONFile() {
    bedData = JSON.parse(sessionStorage.getItem("data"));
    populateTable();
}
function populateTable() {
    if (!bedData) return;
    populateTableHeaderByType("general");
    populateTableHeaderByType("intensive");
    populateTableHeaderByType("infectious");
    bedTableContent += "</table>";
    document.getElementById("bedTable").outerHTML = bedTableContent;
}
function populateTableHeaderByType(type) {
    var specificBedData = bedData[type];
    var tableRow = "";
    var wardStr = "";
    var typeInt = 0;
    switch(type){
        case "general":
            wardStr = "General";
            typeInt = 1;
            break;
        case "intensive":
            wardStr = "Intensive";
            typeInt = 2;
            break;
        case "infectious":
            wardStr = "Infectious";
            typeInt = 3;
            break;
        default:
            wardStr = "-";
            typeInt = 99;
            break;
    }
    for(i = 0; i < specificBedData.length; i++){
        var index = i + 1;
        tableRow += "<tr><td>" + index + "</td><td>";
        tableRow += specificBedData[i].name + "</td><td>";
        tableRow += specificBedData[i].checkInDate + "</td><td>";
        tableRow += specificBedData[i].checkOutDate + "</td><td>";
        tableRow += specificBedData[i].age + "</td><td>";
        tableRow += specificBedData[i].doctor + "</td><td>";
        tableRow += wardStr + "</td><td>";
        tableRow += specificBedData[i].status + "</td><td><a href='/edit.html' onclick='editRecord(" + typeInt + "," + i + ")'>Edit</a></td></tr>";
    }
    switch(type){
        case "general":
            bedTableContent += "<tr><td colspan='9' class='wardTitle generalTitle'>General Ward - Bed #" + specificBedData.length + "</td></tr>";
            break;
        case "intensive":
            bedTableContent += "<tr><td colspan='9' class='wardTitle intensiveTitle'>Intensive Care Ward - Bed #" + specificBedData.length + "</td></tr>";
            break;
        case "infectious":
            bedTableContent += "<tr><td colspan='9' class='wardTitle infectiousTitle'>Infectious Disease Ward - Bed #" + specificBedData.length + "</td></tr>";
            break;
        default:
            break;
    }
    bedTableContent += "<tr><th>No #</th><th>Name</th><th>Check In</th><th>Check Out</th><th>Age</th><th>Doctor</th><th>Ward</th><th>Remark</th><th>Action</th></tr>";
    bedTableContent += tableRow;
}
function editRecord(typeInt, index) {
    sessionStorage.setItem("editingType", typeInt);
    sessionStorage.setItem("editingIndex", index);
}

//# sourceMappingURL=record.17ec78fc.js.map
