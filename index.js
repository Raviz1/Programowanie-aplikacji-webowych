"use strict";
// enum for buttons 
var Buttons;
(function (Buttons) {
    Buttons["a"] = "a";
    Buttons["s"] = "s";
    Buttons["d"] = "d";
    Buttons["f"] = "f";
    Buttons["h"] = "h";
    Buttons["j"] = "j";
    Buttons["k"] = "k";
    Buttons["l"] = "l";
})(Buttons || (Buttons = {}));
class MainWindow {
    constructor() {
        this.buttonsLocation = document.getElementById('buttons');
        this.playerslocation = document.getElementById('players');
        // this.appendAudio(8);
        this.createButtons(Buttons);
        new Recorder(this.playerslocation);
        new Recorder(this.playerslocation);
        this.watchWindow();
    }
    watchWindow() {
        document.addEventListener('keypress', (e) => {
            if (Buttons[e.key]) {
                this.playSound(Object.keys(Buttons).indexOf(Buttons[e.key]) + 1);
            }
        });
    }
    createButtons(e) {
        Object.values(e).forEach((e, index) => {
            var _a;
            let x = document.createElement('button');
            x.textContent = String(e);
            x.addEventListener('click', () => {
                this.playSound(index);
            });
            (_a = this.buttonsLocation) === null || _a === void 0 ? void 0 : _a.appendChild(x);
        });
    }
    playSound(num) {
        const audio = new Audio(`./audio/${num}.wav`);
        audio.play();
    }
}
class Recorder {
    constructor(where) {
        this.state = false;
        this.events = [];
        this.createButtons(where);
    }
    createButtons(where) {
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
        });
        y.addEventListener('click', () => {
            this.stop();
        });
        z.addEventListener('click', () => {
            this.replay();
        });
        i.addEventListener('click', () => {
            this.events = [];
            // x.removeEventListener('click',()=>{}, true);
        });
        where === null || where === void 0 ? void 0 : where.appendChild(x);
        where === null || where === void 0 ? void 0 : where.appendChild(y);
        where === null || where === void 0 ? void 0 : where.appendChild(z);
        where === null || where === void 0 ? void 0 : where.appendChild(i);
    }
    start() {
        this.state = true;
        // document.dispatchEvent(new KeyboardEvent('keypress',  {'key':'h'}));
        this.recordEvents();
    }
    stop() {
        this.state = false;
        console.log(this.state);
    }
    replay() {
        this.state = false;
        let firstEvent = this.events[0];
        this.events.forEach((elem) => {
            console.log(elem[0].key, elem[1] - firstEvent[1]);
            setTimeout(() => {
                document.dispatchEvent(new KeyboardEvent('keypress', elem[0]));
            }, elem[1] - firstEvent[1]);
        });
    }
    recordEvents() {
        document.addEventListener('keydown', (e) => {
            if (this.state) {
                let date = new Date();
                this.events.push([e, date]);
                console.log(this.events);
            }
        });
    }
}
const main = new MainWindow();
