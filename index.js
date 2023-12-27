const button = document.querySelectorAll(".button")
// console.log(button);
const body  = document.querySelector("body")
// console.log(body);

button.forEach( function (button) {

    console.log(button);
    button.addEventListener("click", function (E) {

        console.log(E);
        console.log(E.target === "grey");
        if (E.target.id) {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === "white") {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === "blue") {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === "yellow") {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id) {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'green') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'khaki') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'red') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'purple') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'black') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'aqua') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'pink') {
            body.style.backgroundColor = E.target.id;
            
        }
        if (E.target.id === 'crimson') {
            body.style.backgroundColor = E.target.id;
            
        }

    })
    
})