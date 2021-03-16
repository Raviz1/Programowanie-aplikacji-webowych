

class MaxApp {
    protected inputs: NodeListOf<HTMLInputElement>;
    private outputs: NodeListOf<HTMLInputElement>;
    protected arrs: number[] = [];
    constructor() {
        // this.inputs = document.querySelectorAll(".inputs > input");
        this.outputs = document.querySelectorAll(".outputs > input")

    

        this.additems();
            // this.addEvents(this.inputs);
    }
    private additems(): void {
        let count: HTMLInputElement = document.querySelector(".dynamic > input");
        let nodesToAdd : Array<HTMLInputElement>;
        count.addEventListener("input", () =>{
           
            // console.log(count.value)
             for(let i =0; i < +count.value; i++ ){
                nodesToAdd.push()
             }
        })

        

    }

    private addEvents(input: NodeListOf<HTMLInputElement>): void {
        input.forEach((e) => {
            e.addEventListener("input", () => {
                // this is a value from single input 
                // do 2 things with that p
                this.arrs.push(+e.value);
                this.display();

            })
        })
    }
    private sum(): number {
        return this.arrs.reduce((a, b) => a + b)
    }
    private avg(): number {
        return this.sum() / this.arrs.length
    }
    private sort(): number[] {
        return this.arrs.sort((a, b) => a - b)
    }
    private display(): void {
        this.outputs.item(0).value = this.sum().toString();
        this.outputs.item(1).value = this.avg().toString();
        this.outputs.item(2).value = this.sort()[0].toString();
        this.outputs.item(3).value = this.sort()[this.arrs.length - 1].toString()

    }


}
// class MaxApp extends MinApp {

//     private dynam: HTMLInputElement;
//     constructor() {
//         super();
//         this.dynam = document.querySelector(".dynamic > input")
//         this.editAmountOfInputs();
//     }
//     private editAmountOfInputs(): void {
//         this.dynam.addEventListener("input", () => {
//             this.removeOrAdd(+this.dynam.value)
//         })
//     }
//     private removeOrAdd(inp: number): void {
// REMOVE THEM ALL
// let test =document.querySelector(".inputs > inputs")
//    console.log(test)

//    this.inputs.item(0).remove();
// if they are less 
// if (inp == this.inputs.length) { return }
// // catch it into array 
// if (inp <= this.inputs.length && inp >0) {
//     for(let i = inp; i>0;i--){
//         this.inputs.item(i).remove();
//     }

// }
//remove everything append
//     }
// }
const test = new MaxApp();