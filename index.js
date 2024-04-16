// GET THE REFERENCES
const container = document.querySelector('.content');
const homeButton = document.querySelector('.home-button');
const portfolioButton = document.querySelector('.portfolio-button');

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                container.innerHTML = xhr.responseText;
            } else {
                console.error('Request failed with status:', xhr.status);
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
};

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
    // GET THE VALUE OF data-url ATTRIBUTE OF THE CLICKED BUTTON
    const url = event.target.dataset.url;

    // CALL THE FUNCTION loadContent PROVIDING THE data-url VALUE OF THE CLICKED BUTTON AS THE VALUE FOR THE PARAMETER
    loadContent(url);
};

// REGISTER EVENT HANDLERS FOR THE HOME AND PORTFOLIO BUTTONS
homeButton.addEventListener('click', selectContent);
portfolioButton.addEventListener('click', selectContent);

// Call loadContent with the current URL to load the initial content
loadContent('partials/home.html');