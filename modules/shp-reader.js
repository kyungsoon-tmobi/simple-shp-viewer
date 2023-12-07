class ShpReader {
    constructor(shpArrayBuffer, shxArrayBuffer, dbfArrayBuffer) {
        this.shp = shpArrayBuffer;
        this.shx = shxArrayBuffer;
        this.dbf = dbfArrayBuffer;

        this._parseHeader();
    }

    _parseHeader() {
        const view = new DataView(this.shp);
        console.log(view.getInt32(0));
    }

    featureIterator() {
        return {
            next() {
                return { done: true, value: undefined };
            },

            [Symbol.iterator]() {
                return this;
            }
        };
    }
}

export default ShpReader;
