class TimerUtils {
  // Recebe o tempo em segundos e devolve no formato mm:ss (ex: 125 -> "02:05").
  static formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    return (
      String(minutos).padStart(2, '0') + ':' + String(segundos).padStart(2, '0')
    );
  }
}

export default TimerUtils;
