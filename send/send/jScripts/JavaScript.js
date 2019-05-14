
function displayText(textnum) {
    console.log("checkThatMouseOver");
    var myDiv = document.getElementById("iconText" + textnum.toString());
    myDiv.style.display = "block";
}

function hideText(textnum) {
    console.log("checkThatMouseOver");
    var myDiv = document.getElementById("iconText" + textnum.toString());
    myDiv.style.display = "none";
}