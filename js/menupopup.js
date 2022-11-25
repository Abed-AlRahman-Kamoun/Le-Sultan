function MyFct01() {
    document.getElementById("btn01").className = "btn btn-dark";
    document.getElementById("btn02").className = "btn btn-dark";
    document.getElementById("btn03").className = "btn btn-dark";
    document.getElementById("btn04").className = "btn btn-dark";
    document.getElementById("btn05").className = "btn btn-dark";
    setTimeout(MyFct03, 6000);
}

function MyFct02() {
    document.getElementById("btn06").className = "btn btn-dark";
    setTimeout(MyFct03, 6000);
}

function MyFct03() {
    document.getElementById("btn01").className = "btn btn-dark disabled";
    document.getElementById("btn02").className = "btn btn-dark disabled";
    document.getElementById("btn03").className = "btn btn-dark disabled";
    document.getElementById("btn04").className = "btn btn-dark disabled";
    document.getElementById("btn05").className = "btn btn-dark disabled";
    document.getElementById("btn06").className = "btn btn-dark disabled";
}