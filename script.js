function startGame() {
    alert("Let's start the game! ❤️");
    window.location.href = "page2.html"; // First question page
}

// Function to navigate to the next page
function goToNextPage(currentPage) {
    let nextPage = "";
    if (currentPage === "page2.html") {
        nextPage = "page3.html";
    } else if (currentPage === "page3.html") {
        nextPage = "page4.html";
    } else if (currentPage === "page4.html") {
        nextPage = "page5.html";
    } else if (currentPage === "page5.html") {
        nextPage = "final.html"; // Last page
    }

    if (nextPage) {
        window.location.href = nextPage;
    }
}

// Tracking system to log user clicks
document.addEventListener("click", function(event) {
    console.log("User clicked on:", event.target.innerText);
});
