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
            return ((0, jsx_runtime_1.jsx)("g", { id: 'Skin/\uD83D\uDC76\uD83C\uDFFD-03-Brown', mask: "url(#".concat(this.props.maskID, ")"), fill: color, children: (0, jsx_runtime_1.jsx)("g", { transform: 'translate(0.000000, 0.000000) ', id: 'Color', children: (0, jsx_runtime_1.jsx)("rect", { x: '0', y: '0', width: '264', height: '280' }) }) }));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Auburn = makeColor('Auburn', '#A55728');
var Black = makeColor('Black', '#2C1B18');
var Blonde = makeColor('Blonde', '#B58143');
var BlondeGolden = makeColor('BlondeGolden', '#D6B370');
var Brown = makeColor('Brown', '#724133');
var BrownDark = makeColor('BrownDark', '#4A312C');
var PastelPink = makeColor('PastelPink', '#F59797');
var Blue = makeColor('Blue', '#000fdb');
var Platinum = makeColor('Platinum', '#ECDCBF');
var Red = makeColor('Red', '#C93305');
var SilverGray = makeColor('SilverGray', '#E8E1E1');
var HairColor = /** @class */ (function (_super) {
    __extends(HairColor, _super);
    function HairColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HairColor.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)(options_1.Selector, { option: options_1.HairColorOption, defaultOption: BrownDark, children: [(0, jsx_runtime_1.jsx)(Auburn, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Black, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Blonde, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(BlondeGolden, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Brown, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(BrownDark, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(PastelPink, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Blue, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Platinum, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Red, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(SilverGray, { maskID: this.props.maskID })] }));
    };
    return HairColor;
}(React.Component));
exports.default = HairColor;
