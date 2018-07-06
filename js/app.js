'use strict';

var currentFormPage = 0;
showPage(currentFormPage);

function showPage(n) {
    var x = document.getElementsByClassName("formPage");
    x[n].style.display = "block";

    if (n === 0) {
        document.getElementById("nextBtn").style.display = "inline";
    }
    if (n === (x.length - 3)) {
        x[n-1].style.display = "none";

    }
    if (n === (x.length - 2)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    }
    if (n === (x.length - 1)) {
        x[n-1].style.display = "none";

        document.getElementById("nextBtn").innerHTML = "Done";
    }
}

function nextDisplay(n){
    var x = document.getElementsByClassName("formPage");

    // if(n == 1){return false}
    x[n].style.display = "none";
    currentFormPage = currentFormPage + n;

    if(currentFormPage === x.length){
        document.getElementById("landingForm").submit();
        return false;

    }
    showPage(currentFormPage)

    // This function will figure out which tab to display
//     var x = document.getElementsByClassName("formPage");
//     if (n ==1 && !validateForm()) return false;
//     x[currentFormPage].style.display = "none";
//     currentFormPage = currentFormPage + n;
//     if (currentFormPage === x.length) {
//         document.getElementById("landingForm").submit();
//         return false;
//     }
//     showTab(currentFormPage);

}





// var currentFormPage = 0;
// var firstName, terrain, distance;
// function phase1(){
//     firstName = document.getElementsByTagName("input")
// }
//
// function phase2(){
//
// }
//
// function phase3(){
//
// }
//
// function displayFormPage(n) {
//
// }

// var currentFormPage = 0;
// showTab(currentFormPage); // Display the current tab
//
//
// function showTab(n) {
//     // This function will display the specified formPage of the form ...
//     var x = document.getElementsByClassName("formPage");
//     x[n].style.display = "block";
//     // ... and fix the Previous/Next buttons:
//     if (n === 0) {
//         document.getElementById("prevBtn").style.display = "none";
//     } else {
//         document.getElementById("prevBtn").style.display = "inline";
//     }
//     if (n === (x.length - 2)) {
//         document.getElementById("nextBtn").innerHTML = "Submit";
//     } else {
//         document.getElementById("nextBtn").innerHTML = "Next";
//     }
//     if (n === (x.length-1)) {
//         document.getElementById("nextBtn").innerHTML = "Done";
//     }
//     // ... and run a function that displays the correct step indicator:
//     fixStepIndicator(n)
// }
//
// function fixStepIndicator(n) {
//     // This function removes the "active" class of all steps...
//     var i, x = document.getElementsByClassName("step");
//     for (i = 0; i < x.length; i++) {
//         x[i].className = x[i].className.replace("active", "");
//     }
//     //... and adds the "active" class to the current step:
//     x[n].className += " active";
// }
//
// function nextPrev(n) {
//     // This function will figure out which tab to display
//     var x = document.getElementsByClassName("formPage");
//     // Exit the function if any field in the current tab is invalid:
//     if (n ==1 && !validateForm()) return false;
//     // Hide the current tab:
//     x[currentFormPage].style.display = "none";
//     // Increase or decrease the current tab by 1:
//     currentFormPage = currentFormPage + n;
//     // if you have reached the end of the form... :
//     if (currentFormPage === x.length) {
//         //...the form gets submitted:
//         document.getElementById("landingForm").submit();
//         return false;
//     }
//     // Otherwise, display the correct tab:
//     showTab(currentFormPage);
// }
//
// function formData(){
//     if(document.getElementById("phase1")){
//         console.log("phase1");
//         y = x[currentFormPage].getElementsByTagName("input");
//         console.log(document.getElementsByName("first").value);
//
//     }
//     else if(document.getElementById("phase2")) {
//     }
//     else if(document.getElementById("phase3")) {
//     }
//
// }
//
//
//
// function validateForm() {
//
//     // This function deals with validation of the form fields
//     var  x, y, i, valid = true;
//     x = document.getElementsByClassName("formPage");
//     y = x[currentFormPage].getElementsByTagName("input");
//
//     // A loop that checks every input field in the current tab:
//     for (i = 0; i < y.length; i++) {
//         // If a field is empty...
//         if (y[i].value == "" ) {
//             // add an "invalid" class to the field:
//             y[i].className += " invalid";
//             // and set the current valid status to false:
//             valid = false;
//         }
//         alert(y[i].val)
//     }
//     // If the valid status is true, mark the step as finished and valid:
//     if (valid) {
//         document.getElementsByClassName("step")[currentFormPage].className += "finish";
//     }
//     return valid; // return the valid status
// }
