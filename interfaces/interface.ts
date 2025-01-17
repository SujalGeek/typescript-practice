interface User8 {
  readonly dbId: number;
  userId: number;
  email:string;
  googleId?: string;
  startTrial: () => string
  startTrial2(): string
  // compusory to pass the value of coupanname and value
  getCoupon(coupanname: string, value: number): number
}

const sujal55 : User8 = { dbId: 1, userId: 1, email: 'ab@c.com', startTrial: () => 'Trial Started' , startTrial2: () => 'Trial Started',
  getCoupon:(name:"hitesh", off:10) =>{
    return 10;
  }
};
// sujal55.dbId = 2; // Error: Cannot assign to 'dbId' because it is a read-only property.