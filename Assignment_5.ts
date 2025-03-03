// excercise 1
 
interface User {
 
    id: number;
    name: string;
    email: string;
  }
  function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
  }
  // Example usage:
  const user: User = { id: 1054, name: "vignesh", email: "vignesh@gmail.com" };
  const updates: Partial<User> = { name: "vignesh" };
  const updatedUser = updateUser(user, updates);
  console.log(updatedUser); 

  //Excercise 2
  interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
  }
  type MandatoryUserProfile = Required<UserProfile>;
  // Example usage:
  const userProfile: MandatoryUserProfile = {
    id: 1054,
    name: "vignesh",
    age: 21
  };

  //Excercise 3
  const config: Readonly<{
    apiKey: string;
    timeout: number;
  }> = {
    apiKey: "12345",
    timeout: 5000
  };
  // Example usage:
  config.apiKey = "67890"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
  config.timeout = 10000; // Error: Cannot assign to 'timeout' because it is a read-only property.
  //Excercise 4
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  type ProductSummary = Pick<Product, "id", "name", "price">;
  // Example usage:
  const productSummary: ProductSummary = {
    id: 1,
    name: "Sample Product",
    price: 99.99
  };
  //Excercise 5 
  interface User {
    id: number;
    name: string;
    email: string;
  }
  type UserWithoutEmail = Omit<User, "email">;
  // Example usage:
  const userWithoutEmail: UserWithoutEmail = {
    id: 1054,
    name: "vignesh"
  };
  //Excercise 6
  type UserRoles = {
    [userId: number]: string;
  };
  // Example usage:
  const userRoles: UserRoles = {
    1: "Admin",
    2: "Editor",
    3: "Viewer"
  };
