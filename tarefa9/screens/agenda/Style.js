import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
  },
  botaoSalvar: {
    marginTop: 10,
  },
  botaoCancelar: {
    marginTop: 10,
    backgroundColor: '#888',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemEditando: {
    backgroundColor: '#fff3cd',
  },
  itemInfo: {
    flex: 1,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTelefone: {
    fontSize: 14,
    color: '#555',
  },
  botaoPequeno: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  botaoEditar: {
    backgroundColor: '#f0ad4e',
  },
  botaoRemover: {
    backgroundColor: '#d9534f',
  },
  listaVazia: {
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
  },
});