function insertFieldData() {
    var wardType = "";
    var sessionType = sessionStorage.getItem("editingType");
    var sessionIndex = sessionStorage.getItem("editingIndex");
    var data = JSON.parse(sessionStorage.getItem("data"));
    if (data == null || data.length <= 0) return;
    switch(sessionType){
        case "1":
            console.log("x");
            wardType = "general";
            break;
        case "2":
            wardType = "intensive";
            break;
        case "3":
            wardType = "infectious";
            break;
        default:
            break;
    }
    if (wardType == "") return;
    var singleBed = data[wardType][sessionIndex];
    if (!singleBed) {
        alert("Selected bed had been updated by others, please refresh the page and edit again");
        window.location.assign("/index.html");
    }
    console.log(singleBed.ward);
    var wardStr = "";
    switch(wardType){
        case "general":
            wardStr = "General";
            break;
        case "intensive":
            wardStr = "Intensive Care";
            break;
        case "infectious":
            wardStr = "Infectious Disease";
            break;
        default:
            break;
    }
    // initialize back to empty
    document.getElementById("name").value = singleBed.name;
    document.getElementById("age").value = singleBed.age;
    // document.getElementById("dob").value = singleBed.dob;
    document.getElementById("checkInDate").value = singleBed.checkInDate;
    document.getElementById("checkOutDate").value = singleBed.checkOutDate;
    document.getElementById("ward").value = wardStr;
    document.getElementById("doctor").value = singleBed.doctor;
    document.getElementById("status").value = singleBed.status;
}
function onSave() {
    var wardType = "";
    var sessionType = sessionStorage.getItem("editingType");
    var sessionIndex = sessionStorage.getItem("editingIndex");
    var data = JSON.parse(sessionStorage.getItem("data"));
    if (data == null || data.length <= 0) return;
    switch(sessionType){
        case "1":
            wardType = "general";
            break;
        case "2":
            wardType = "intensive";
            break;
        case "3":
            wardType = "infectious";
            break;
        default:
            break;
    }
    data[wardType].splice(sessionIndex, 1);
    console.log(data);
    var regName = document.getElementById("name").value;
    var regAge = document.getElementById("age").value;
    // var regDob = document.getElementById("dob").value;
    var regCheckInDate = document.getElementById("checkInDate").value;
    var regCheckOutDate = document.getElementById("checkOutDate").value;
    var regWard = document.getElementById("ward").value;
    var regDoctor = document.getElementById("doctor").value;
    var regStatus = document.getElementById("status").value;
    let recordObj = {
        name: regName,
        // dob: regDob,
        checkInDate: regCheckInDate,
        checkOutDate: regCheckOutDate,
        age: regAge,
        doctor: regDoctor,
        ward: regWard,
        status: regStatus
    };
    console.log(regWard);
    console.log(recordObj);
    var updateSuccess = false;
    switch(regWard){
        case "General":
            if (data["general"] != null && data["general"].length >= 20) {
                alert("General ward is currently full. Kindly empty one bed space before proceeding.");
                break;
            } else {
                data["general"].push(recordObj);
                updateSuccess = true;
            }
            break;
        case "Intensive Care":
            if (data["intensive"] != null && data["intensive"].length >= 10) {
                alert("Intensive care ward is currently full. Kindly empty one bed space before proceeding.");
                break;
            } else {
                data["intensive"].push(recordObj);
                updateSuccess = true;
            }
            break;
        case "Infectious Disease":
            if (data["infectious"] != null && data["infectious"].length >= 100) {
                alert("Infectious Disease ward is currently full. Kindly empty one bed space before proceeding.");
                break;
            } else {
                data["infectious"].push(recordObj);
                updateSuccess = true;
            }
            break;
        default:
            break;
    }
    if (updateSuccess) {
        alert("New patient updated successfullyzzzz.");
        // update session storage data
        sessionStorage.setItem("data", JSON.stringify(data));
    }
    console.log("test");
    window.location.assign("/index.html");
    return false;
}

//# sourceMappingURL=edit.47061614.js.map
