
function clickedText() {
    for(var i = 1; i <= 3; i++) {
        document.getElementsByTagName("INPUT")[i].setAttribute("type","text");
    }
    var btn = document.getElementById("addBtn");
    btn.style.visibility="visible";
}

function unclicked() {
    for(var i = 1; i <= 3; i++) {
       document.getElementsByTagName("INPUT")[i].setAttribute("type","hidden");
    }
    var btn = document.getElementById("addBtn");
    btn.style.visibility="hidden";
}

