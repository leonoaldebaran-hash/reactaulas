class Apis {
  static async buscaGato(setUrlGato) {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      if (!data || data.length === 0) {
        alert('Nenhum gato encontrado!');
        return;
      }
      setUrlGato(data[0].url);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar o gato!');
    }
  }
}

export default Apis;