class Chara {
    constructor(x, y){
        this.chara = {
            'x': x,
            'y': y, 
        };
    }

    setPosition(position, map) {
        this.chara.x += position.x;
        this.chara.y += position.y;
    }
    getCharaInfo() {
        return this.chara;
    }
}

module.exports = Chara;