// ✏️ Your Turn – Mini Exercise #4

// Create a small example using protected:

// class BankAccount

// protected balance: number

// constructor sets the initial balance

// method deposit(amount: number) adds to balance

// class SavingsAccount extends BankAccount

// method addInterest(rate: number) increases balance by a percentage
// (this.balance += this.balance * rate)

// In the main section:

// Create a SavingsAccount with $1000

// Call deposit(200) and addInterest(0.05)

// Try printing balance directly to confirm it’s inaccessible

class BankAccount {
  protected balance : number

  constructor (balance : number){
    this.balance = balance
  }

  deposit(amount : number) : void {
    this.balance += amount;
  }
}

class SavingsAccount extends BankAccount {
  addInterest (rate : number) {
    this.balance += this.balance * rate;
  }
}

const savingsAccount = new SavingsAccount(1000)
savingsAccount.deposit(200)
savingsAccount.addInterest(0.05)