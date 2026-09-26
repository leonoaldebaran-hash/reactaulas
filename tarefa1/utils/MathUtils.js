import { Alert, Platform } from 'react-native';

class MathUtils {
  // O Alert.alert não funciona no navegador (Web), então no Web
  // usamos o window.alert e no celular o Alert do React Native.
  static mostrarAlerta(titulo, mensagem) {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem);
    }
  }

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
          this.mostrarAlerta('Erro', 'Não é possível dividir por zero.');
          setResultado('Erro: divisão por zero');
          return;
        }
        resultado = parseFloat(number1) / parseFloat(number2);
        break;
      default:
        break;
    }

    if (isNaN(resultado)) {
      this.mostrarAlerta('Erro', 'Por favor, insira números válidos.');
      setResultado('Erro: insira números válidos');
    } else {
      this.mostrarAlerta('Resultado', `O resultado é: ${resultado}`);
      setResultado(`${number1} ${acao} ${number2} = ${resultado}`);
    }
  }
}

export default MathUtils;
