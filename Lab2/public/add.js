var q = [];

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
    for(var i = 0; i < q.length; i++) {
        console.log(JSON.stringify(q[i].id));
        if(q[i].id===numOfDivs){
            console.log("sup");
            numOfDivs++;
        }
    }
    return numOfDivs;
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
    clearBox();
    unclicked();
}

function adding(id,name,about,source) {
    var divT = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",source);
    var para = document.createElement("p");
    var span = document.createElement("span");
    var btn = document.createElement("button");
    var a = document.getElementsByClassName("flex-cont")[0];
    btn.innerText = "Delete";
    btn.addEventListener('click',function(){
        deleted(this.parentNode.parentNode.id);
    });
    span.append(name);
    para.append(span,btn);
    divT.append(img,para,about);
    divT.id = id;
    a.appendChild(divT);

}

function checkBtnID() {
    var x;
    if (q === undefined || q.length === 0) {
        x = getDivCount() +1;
    } else {
         x = q.pop();
    }
    return x;

}


function search() {
    var input = document.getElementById("searchBar").value.toLowerCase();
    var flex = document.getElementsByClassName("flex-cont")[0];
    for(i = 0; i < getDivCount(); i++) {
        var span = flex.getElementsByTagName("span")[i];
        var x = span.parentNode.parentNode;
        if(span.innerText.toLowerCase().includes(input)) {
            x.style.display = 'inline';
        } else {
            x.style.display = 'none';
        }
    }
    checkBtnID();
}

function deleted(to_delete) {
    var del = document.getElementById(to_delete);
    del.remove();
    for(var i = 0; i < q.length; i++) {
        if(JSON.stringify(q[i].id) === to_delete) {
            q.splice(i,1);
        }
    }
    fetch('./delete', {
        method: 'POST',
        Headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(q)
    }).then((res) => res.json())
    .then((data)=> {
        console.log(data);
    }).catch(err=> {
        console.log(err);
    });
    
}


function addzArtist() {
    var myObj = {
        id: getDivCount(),
        name: getArtist(), 
        about: getDesc(), 
        source: getImg()
    };
    q.push(myObj); 
        fetch('./add', {
        method: 'POST',
        Headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(q)
    })
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
    adding(myObj.id,myObj.name,myObj.about,myObj.source);
    addZ();
}


function loadArtist() {
    q.length = 0;
    fetch('./loads', {
        method: 'GET',
        Headers: {'Content-Type': 'application/json'},
    }).then((res) => 
        res.text())
    .then((data)=> {
        var x = JSON.parse(data);
        q=x;
        for(var i = 0; i < x.length; i++) {
            adding(x[i].id,x[i].name,x[i].about,x[i].source);
        }
    });
}