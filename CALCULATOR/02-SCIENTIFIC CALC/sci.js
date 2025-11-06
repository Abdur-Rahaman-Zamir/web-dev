document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const historyEl = document.getElementById('history');
  const buttons = document.querySelectorAll('.btn');

  const getOutput = () => output.textContent.trim();
  const setOutput = (val) => output.textContent = val;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => handleInput(btn.dataset.value));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleInput('=');
    else if (e.key === 'Backspace') handleInput('⌫');
    else if (/[0-9.+\-*/()%]/.test(e.key)) handleInput(e.key);
  });

  function handleInput(value) {
    let current = getOutput();
    if (current === '0') current = '';

    if (value === 'C') {
      setOutput('0');
      historyEl.textContent = '';
      return;
    }

    if (value === '⌫') {
      setOutput(current.slice(0, -1) || '0');
      return;
    }

    if (value === '±') {
      if (current.startsWith('-')) setOutput(current.slice(1));
      else setOutput('-' + current);
      return;
    }

    if (value === '=') {
      calculate(current);
      return;
    }

    // Replace π and ^ before adding
    if (value === 'π') value = Math.PI.toString();
    if (value === '√(') value = 'Math.sqrt(';

    const next = current === '0' ? value : current + value;
    setOutput(next);
  }

  function calculate(expr) {
    // Replace visual operators with JS equivalents
    expr = expr.replace(/×/g, '*')
               .replace(/÷/g, '/')
               .replace(/−/g, '-')
               .replace(/\^/g, '**')
               .replace(/sin\(/g, 'Math.sin(')
               .replace(/cos\(/g, 'Math.cos(')
               .replace(/tan\(/g, 'Math.tan(')
               .replace(/log\(/g, 'Math.log10(')
               .replace(/ln\(/g, 'Math.log(');

    try {
      const result = Function(`"use strict"; return (${expr})`)();
      historyEl.textContent = getOutput() + ' =';
      setOutput(String(result));
    } catch {
      setOutput('Error');
    }
  }
});
