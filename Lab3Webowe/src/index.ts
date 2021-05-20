import { Input } from './input';
import { Display } from './display';
class App {

    private list: any;

    constructor() {
        console.log("starting app")
        this.list = new Array<Input | Display>(new Input("input"))
        this.renderComponents(this.list);
    }

    renderComponents(arr: any[]) {
        arr.forEach((e) => { e.render() })

    }
}

const test = new App();