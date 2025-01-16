let score : number | string= 45;

score = '45';
// or
score = 55;

type Player ={
    name:string;
    id:number;

}

type Admin  ={
  username:string;
  id:number;
}

let sujal : Player | Admin = {
  name:"sujal",
  id:1
}
// either way but if remove id from admin then it will give error
sujal = {
  username:"sujal3",
  id:2
}

function getDBid (id: number | string)
{
  // some Api calls
  console.log(`Db id is :${id}`);
}

function getdbid1 (id :number | string)
{
  // since it can be having error because it can be string so we can use type assertion
  // id.toLowerCase();
  if(typeof id === "string")
  {
    id.toLowerCase()
  }
  if(typeof id === "number")
  {
    id=id+2;
    id.toFixed();
  }
}

// array
const data:number [] = [1,2,3,4,5];
const data1:(number | string) [] = [1,2,3,4,5,'sujal'];

// strict 
let pi:3.14=3.14;
// pi = 3.15; // error