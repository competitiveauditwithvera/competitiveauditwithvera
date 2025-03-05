// Get the current month
const currentMonth = new Date().toLocaleString('default', { month: 'long' });

// Find the target element by its ID or any other selector
const targetElement = document.querySelector('#index-html-h1-month-value'); // Replace with the actual ID or selector

// Insert the current month into the target element
if (targetElement) {
    targetElement.textContent = currentMonth;
}