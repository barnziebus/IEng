document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    // Get all elements with the class "toggle-list"
    let toggleElements = document.getElementsByClassName('toggle-list');
    let ksbElements = document.getElementsByClassName('ksb');
    
    // Add click event listeners to each "toggle-list" element
    for (let toggleElement of toggleElements) {
        toggleElement.addEventListener('click', function() {
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
    
    for (let ksb of ksbElements) {
        let ksbHeader = ksb.querySelector('.ksb-heading');

        console.log(ksb.querySelector('.attribute-contianer'))
        
        ksbHeader.addEventListener('click', function() {
            let ksbContent = ksb.querySelector('.attribute-contianer');
            console.log(ksbContent)
            if (ksbContent) {
                if (ksbContent.style.display === 'none' || ksbContent.style.display === '') {
                    ksbContent.style.display = 'block'; 
                } else {
                    ksbContent.style.display = 'none'; 
                }
            }
        });
    }
    
});
