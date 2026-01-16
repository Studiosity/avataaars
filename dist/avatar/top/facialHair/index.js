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
var BeardLight_1 = require("./BeardLight");
var BeardMajestic_1 = require("./BeardMajestic");
var BeardMedium_1 = require("./BeardMedium");
var Blank_1 = require("./Blank");
var MoustacheFancy_1 = require("./MoustacheFancy");
var MoustacheMagnum_1 = require("./MoustacheMagnum");
var options_1 = require("../../../options");
var FacialHair = /** @class */ (function (_super) {
    __extends(FacialHair, _super);
    function FacialHair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacialHair.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)(options_1.Selector, { option: options_1.FacialHairOption, defaultOption: Blank_1.default, children: [(0, jsx_runtime_1.jsx)(Blank_1.default, {}), (0, jsx_runtime_1.jsx)(BeardMedium_1.default, {}), (0, jsx_runtime_1.jsx)(BeardLight_1.default, {}), (0, jsx_runtime_1.jsx)(BeardMajestic_1.default, {}), (0, jsx_runtime_1.jsx)(MoustacheFancy_1.default, {}), (0, jsx_runtime_1.jsx)(MoustacheMagnum_1.default, {})] }));
    };
    return FacialHair;
}(React.Component));
exports.default = FacialHair;
