interface TakePhoto {
  camerPhoto: string
  filter: string
  burst: number
}

interface Story{
  createStory():void
}
class Instgram implements TakePhoto{
  constructor(  
    public camerPhoto: string,
    public filter: string,
    public burst: number
  ){}
}

class Youtube implements TakePhoto, Story{
  constructor(
    public camerPhoto: string,
    public filter: string,
    public burst: number,
    public short:number
  ){}

  createStory(): void {
      console.log("Story was created");
      
  }
}
