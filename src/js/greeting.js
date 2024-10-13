function getGreeting() {
  const now = new Date();
  const curHour = now.getHours();
  let greeting;

  if (curHour >= 4 && curHour < 12) {
    greeting = "Good morning, pick ur place!";
  } else if (curHour >= 12 && curHour < 17) {
    greeting = "Good afternoon, pick ur place!";
  } else {
    greeting = "Good evening, pick ur place!";
  }

  document.getElementById("greeting").textContent = greeting;
}

// Call the function when the page loads
window.onload = getGreeting;
