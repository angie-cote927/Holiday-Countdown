function updateCountdown(timer){
    const now = new Date();
            const timeDifference = targetDate - now; // Difference IN MILLISECONDS between current and target date
            if(timeDifference <= 0){
                document.getElementBYId("time").innerText = "The time of love is here!"
                clearInterval(intervalID); // Stop the timer when the target date is reached
                return;
            }

            // Calculate days, hours, minutes, seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById("timer").innerText = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
}

function addTimer(){
    const eventName = document.getElementById("eventName")
    const targetDate = new Date(document.getElementById("date"))
    if (!eventName) {alert("Please type in a name")}
    
    const newTimer = document.createElement("div")
    newTimer.innerHTML = `<div><h2 id="timerName"></h2>`
}

