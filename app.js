 let current = '';
    let previous = '';
    let operator = '';

  function backspace() {
  current = current.slice(0, -1); // removes last character
  updateDisplay();
}
    function press(num) {
      current += num;
      updateDisplay(current);
    }

    function setOperator(op) {
      if (current === '') return;
      if (previous !== '') calculate();
      operator = op;
      previous = current;
      current = '';
    }

    function calculate() {
      const a = parseFloat(previous);
      const b = parseFloat(current);
      let result;

      if (isNaN(a) || isNaN(b)) return;

      switch (operator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = b !== 0 ? a / b : 'Error';
          break;
        default:56
          return;
      }

      current = result.toString();
      operator = '';
      previous = '';
      updateDisplay(current);
    }


    function clearDisplay() {
      current = '';
      previous = '';
      operator = '';
      updateDisplay('');
    }

    function updateDisplay(ll ) {
      document.getElementById('display').value = current;
    }