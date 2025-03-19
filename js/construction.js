let countdownElement = document.getElementById("countdown");
        let countdown = 5;

        function updateCountdown() {
            countdownElement.textContent = countdown;
            countdown--;

            if (countdown < 0) {
                window.location.href = "https://github.com/BuddyJ101";
            }
        }

        setInterval(updateCountdown, 1000);