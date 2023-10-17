let open = document.getElementById("menu");
let close = document.getElementById("close");
let menu = document.getElementById("settings");

open.addEventListener("click", ()=> {
    menu.style.display = "block";
})

close.addEventListener("click", ()=> {
    menu.style.display = "none";
})


let i = 0

let point = document.getElementById("point");

point.innerHTML = i;

let button = document.getElementById("event");
let click=1;

button.addEventListener("click", ()=> {
    i+= click;
    console.log("plus1");
    point.innerHTML = i;
})

document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.getElementsByClassName("box");
    let img = document.getElementById("event");

    Array.from(boxes).forEach(box => {
        box.addEventListener("click", function() {
            Array.from(boxes).forEach(b => {
                b.classList.remove("active");
            });
            this.classList.add("active");

            // Az aktuális doboz img elemének "data-value" attribútumából veszi az értéket
            let imgElement = this.querySelector('img');
            img.src = imgElement.getAttribute("value");
        });
    });
});

let restart = document.getElementById("restart");

restart.addEventListener("click", ()=> {
    i = 0;
    point.innerHTML = i;
})
