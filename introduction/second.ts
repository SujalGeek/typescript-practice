function addTwo(num:number)
{
  return num+2;
}

addTwo(4)
// addTwo("4")
console.log("done");


function myname(val:string) {
  return val.toUpperCase()
}
function signupuser(name:string,email:string,password:number)
{
}
myname("sujal")
signupuser("sujl","av@gmail.com",3232)

let loginUser = (name:string,email:string,isPaid:boolean = false) =>{

}
loginUser("e","ac@gmai.com")
// myname(8)
// How to return perfectly


function addTwo2(num:number): number{
  // return "hello"
  return num+4
}

addTwo2(5)

const hers = ["thor","sd","ironman"]
const numbers = [1,3,4]


numbers.map((num): number =>{
  return num+3
})

hers.map((her): string =>{
  return `hero is ${her}`
  // return 2
})

function consoleError (errmsg : string) :void{
  console.log(errmsg)
}
function handleError (errmsg : string) :never{
  throw new Error(errmsg)
}