import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Método para empréstimo
  getLoan(value: number): void {
    if (this.getStatus()) {
      this.deposit(value); // Usa o método deposit para aumentar o saldo
      console.log(`Empréstimo de ${value} realizado.`);
    } else {
      console.log("Conta inativa. Não é possível fazer empréstimo.");
    }
  }
}
