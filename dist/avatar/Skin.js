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
var options_1 = require("../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return ((0, jsx_runtime_1.jsx)("g", { id: "Skin/\uD83D\uDC76\uD83C\uDFFD-03-Brown", mask: "url(#".concat(this.props.maskID, ")"), fill: color, children: (0, jsx_runtime_1.jsx)("g", { transform: "translate(0.000000, 0.000000)", id: "Color", children: (0, jsx_runtime_1.jsx)("rect", { x: "0", y: "0", width: "264", height: "280" }) }) }));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Grey = makeColor('Grey', '#AFAFAF');
var Tanned = makeColor('Tanned', '#FD9841');
var Yellow = makeColor('Yellow', '#F8D25C');
var Pale = makeColor('Pale', '#FFDBB4');
var Light = makeColor('Light', '#EDB98A');
var Brown = makeColor('Brown', '#D08B5B');
var DarkBrown = makeColor('DarkBrown', '#AE5D29');
var Black = makeColor('Black', '#614335');
var Skin = /** @class */ (function (_super) {
    __extends(Skin, _super);
    function Skin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skin.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)(options_1.Selector, { option: options_1.SkinOption, defaultOption: Grey, children: [(0, jsx_runtime_1.jsx)(Grey, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Tanned, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Yellow, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Pale, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Light, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Brown, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(DarkBrown, { maskID: this.props.maskID }), (0, jsx_runtime_1.jsx)(Black, { maskID: this.props.maskID })] }));
    };
    return Skin;
}(React.Component));
exports.default = Skin;
