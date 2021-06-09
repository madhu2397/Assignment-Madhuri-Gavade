class Account {
    constructor(id, userName, balance) {
        this._id = id;
        this._userName = userName;
        this._balance = balance;
    }
}
class SavingAccount extends Account {
    constructor(id, userName, balance, interest) {
        super(id, userName, balance);
        this._interest = interest;
    }
    totalBalance() {
        return (this._balance + this._interest);
    }
}
class CurrentAccount extends Account {
    constructor(id, userName, balance, cash_credit) {
        super(id, userName, balance);
        this._cash_credit = cash_credit;
    }
    totalBalance() {
        return (this._balance + this._cash_credit);
    }
}
let savingAccountOne = new SavingAccount("SA1", "john", 20000, 1300);
console.log(savingAccountOne.totalBalance());
var savingAccountTwo = new SavingAccount("SA2", "jules", 2000, 290);
console.log(savingAccountTwo.totalBalance());
var currentAccountOne = new CurrentAccount("CA1", "frank", 15000, 30000);
console.log(currentAccountOne.totalBalance());
var currentAccountTwo = new CurrentAccount("CA2", "dave", 21420, 42000);
console.log(currentAccountTwo.totalBalance());