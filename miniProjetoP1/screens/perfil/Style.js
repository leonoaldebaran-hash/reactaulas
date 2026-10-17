import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  conteudo: {
    padding: 24,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 24,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  cartao: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingHorizontal: 16,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  rotulo: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#6b7280',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  botao: {
    marginTop: 24,
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