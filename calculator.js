const modeLabel = document.querySelector('.mode-label');
const modeSwitch = document.querySelector('.switch input');

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    modeLabel.innerText = "Light Mode";
    document.body.classList.add('dark');
  } else {
    modeLabel.innerText = "Dark Mode";
    document.body.classList.remove('dark');
  }
});

// Select the display and all buttons
const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.cal button');

let currentInput = "";

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else if (value === 'C') {
            currentInput = "";
        }
        else {
            currentInput += value;
        }
        display.value = currentInput;
    });
}); 