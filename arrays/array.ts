// Array
const superheros: string[] = []
const heropower: number[] =[]

superheros.push("thor")
superheros.push("ironman")

heropower.push(2);
heropower.push(3)

// Another way
const heropower2: Array<number>=[]
heropower2.push(4);
heropower2.push(5);

type User4 = {
  name:string;
  isActive:boolean;
}

const allUsers: User4[] =[]

allUsers.push({
  name:"",
  isActive:true
})

const MLmodes: number[][] = [
  [2,3,4],
  [3,6,7]
]
// Go through docs once