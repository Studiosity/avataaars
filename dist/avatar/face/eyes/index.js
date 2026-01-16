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
var Close_1 = require("./Close");
var Cry_1 = require("./Cry");
var Default_1 = require("./Default");
var Dizzy_1 = require("./Dizzy");
var EyeRoll_1 = require("./EyeRoll");
var Happy_1 = require("./Happy");
var Hearts_1 = require("./Hearts");
var Side_1 = require("./Side");
var Squint_1 = require("./Squint");
var Surprised_1 = require("./Surprised");
var Wink_1 = require("./Wink");
var WinkWacky_1 = require("./WinkWacky");
var options_1 = require("../../../options");
var Eyes = /** @class */ (function (_super) {
    __extends(Eyes, _super);
    function Eyes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyes.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)(options_1.Selector, { defaultOption: Default_1.default, option: options_1.EyesOption, children: [(0, jsx_runtime_1.jsx)(Close_1.default, {}), (0, jsx_runtime_1.jsx)(Cry_1.default, {}), (0, jsx_runtime_1.jsx)(Default_1.default, {}), (0, jsx_runtime_1.jsx)(Dizzy_1.default, {}), (0, jsx_runtime_1.jsx)(EyeRoll_1.default, {}), (0, jsx_runtime_1.jsx)(Happy_1.default, {}), (0, jsx_runtime_1.jsx)(Hearts_1.default, {}), (0, jsx_runtime_1.jsx)(Side_1.default, {}), (0, jsx_runtime_1.jsx)(Squint_1.default, {}), (0, jsx_runtime_1.jsx)(Surprised_1.default, {}), (0, jsx_runtime_1.jsx)(Wink_1.default, {}), (0, jsx_runtime_1.jsx)(WinkWacky_1.default, {})] }));
    };
    return Eyes;
}(React.Component));
exports.default = Eyes;
