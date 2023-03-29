import Figure from "./Figure.js";

export default class Circle extends Figure {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
        this.area = Math.PI * radius * radius;
        this.diameter = radius * 2;
        this.circumference = 2 * Math.PI * radius;
    }
    diameter() {
        return this.diameter;
    }
    area() {
        return this.area;
    }
    circumference() {

    }
}
