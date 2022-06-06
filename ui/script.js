let p1Color = document.getElementById("p1Color");
let p2Color = document.getElementById("p2Color");


let p1Name = document.getElementById("p1Name");
let p2Name = document.getElementById("p2Name");

class player {
    constructor(name, color, identifier){
        this.name = name;
        this.color = color;
        this.identifier = identifier;
    }
}

let p1;
let p2;

function submit(){
    let p1C;
    let p2C;

    p1C = p1Color.value;
    p2C = p2Color.value;
    
    p1 = new player(p1Name.value, p1C, '1');
    p2 = new player(p2Name.value, p2C, '2');

    console.log(p1);
    console.log(p2);
}