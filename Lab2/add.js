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
    var b = to_delete;
    var c = b.charAt(0);
    var del = document.getElementById(c);
    del.remove();
    localStorage.removeItem(c); 
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
    var img = document.getElementById("source").value;
    return img;
}

function clearBox(){
    document.getElementById("name").value ="";
    document.getElementById("about").value="";
    document.getElementById("source").value="";
}   

function addZ(){
    const myObj = {id: getDivCount(), name: getArtist(), about: getDesc(), source: getImg()};
    localStorage.setItem(myObj.id,JSON.stringify(myObj));
    clearBox();
    unclicked();
    adding(myObj.id);
}

function adding(to_add) {
    var divT = document.createElement("div");
    var img = document.createElement("img");
    var obj = JSON.parse(localStorage.getItem(to_add));
    divT.id = obj.id;
    var b = obj.id;
    var c = "btn";
    var img = document.createElement("img");
    img.setAttribute("src",obj.source);
    var para = document.createElement("p");
    var span = document.createElement("span");
    var btn = document.createElement("button");
    var a = document.getElementsByClassName("flex-cont")[0];
    btn.innerText = "Delete";
    btn.setAttribute("id",b+c);
    btn.addEventListener('click',function(){
        deleted(this.id);
    });
    span.append(obj.name);
    para.append(span,btn);
    divT.append(img,para,obj.about);
    a.appendChild(divT);

}

function reload() {
    if(localStorage.length >= 0) {
    for(var i in localStorage) {
       var obj = JSON.parse(localStorage.getItem(i));
       adding(obj.id);
    }
}
}

function dummy() {
    
}

