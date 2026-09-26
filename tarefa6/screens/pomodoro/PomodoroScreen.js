import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/customButtom/CustomButtom';
import TimerUtils from '../../utils/TimerUtils';

// Pomodoro começa em 20 minutos e vai até zero.
const TEMPO_INICIAL = 20 * 60; // em segundos

function PomodoroScreen() {
  const [tempo, setTempo] = useState(TEMPO_INICIAL);
  const [rodando, setRodando] = useState(false);

  // Enquanto "rodando" for true, tira 1 segundo a cada 1000 ms.
  useEffect(() => {
    if (!rodando) return;
    const intervalo = setInterval(() => {
      setTempo((t) => Math.max(t - 1, 0));
    }, 1000);
    return () => clearInterval(intervalo);
  }, [rodando]);

  // Quando chegar a zero, para o timer e avisa o usuário.
  useEffect(() => {
    if (tempo === 0 && rodando) {
      setRodando(false);
      alert('Pomodoro finalizado! Hora da pausa.');
    }
  }, [tempo, rodando]);

  function iniciarPausar() {
    if (tempo === 0) {
      setTempo(TEMPO_INICIAL);
    }
    setRodando(!rodando);
  }

  function reiniciar() {
    setRodando(false);
    setTempo(TEMPO_INICIAL);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>

      <Text style={styles.tempo}>{TimerUtils.formatarTempo(tempo)}</Text>

      <View style={styles.botoes}>
        <CustomButton
          title={rodando ? 'Pausar' : 'Iniciar'}
          onPress={iniciarPausar}
          style={[styles.botao, rodando ? styles.pausar : styles.iniciar]}
        />
        <CustomButton
          title="Reiniciar"
          onPress={reiniciar}
          style={[styles.botao, styles.reiniciar]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  tempo: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#c62828',
  },
  botoes: {
    flexDirection: 'row',
  },
  botao: {
    marginHorizontal: 10,
    width: 120,
  },
  iniciar: {
    backgroundColor: '#2e7d32',
  },
  pausar: {
    backgroundColor: '#f9a825',
  },
  reiniciar: {
    backgroundColor: '#c62828',
  },
});

export default PomodoroScreen;
