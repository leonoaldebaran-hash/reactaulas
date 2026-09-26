import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/customButtom/CustomButtom';
import TimerUtils from '../../utils/TimerUtils';

function CronometroScreen() {
  const [tempo, setTempo] = useState(0); // tempo em segundos
  const [rodando, setRodando] = useState(false);

  // Enquanto "rodando" for true, soma 1 segundo a cada 1000 ms.
  // O return limpa o intervalo quando pausa ou sai da tela.
  useEffect(() => {
    if (!rodando) return;
    const intervalo = setInterval(() => {
      setTempo((t) => t + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [rodando]);

  function zerar() {
    setRodando(false);
    setTempo(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronômetro</Text>

      <Text style={styles.tempo}>{TimerUtils.formatarTempo(tempo)}</Text>

      <View style={styles.botoes}>
        <CustomButton
          title={rodando ? 'Pausar' : 'Iniciar'}
          onPress={() => setRodando(!rodando)}
          style={[styles.botao, rodando ? styles.pausar : styles.iniciar]}
        />
        <CustomButton
          title="Zerar"
          onPress={zerar}
          style={[styles.botao, styles.zerar]}
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
    color: '#333',
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
  zerar: {
    backgroundColor: '#c62828',
  },
});

export default CronometroScreen;
