function getGreeting() {
  const now = new Date();
  const curHour = now.getHours();
  let greeting;

  if (curHour >= 4 && curHour < 12) {
    greeting = "Good morning";
  } else if (curHour >= 12 && curHour < 17) {
    greeting = "Good afternoon";
  } else if (curHour >= 17 && curHour < 20) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  document.getElementById("greeting").textContent = greeting;
}

// Call the function when the page loads
window.onload = getGreeting;
