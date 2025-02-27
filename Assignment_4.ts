1.
abstract class Shape {
  constructor(public color: string) {}
  abstract calculateArea(): number;
  getColor(): string {
    return this.color;
  }
}
class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }
 calculateArea(): number {
    return this.width * this.height;
  }
}

2.
interface Vehicle{
  speed:number;
  move():void;
}
class Car implements Vehicle{
  constructor(public speed: number){}
  move(): void {
    console.log(`Car moving at ${this.speed} km/h`);
  }
}
class Bicycle implements Vehicle{
  constructor(public speed: number){}
  move(): void {
    console.log(`Bicycle moving at ${this.speed} km/h`);
  }
}

3.
interface Flyable{
  fly(): void;
}
abstract class Bird{
  constructor(public name: string) {}
  eat(): void {
    console.log(`${this.name} is eating`);
  }
}
class Eagle extends Bird implements Flyable{
  fly():void {
    console.log(`${this.name} is flying high`);
  }
}
class Sparrow extends Bird implements Flyable{
  fly():void {
    console.log(`${this.name} is fluttering its wings`);
  }
}

4.
interface Person{
  name: string;
  speak(): void;
}
interface Employee extends Person{
  salary: number;
  work(): void;
}

class Developer implements Employee{
  constructor(public name: string, public salary: number){}
  speak(): void {
    console.log(`${this.name} says hello!`);
  }
  work(): void {
    console.log(`${this.name} is coding`);
  }
}

//Advanced
1.
abstract class BankAccount {
    protected balance: number;
    constructor(protected accountNumber: string, balance: number) {
      this.balance = balance;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    abstract withdraw(amount: number): boolean;
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  class SavingsAccount extends BankAccount {
    private withdrawalLimit = 5000;
  
    withdraw(amount: number): boolean {
      if (amount <= this.withdrawalLimit && this.balance >= amount) {
        this.balance -= amount;
        return true;
      }
      return false;
    }
  }
  
  class CheckingAccount extends BankAccount {
    private overdraftLimit = 1000;
  
    withdraw(amount: number): boolean {
      if (this.balance + this.overdraftLimit >= amount) {
        this.balance -= amount;
        return true;
      }
      return false;
    }
  }
  
2.
interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
  }
  
class CreditCard implements PaymentMethod {
constructor(private balance: number) {}
  
    pay(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Credit card payment of ${amount} successful`);
      } else {
        console.log(`Insufficient funds`);
      }
    }
  
    refund(amount: number): void {
      this.balance += amount;
      console.log(`Credit card refund of ${amount} successful`);
    }
  }
  
  class DebitCard implements PaymentMethod {
    constructor(private balance: number) {}
    pay(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Debit card payment of ${amount} successful`);
      } else {
        console.log(`Insufficient funds`);
      }
    }
    refund(amount: number): void {
      this.balance += amount;
      console.log(`Debit card refund of ${amount} successful`);
    }
  }
class UPI implements PaymentMethod {
constructor(private balance: number) {}
    pay(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`UPI payment of ${amount} successful`);
      } else {
        console.log(`Insufficient funds`);
      }
    }
    refund(amount: number): void {
      this.balance += amount;
      console.log(`UPI refund of ${amount} successful`);
    }
  }
  
3.
abstract class PaymentGateway {
processPayment(amount: number): void {
    console.log(`Processing payment of ${amount}`);
}
processRefund(amount: number): void {
      console.log(`Processing refund of ${amount}`);
    }
  abstract validateTransaction(transactionId: string): boolean;
  }
  
  interface SecurePayment {
    authenticateUser(userId: string): boolean;
  }
  
  class PayPal extends PaymentGateway implements SecurePayment {
    validateTransaction(transactionId: string): boolean {
      return transactionId.startsWith("TXN");
    }
  
    authenticateUser(userId: string): boolean {
      return userId.startsWith("user");
    }
  }
  
4.
interface Loan {
    applyForLoan(amount: number): void;
  }
  
  interface Insurance {
    applyForInsurance(policy: string): void;
  }
  
  class Customer implements Loan, Insurance {
    loanDetails: { amount: number } | null = null;
    insuranceDetails: { policy: string } | null = null;
  
    applyForLoan(amount: number): void {
      this.loanDetails = { amount };
      console.log(`Loan application for ${amount} successful`);
    }
  
    applyForInsurance(policy: string): void {
      this.insuranceDetails = { policy };
      console.log(`Insurance application for ${policy} successful`);
    }
  }