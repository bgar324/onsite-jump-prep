class Account {
  static totalAccounts = 0;
  owner : string;
  balance : number;
  
  constructor(owner : string, balance : number) {
    this.owner = owner;
    this.balance = balance;
    Account.totalAccounts++;
  }

  deposit(amount : number) : void {
    this.balance += amount;
  }

  static getTotalAccounts() : number {
    return Account.totalAccounts;
  }
}

const acc1 = new Account("Ben", 100);
const acc2 = new Account("Russell", 250);
acc1.deposit(50);

console.log(Account.getTotalAccounts());