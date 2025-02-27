1.
interface Product {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
  }
  function getDiscountedPrice(product: Product, discount: number): number {
    return product.price * (1 - discount);
  }
  
2.
  function formatInput(input: string | number | string[]): string {
    if (typeof input === "string") {
      return input.toUpperCase();
    } else if (typeof input === "number") {
      return `$${input}`;
    } else if (Array.isArray(input)) {
      return input.join(",");
    } else {
      return "";
    }
  }

  3.
  enum DriverStatus {
    Available,
    OnTrip,
    Offline,
  }
  type DriverInfo = [number, string, DriverStatus];
  const driver: DriverInfo = [1054, "vignesh", DriverStatus.Available];
  
  4.
  interface User {
    id: number;
    name: string;
    role: "Admin" | "Customer";
  }
  
  function getUserDetails<T extends User>(user: T): string {
    return `User ${user.name} is a ${user.role}`;
  }
  
  5.
  abstract class BankAccount {
    constructor(public accountNumber: number, public balance: number) {}
    abstract withdraw(amount: number): void;
  }
  class SavingsAccount extends BankAccount {
    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient funds.");
      }
    }
  }

  class CurrentAccount extends BankAccount {
    private overdraftLimit = 500;
  
    withdraw(amount: number): void {
      if (this.balance + this.overdraftLimit >= amount) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log("Overdraft limit exceeded.");
      }
    }
  }
  
6.
  interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
  } 
  type ReadonlyEmployee = Readonly<Employee>;
  type PartialEmployee = Partial<Employee>;
  
  function updateEmployeeInfo(emp: PartialEmployee): void {
    console.log("Updating employee:", emp);
  }
  
  7.
  type TextMessage = { content: string };
  type ImageMessage = { imageUrl: string };
  type Message = TextMessage | ImageMessage;
  
  function isTextMessage(msg: Message): msg is TextMessage {
    return (msg as TextMessage).content !== undefined;
  }
  
  function handleMessage(msg: Message): void {
    if (isTextMessage(msg)) {
      console.log(`Text: ${msg.content}`);
    } else {
      console.log(`Image: ${(<ImageMessage>msg).imageUrl}`);
    }
  }
  
  8.
  function LogClass(constructor: Function) {
    console.log(`Class ${constructor.name} is instantiated`);
  }
  @LogClass
  class OrderService {}
  const orderService = new OrderService();
  
  9.
  async function getWeather(city: string): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (city === "New York") {
          resolve(20);
        } else if (city === "London") {
          resolve(15);
        } else {
          throw new Error("City not found");
        }
      }, 2000);
    });
  }
  
  async function fetchAndLogWeather() {
    try {
      const newYorkWeather = await getWeather("New York");
      const londonWeather = await getWeather("London");
      console.log(`New York: ${newYorkWeather}°C, London: ${londonWeather}°C`);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }
  
  fetchAndLogWeather();
  
  10.
  interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
  }
  
  async function findProductById(id: string): Promise<Product | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products: Product[] = [
          { _id: "1", name: "Laptop", price: 1200, stock: 10, category: "Electronics" },
        ];
        const foundProduct = products.find((p) => p._id === id);
        resolve(foundProduct || null);
      }, 500);
    });
  }
  
  async function testFindProduct() {
    const product = await findProductById("1");
    if (product) {
      console.log("Product found:", product);
    } else {
      console.log("Product not found");
    }
  }
  
  testFindProduct();