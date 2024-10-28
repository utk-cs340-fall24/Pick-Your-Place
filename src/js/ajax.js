import {
  argentinaCities,
  franceCities,
  japanCities,
  moroccoCities,
  usCities,
} from "./data.js";

const allData = [
  ...argentinaCities,
  ...franceCities,
  ...japanCities,
  ...moroccoCities,
  ...usCities,
];

document
  .getElementById("sendBucketList")
  .addEventListener("click", function () {
    //sendBucketList is a button that serves as the trigger when clicked
    sendBucketList(allData);
  });

function sendBucketList(data) {
  fetch("process_bucket_list.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json(); // Parses JSON response if successful
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => console.log("Data sent successfully:", data))
    .catch((error) => console.error("Error:", error));
}

//this needs to go in process-bucket-list.php or something:
/*

<?php
header("Content-Type: application/json");

// Decode the JSON input
$cityData = json_decode(file_get_contents("php://input"), true);

if ($cityData) {
    // Process or save data as needed, e.g., store in a database
    echo json_encode(["status" => "success", "message" => "Data received"]);
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
}
?>

*/
