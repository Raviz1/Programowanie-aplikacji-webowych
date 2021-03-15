

class MinApp {
    private inputs: NodeListOf<HTMLInputElement>;
    private outputs: NodeListOf<HTMLInputElement>;
    private arrs: number[] = [];
    constructor() {
        this.inputs = document.querySelectorAll(".inputs > input");
        this.outputs = document.querySelectorAll(".outputs > input")

        this.addEvents(this.inputs);
     

    }
    private addEvents (input :NodeListOf<HTMLInputElement>) :void {
        input.forEach((e)=>{
            e.addEventListener("input", ()=>{
                // this is a value from single input 
                // do 2 things with that p
                this.arrs.push(+e.value);
                this.display();

            })
        })
    }
    private sum():number{
      return this.arrs.reduce((a,b)=> a+b)
    }
    private avg():number{
        return this.sum()/this.arrs.length
    }
    private sort():number[]{
        return this.arrs.sort((a,b)=>a-b)
    }
    private display():void{
        this.outputs.item(0).value = this.sum().toString(); 
        this.outputs.item(1).value = this.avg().toString(); 
        this.outputs.item(2).value = this.sort()[0].toString(); 
        this.outputs.item(3).value = this.sort()[this.arrs.length-1].toString()
    }
  

}

const test = new MinApp();