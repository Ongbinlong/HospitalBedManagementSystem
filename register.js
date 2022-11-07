var newData = JSON.parse(sessionStorage.getItem("data"));

function submitForm(e) {
    var regName = document.getElementById("name").value;
    var regAge = document.getElementById("age").value;
    // var regDob = document.getElementById("dob").value;
    var regCheckInDate = document.getElementById("checkInDate").value;
    var regCheckOutDate = document.getElementById("checkOutDate").value;
    var regWard = document.getElementById("ward").value;
    var regDoctor = document.getElementById("doctor").value;
    var regStatus = document.getElementById("status").value;

    
    var regWardKey = "";

    switch (regWard) {
        case "General":
            regWardKey = "general";
            break;
        case "Intensive Care":
            regWardKey = "intensive";
            break;
        case "Infectious Disease":
            regWardKey = "infectious";
            break;
        default:
            break;
    }
    let recordObj = {
        name: regName,
        // dob: regDob,
        checkInDate: regCheckInDate,
        checkOutDate: regCheckOutDate,
        age: regAge,
        doctor: regDoctor,
        ward: regWardKey,
        status: regStatus,
        registerTime: Math.floor(new Date().getTime()/1000.0)
    }
    newData["waiting"].push(recordObj);


    // update session storage data
    setTimeout(sessionStorage.setItem("data", JSON.stringify(newData))
    , 5000); // change all 5000 to 60000
    
    alert('Patient ' + regName + ' is assigned to ward waiting list successfully.');

    // initialize back to empty
    document.getElementById("name").value = null;
    document.getElementById("age").value = null;
    // document.getElementById("dob").value = null;
    document.getElementById("checkInDate").value = null;
    document.getElementById("checkOutDate").value = null;
    document.getElementById("ward").value = null;
    document.getElementById("doctor").value = null;
    document.getElementById("status").value = null;
    registerNewPatientQueue(regWardKey);
    window.location.assign("/index.html");

    return false;
}
