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

function getDivCount() {
    var divC = document.getElementsByClassName("flex-cont")[0];
    var numOfDivs = divC.getElementsByTagName("div").length;
    return numOfDivs;
}

function deleted(to_delete) {
    var del = document.getElementById(to_delete);
    del.remove(); 
}

function getArtist(){
    var name = document.getElementById("name").value;
    return name;
}

function getDesc(){
    var desc = document.getElementById("about").value;
    return desc;
}

function getImg(){
    var img = document.createElement("img");
    img.src = document.getElementById("source").value;
    return img;
}



function loadCont() {
    var divT = document.createElement("div");
    divT.id = getDivCount();
    var para = document.createElement("p");
    var span = document.createElement("span");
    var btn = document.createElement("button");
    btn.innerText = "Delete";
    span.append(getArtist());
    para.append(span,btn);
    divT.append(getImg(),para,getDesc());
    var a = document.getElementsByClassName("flex-cont")[0];
    a.appendChild(divT);
    btn.addEventListener('click',function(){
        deleted(divT.id);
    });
    unclicked();

}