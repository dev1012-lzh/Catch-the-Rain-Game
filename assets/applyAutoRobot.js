

function createAutoRobot() {
    function moveRobot() {

        const raindrops = document.querySelectorAll('.raindrop');
        if (raindrops.length > 0) {
            const closestRaindrop = raindrops[0];
            const raindropRect = closestRaindrop.getBoundingClientRect();
            const bucketRect = bucket.getBoundingClientRect();
            const gameContainerRect = gameContainer.getBoundingClientRect();

            let newLeft = raindropRect.left + raindropRect.width / 2 - bucketRect.width / 2 - gameContainerRect.left;
            if (newLeft < 0) {
                newLeft = 0;
            } else if (newLeft + bucketRect.width > gameContainerRect.width) {
                newLeft = gameContainerRect.width - bucketRect.width;
            }
            bucket.style.transitionDuration = '.5s'
            bucket.style.left = `${newLeft}px`;
        }
    }

    setInterval(moveRobot, 100);

    document.getElementById('robotIndicator').style.display = 'block';

    function stopAutoRobot() {
        let stopAutoRobot = 1;
    }

    if (stopAutoRobot === 1) { clearInterval };


}

createAutoRobot()




