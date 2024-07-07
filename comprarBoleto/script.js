document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
    const datesContainer = document.getElementById("dates");

    function getNextDays() {
        const today = new Date();
        let days = [];

        for (let i = 0; i < 5; i++) {
            let nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);

            let dayOfWeek = daysOfWeek[nextDay.getDay()];
            let dayOfMonth = nextDay.getDate().toString().padStart(2, '0');

            days.push(`${dayOfWeek} ${dayOfMonth}`);
        }

        return days;
    }

    function renderDates() {
        let days = getNextDays();

        days.forEach((day, index) => {
            let dateDiv = document.createElement("div");
            dateDiv.className = "date";
            if (index === 0) dateDiv.classList.add("selected");
            dateDiv.textContent = day;
            datesContainer.appendChild(dateDiv);
        });
    }

    renderDates();
});

const siguienteButton = document.querySelector('.bsig');
const rooms = document.querySelectorAll('.rooms .room');
const timeLinks = document.querySelectorAll('.rooms .time');
const modal = document.getElementById('ticketModal');
const closeModal = document.querySelector('.modal .close');
const selectedTimeInput = document.getElementById('selectedTime');
const dateInput = document.getElementById('date');

let selectedTimeLink = null;

siguienteButton.disabled = true;

timeLinks.forEach((link) => {
    link.addEventListener('click', function() {
        if (selectedTimeLink) {
            selectedTimeLink.classList.remove('selected');
        }
        this.classList.add('selected');
        selectedTimeLink = this;
        siguienteButton.disabled = false;
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('time') && selectedTimeLink) {
        selectedTimeLink.classList.remove('selected');
        selectedTimeLink = null;
        siguienteButton.disabled = true;
    }
});

siguienteButton.addEventListener('click', function() {
    if (selectedTimeLink) {
        selectedTimeInput.value = selectedTimeLink.textContent;

        // Set the current date as default value
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;

        modal.style.display = 'block';
    }
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
