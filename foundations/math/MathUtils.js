function Clamp01(value) {
    if (value < 0) {
        return 0;
    }
    if (value > 1) {
        return 1;
    }
    return value;
}

function Lerp(a, b, t) {
    return a + (b - a) * Clamp01(t);
}

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static Lerp(a, b, t) {
        t = Clamp01(t);
        return new Vector2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    }
}