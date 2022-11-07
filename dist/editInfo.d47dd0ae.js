function insertFieldData() {
    var typeInt = 0;
    var wardType = "";
    alert("hi");
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
    var sessionType = sessionStorage.getItem("editingType");
    var sessionIndex = sessionStorage.getItem("editingIndex");
    if (data == null || data.length <= 0) return;
    switch(sessionType){
        case 1:
            wardType = "general";
            break;
        case 2:
            wardType = "intensive";
            break;
        case 3:
            wardType = "infectious";
            break;
        default:
            return;
    }
    if (wardType == "") return;
    var singleBed = data[wardType][sessionIndex];
    if (!singleBed) {
        alert("Selected bed had been updated by others, please refresh the page and edit again");
        window.location.href("/index.html");
    }
    console.log(singleBed);
}

//# sourceMappingURL=editInfo.d47dd0ae.js.map
