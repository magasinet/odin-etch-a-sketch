const container = document.querySelector('.container');


/* 
Mutation Observer
Change background color on mouseover when element nodelist is changed via DOM.
Adding this changes the color at initial sketch and when the user changes the sketch.
*/
let observer = new MutationObserver(() => {
    // what to do when DOM changes (backgroundColor = red)
    let boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'red';
        });
    });
});
// observes the children of id="elementToBeObserved"
observer.observe(elementToBeObserved, {
    childList: true,
});




// Starting sketch with 16 rows and 16 columns
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');

    div.classList.add('boxes');

    container.appendChild(div);

}


// Change sketch after user input
const btn = document.querySelector('button');

btn.addEventListener('click', getSquares);

function getSquares() {
    let squares = prompt('How many squares on each side?');
    newSketch(squares);
}

function newSketch(num) {
    container.textContent = '';

    let totalSquares = num * num;

    let side = parseInt(num) + 1; //the input is a string and to get correct squares on each side plus 1(?)


    for (let i = 0; i < totalSquares; i++) {
        let div = document.createElement('div');

        div.classList.add('boxes');
        div.style.setProperty('width', 'calc(100% * (1/' + side + '))');

        container.appendChild(div);
    }

}

/* ADD MAXIMUM OF 100 in user input */