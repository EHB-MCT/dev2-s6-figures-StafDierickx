import Figure from "./Figure.js";

export default class Square extends Figure {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    htmlString() {
     
        console.log("square html: ",this.name)
        const html = `
        <div class="result">
            <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx"></div>
            <div class="infoBox">
                <h3>${this.name}</h3>
                <dl>
                    <dt>Height</dt>
                    <dd>${this.side} px</dd>

                    <dt>Width</dt>
                    <dd>${this.side} px</dd>

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

/* <label>
Width
<input type="number" id="width" min="1" max="100" value="1">
</label>
<label>
Height
<input type="number" id="height" min="1" max="100" value="1">
</label> */