const date = new URLSearchParams(window.location.search);

// Gets the value of a specific parameter
const dateValue = date.get("date");

const targetDate = dateValue

function updateCountdown(){
    const now = new Date();
    const timeDifference = targetDate - now; // Difference IN MILLISECONDS between current and target date
    if(timeDifference <= 0){
        document.getElementBYId("time").innerText = "The time has come!"
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

//Start the timer
const intervalID = setInterval(updateCountdown, 1000); // Update every second

// Call the function once you click submit
getElementById("submit").addEventListener("click", updateCountdown())
