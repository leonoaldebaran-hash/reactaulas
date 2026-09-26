class MathUtils {
  // Recebe os dois números, a operação e o "set" da variável de resultado,
  // assim o valor volta para a tela além de aparecer no alert.
  // Usamos o alert() global porque ele funciona no Web e no celular.
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
}

export default MathUtils;
