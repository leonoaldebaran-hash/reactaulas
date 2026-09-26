class ConversaoUtils {
  // Converte a temperatura de acordo com o tipo escolhido
  // e devolve o resultado para a tela através do "set".
  static converter(valor, tipo, setResultado) {
    const numero = parseFloat(valor);

    if (isNaN(numero)) {
      alert('Por favor, insira um número válido.');
      setResultado('');
      return;
    }

    let resultado;
    switch (tipo) {
      case 'FtoC':
        resultado = `${numero} °F = ${((numero - 32) * 5 / 9).toFixed(2)} °C`;
        break;
      case 'CtoF':
        resultado = `${numero} °C = ${(numero * 9 / 5 + 32).toFixed(2)} °F`;
        break;
      case 'CtoK':
        resultado = `${numero} °C = ${(numero + 273.15).toFixed(2)} K`;
        break;
      default:
        resultado = '';
        break;
    }

    setResultado(resultado);
  }
}

export default ConversaoUtils;
