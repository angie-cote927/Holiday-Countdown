function updateCountdown(){
    const targetDate = new Date(document.getElementById('date')); 
    const play = document.getElementById("timer")
    play.innerHTML = '';

    const now = new Date()
    const timeDifference = document.getElementById("timer1") - now; // Difference IN MILLISECONDS between current and target date
    if(timeDifference <= 0){
        play.innerText = "The time has come!"
        clearInterval(intervalID); // Stop the timer when the target date is reached
        return;
    }
    else {

    // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        play.innerHTML += `<p>Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}</p>`;
    }
    const intervalID = setInterval(updateCountdown, 1000); // Update every second
    }

    // Display the countdown



//Start the timer

// Call the function once you click submit

