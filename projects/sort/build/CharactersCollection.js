"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactesCollection = void 0;
// importing classes
const Sorter_1 = require("./Sorter");
class CharactesCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('');
    }
}
exports.CharactesCollection = CharactesCollection;
