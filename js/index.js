"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';




const form = {
    changeSelect(select) {
        const target_value = select.target.value;
        const results = document.querySelector('#results');
        let html = '';

        console.log('Select changed!', target_value);
        if (target_value === 'circle') {
            const circle = new Circle('Circle', 1);
            
        } else if (target_value === 'rectangle') {
            const rectangle = new Rectangle('Rectangle', 1, 1);
            html = rectangle.htmlString();
        } else if (target_value === 'square') {
            const square = new Square('Square', 1);
            html = square.htmlString();
        }

        results.innerHTML = html;
    },
    init() {
        console.log('Form init!');
        const select = document.querySelector('#select');
        select.addEventListener('change', this.changeSelect);
    },
    inputElementsWithLabel(shape, id) {
        
    },
    submitForm(e) {

    }
};

form.init();