class Player4 {
  readonly city: string= "Delhi";
  constructor(
    public email: string,
    public name: string) {
    // this.city = "Mumbai";

  } 
  get getEmail(): string {
    return `Email is ${this.email}`;
    
  }
}