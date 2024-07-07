const { exec } = require('child_process');
const path = require('path');

document.getElementById('capture-btn').addEventListener('click', () => {
    const urls = document.getElementById('urls').value.split('\n').filter(url => url.trim() !== '');
    const outputDir = path.join(__dirname, 'screenshots');
    
    if (urls.length === 0) {
        alert('Please enter at least one URL.');
        return;
    }

    const outputElement = document.getElementById('output');
    outputElement.innerHTML = 'Capturing screenshots...<br>';

    const command = `node ${path.join(__dirname, 'capture_screenshots.js')} ${urls.join(' ')}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            outputElement.innerHTML += `Error: ${error.message}<br>`;
            return;
        }
        if (stderr) {
            outputElement.innerHTML += `Stderr: ${stderr}<br>`;
            return;
        }
        outputElement.innerHTML += `Screenshots captured successfully! Check the 'screenshots' folder.<br>`;
    });
});
