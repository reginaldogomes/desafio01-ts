import { DioAccount } from "./class/DioAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccountType } from "./class/NewAccountType";

// Criando instâncias
const dioAccount = new DioAccount("João", 12345);
const companyAccount = new CompanyAccount("Empresa XYZ", 67890);
const newAccount = new NewAccountType("Maria", 54321);

// Testando métodos da DioAccount
console.log("=== Testando DioAccount ===");
dioAccount.deposit(100);
dioAccount.withdraw(50);
dioAccount.getBalance();

// Testando métodos da CompanyAccount
console.log("\n=== Testando CompanyAccount ===");
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.getBalance();

// Testando métodos da NewAccountType
console.log("\n=== Testando NewAccountType ===");
newAccount.deposit(100);
newAccount.getBalance();
