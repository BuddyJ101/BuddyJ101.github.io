const terminalOutputElement = document.getElementById('terminal-output');

const space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

const bigScreen = "press ENTER/RETURN";
const smlScreen = "tap anywhere";
const screenSize = window.innerWidth <= 768 ? smlScreen : bigScreen;

const outputSequence = [
    '[OK] Starting the site',
    `${space}Loading . . .`,
    '[ERROR] Unexpected error occurred',
    '[OK] Retrying',
    `${space}Loading . . .`,
    '[OK] Retrying',
    `${space}Loading . . .`,
    '[OK] Retrying',
    `${space}Loading . . .`,
    '[OK] Retrying',
    `${space}Loading . . .`,
    '[ERROR] It\'s failed, sorry :(',
    `${space}. . .`,
    `${space}. . .`,
    '[ERROR] Still fai- (JK :P)',
    '[OK] It\'s successful now',
    '[OK] bip bop I\'m a robot',
    `[OK] Please ${screenSize} to continue`
];

function displayTerminalOutput() {
    let delay = 0;
    outputSequence.forEach((line) => {
        setTimeout(() => displayResponse(line), delay);
        delay += 1000;
    });
}

function displayResponse(response) {
    const newLine = document.createElement('p');

    response = response.replace(/OK/g, '<span style="color: green; font-weight: bold;">        &nbsp;OK&nbsp;&nbsp;      </span>');
    response = response.replace(/ERROR/g, '<span style="color: red; font-weight: bold;">   ERROR   </span>');

    newLine.innerHTML = `<span style="font-weight: bold;">${response}</span>`;

    terminalOutputElement.appendChild(newLine);
    terminalOutputElement.scrollTop = terminalOutputElement.scrollHeight;
}

function handleRedirect() {
    window.location.href = 'portfolio.html';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === 'Return') {
        handleRedirect();
    }
});

document.addEventListener('touchstart', function() {
    handleRedirect();
});

document.addEventListener('DOMContentLoaded', displayTerminalOutput);
