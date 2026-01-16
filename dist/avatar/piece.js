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
exports.AvatarStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var clothes_1 = require("./clothes");
var Graphics_1 = require("./clothes/Graphics");
var accessories_1 = require("./top/accessories");
var facialHair_1 = require("./top/facialHair");
var top_1 = require("./top");
var eyes_1 = require("./face/eyes");
var eyebrow_1 = require("./face/eyebrow");
var mouth_1 = require("./face/mouth");
var nose_1 = require("./face/nose");
var Skin_1 = require("./Skin");
var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["Circle"] = "Circle";
    AvatarStyle["Tutor"] = "Tutor";
    AvatarStyle["Transparent"] = "Transparent";
})(AvatarStyle || (exports.AvatarStyle = AvatarStyle = {}));
var PieceComponent = /** @class */ (function (_super) {
    __extends(PieceComponent, _super);
    function PieceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieceComponent.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)("svg", { style: this.props.style, width: "".concat(this.props.pieceSize, "px"), height: "".concat(this.props.pieceSize, "px"), viewBox: this.props.viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", children: [this.props.pieceType === 'top' && (0, jsx_runtime_1.jsx)(top_1.default, {}), this.props.pieceType === 'clothe' && (0, jsx_runtime_1.jsx)(clothes_1.default, {}), this.props.pieceType === 'graphics' && (0, jsx_runtime_1.jsx)(Graphics_1.default, { maskID: "1234" }), (this.props.pieceType === 'accessories' ||
                    this.props.pieceType === 'accesories') && (0, jsx_runtime_1.jsx)(accessories_1.default, {}), this.props.pieceType === 'facialHair' && (0, jsx_runtime_1.jsx)(facialHair_1.default, {}), this.props.pieceType === 'eyes' && (0, jsx_runtime_1.jsx)(eyes_1.default, {}), this.props.pieceType === 'eyebrows' && (0, jsx_runtime_1.jsx)(eyebrow_1.default, {}), this.props.pieceType === 'mouth' && (0, jsx_runtime_1.jsx)(mouth_1.default, {}), this.props.pieceType === 'nose' && (0, jsx_runtime_1.jsx)(nose_1.default, {}), this.props.pieceType === 'skin' && (0, jsx_runtime_1.jsx)(Skin_1.default, { maskID: "5678" })] }));
    };
    return PieceComponent;
}(React.Component));
exports.default = PieceComponent;
