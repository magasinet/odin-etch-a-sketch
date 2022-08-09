const container = document.querySelector('.container');


/* 
Mutation Observer
Change background color on mouseover when element nodelist is changed via DOM.
Adding this changes the color at initial sketch and when the user changes the sketch.
https://www.w3docs.com/learn-javascript/mutation-observer.html
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
    let squares = parseInt(prompt('How many squares on each side?'));
    if(isNaN(squares)) {
        alert('You did not enter a number');
    } else if (squares<0 || squares > 100) {
        alert('Enter a number between 0-100');
    } else {
       newSketch(squares); 
    }

    
}

function newSketch(num) {
    container.textContent = '';

    let totalSquares = num * num;

    let side = num + 1; //to get correct squares on each side plus 1(?)


    for (let i = 0; i < totalSquares; i++) {
        let div = document.createElement('div');

        div.classList.add('boxes');
        div.style.setProperty('width', 'calc(100% * (1/' + side + '))');

        container.appendChild(div);
    }

}

