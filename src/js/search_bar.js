    document.getElementById("searchform")
    document.addEventListener("keyup", function () {
      let input = document.getElementById("searchform").value.toLowerCase();
      let items = document.querySelectorAll(".result-items");

      items.forEach(function (item) {
        if (item.innerHTML.toLowerCase().includes(input)) {
          item.style.display = "block"; // Show items that match the query
        } else {
          item.style.display = "none"; // Hide items that don't match
        }
      });
    });