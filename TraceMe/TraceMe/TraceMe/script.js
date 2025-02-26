const apiKey = "131fbd5d2f9f772aac64d1b32915e889";  // Replace with your actual API key

// Function to fetch phone number information
function findNameByPhone(phoneNumber) {
    const url = `https://apilayer.net/api/validate?access_key=${apiKey}&number=${phoneNumber}&format=1`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                displayResults(data);
            } else {
                document.getElementById("result").textContent = `Invalid phone number or no data found for number ${phoneNumber}.`;
            }
        })
        .catch(error => {
            console.error("Error fetching the API:", error);
            document.getElementById("result").textContent = "Error occurred while looking up the number.";
        });
}

// Function to display results
function displayResults(data) {
    const resultDiv = document.getElementById("result");
    const locationDiv = document.getElementById("locationInfo");
    const profileImageDiv = document.getElementById("profileImage");

    // Display name and other details
    resultDiv.innerHTML = `
        <strong>Number Valid:</strong> Yes<br>
        <strong>Country:</strong> ${data.country_name}<br>
        <strong>Line Type:</strong> ${data.line_type}<br>
        <strong>International Format:</strong> ${data.international_format}
    `;

    // Display location info
    locationDiv.innerHTML = `
        <strong>Location:</strong> ${data.country_name}
    `;

    // Add a dummy profile image (You can link to a real service if available)
    profileImageDiv.innerHTML = `
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile Image"/>
    `;
}

// Function to save review
function saveReview() {
    const reviewText = document.getElementById("reviewInput").value;
    if (reviewText) {
        document.getElementById("reviewMessage").textContent = `Review submitted: "${reviewText}"`;
        document.getElementById("reviewInput").value = ""; // Clear input field
    } else {
        document.getElementById("reviewMessage").textContent = "Please enter a review!";
    }
}

// Event listener for button click
document.getElementById("lookupBtn").addEventListener("click", function() {
    const phoneInput = document.getElementById("phoneInput").value;
    if (phoneInput) {
        findNameByPhone(phoneInput);
    } else {
        document.getElementById("result").textContent = "Please enter a valid phone number.";
    }
});

// Event listener for review submission
document.getElementById("submitReviewBtn").addEventListener("click", saveReview);
