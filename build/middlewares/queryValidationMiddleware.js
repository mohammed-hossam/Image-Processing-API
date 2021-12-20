"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function queryValidationMiddleware(req, res, next) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    var filenamePath = path_1.default.resolve(__dirname, "../../assets/".concat(filename, ".jpg"));
    if (!filename || !width || !height) {
        res.status(400).send('Missing queries, please enter correct URL,<br>URL should contain: filename-width-height');
    }
    else if (fs_1.default.existsSync(filenamePath) &&
        Number(width) > 0 &&
        Number(height) > 0) {
        next();
    }
    else {
        res.status(400)
            .send("Please follow this rules to have a correct URL:<br>\n         1)Filename should be one of the given names<br>\n         2)Width and height should be numbers more than zero\n        ");
    }
}
exports.default = queryValidationMiddleware;
