type user ={
  name:string;
  email:string;
  isActive:boolean
}

// type Mystring = string

function createUser(user: user): user{  
  return {
    name:"sujal",
    email:"",
    isActive:true
  }
}
createUser({
  name:"sujal",
  email:"",
  isActive:true
})

type Point ={
  x:number;
  y:number;
}

function toAccessco(pt:Point) {
  return pt.x + pt.y
}

toAccessco({
  x:5,
  y:6
})
// Refer to docs https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

// Read only ? type
type User ={
  readonly _id:string
  name:string;
  email:string;
  isActive: boolean;
  // optional
  creditcardDetails?: number;
}

let myUser :User = {
  _id:"2345",
  name:"suj",
  email:"abc@gmail.com",
  isActive:false
}

myUser.email = "abc4@gmail.com"
// Can not able to change the id because it is readonly that's why
// myUser._id = "abc"

type cardNumber = {
  cardnumber:string;
}
type cardDate = {
  carddate:string;
}

type CardDetails = cardNumber & cardDate & {
  cvv:number
}
