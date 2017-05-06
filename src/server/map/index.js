class Map {
    constructor(x, y){
        this._map;
        init(x, y);
    }

    init(x, y) {
        this._map = new Array(x);
        for(let y = 0; y < 3; y++) {
            this._map[y] = new Array(3).fill(0);
        }   
    }

    getMap() {
        return this._map;
    }

    getTileByPosition(x, y) {
        return this._map[x][y];
    }

    setTileState(x, y, v) {
        return true;
    }
}

module.exports = Map;