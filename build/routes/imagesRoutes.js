"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeController_1 = __importDefault(require("../controllers/resizeController"));
var queryValidationMiddleware_1 = __importDefault(require("../middlewares/queryValidationMiddleware"));
var router = express_1.default.Router();
router.get('/images', queryValidationMiddleware_1.default, resizeController_1.default);
exports.default = router;
