import Figure from "./Figure.js";
 
export default class Rectangle extends Figure {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }

    htmlString() {
        const html = `
        <div class="result">
            <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx"></div>
            <div class="infoBox">
                <h3>${this.name}</h3>
                <dl>
                    <dt>Height</dt>
                    <dd>${this.height} px</dd>

                    <dt>Width</dt>
                    <dd>${this.width} px</dd>

                    <dt>Area</dt>
                    <dd>${this.area()} px</dd>

                    <dt>Circumference</dt>
                    <dd>CIRCUMFERENCE px</dd>
                </dl>
            </div>
        </div>
        `;
        return html;
    }
}
