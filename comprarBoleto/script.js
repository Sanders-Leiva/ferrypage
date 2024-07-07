document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
    const datesContainer = document.getElementById("dates");

    // Function to get the next 5 days including today
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

    // Render the dates
    function renderDates() {
        let days = getNextDays();

        days.forEach((day, index) => {
            let dateDiv = document.createElement("div");
            dateDiv.className = "date";
            if (index === 0) dateDiv.classList.add("selected"); // Mark today as selected
            dateDiv.textContent = day;
            datesContainer.appendChild(dateDiv);
        });
    }

    renderDates();
});

const siguienteButton = document.querySelector('.bsig');
const rooms = document.querySelectorAll('.rooms .room');
const timeLinks = document.querySelectorAll('.rooms .time');

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

// Add event listener to document to detect clicks outside of .time elements
document.addEventListener('click', function(event) {
  if (!event.target.classList.contains('time') && selectedTimeLink) {
    selectedTimeLink.classList.remove('selected');
    selectedTimeLink = null;
    siguienteButton.disabled = true;
  }
});

siguienteButton.addEventListener('click', function() {
  if (selectedTimeLink) {
    // Perform action when siguienteButton is clicked and a time link is selected
    console.log(`Selected time: ${selectedTimeLink.textContent}`);
  } else {
    console.log('No time link selected');
  }
});

