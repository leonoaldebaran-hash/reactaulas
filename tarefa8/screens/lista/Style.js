import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  mensagem: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  vazio: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  cardNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTexto: {
    fontSize: 14,
    color: '#444',
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  botaoEditar: {
    flex: 1,
    backgroundColor: '#f0ad4e',
  },
  botaoExcluir: {
    flex: 1,
    backgroundColor: '#d9534f',
  },
});