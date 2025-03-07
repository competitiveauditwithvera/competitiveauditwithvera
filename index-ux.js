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