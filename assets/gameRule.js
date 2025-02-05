function endGameIn(seconds, secondsInNumber) {


    try {
        setTimeout(() => {
            alert('Game Over!')
        }, seconds * 1000);
    } catch (error) {
        setTimeout(() => {
            alert('Game Over! 2')
        }, secondsInNumber * 1000);
    }




}