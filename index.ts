
// enum for buttons 
enum Buttons {
    a = "a",
    s = "s",
    d = "d",
    f = "f",

    h = "h",
    j = "j",
    k = "k",
    l = "l"
}


interface IMainWindow {
    // watch whole window for keypresses
    watchWindow: () => void;
    // create buttons  and add them event listener for click
    createButtons: (e: any) => void;
    // 
    // play sound with given file name 
    // playSound: (file : string) => void;
}

class MainWindow implements IMainWindow {
    private buttonsLocation = document.getElementById('buttons');
    private playerslocation = document.getElementById('players');
    constructor() {
        // this.appendAudio(8);
        this.createButtons(Buttons);
        new Recorder(this.playerslocation);
        new Recorder(this.playerslocation);
        new Recorder(this.playerslocation);
        new Recorder(this.playerslocation);
         new Recorder(this.playerslocation);
        new Recorder(this.playerslocation);
         new Recorder(this.playerslocation);
        new Recorder(this.playerslocation); 
        new Recorder(this.playerslocation);
        new Recorder(this.playerslocation);
        this.watchWindow();

    }

    watchWindow(): void {
        document.addEventListener('keypress', (e): void => {
            if (Buttons[e.key as keyof typeof Buttons]) {
                this.playSound(Object.keys(Buttons).indexOf(Buttons[e.key as keyof typeof Buttons]) + 1)
            }
        })

    }

    createButtons(e: any): void {
        Object.values(e).forEach((e: any, index: number) => {
            let x = document.createElement('button');
            x.textContent = String(e);
            x.addEventListener('click', () => {
                this.playSound(index);
            })
            this.buttonsLocation?.appendChild(x);

        })
    }

    playSound(num: number): void {
        const audio = new Audio(`./audio/${num}.wav`)
        audio.play();
    }

}


class Recorder {
    private state: boolean = false;
    private events: any[] = [];
    constructor(where: HTMLElement | null) {
        this.createButtons(where)
    }

    createButtons(where: HTMLElement | null): void {
        let x = document.createElement('button');
        x.textContent = 'start';
        let y = document.createElement('button');
        y.textContent = 'stop';

        let z = document.createElement('button');
        z.textContent = 'replay';
        let i = document.createElement('button');
        i.textContent = 'reset';

        x.addEventListener('click', () => {
            this.start();

        })
        y.addEventListener('click', () => {
            this.stop();
        })
        z.addEventListener('click', () => {
            this.replay();
        })
        i.addEventListener('click', () => {
            this.events = [];
            // x.removeEventListener('click',()=>{}, true);
        })
        where?.appendChild(x);
        where?.appendChild(y);
        where?.appendChild(z);
        where?.appendChild(i);




    }
    start(): void {
        this.state = true;
        // document.dispatchEvent(new KeyboardEvent('keypress',  {'key':'h'}));
        this.recordEvents();
    }

    stop(): void {
        this.state = false;
        console.log(this.state)

    }
    replay(): void {
        this.state = false;
        let firstEvent = this.events[0]
        this.events.forEach((elem) => {
            console.log(elem[0].key, elem[1] - firstEvent[1])
            setTimeout(() => {
                document.dispatchEvent(new KeyboardEvent('keypress', elem[0]));

            }, elem[1] - firstEvent[1])
        })

    }
    recordEvents() {

        document.addEventListener('keydown', (e) => {
            if (this.state) {
                let date = new Date();
                this.events.push([e, date])
                console.log(this.events)
            }
        })

    }
}
const main = new MainWindow();