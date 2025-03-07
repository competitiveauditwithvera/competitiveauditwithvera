

/**
 * Get the current month and insert it into the target element.
 * 
 * @constant {string} currentMonth - The current month in long format.
 * 
 * @param {Element} targetElement - The target element where the current month will be inserted.
 * 
 * @param {Element} downloadButton - The button element that triggers the download of the Deel Payroll Template.
 * @param {Element} launchButton - The button element that opens the Code4rena audits page in a new tab.
 * 
 * @event click - Triggers the download of the Deel Payroll Template when the download button is clicked.
 * @event click - Opens the Code4rena audits page in a new tab when the launch button is clicked.
 */
// Get the current month
const currentMonth = new Date().toLocaleString('default', { month: 'long' });

// Find the target element by its ID or any other selector
const targetElement = document.querySelector('#index-html-h1-month-value'); // Replace with the actual ID or selector

// Insert the current month into the target element
if (targetElement) {
    targetElement.textContent = currentMonth;
}

// Add event listeners to the buttons
const downloadButton = document.querySelector('#index-html-download-btn'); // Replace with the actual ID or selector
const launchButton = document.querySelector('#index-html-launch-code4rena-btn'); // Replace with the actual ID or selector

if (downloadButton) {
    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'https://github.com/competitiveauditwithvera/competitiveauditwithvera/raw/refs/heads/main/Deel-Payroll-Template.xlsx';
        link.download = 'Deel-Payroll-Template.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

if (launchButton) {
    launchButton.addEventListener('click', () => {
        window.open('https://code4rena.com/audits', '_blank');
    });
}