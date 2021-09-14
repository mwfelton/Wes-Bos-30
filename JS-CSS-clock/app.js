const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minDegrees = ((min / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minDegrees}deg)`

    const hoursDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    console.log(min)
}

setInterval(setDate, 1000)