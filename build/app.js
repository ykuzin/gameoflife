"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const Doska = new classes_1.Boardp(0.7);
for (let i = 0; i < 10; i++) {
    Doska.sdohnet_li();
    Doska.update_conf();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
    console.log("\n");
}
//# sourceMappingURL=app.js.map