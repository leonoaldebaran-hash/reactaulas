import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Style';

const PERGUNTAS = [
  {
    pergunta: 'Qual é o nome da sage que desperta após conlcuir o templo da floresta??',
    opcoes: ["Tatl", "Saria", "Midna", "Ciela"],
    correta: 1,
  },
  {
    pergunta: 'Qual música ao ser tocada pode revelar buracos secretos no chão?',
    opcoes: ["Zelda's Lullaby", "Saria's Song", "Song of Storms", "Song of Time"],
    correta: 2,
  },
  {
    pergunta: 'Quantas chaves são necessárias para concluir o templo da água',
    opcoes: ["30", "45", "13", "22"],
    correta: 0,
  },
];

function QuizScreen() {
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [terminou, setTerminou] = useState(false);

  function responder(opcaoEscolhida) {
    if (opcaoEscolhida === PERGUNTAS[indice].correta) {
      setAcertos(acertos + 1);
    }
    if (indice + 1 < PERGUNTAS.length) {
      setIndice(indice + 1);
    } else {
      setTerminou(true);
    }
  }

  function reiniciar() {
    setIndice(0);
    setAcertos(0);
    setTerminou(false);
  }

  if (terminou) {
    const erros = PERGUNTAS.length - acertos;
    return (
      <View style={Styles.container}>
        <Text style={Styles.titulo}>Resultado</Text>
        <Text style={Styles.acertos}>Acertos: {acertos}</Text>
        <Text style={Styles.erros}>Erros: {erros}</Text>
        <TouchableOpacity style={Styles.botao} onPress={reiniciar}>
          <Text style={Styles.textoBotao}>Jogar de novo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const atual = PERGUNTAS[indice];

  return (
    <View style={Styles.container}>
      <Text style={Styles.tituloQuiz}>Quiz Ocarina of Time</Text>
      <Text style={Styles.progresso}>
        Pergunta {indice + 1} de {PERGUNTAS.length}
      </Text>
      <Text style={Styles.pergunta}>{atual.pergunta}</Text>
      {atual.opcoes.map((opcao, posicao) => (
        <TouchableOpacity
          key={opcao}
          style={Styles.opcao}
          onPress={() => responder(posicao)}
        >
          <Text style={Styles.textoOpcao}>{opcao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default QuizScreen;