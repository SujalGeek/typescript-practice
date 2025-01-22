class Player4 {
  protected _courseCount =1
  readonly city: string= "Delhi";
  constructor(
    public email: string,
    public name: string) {
    // this.city = "Mumbai";

  } 
  get courseCount(): number {
    return this._courseCount;
    
  }
  // nothing in the rerturn type
  set courseCount(courseCount){
    if(courseCount <= 1)
    {
      throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseCount;
  }
}

const sujal56 = new Player4("h@h.com","suj")

class User45 extends Player4{
  isFamily: boolean = true;
  changeCourseCount(){
    this._courseCount = 4
  }
}