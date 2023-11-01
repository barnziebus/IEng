// Get all elements with the class "toggle-list"
let toggleElements = document.getElementsByClassName('toggle-list');

// Add click event listeners to each "toggle-list" element
for (let toggleElement of toggleElements) {
    toggleElement.addEventListener('click', function () {
        // Find the nearest ".toggle-visible-element" by traversing the DOM
        let ulElement = this.closest('.attribute').querySelector('.toggle-visible-element');

        if (ulElement) {
            if (ulElement.style.display === 'none' || ulElement.style.display === '') {
                ulElement.style.display = 'block'; // Show the element
            } else {
                ulElement.style.display = 'none'; // Hide the element
            }
        }
    });
}
