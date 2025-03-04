export class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // Método para depositar
  deposit(value: number): void {
    if (this.status) {
      this.balance += value;
      console.log(
        `Depósito de ${value} realizado. Novo saldo: ${this.balance}`
      );
    } else {
      console.log("Conta inativa. Não é possível depositar.");
    }
  }

  // Método para sacar
  withdraw(value: number): void {
    if (this.status && this.balance >= value) {
      this.balance -= value;
      console.log(`Saque de ${value} realizado. Novo saldo: ${this.balance}`);
    } else if (!this.status) {
      console.log("Conta inativa. Não é possível sacar.");
    } else {
      console.log("Saldo insuficiente para saque.");
    }
  }

  // Método para consultar saldo
  getBalance(): void {
    console.log(`Saldo atual: ${this.balance}`);
  }

  // Método para ativar/inativar conta
  setStatus(status: boolean): void {
    this.status = status;
    console.log(
      `Status da conta alterado para: ${status ? "Ativa" : "Inativa"}`
    );
  }

  // Método para obter o status da conta
  getStatus(): boolean {
    return this.status;
  }
}
