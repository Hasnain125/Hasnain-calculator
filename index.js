var spanElm = document.getElementById('show');
var inputElm = document.getElementById('userInput');

function valueToSet(btnValue) {
  let inputValue = inputElm.value;

  if (btnValue === '=') {
    try {
      let result = eval(inputValue);
      inputElm.value = result;
      spanElm.innerText = "Result: " + result;
    } catch (error) {
      spanElm.innerText = "Invalid expression!";
    }
    return;
  }

  if (btnValue === 'del') {
    inputElm.value = inputValue.slice(0, -1);
    return;
  }

  if (btnValue === 'c') {
    inputElm.value = '';
    spanElm.innerText = 'Cleared';
    return;
  }

  if (btnValue === 'x2') {
    let squared = Math.pow(Number(inputValue), 2);
    inputElm.value = squared;
    spanElm.innerText = inputValue + "² = " + squared;
    return;
  }

  if (btnValue === '^') {
    inputElm.value += '**'; // adds power (evaluated with eval)
    return;
  }

  inputElm.value += btnValue;
}
