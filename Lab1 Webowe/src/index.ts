

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
        let nodesToAdd: Array<HTMLInputElement> = [];
        let x = document.createElement("input");
        x.setAttribute("type", "number");
        x.setAttribute("autocomplete", "off")
        count.addEventListener("input", () => {
            nodesToAdd = [];
            document.querySelector(".inputs").innerHTML = "";
            // console.log(count.value)
            for (let i = 0; i < +count.value; i++) {
                nodesToAdd.push(x)
            }

            nodesToAdd.forEach((e) => {
                let x = document.createElement("input");
                x.setAttribute("type", "number");
                x.setAttribute("autocomplete", "off")
                document.querySelector(".inputs").appendChild(x)
            })


            console.log(nodesToAdd)
            let test: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inputs > input")
            this.addEvents(test);
        })



    }

    private addEvents(input?: NodeListOf<HTMLInputElement>): void {
        input.forEach((e) => {
            e.addEventListener("input", () => {
                // this is a value from single input 
                // do 2 things with that p
                this.checkForErrorInInput(e)


            })
        })
    }
    private sum(): number {
        console.log(this.arrs)
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
    private checkForErrorInInput(input: HTMLInputElement): void {

        if ((/^[0-9]+$/.test(input.value))) {
            this.removeImageError();
            this.arrs.push(+input.value);
            this.display();

        } else {
            this.appendImageError()
        }

    }
    private appendImageError(): void {
        let location = document.querySelector(".error");
        let image = document.createElement("img");
        image.setAttribute("src", "./images/errno.png");
        location.appendChild(image);
    }
    private removeImageError(): void {
        let location = document.querySelector(".error > img");
        location?.remove();
    }

}

const test = new MaxApp();