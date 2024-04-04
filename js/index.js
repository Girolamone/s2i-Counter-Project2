const buttonContainer = document.querySelector('.button-container');
const countLabel = document.getElementById("countLbl");


function createButton(id, iconClass, onClickFunction) {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    
    icon.classList.add('fas', iconClass);
    button.appendChild(icon);
    button.id = id;
    button.addEventListener('click', onClickFunction);
    button.classList.add('custom-button');
    
    return button;
}


function updateCount(change) {
    count += change;
    countLabel.textContent = count;
}

let count = 0;


buttonContainer.appendChild(createButton('decreaseButton', 'fa-minus', () => updateCount(-1)));
buttonContainer.appendChild(createButton('resetButton', 'fa-redo', () => updateCount(-count)));
buttonContainer.appendChild(createButton('increaseButton', 'fa-plus', () => updateCount(1)));