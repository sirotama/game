class Map {
    constructor(x, y){
        this._map;
        this.init(x, y);
    }

    init(_x, _y) {
        this._map = new Array(_x);
        for(let y = 0; y < _y; y++) {
            this._map[y] = new Array(_y).fill(0);
        }
    }

    getMap() {
        return this._map;
    }

    getTileByPosition(x, y) {
        return this._map[x][y];
    }

    setTileState(x, y, v) {
        this._map[x, y] = v;
        return true;
    }
}

module.exports = Map;