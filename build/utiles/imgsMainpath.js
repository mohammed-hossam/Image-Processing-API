"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizedImgsFolderPath = exports.imgsFolderPath = void 0;
var path_1 = __importDefault(require("path"));
exports.imgsFolderPath = path_1.default.resolve(__dirname, "../../assets/");
exports.resizedImgsFolderPath = path_1.default.resolve(__dirname, '../../assets/resized-images/');
