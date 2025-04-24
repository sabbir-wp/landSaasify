

    const playButton = document.getElementById('playButton');
    const videoPlayer = document.getElementById('videoPlayer');

    playButton.addEventListener('click', function() {
        // Hide the play button and show the video
        playButton.style.display = 'none';
        videoPlayer.style.display = 'block';
        videoPlayer.play();
    });







document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll('[data-plan]');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Show/hide prices based on the selected plan
            if (button.dataset.plan === 'monthly') {
                monthlyPrices.forEach(price => price.style.display = 'block');
                annualPrices.forEach(price => price.style.display = 'none');
            } else {
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'block');
            }
        });
    });
});