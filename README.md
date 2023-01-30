# API de cadastro de usuário

Foi criada API para o recebimento dos dados que veem do frontend. 

Além de ter criado serviços para user, eu também tinha criado api para criação de canais e relação de usuários e canais mas acho que foi desnecessário.

### Endpoint

- `POST` http://localhost:4000/users criação
- `GET`  http://localhost:4000/users listagem

## `Rodar servidor`
### `yarn start`



# Tela de cadastro de usuário

Este projeto tem uma tela para fazer cadastro de usuário com os seguintes campos:

- login
- password
- name
- cpf
- cep
- endereço
- complemento
- cidade
- uf

Os campos login e password são obrigatórios, no campo CEP podemos fazer uma consulta para preenchimento de outros campo se retornar resultado.
### Para rodar o projeto

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



