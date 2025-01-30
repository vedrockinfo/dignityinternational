document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('worldPartner');
    const popups = {
        'quiziz': document.getElementById('quizizz-international'),
        'norway': document.getElementById('world-climate'),
        'chicago': document.getElementById('literacy-chicago'),
        'nigeria': document.getElementById('think-edtech'),
    };
  
    // Display the growth popup when the page loads and hide others
    popups['quiziz'].style.display = 'block';
    Object.keys(popups).forEach(key => {
        if (key !== 'quiziz') {
            popups[key].style.display = 'none';
        }
    });
  
    map.addEventListener('click', (event) => {
        const stateId = event.target.id;
  
        if (stateId === 'poineering') {
            // Scroll to the section with ID 'ministry'
            const sectionMinistry = document.getElementById('ministry');
            sectionMinistry.scrollIntoView({
                behavior: 'smooth' // Optional: adds smooth scrolling effect
            });
        } else if (popups[stateId]) {
            // Hide all popups
            Object.values(popups).forEach(popup => popup.style.display = 'none');
  
            // Show the clicked state's popup
            const popup = popups[stateId];
            popup.style.display = 'block';
  
            // Calculate position
            const rect = event.target.getBoundingClientRect();
            const offsetX = 10; // Adjust if needed
            const offsetY = 10; // Adjust if needed
            popup.style.left = `${rect.left + window.scrollX + offsetX}px`;
            popup.style.top = `${rect.top + window.scrollY + offsetY}px`;
        }
    });
  
    // Optionally, add a click listener to the document to hide popups when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#chronological-graph') && !event.target.closest('.popup')) {
            Object.values(popups).forEach(popup => popup.style.display = 'none');
        }
    });
  
    // Prevent event propagation to document when clicking on a popup
    Object.values(popups).forEach(popup => {
        popup.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
  });
  

  $(document).ready(function () {
    $(".box").click(function () {
        let target = $(this).data("target"); // Get the target class from data attribute
        $(".content-box").hide(); // Hide all content boxes
        $(target).fadeIn(); // Show the corresponding content box
    });
});