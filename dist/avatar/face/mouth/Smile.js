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
var lodash_1 = require("lodash");
var Smile = /** @class */ (function (_super) {
    __extends(Smile, _super);
    function Smile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Smile.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return ((0, jsx_runtime_1.jsxs)("g", { id: 'Mouth/Smile', transform: 'translate(2.000000, 52.000000)', children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("path", { d: 'M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z', id: path1 }) }), (0, jsx_runtime_1.jsx)("mask", { id: mask1, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path1 }) }), (0, jsx_runtime_1.jsx)("use", { id: 'Mouth', fillOpacity: '0.699999988', fill: '#000000', fillRule: 'evenodd', xlinkHref: '#' + path1 }), (0, jsx_runtime_1.jsx)("rect", { id: 'Teeth', fill: '#FFFFFF', fillRule: 'evenodd', mask: "url(#".concat(mask1, ")"), x: '39', y: '2', width: '31', height: '16', rx: '5' }), (0, jsx_runtime_1.jsx)("g", { id: 'Tongue', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#".concat(mask1, ")"), fill: '#FF4F6D', children: (0, jsx_runtime_1.jsxs)("g", { transform: 'translate(38.000000, 24.000000)', children: [(0, jsx_runtime_1.jsx)("circle", { cx: '11', cy: '11', r: '11' }), (0, jsx_runtime_1.jsx)("circle", { cx: '21', cy: '11', r: '11' })] }) })] }));
    };
    Smile.optionValue = 'Smile';
    return Smile;
}(React.Component));
exports.default = Smile;
