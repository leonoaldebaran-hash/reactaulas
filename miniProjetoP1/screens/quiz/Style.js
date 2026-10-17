import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
  },
  tituloQuiz: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34497a',
    textAlign: 'center',
    marginBottom: 24,
  },
  progresso: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 24,
  },
  opcao: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  textoOpcao: {
    fontSize: 16,
    color: '#1f2937',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#34497a',
    textAlign: 'center',
    marginBottom: 24,
  },
  acertos: {
    fontSize: 20,
    color: '#15803d',
    textAlign: 'center',
    marginBottom: 8,
  },
  erros: {
    fontSize: 20,
    color: '#b42318',
    textAlign: 'center',
  },
  botao: {
    marginTop: 32,
    backgroundColor: '#34497a',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styles;