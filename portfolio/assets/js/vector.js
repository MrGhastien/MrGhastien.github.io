
export class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get sqrLength() {
        return this.x * this.x + this.y * this.y;
    }

    normalize() {
        this.x = this.x / this.length;
        this.y = this.y / this.length;
    }
}

export function randVec2(radius) {
    var angle = (Math.random() * 2 - 1) * Math.PI;
    var x = Math.cos(angle) * radius;
    var y = Math.sin(angle) * radius;
    return new Vec2(x, y);
}
