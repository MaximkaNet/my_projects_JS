export const game = {
    isInitialized: false,
    controls: document.querySelector('#controls'),
    valueBlock: document.querySelector('#value'),
    min: 0,
    max: 100,
    value: 50,

    init() {
        if (!this.isInitialized) {
            const self = this;
            self.reset();
            this.controls.addEventListener('click', function (event) {
                const element = event.target;
                switch (element.id) {
                    case 'more':
                        self.more();
                        break;
                    case 'less':
                        self.less();
                        break;
                }
                self.print();
                if (self.isWin()) {
                    alert(`Your value is ${self.value}`);
                    self.reset();
                    self.print();
                }
            });
            this.isInitialized = true;
        }
    },
    more() {
        this.min = this.value;
        // this.value += parseInt((this.max - this.value) / 2);
        this.value = Math.trunc((this.max + this.value) / 2);
        console.log('more');
        console.log(`min: ${this.min}`);
        console.log(`max: ${this.max}`);
        console.log(`value: ${this.value}`);
    },
    less() {
        this.max = this.value;
        // this.value -= parseInt((this.value - this.min) / 2);
        this.value = Math.trunc((this.min + this.value) / 2);
        console.log('less');
        console.log(`min: ${this.min}`);
        console.log(`max: ${this.max}`);
        console.log(`value: ${this.value}`);
    },
    isWin() {
        return this.max - this.min <= 2;
        // return this.value === this.min || this.value === this.max ? true : false;
    },
    reset() {
        this.value = 50;
        this.min = 0;
        this.max = 100;
        console.clear();
    },
    print() {
        this.valueBlock.textContent = this.value;
    }
};