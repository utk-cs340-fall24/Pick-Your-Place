document.getElementById("searchform");
document.addEventListener("keyup", function () {
  let input = document.getElementById("searchform").value.toLowerCase();
  let items = document.querySelectorAll(".result-items");

  items.forEach(function (item) {
    if (item.innerHTML.toLowerCase().includes(input)) {
      //item.style.display = "block"; // Show items that match the query
      item.classList.remove("hidden");
      item.classList.add("match");
    } else {
      //item.style.display = "none"; // Hide items that don't match
      item.classList.remove("match");
      item.classList.add("hidden");
    }
  });

  // Reset all cards to original positions if input is empty
  if (input === "") {
    items.forEach(function (item) {
      item.classList.remove("hidden"); // Show all items
      item.classList.remove("match"); // Remove match class
    });
  }
});
