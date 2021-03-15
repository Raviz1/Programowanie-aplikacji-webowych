"use strict";
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
const test = new MinApp();
