class MathUtils {
  // Calcula a média das 3 notas e, com uma estrutura de decisão (if/else),
  // diz se o aluno foi aprovado ou reprovado. Média para aprovação = 6.
  static calculaMedia(nota1, nota2, nota3, setMedia, setSituacao) {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert('Por favor, insira as 3 notas.');
      setMedia('');
      setSituacao('');
      return;
    }

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
      alert('As notas devem estar entre 0 e 10.');
      setMedia('');
      setSituacao('');
      return;
    }

    const media = (n1 + n2 + n3) / 3;
    let situacao;

    if (media >= 6) {
      situacao = 'Aprovado';
    } else {
      situacao = 'Reprovado';
    }

    setMedia(media.toFixed(2));
    setSituacao(situacao);
    alert(`Média: ${media.toFixed(2)}\nSituação: ${situacao}`);
  }
}

export default MathUtils;
