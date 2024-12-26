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

    
    if(daysel.innerText == 0 && hoursel.innerText == 0 && minsel.innerText == 0 && secondsel.innerText == 0){
        document.body.innerHTML = `<h1>Yeni Yil Sayaci</h1>
        <div class="countdown-container">
            <h2>Yeni Yıla girmiş bulunmaktasınız</h2>
        </div>`
    }


}


setInterval(countdown, 1000);

