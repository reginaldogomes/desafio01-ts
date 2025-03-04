import { DioAccount } from "./DioAccount";

export class NewAccountType extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Método de depósito com bônus
  deposit(value: number): void {
    if (this.getStatus()) {
      const bonus = 10;
      super.deposit(value + bonus); // Chama o método deposit da classe pai
      console.log(`Depósito de ${value} + ${bonus} (bônus) realizado.`);
    } else {
      console.log("Conta inativa. Não é possível depositar.");
    }
  }
}
