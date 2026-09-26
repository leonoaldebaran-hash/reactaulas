class MathUtils {
  // Calculadora das 4 operações.
  // Recebe os dois números, a operação e o "set" da variável de resultado,
  // assim o valor volta para a tela além de aparecer no alert.
  static funcaoCalculo(number1, number2, acao, setResultado) {
    var resultado;
    switch (acao) {
      case '+':
        resultado = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        resultado = parseFloat(number1) - parseFloat(number2);
        break;
      case '*':
        resultado = parseFloat(number1) * parseFloat(number2);
        break;
      case '/':
        if (parseFloat(number2) === 0) {
          alert('Não é possível dividir por zero.');
          setResultado('Erro: divisão por zero');
          return;
        }
        resultado = parseFloat(number1) / parseFloat(number2);
        break;
      default:
        break;
    }

    if (isNaN(resultado)) {
      alert('Por favor, insira números válidos.');
      setResultado('Erro: insira números válidos');
    } else {
      alert(`O resultado é: ${resultado}`);
      setResultado(`${number1} ${acao} ${number2} = ${resultado}`);
    }
  }

  // IMC: altura em cm e peso em kg.
  static calculaIMC(peso, altura, setImc, setMensagem) {
    if (!altura || !peso || isNaN(altura) || isNaN(peso)) {
      alert('Por favor, insira valores válidos.');
      setImc('');
      setMensagem('');
      return;
    }

    altura = altura / 100;
    const imc = peso / (altura * altura);
    setImc(imc.toFixed(2));
    setMensagem(this.statusIMC(imc));
  }

  static statusIMC(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else if (imc < 40) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grave grau 3';
    }
  }

  // Equação de segundo grau (Bhaskara): ax² + bx + c = 0
  static calculaBhaskara(a, b, c, setDelta, setResultado) {
    const va = parseFloat(a);
    const vb = parseFloat(b);
    const vc = parseFloat(c);

    if (isNaN(va) || isNaN(vb) || isNaN(vc)) {
      alert('Por favor, insira valores válidos para a, b e c.');
      setDelta('');
      setResultado('');
      return;
    }

    if (va === 0) {
      alert('O valor de "a" não pode ser zero (não é equação de 2º grau).');
      setDelta('');
      setResultado('');
      return;
    }

    const delta = vb * vb - 4 * va * vc;
    setDelta(delta.toFixed(2));

    if (delta < 0) {
      setResultado('Delta negativo: não existem raízes reais.');
    } else if (delta === 0) {
      const x = -vb / (2 * va);
      setResultado(`Uma raiz real: x = ${x.toFixed(2)}`);
    } else {
      const x1 = (-vb + Math.sqrt(delta)) / (2 * va);
      const x2 = (-vb - Math.sqrt(delta)) / (2 * va);
      setResultado(`x1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`);
    }
  }
}

export default MathUtils;
