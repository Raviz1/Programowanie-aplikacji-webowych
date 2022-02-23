// import {test} from './Input';

// class App 

import { Input } from './Input';


// const test = new Input("root");
// console.log(test.input)


interface IManagingSubs {
    attach(observer: Element): void;

    notify(): void;
}

class App implements IManagingSubs {
    public stateAPI: any;
    private observers: Element[] = [];

    constructor() {


        this.stateAPI = "chuj";

    }

    public attach(observer: Element): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
       
        }
    }
}


interface IObserver {
    update(subject: IManagingSubs, num: number): void;
}
class Element {
    // public state: number;

    public update(subject: IManagingSubs): void {
        if (subject instanceof App && subject.stateAPI < 3) {
          
            console.log('ConcreteObserverA: Reacted to the event.');
     
        }
    }
    // public showState(): void {
    //     console.log(this.showState)
    // }

}


const test = new App();
test.attach(new Element());
test.attach(new Element());


test.stateAPI = "chuj";
test.notify();