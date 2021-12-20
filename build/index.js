"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesRoutes_1 = __importDefault(require("./routes/imagesRoutes"));
var port = 3000;
var app = (0, express_1.default)();
app.listen(port, function () {
    console.log('welcome');
});
app.use('/api', imagesRoutes_1.default);
app.use(function (req, res) {
    res.status(404).send('page not found please enter correct URL');
});
exports.default = app;
// http://localhost:3000/api/images?filename=fjord&width=200&height=500
