const user3:(string | number)[] = [1, 'John', 25];

let tUser:[number, string, boolean];
tUser = [1, 'John', true];
// not allowed
// tUser = [true, 'John', 1];
let rgb:[number,number,number] = [255, 0, 0];
// not allowed
// rgb = [0, 0, true];
type User54=[number,string]
const user8:User54=[1,"Sujal"]
// not allowed
// user8 = ["Sujal",1,true];

user8[1]= "abc@gmail.com"
// not allowed
// user8.push(true)