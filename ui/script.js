let p1Color = document.getElementById("p1Color");
let p2Color = document.getElementById("p2Color");

let p1ColorCheck = document.getElementById("p1DefaultColor");
let p2ColorCheck = document.getElementById("p2DefaultColor");









function checkbox(){
    if(p2ColorCheck.value == 1){
        p2Color.disabled = true;
    } else {
        p2Color.disabled = false;
    }
    if(p1ColorCheck.value == 1){
        p1Color.disabled = true;
    } else {
        p1Color.disabled = false;
    }
}