# Projeto de Contas Bancárias em TypeScript

Este projeto é uma implementação de um sistema simples de gerenciamento de contas bancárias em TypeScript. Ele foi desenvolvido como parte de um desafio prático da [Digital Innovation One (DIO)](https://www.dio.me), com o objetivo de aplicar conceitos de orientação a objetos, encapsulamento, herança e boas práticas de desenvolvimento em TypeScript.

## 🚀 Funcionalidades

O projeto inclui três tipos de contas bancárias:

1. **`DioAccount`**: Conta básica com métodos para depósito, saque e consulta de saldo.
2. **`CompanyAccount`**: Conta empresarial que herda de `DioAccount` e adiciona a funcionalidade de empréstimo.
3. **`NewAccountType`**: Um novo tipo de conta que herda de `DioAccount` e oferece um bônus de 10 unidades em cada depósito.

### Funcionalidades Principais:

- **Depósito**: Adiciona valor ao saldo da conta.
- **Saque**: Remove valor do saldo da conta, desde que o saldo seja suficiente.
- **Empréstimo**: Disponível apenas para contas empresariais (`CompanyAccount`).
- **Bônus no Depósito**: Disponível apenas para o novo tipo de conta (`NewAccountType`).
- **Validações**:
  - Verifica se a conta está ativa antes de realizar operações.
  - Verifica se o saldo é suficiente para saques.

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução do JavaScript/TypeScript.
- **Git e GitHub**: Controle de versão e hospedagem do código.
- **Visual Studio Code**: Editor de código utilizado para desenvolvimento.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- Node.js instalado (versão 16 ou superior).
- TypeScript instalado globalmente (`npm install -g typescript`).

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/reginaldogomes/desafio01-ts.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd desafio01-ts
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Compile o TypeScript para JavaScript:

   ```bash
   tsc
   ```

5. Execute o arquivo `app.ts`:
   ```bash
   node src/app.ts
   ```

## 📝 Melhorias Futuras

- Adicionar uma interface de linha de comando (CLI) para interagir com o sistema.
- Implementar testes unitários com Jest ou Mocha.
- Adicionar funcionalidades adicionais, como transferências entre contas.
- Criar uma interface gráfica simples usando React ou Angular.

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adicionando nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## ✒️ Autor

Reginaldo Gomes - LinkedIn: (https://www.linkedin.com/in/reginaldogomesalves/)

## 🙌 Agradecimentos

- À Digital Innovation One (DIO) pelo desafio e pelo conteúdo educativo.
- À comunidade de desenvolvedores por compartilhar conhecimento e boas práticas.
