import { Alert } from 'react-native';

class MathUtils {
  // Recebe os dois números, a operação e o "set" da variável de resultado,
  // assim o valor volta para a tela além de aparecer no Alert.
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
          Alert.alert('Erro', 'Não é possível dividir por zero.');
          setResultado('Erro: divisão por zero');
          return;
        }
        resultado = parseFloat(number1) / parseFloat(number2);
        break;
      default:
        break;
    }

    if (isNaN(resultado)) {
      Alert.alert('Erro', 'Por favor, insira números válidos.');
      setResultado('Erro: insira números válidos');
    } else {
      Alert.alert('Resultado', `O resultado é: ${resultado}`);
      setResultado(`${number1} ${acao} ${number2} = ${resultado}`);
    }
  }
}

export default MathUtils;
