import React, { createContext, useContext, useState } from 'react';

// Context: um "lugar compartilhado" onde a lista de atividades fica guardada.
// Qualquer tela dentro do AtividadesProvider pode ler e adicionar atividades.
const AtividadesContext = createContext();

export function AtividadesProvider({ children }) {
  const [atividades, setAtividades] = useState([
    { id: '1', data: '29/09/2026', hora: '19:00', atividade: 'Aula de Programação Mobile' },
    { id: '2', data: '30/09/2026', hora: '08:30', atividade: 'Entregar tarefa no Teams' },
  ]);

  function adicionarAtividade(data, hora, atividade) {
    const nova = { id: Date.now().toString(), data, hora, atividade };
    setAtividades((lista) => [...lista, nova]);
  }

  return (
    <AtividadesContext.Provider value={{ atividades, adicionarAtividade }}>
      {children}
    </AtividadesContext.Provider>
  );
}

export function useAtividades() {
  return useContext(AtividadesContext);
}
