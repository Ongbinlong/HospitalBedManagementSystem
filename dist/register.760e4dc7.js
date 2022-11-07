function registerNewPatientQueue(regWard) {
    var newData = JSON.parse(sessionStorage.getItem("data"));
    // Current Time
    var startTime = Math.floor(new Date().getTime() / 1000.0);
    var index = newData["waiting"].length - 1; // patient current index in waiting list
    // Assign to Queue
    sessionStorage.setItem("queueWardType", regWard); // the patient should go to which ward
    sessionStorage.setItem("queueWardIndex", index); // the patient current index in waiting list
    sessionStorage.setItem("queueStartTime", startTime); // the time patient registered
//loopQueue();
}
function loopQueue() {
    setInterval(function() {
        var newData = JSON.parse(sessionStorage.getItem("data"));
        if (!newData) return;
        var startTime = sessionStorage.getItem("queueStartTime");
        // get first item from Waiting list
        if (newData["waiting"][0]) {
            var waitingPatient = newData["waiting"][0];
            // startTime = Math.floor(new Date().getTime()/1000.0);
            // Assign to Queue
            sessionStorage.setItem("queueWardType", waitingPatient["ward"]); // the patient should go to which ward
            sessionStorage.setItem("queueWardIndex", 0); // the patient current index in waiting list
            sessionStorage.setItem("queueStartTime", waitingPatient["registerTime"]); // the time patient registered
        }
        var currentTime = Math.floor(new Date().getTime() / 1000.0);
        var wardType = sessionStorage.getItem("queueWardType");
        var wardIndex = sessionStorage.getItem("queueWardIndex");
        var timeDiff = currentTime - startTime;
        // Assign Patient from Waiting to General / Infectious / Intensive
        if (timeDiff == 60) {
            // var wardIndex = newData["waiting"][index];
            // get patient object
            var patientObj = newData["waiting"][wardIndex];
            // remove from waiting list
            newData["waiting"].splice(wardIndex, 1);
            // validate if expected ward type is available
            switch(wardType){
                case "general":
                    if (newData[wardType] != null && newData[wardType].length >= 20) {
                        // Reset waiting time
                        sessionStorage.setItem("queueStartTime", currentTime);
                        alert("General ward is full, patient remain at waiting list for now.");
                    } else {
                        newData[wardType].push(patientObj);
                        alert("Patient " + patientObj.name + " is assigned to general ward successfully.");
                    }
                    break;
                case "intensive":
                    if (newData[wardType] != null && newData[wardType].length >= 10) {
                        // Reset waiting time
                        sessionStorage.setItem("queueStartTime", currentTime);
                        alert("Intensive care ward is full, patient remain at waiting list for now.");
                    } else {
                        newData[wardType].push(patientObj);
                        alert("Patient " + patientObj.name + " is assigned to intensive care ward successfully.");
                    }
                    break;
                case "infectious":
                    if (newData[wardType] != null && newData[wardType].length >= 10) {
                        // Reset waiting time
                        sessionStorage.setItem("queueStartTime", currentTime);
                        alert("Infectious ward is full, patient remain at waiting list for now.");
                    } else {
                        newData[wardType].push(patientObj);
                        alert("Patient " + patientObj.name + " is assigned to infectious disease ward successfully.");
                    }
                    break;
                default:
                    break;
            }
            // set latest wardIndex 
            sessionStorage.setItem("queueWardIndex", newData[wardType].length - 1);
            sessionStorage.setItem("data", JSON.stringify(newData));
            return;
        }
        // Discharge Patient from Bed & Sanitise Bed
        if (timeDiff == 180) {
            var patientObj = newData[wardType][wardIndex];
            newData[wardType].splice(wardIndex, 1);
            // pump an empty record for sanitising
            let recordObj = {
                name: "-",
                checkInDate: "-",
                checkOutDate: "-",
                age: "-",
                doctor: "-",
                ward: wardType,
                status: "Sanitising in progress"
            };
            newData[wardType].push(recordObj);
            sessionStorage.setItem("queueWardIndex", newData[wardType].length - 1);
            sessionStorage.setItem("data", JSON.stringify(newData));
            alert("Member discharged successfully, bed is under sanitisation now.");
            return;
        }
        // Finish Sanitising and Set Bed to Available
        if (timeDiff == 300) {
            newData[wardType].splice(wardIndex, 1);
            sessionStorage.setItem("data", JSON.stringify(newData));
            sessionStorage.removeItem("queueWardIndex");
            sessionStorage.removeItem("queueWardType");
            sessionStorage.removeItem("queueStartTime");
            alert("Bed had been sanitised and is ready to take in new patient.");
            return;
        }
    }, 1000);
}

//# sourceMappingURL=register.760e4dc7.js.map
