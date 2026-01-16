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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var options_1 = require("../../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return ((0, jsx_runtime_1.jsx)("g", { id: 'Color/Palette/Gray-01', mask: "url(#".concat(this.props.maskID, ")"), fillRule: 'evenodd', fill: color, children: (0, jsx_runtime_1.jsx)("rect", { id: '\uD83D\uDD8DColor', x: '0', y: '0', width: '264', height: '110' }) }));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Black = makeColor('Black', '#262E33');
var Blue01 = makeColor('Blue01', '#65C9FF');
var Blue02 = makeColor('Blue02', '#5199E4');
var Blue03 = makeColor('Blue03', '#25557C');
var Gray01 = makeColor('Gray01', '#E6E6E6');
var Gray02 = makeColor('Gray02', '#929598');
var Heather = makeColor('Heather', '#3C4F5C');
var PastelBlue = makeColor('PastelBlue', '#B1E2FF');
var PastelGreen = makeColor('PastelGreen', '#A7FFC4');
var PastelOrange = makeColor('PastelOrange', '#FFDEB5');
var PastelRed = makeColor('PastelRed', '#FFAFB9');
var PastelYellow = makeColor('PastelYellow', '#FFFFB1');
var Pink = makeColor('Pink', '#FF488E');
var Red = makeColor('Red', '#FF5C5C');
var White = makeColor('White', '#FFFFFF');
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colors.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)(options_1.Selector, { option: options_1.ClotheColorOption, defaultOption: Gray01, children: [(0, jsx_runtime_1.jsx)(Black, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Blue01, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Blue02, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Blue03, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Gray01, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Gray02, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Heather, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(PastelBlue, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(PastelGreen, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(PastelOrange, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(PastelRed, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(PastelYellow, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Pink, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Red, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(White, { maskID: this.props.maskID })] }));
    };
    return Colors;
}(React.Component));
exports.default = Colors;
