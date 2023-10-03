const animatedDiv = document.getElementsByClassName('combined_animation');
const startButton = document.getElementsByClassName('start_button');

startButton.addEventListener('click', function() {
    if (animatedDiv.classList.contains('combined_animation')) {
        animatedDiv.classList.remove('combined_animation');
    } else {
        animatedDiv.classList.add('combined_animation');
    }
});