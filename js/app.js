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

function nextDisplay(n) {
    var x = document.getElementsByClassName("formPage");

    // if(n == 1){return false}
    x[n].style.display = "none";
    currentFormPage = currentFormPage + n;

    if (currentFormPage === x.length) {
        document.getElementById("landingForm").submit();
        return false;

    }
    showPage(currentFormPage)
}