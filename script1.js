document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".schedule-card");
  let current = 0;

  function showNext() {
    if (current < cards.length) {
      cards[current].classList.add("active");
      current++;
    }
  }

  // First card show immediately
  showNext();

  // Then every 10 seconds show next
  setInterval(showNext, 10000);

});
