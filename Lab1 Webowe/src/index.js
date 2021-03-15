class MinApp {
    constructor() {
        this.arrs = [];
        this.inputs = document.querySelectorAll(".inputs > input");
        this.outputs = document.querySelectorAll(".outputs > input");
        this.addEvents(this.inputs);
    }
    addEvents(input) {
        input.forEach((e) => {
            e.addEventListener("input", () => {
                // this is a value from single input 
                // do 2 things with that p
                this.arrs.push(+e.value);
                this.display();
            });
        });
    }
    sum() {
        return this.arrs.reduce((a, b) => a + b);
    }
    avg() {
        return this.sum() / this.arrs.length;
    }
    sort() {
        return this.arrs.sort((a, b) => a - b);
    }
    display() {
        this.outputs.item(0).value = this.sum().toString();
        this.outputs.item(1).value = this.avg().toString();
        this.outputs.item(2).value = this.sort()[0].toString();
        this.outputs.item(3).value = this.sort()[this.arrs.length - 1].toString();
    }
}
class MaxApp extends MinApp {
    constructor() {
        super();
        this.dynam = document.querySelector(".dynamic > input");
        this.editAmountOfInputs();
    }
    editAmountOfInputs() {
        this.dynam.addEventListener("input", () => {
            this.removeOrAdd(+this.dynam.value);
        });
    }
    removeOrAdd(inp) {
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
    }
}
const test = new MaxApp();
