# Tarefa 8 - CRUD de usuários via API (crudcrud)

App feito no Expo Snack (SDK 54) que faz o CRUD de usuários (nome, telefone e endereço) consumindo a API do crudcrud, com um menu inferior (Tab Navigator) de duas abas.

## Telas
- **Cadastro** (`screens/cadastro/CadastroScreen.js`): formulário para cadastrar (`POST`). Quando se toca em "Editar" na lista, o mesmo formulário abre preenchido e o botão "Salvar alterações" atualiza o usuário (`PUT`).
- **Usuários** (`screens/lista/ListaScreen.js`): lista os usuários (`GET`) com `FlatList`, recarrega toda vez que a aba abre (`useFocusEffect`) e tem os botões Editar e Excluir (`DELETE`).

## Estrutura
- `apis/Apis.js`: classe com os 4 métodos `fetch` (`listarUsuarios`, `criarUsuario`, `atualizarUsuario`, `excluirUsuario`).
- `screens/usuarios/UsuariosTabs.js`: o menu inferior com as duas abas.
- `components/`: `CustomButtom` e `TextInputBox`.

## API
O endereço da API fica na constante `URL_BASE` em `apis/Apis.js`. O crudcrud gratuito expira depois de um tempo; se as chamadas passarem a falhar, gere um endereço novo e troque essa linha.

## Prints
Em `prints/`.
