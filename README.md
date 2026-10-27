# devops-pratica

Projeto da disciplina de DevOps (UVA).

## Acordos de colaboração
1. Ninguém faz push direto na main; toda mudança entra por Pull Request.
2. Branches curtas, com nome no padrão `tipo/descricao-curta`, em minúsculas e com hífens. Tipos: `feat/` (nova funcionalidade), `fix/` (correção), `docs/` (documentação). Exemplo: `feat/adiciona-soma`.
3. Commits seguem o padrão Conventional Commits (`feat:`, `fix:`, `docs:`).

## Como rodar o projeto
Pré-requisitos: Git e Node.js (versão LTS).

1. Clonar: `git clone https://github.com/KamilaPacifico/devops-pratica.git`
2. Entrar na pasta: `cd devops-pratica`
3. Instalar: `npm install`
4. Testar: `npm test`
5. Build: `npm run build`

Resultado esperado: teste passando e pasta `dist` criada.