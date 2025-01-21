class User344 {
  public email: string;
  // firstName: string;
  private name:string;
  readonly city:string;
  constructor(email: string, name: string) {
    this.city=""
    this.email = email;
    this.name = name;
    // allow because in the class we can access the private property
    // this.city = "Delhi";
  }
}

const sujal346 = new User344("h@h.com", 'Sujal');
// sujal346.city = "Mumbai";
// error because city is readonly and private
// sujal346.city
