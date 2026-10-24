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

  static async criarUsuario(usuario) {
    try {
      const response = await fetch(URL_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      if (!response.ok) {
        alert(`Erro ao cadastrar o usuário (código ${response.status}).`);
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com a API!');
      return false;
    }
  }

  static async atualizarUsuario(id, usuario) {
    try {
      const response = await fetch(`${URL_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      if (!response.ok) {
        alert(`Erro ao atualizar o usuário (código ${response.status}).`);
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com a API!');
      return false;
    }
  }

  static async excluirUsuario(id) {
    try {
      const response = await fetch(`${URL_BASE}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        alert(`Erro ao excluir o usuário (código ${response.status}).`);
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com a API!');
      return false;
    }
  }
}

export default Apis;