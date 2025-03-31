




// Search Bar Functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    artistCards.forEach((card) => {
        const artistName = card.querySelector('h3').textContent.toLowerCase();
        if (artistName.includes(query)) {
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
});



    

  
  // Script for search bar functionality
  document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar input");
    const artistCards = document.querySelectorAll(".artist-card");
  
    searchBar.addEventListener("input", () => {
      const searchValue = searchBar.value.toLowerCase();
  
      artistCards.forEach(card => {
        const artistName = card.querySelector("h3").textContent.toLowerCase();
        if (artistName.includes(searchValue)) {
          card.style.display = "block"; // Show matching artist
        } else {
          card.style.display = "none"; // Hide non-matching artist
        }
      });
    });
  });
  
