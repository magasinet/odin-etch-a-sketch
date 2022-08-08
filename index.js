const container = document.querySelector('.container');




for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    
    div.classList.add('boxes');

    container.appendChild(div);

/*     const newLine = document.createElement('br');

    newLine.classList.add('brr');

    if(i % 17 === 0) {
        container.appendChild(newLine)
    } else {
      container.appendChild(div);  
    } */
    
}