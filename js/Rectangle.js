// import Figure from "./Figure.js";
import Square from "./Square.js";
 
export default class Rectangle extends Square {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
        
    }
    area() {
        return this.width * this.height;
    }

    htmlString() {
        console.log("namee",this.name)
        return `
            ${this.name}
        `;
    }
}
