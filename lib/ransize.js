/*
 * RanSize.js
 * Dhanush Adithya
 * © 2019
 *
 * Feel Free to use this code
 */

class RanSize {
	/**
	 * Creates an instance of RanSize.
	 * @param {string} id
	 * @param {object} [controls={}]
	 * @memberof RanSize
	 */
	constructor(id, controls = {}) {
		this.controls = {
			min      : controls.min       || 1,
			max      : controls.max       || 2,
			colors   : controls.colors    || '',
			pattern  : controls.pattern   || false,
			value    : controls.value     || [1, 1.4, 1.8, 2.2, 1.8, 1.4, 1],
			class    : controls.class     || '',
			rotate   : controls.rotate    || false,
			text     : controls.text      || ''
		};
		this.i = this.j = -1;
		this.id = id;
		this.final = '';
		this.randRGB = () => Math.floor(Math.random() * 255) + 1;
		this.randomSize = (max, min) => (Math.random() * (max - min)) + min; // + 9.6 to see the text ^^ imagine fontsize = 0...
		this.ranCol = () => `rgb(${this.randRGB()}, ${this.randRGB()}, ${this.randRGB()})`;
		this.coolPattern = () => {
			this.i === (this.controls.value.length) - 1 ? this.i = 0 : this.i += 1;
			return this.controls.value[this.i]
		};
		this.colPtrn = () => {
			this.j === (this.controls.colors.length) - 1 ? this.j = 0 : this.j += 1;
			return this.controls.colors[this.j]
		};
		this.rotateText = () => this.randomSize(10, -10);
	}

	/**
	 * @readonly
	 * @memberof RanSize
	 */
	get getText() {
		return ((document.querySelector("#" + this.id).innerText) + this.controls.text).split('');
	}

	/**
	 * @memberof RanSize
	 */
	apply() {
		this.final = '';
		this.getText.forEach(letter => {
			this.final += `<span class = "${this.controls.class}" style = "
                font-size: ${
                    this.controls.pattern ? this.coolPattern() +'em' : this.randomSize(this.controls.max, this.controls.min)+'em'
                };${this.controls.colors == 'random' ? `
                color: ${this.ranCol()};` : `color: ${this.colPtrn()};`}${this.controls.rotate === true ? `
                display: inline-block;
                transform: rotate(${this.rotateText()+'deg'})` : ''}
            ">${letter}</span>`
		});
		document.querySelector("#" + this.id).innerHTML = this.final;
	}
}