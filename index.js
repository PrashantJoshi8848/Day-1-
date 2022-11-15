"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// ts variable declear / dynamic types/
var app = 12;
var ball = "hello";
var info = "hi" || 1;
var opt;
opt = ["hello", true];
// ts for begginer functions
function a(x, y) {
    return x + y;
}
console.log(a(2, 3));
var obje = {
    Name: "prashantJoshi",
    Age: 24
};
// inheriance in type script
var games = /** @class */ (function () {
    function games() {
    }
    games.prototype.addname = function (names) {
        this.name = names;
    };
    return games;
}());
var apple = /** @class */ (function (_super) {
    __extends(apple, _super);
    function apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    apple.prototype.getname = function () {
        console.log(this.name);
    };
    return apple;
}(games));
var game = new games();
// names.addname("prashant");
var apples = new apple();
apples.getname();
