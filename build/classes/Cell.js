"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cell {
    constructor(new_state) {
        this.new_state = new_state;
        this.state = this.new_state;
    }
    setNewState(new_state) {
        this.new_state = new_state;
    }
    updateState() {
        this.state = this.new_state;
    }
    getState() {
        return this.state;
    }
}
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map