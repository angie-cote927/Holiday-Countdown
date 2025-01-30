let timers = []

function updateCountdown(timer){
    const now = new Date();
            const timeDifference = timer.targetDate - now; // Difference IN MILLISECONDS between current and target date
            if(timeDifference <= 0){
                timer.element.innerText = "The time of love is here!"
                clearInterval(intervalID); // Stop the timer when the target date is reached
                return;
            }

            // Calculate days, hours, minutes, seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the countdown
            console.log(timer.element)
            timer.element.querySelector("#timed").innerText = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
}

function addTimer(){
    const timerContainer = document.getElementById("timer-container")
    const eventName = document.getElementById("eventName").value
    const targetDate = new Date(document.getElementById("date").value)
    
    if (!eventName) {alert("Please type in a name")}
    
    const newTimer = document.createElement("div")
    newTimer.innerHTML = `
        <h2 id="timerName">${eventName}</h2>
        <div id="timed">.. </div>`
    const timer = {
        name: eventName,
        targetDate: targetDate,
        element: newTimer,
        timer: setInterval(() => updateCountdown(timer), 1000)
    }

    timerContainer.appendChild(newTimer)
    timers.push(timer)
    console.log(timer.targetDate)
    updateCountdown(timer)
}