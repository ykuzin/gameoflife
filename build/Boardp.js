"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cell_1 = require("./Cell");
class Boardp {
    constructor(prob) {
        this.Board = new Array();
        for (let i = 0; i < 10; i++) {
            let row = new Array();
            for (let j = 0; j < 10; j++) {
                if ((Math.random() / 100) > prob) {
                    row.push(new Cell_1.Cell(true));
                }
                else {
                    row.push(new Cell_1.Cell(false));
                }
            }
            this.Board.push(row);
        }
    }
    updateOne(x, y) {
        let sum = 0;
        if (x - 1 >= 0) {
            if (y - 1 >= 0) {
                if (Number(this.Board[x - 1][y - 1].getState())) {
                    sum++;
                }
            }
            if (Number(this.Board[x - 1][y].getState())) {
                sum++;
            }
            if (y + 1 <= 10) {
                if (Number(this.Board[x - 1][y + 1].getState())) {
                    sum++;
                }
            }
        }
        if (y - 1 >= 0) {
            if (Number(this.Board[x][y - 1].getState())) {
                sum++;
            }
        }
        if (y + 1 <= 10) {
            if (Number(this.Board[x][y + 1].getState())) {
                sum++;
            }
        }
        if (x + 1 <= 10) {
            if (y - 1 >= 0)
                if (Number(this.Board[x + 1][y - 1].getState())) {
                    sum++;
                }
            if (Number(this.Board[x + 1][y].getState())) {
                sum++;
            }
            if (y + 1 <= 10) {
                if (Number(this.Board[x + 1][y + 1].getState())) {
                    sum++;
                }
            }
        }
        return sum;
    }
    sdohnet_li() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let x = this.updateOne(i, j);
                if (x == 3) {
                    this.Board[i][j].setNewState(true);
                }
                else if (x == 2) {
                    this.Board[i][j].getState();
                }
                else if (x < 2 || x > 3) {
                    this.Board[i][j].setNewState(false);
                }
            }
        }
    }
    update_conf() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.Board[i][j].updateState();
                console.log(this.Board[i][j].getState);
                console.log(" ");
            }
            console.log("\n");
        }
    }
}
exports.Boardp = Boardp;
//# sourceMappingURL=Boardp.js.map