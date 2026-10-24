const URL_BASE = 'https://crudcrud.com/api/9a4e4e031d5c4064872b0a15dd407dbc/usuarios';

class Apis {
  static async listarUsuarios(setUsuarios) {
    try {
      const response = await fetch(URL_BASE);
      if (!response.ok) {
        alert(`Erro ao buscar os usuários (código ${response.status}).`);
        return;
      }
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com a API!');
    }
  }
}

export default Apis;
