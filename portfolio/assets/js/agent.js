import { randInt } from "./utils.js";
import { canvas } from "./canvas.js";
import { randVec2, Vec2 } from "./vector.js";

export class Agent {
    constructor(color) {
        this.radius = 5;
        this.color = color;
        this.initPos();
        this.velocity = randVec2(200);
    }

    initPos() {
        this.x = randInt(canvas.width);
        this.y = randInt(canvas.height);
    }
}
