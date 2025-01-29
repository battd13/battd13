document.addEventListener("DOMContentLoaded", function() {
    // Fetch the IP address from the API
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            // Display the IP address on the screen
            document.getElementById("ip").textContent = data.ip;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});
