import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useAtividades } from '../../context/AtividadesContext';

function AgendaScreen() {
  const { atividades } = useAtividades();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>

      <FlatList
        data={atividades}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhuma atividade cadastrada.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.dataHora}>
              {item.data} às {item.hora}
            </Text>
            <Text style={styles.atividade}>{item.atividade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#f1f6ff',
    borderLeftWidth: 5,
    borderLeftColor: '#1e90ff',
    borderRadius: 5,
    padding: 15,
    marginVertical: 6,
  },
  dataHora: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  atividade: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  vazio: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
  },
});

export default AgendaScreen;
