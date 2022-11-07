function insertFieldData() {
    var wardType = "";
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

//# sourceMappingURL=edit.8b092ce3.js.map
