/*
 * RanSize.js
 * Dhanush Adithya
 * © 2019
 * 
 * Feel Free to use this code
 */

class RanSize {
    constructor(id, controls = {}) {
        this.controls = {
            min: controls.min || 1,
            max: controls.max || 2,
            colors: controls.colors || false,
            pattern: controls.pattern || false,
            value: controls.value || [1, 1.2, 1.4, 1.6, 1.8, 2],
            class: controls.class || ''
        };
        this.i = -1;
        this.id = id;
        this.final = '';
        this.randomSize = (max, min) => (Math.random() * (max - min)) + min; // + 9.6 to see the text ^^ imagine fontsize = 0...
        this.ranCol = () => this.controls.colors === true ? `rgb( ${Math.floor(Math.random() * 255) + 1} ,${Math.floor(Math.random() * 255) + 1} ,${Math.floor(Math.random() * 255) + 1})` : "currentColor";
        this.coolPattern = () => {
            this.i === (this.controls.value.length) - 1 ? this.i = 0 : this.i += 1;
            return this.controls.value[this.i]
        };
    }

    get getText() {
        return document.querySelector("#" + this.id).innerText;
    }

    apply() {
        this.final='';
        this.getText.split('').forEach(letter => {
            this.final += `<span class = "${this.controls.class}" style = "
                font-size: ${
                    this.controls.pattern === true ? this.coolPattern() +'em' : this.randomSize(this.controls.max, this.controls.min)+'em'
                };
                color: ${this.ranCol()};
            ">${letter}</span>`
        });
        document.querySelector("#" + this.id).innerHTML = this.final;
    }
}