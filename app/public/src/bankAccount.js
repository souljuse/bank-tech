function BankAccount() {
  this.total = 0;
}

BankAccount.prototype.updateAccount = function(amount) {
  this.total += amount;
}
