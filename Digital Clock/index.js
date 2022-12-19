const hourE1 = document.getElementById("hour")
const minuteslement = document.getElementById("minute")
const secondlement = document.getElementById("seconds")
const ampmlement = document.getElementById("ampm")

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h>12){
        h=h-12;
        ampm="PM"
    }

    h= h<10 ? "0" + h : h;
    m= m<10 ? "0" + m : m;
    s= s<10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteslement.innerText = m;
    secondlement.innerText = s;
    ampmlement, (innerText = ampm);
    setTimeout(()=>{
        updateclock()

    }, 1000);
}

updateclock()