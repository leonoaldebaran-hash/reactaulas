# Instruções para o Claude — Atividades de React Native (faculdade)

## Contexto
- Repositório das **atividades da disciplina de Programação para Dispositivos Móveis** (Fatec Praia Grande, curso de ADS).
- Material do professor: **apostila `docs/React native.pdf`**. Ela é a referência de estilo e de conteúdo: siga os exemplos e a ordem dela (componentes, `StyleSheet`, `TextInputBox`, `CustomButtom`, `MathUtils`, Tab Navigator no capítulo 5, Drawer no capítulo 6, `FlatList` e banco de dados no capítulo 9, APIs no capítulo 11). Consulte o PDF antes de propor algo novo.
- **Este repositório é só das atividades da aula.** Não misturar com o projeto do TCC (Chamada UEBS), que fica em outros repositórios.
- Nome do aluno usado nas entregas: **Pedro de Paula Lacerda**.

## Como trabalhar com o aluno (OBRIGATÓRIO)
- **Responder sempre em português.**
- O aluno faz as atividades no **Expo Snack** (https://snack.expo.dev), **SDK 54**, e testa no celular pelo **Expo Go do SDK 54** (Android). Usar versões de bibliotecas compatíveis com o SDK 54.
- **Uma tarefa (um passo pequeno) por mensagem.** Não mandar vários passos de uma vez. Esperar o aluno dizer "pronto" (ou mandar print) antes de passar o próximo.
- **Explicar o porquê de cada passo.**
- **Explicar linha por linha todo código passado**: cada import, cada tag, cada propriedade, cada propriedade de estilo.
- **Sempre mandar os arquivos completos**, prontos para copiar e colar (nunca só o trecho que mudou). Ao reenviar uma tarefa, reenviar a tarefa completa.
- **Sempre que precisar de biblioteca nova, mandar o `package.json` completo** e explicar linha por linha.
- Mensagens para o usuário: usar `alert('mensagem')` (como o professor ensina), porque `Alert.alert` não funciona na aba Web do Snack.
- Ao final de cada passo, dizer exatamente **o que testar** e o que deve aparecer.
- Se o aluno mandar print com erro, explicar a causa e a correção de forma simples.
- Conferir textos que vão para o professor (perguntas de quiz, respostas, ortografia) e avisar se algo estiver errado.

## Convenção de nomes (OBRIGATÓRIA, definida pelo aluno)
- **Pastas**: camelCase, começando com minúscula → `components/textInputBox/`, `screens/home/`, `screens/escolhaPerfil/`.
- **Arquivos de classe/componente/tela**: PascalCase, começando com maiúscula → `TextInputBox.js`, `HomeScreen.js`, `MathUtils.js`.
- O arquivo de estilo de cada componente/tela se chama **`Style.js`** e fica na mesma pasta (ex.: `screens/home/HomeScreen.js` + `screens/home/Style.js`).
- A apostila escreve o botão como **`CustomButtom`** (com "m"); nas tarefas deste repositório foi mantido assim (`components/customButtom/CustomButtom.js`).
- Imagens no Snack ficam em `assets/` (ex.: `require('../../assets/logo.png')`) ou em `assets/images/`, conforme a tarefa.
- No `App.js` com Drawer, a primeira linha é `import 'react-native-gesture-handler';` (como na apostila).

## Entrega das atividades
- O professor pede: **projeto compactado em `.zip`, com tudo MENOS a `node_modules`**, e **prints do app funcionando**.
- O botão de download (⬇) do Snack já baixa o projeto sem `node_modules`.
- Prints: um por tela/funcionalidade pedida no enunciado, com nomes em ordem (`01_home.png`, `02_drawer.png`...).
- O Claude roda na nuvem e **não tem acesso ao computador do aluno**: para organizar a entrega, monta um `.zip` e envia para o aluno baixar.

## Organização deste repositório
- Cada atividade fica numa pasta própria (`tarefa1/`, `tarefa2/`, ..., `miniProjetoP1/`) com o código baixado do Snack, mais o `.zip` da entrega na raiz (`tarefa1.zip`...).
- Ao terminar uma atividade nova, salvar a pasta do projeto (e os prints, se houver, em `prints/`) e o `.zip` aqui.

## Atividades já feitas
| Pasta | Assunto |
|---|---|
| `tarefa1` | Calculadora (TextInputBox, CustomButtom, MathUtils) |
| `tarefa2` | Cálculo de média |
| `tarefa3` | Drawer + Tabs: Home, Cálculos (calculadora, IMC, Bhaskara), Sobre |
| `tarefa4` | A tarefa 3 + Conversões e Timers (cronômetro e Pomodoro) |
| `tarefa5` | Agenda: perfil (dados e foto), cadastro de atividade e agenda |
| `tarefa6` | Agenda com Drawer, cadastro e lista de atividades (Context), aba Timers (cronômetro e Pomodoro) |
| `miniProjetoP1` | Mini projeto P1: Drawer como menu principal + Tab Navigator dentro de "Sobre" (Sobre simples e Perfil fake) + Quiz de Ocarina of Time (3 perguntas, acertos e erros). Prints em `miniProjetoP1/prints/` |
| `tarefa7` | API (cap. 11): `apis/Apis.js` com `fetch` na The Cat API, tela `screens/gato/GatoScreen.js` mostra a imagem (`data[0].url`) e botão para buscar outro gato. Prints em `tarefa7/prints/` |
| `tarefa8` | CRUD de usuários na API do crudcrud (nome, telefone, endereço): `apis/Apis.js` com `fetch` (GET, POST, PUT, DELETE) e Tab Navigator com as abas Cadastro (também edita) e Usuários (`FlatList` com Editar e Excluir). Prints em `tarefa8/prints/` |

Observação do `miniProjetoP1`: na entrega, a pergunta 3 do quiz ficou com a resposta "30" chaves, mas o Templo da Água tem 6 chaves pequenas; e a pergunta 1 tinha erros de digitação ("sage", "conlcuir", "??"). O aluno foi avisado.
