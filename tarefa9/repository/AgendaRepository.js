import * as SQLite from 'expo-sqlite';

let db;

const initDB = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('agenda.db');
  }
};

const createTable = async () => {
  try {
    await initDB();
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS agenda (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        telefone TEXT
      );
    `);
    console.log("Tabela criada com sucesso.");
  } catch (error) {
    console.log("Erro ao criar tabela:", error);
  }
};

const getAgenda = async (setAgenda) => {
  try {
    await initDB();
    const result = await db.getAllAsync('SELECT * FROM agenda;');
    console.log("Dados recuperados:", result);
    setAgenda(result);
  } catch (error) {
    console.log("Erro ao recuperar dados:", error);
  }
};

const adicionarAgenda = async (nome, telefone, setAgenda) => {
  try {
    await initDB();
    await db.runAsync(
      'INSERT INTO agenda (nome, telefone) VALUES (?, ?);',
      [nome, telefone]
    );
    console.log("Dados inseridos com sucesso.");
    if (setAgenda) {
      await getAgenda(setAgenda);
    }
  } catch (error) {
    console.log("Erro ao inserir dados:", error);
  }
};

const removerAgenda = async (id, setAgenda) => {
  try {
    await initDB();
    await db.runAsync(
      'DELETE FROM agenda WHERE id = ?;',
      [id]
    );
    console.log("Dados removidos com sucesso.");
    if (setAgenda) {
      await getAgenda(setAgenda);
    }
  } catch (error) {
    console.log("Erro ao remover dados:", error);
  }
};

const editarAgenda = async (id, nome, telefone, setAgenda) => {
  try {
    await initDB();
    await db.runAsync(
      'UPDATE agenda SET nome = ?, telefone = ? WHERE id = ?;',
      [nome, telefone, id]
    );
    console.log("Dados editados com sucesso.");
    if (setAgenda) {
      await getAgenda(setAgenda);
    }
  } catch (error) {
    console.log("Erro ao editar dados:", error);
  }
};

export { createTable, getAgenda, adicionarAgenda, removerAgenda, editarAgenda };