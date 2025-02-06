

const gameContainer = document.getElementById('gameContainer');
const bucket = document.getElementById('bucket');
let score = 0;


function createRaindrop() {

    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    if (isMobileDevice()) {
        y = Math.random();
        x = `${Math.random() * (window.innerWidth - 100)}px`;
        raindrop.style.left = x;
    } else {
        x = `${Math.random() * (window.innerWidth - 100)}px`;
        raindrop.style.left = x;
    }




    gameContainer.appendChild(raindrop);
    const hitbox = document.createElement('div');
    hitbox.classList.add('raindropHitbox');

    const raindropImage = document.createElement('div');
    raindropImage.innerHTML = '<img src="./assets/raindrp.png" alt="" srcset="" height="50px" >';

    raindrop.appendChild(raindropImage)
    raindrop.appendChild(hitbox);
    moveRaindrop(raindrop, hitbox);
    if (localStorage.getItem('outline') === 'true') {

        document.querySelectorAll('.raindropHitbox').forEach(hitbox => {
            hitbox.style.backgroundColor = 'rgba(255, 0, 0, 0)';
            hitbox.style.width = '40%';
            hitbox.style.height = '80%';
            hitbox.style.position = 'inherit';
            hitbox.style.left = '50%';
            hitbox.style.top = '50%';
            hitbox.style.transform = 'translateX(-50%) translateY(-50%)';
            hitbox.style.outline = '2px solid transparent';
        });
    }
    if (localStorage.getItem('outline') === 'false') {

        document.querySelectorAll('.raindropHitbox').forEach(hitbox => {
            hitbox.style.backgroundColor = 'rgba(255, 0, 0, 0)';
            hitbox.style.width = '40%';
            hitbox.style.height = '80%';
            hitbox.style.position = 'inherit';
            hitbox.style.left = '50%';
            hitbox.style.top = '50%';
            hitbox.style.transform = 'translateX(-50%) translateY(-50%)';
            hitbox.style.outline = '2px solid red';
        });
    } else {

        document.querySelectorAll('.raindropHitbox').forEach(hitbox => {
            hitbox.style.backgroundColor = 'rgba(255, 0, 0, 0)';
            hitbox.style.width = '40%';
            hitbox.style.height = '80%';
            hitbox.style.position = 'inherit';
            hitbox.style.left = '50%';
            hitbox.style.top = '50%';
            hitbox.style.transform = 'translateX(-50%) translateY(-50%)';
            hitbox.style.outline = '2px solid transparent';
        });
    }

}
const audio = new Audio('./assets/waterdrip.mp3');
function moveRaindrop(raindrop, hitbox) {
    let top = 0;
    const raindropInterval = setInterval(() => {
        top += 8;
        raindrop.style.top = `${top}px`;

        if (top > window.innerHeight) {
            clearInterval(raindropInterval);
            gameContainer.removeChild(raindrop);
        }
        const bucket = document.getElementById('bucket');
        const bucketElement = bucket;
        const bucketHitbox = document.getElementById('bucketHitbox');
        const buckethitbox = bucketHitbox;
        const raindropRect = hitbox.getBoundingClientRect();
        const bucketRect = bucketHitbox.getBoundingClientRect();

        if (
            raindropRect.bottom > bucketRect.top &&
            raindropRect.left > bucketRect.left &&
            raindropRect.right < bucketRect.right
        ) {
            clearInterval(interval);
            gameContainer.removeChild(raindrop);

            audio.currentTime = 0;
            audio.play();
            score++;
            score++; score++; score++; score++;
            console.log('Score:', score);
            document.getElementById('scoreSpan').innerHTML = score;
            if (navigator.vibrate) {
                
                navigator.vibrate(200);
            }
        }
    }, 50);
}

function moveBucket(event) {
    const bucketWidth = bucket.offsetWidth;
    const gameContainerWidth = gameContainer.offsetWidth;
    let newLeft = event.clientX - bucketWidth / 2;

    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft + bucketWidth > gameContainerWidth) {
        newLeft = gameContainerWidth - bucketWidth;
    }

    bucket.style.left = `${newLeft * 1.1}px`;
}

gameContainer.addEventListener('mousemove', moveBucket);


let gameOver = false;





function endGame() {
    gameOver = true;

    function checkGameOver() {
        if (gameOver) {
            clearInterval(raindropInterval);
        }
    }

}

/*endGame() */


gameContainer.addEventListener('mousemove', moveBucket);

localStorage.setItem('gameStatus', 'NotYetStart');

function handleTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const bucketWidth = bucket.offsetWidth;
    const gameContainerWidth = gameContainer.offsetWidth;
    let newLeft = touch.clientX - bucketWidth / 2;

    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft + bucketWidth > gameContainerWidth) {
        newLeft = gameContainerWidth - bucketWidth;
    }

    bucket.style.left = `${newLeft}px`;
}

gameContainer.addEventListener('touchmove', handleTouchMove);


function startGame() {



    localStorage.setItem('gameStatus', 'start');

    document.querySelectorAll('.bucketHitbox').forEach(hitbox => {
        hitbox.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        hitbox.style.width = '70%';
        hitbox.style.height = '80%';
        hitbox.style.position = 'inherit';
        hitbox.style.left = '50%';
        hitbox.style.top = '50%';
        hitbox.style.transform = 'translateX(-50%) translateY(-50%)';
        hitbox.style.outline = '2px solid rgba(255, 255, 255, 0)';
    });


}




let outlineInterval;

document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
        if (gameContainer.style.cursor === 'default') {
            gameContainer.style.cursor = 'none';
        }
        else {
            gameContainer.style.cursor = 'default';
        }
    }
    if (event.key === 'o' || event.key === 'O') {
        let outlineInterval;
        if (localStorage.getItem('outline') === 'true') {
            document.querySelectorAll('.bucketHitbox').forEach(hitbox => {
                hitbox.style.backgroundColor = 'rgba(255, 0, 0, 0)';
                hitbox.style.width = '70%';
                hitbox.style.height = '80%';
                hitbox.style.position = 'inherit';
                hitbox.style.left = '50%';
                hitbox.style.top = '50%';
                hitbox.style.transform = 'translateX(-50%) translateY(-50%)';
                hitbox.style.outline = '2px solid rgb(0, 60, 255)';
            });
            localStorage.setItem('outline', 'false')
        }
        else {
            document.querySelectorAll('.bucketHitbox').forEach(hitbox => {
                hitbox.style.backgroundColor = 'rgba(255, 0, 0, 0)';
                hitbox.style.width = '70%';
                hitbox.style.height = '80%';
                hitbox.style.position = 'inherit';
                hitbox.style.left = '50%';
                hitbox.style.top = '50%';
                hitbox.style.transform = 'translateX(-50%) translateY(-50%)';
                hitbox.style.outline = '2px solid rgba(255, 255, 255, 0)';
            });


            localStorage.setItem('outline', 'true')

        }
    }

});

function setBackground() {


    if (isMobileDevice()) {

        const backgroundDiv = document.createElement('div');
        backgroundDiv.style.position = 'absolute';
        backgroundDiv.style.top = '0';
        backgroundDiv.style.left = '0';
        backgroundDiv.style.width = '100%';
        backgroundDiv.style.height = '100vh';

        backgroundDiv.style.backgroundImage = 'url("./assets/img1.jpeg")';
        backgroundDiv.style.backgroundSize = 'cover';

        backgroundDiv.style.zIndex = '-1';
        document.body.appendChild(backgroundDiv);
    } else {

        const backgroundDiv = document.body;


        backgroundDiv.style.backgroundImage = 'url("./assets/img2.jpeg")';
        backgroundDiv.style.backgroundSize = 'cover';
        backgroundDiv.style.backgroundAttachment = 'fixed';



    }
}

setBackground();


function getDeviceInfo() {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,

        colorDepth: window.screen.colorDepth
    };
    return deviceInfo;
}

// Display device information
const deviceInfo = getDeviceInfo();
const { userAgent, platform, language, screenWidth, screenHeight, colorDepth } = deviceInfo;
console.log('User Agent:', userAgent);
console.log('Platform:', platform);
console.log('Language:', language);
console.log('Screen:', `${screenWidth} x ${screenHeight}`);


function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    console.log("Mobile Device Detected");
} else {
    console.log("Not a Mobile Device");
}

let interval;

if (isMobileDevice()) {
    interval = 0.4;
} else {
    interval = 0.6;
}

const raindropInterval = setInterval(() => {
    if (localStorage.getItem('gameStatus') === 'start') {
        if (!gameOver) {
            createRaindrop();
        }
    }
}, interval * 1000);

