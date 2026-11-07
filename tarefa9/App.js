import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AgendaScreen from './screens/agenda/AgendaScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AgendaScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});