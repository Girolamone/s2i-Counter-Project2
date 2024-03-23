let count = 0;

const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'BUTTON' || clickedElement.tagName === 'I') {
        const parentButton = clickedElement.tagName === 'BUTTON' ? clickedElement : clickedElement.parentElement;

        if (parentButton.id === 'decreaseButton') {
            count -= 1;
        } else if (parentButton.id === 'resetButton') {
            count = 0;
        } else if (parentButton.id === 'increaseButton') {
            count += 1;
        }

        document.getElementById("countLbl").innerHTML = count;
    }
});