const User = {
  name:"Sujl",
  email:"abc@gmail.com",
  isActive:false
}

function createUser({ name: string, isPaid: boolean}){}

// var name:string;
createUser({name:"suja",isPaid:true})

// export {}
let newUser = {
  name:"sujal",
  isPaid:false,
  email:"abc@gmail.com"
}
// No error so it having only 2 parameter but we are passing  paramaters
createUser(newUser)
function createCourse () :{
  name:string,
  price:number
}{

  return {
    name:"suj",
    price:45
  }
}