const daysel = document.getElementById('days')
const hoursel = document.getElementById('hours')
const minsel = document.getElementById('mins')
const secondsel = document.getElementById('seconds')


const newYears = "1 Jan 2025"


function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const tseconds = (newYearsDate-currentDate) / 1000;

    const days = Math.floor(tseconds/3600/24)
    const hours = Math.floor(tseconds /3600) % 24
    const mins = Math.floor(tseconds/60) % 60
    const seconds = Math.floor(tseconds) % 60

    daysel.innerHTML=days
    hoursel.innerHTML=hours
    minsel.innerHTML=mins
    secondsel.innerHTML=seconds

    



}


setInterval(countdown, 1000);