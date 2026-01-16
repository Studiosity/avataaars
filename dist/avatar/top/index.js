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
var Eyepatch_1 = require("./Eyepatch");
var Hat_1 = require("./Hat");
var Hijab_1 = require("./Hijab");
var LongHairBigHair_1 = require("./LongHairBigHair");
var LongHairBob_1 = require("./LongHairBob");
var LongHairBun_1 = require("./LongHairBun");
var LongHairCurly_1 = require("./LongHairCurly");
var LongHairCurvy_1 = require("./LongHairCurvy");
var LongHairDreads_1 = require("./LongHairDreads");
var LongHairFrida_1 = require("./LongHairFrida");
var LongHairFro_1 = require("./LongHairFro");
var LongHairFroBand_1 = require("./LongHairFroBand");
var LongHairMiaWallace_1 = require("./LongHairMiaWallace");
var LongHairNotTooLong_1 = require("./LongHairNotTooLong");
var LongHairShavedSides_1 = require("./LongHairShavedSides");
var LongHairStraight_1 = require("./LongHairStraight");
var LongHairStraight2_1 = require("./LongHairStraight2");
var LongHairStraightStrand_1 = require("./LongHairStraightStrand");
var NoHair_1 = require("./NoHair");
var ShortHairDreads01_1 = require("./ShortHairDreads01");
var ShortHairDreads02_1 = require("./ShortHairDreads02");
var ShortHairFrizzle_1 = require("./ShortHairFrizzle");
var ShortHairShaggyMullet_1 = require("./ShortHairShaggyMullet");
var ShortHairShortCurly_1 = require("./ShortHairShortCurly");
var ShortHairShortFlat_1 = require("./ShortHairShortFlat");
var ShortHairShortRound_1 = require("./ShortHairShortRound");
var ShortHairShortWaved_1 = require("./ShortHairShortWaved");
var ShortHairSides_1 = require("./ShortHairSides");
var ShortHairTheCaesar_1 = require("./ShortHairTheCaesar");
var ShortHairTheCaesarSidePart_1 = require("./ShortHairTheCaesarSidePart");
var StudiosityTutorHat_1 = require("./StudiosityTutorHat");
var Turban_1 = require("./Turban");
var WinterHat1_1 = require("./WinterHat1");
var WinterHat2_1 = require("./WinterHat2");
var WinterHat3_1 = require("./WinterHat3");
var WinterHat4_1 = require("./WinterHat4");
var options_1 = require("../../options");
var Top = /** @class */ (function (_super) {
    __extends(Top, _super);
    function Top() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Top.prototype.render = function () {
        var children = this.props.children;
        return ((0, jsx_runtime_1.jsxs)(options_1.Selector, { defaultOption: LongHairStraight_1.default, option: options_1.TopOption, children: [(0, jsx_runtime_1.jsx)(NoHair_1.default, { children: children }), (0, jsx_runtime_1.jsx)(Eyepatch_1.default, { children: children }), (0, jsx_runtime_1.jsx)(Hat_1.default, { children: children }), (0, jsx_runtime_1.jsx)(Hijab_1.default, { children: children }), (0, jsx_runtime_1.jsx)(Turban_1.default, { children: children }), (0, jsx_runtime_1.jsx)(WinterHat1_1.default, { children: children }), (0, jsx_runtime_1.jsx)(WinterHat2_1.default, { children: children }), (0, jsx_runtime_1.jsx)(WinterHat3_1.default, { children: children }), (0, jsx_runtime_1.jsx)(WinterHat4_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairBigHair_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairBob_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairBun_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairCurly_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairCurvy_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairDreads_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairFrida_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairFro_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairFroBand_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairNotTooLong_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairShavedSides_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairMiaWallace_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairStraight_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairStraight2_1.default, { children: children }), (0, jsx_runtime_1.jsx)(LongHairStraightStrand_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairDreads01_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairDreads02_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairFrizzle_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairShaggyMullet_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairShortCurly_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairShortFlat_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairShortRound_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairShortWaved_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairSides_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairTheCaesar_1.default, { children: children }), (0, jsx_runtime_1.jsx)(ShortHairTheCaesarSidePart_1.default, { children: children }), (0, jsx_runtime_1.jsx)(StudiosityTutorHat_1.default, { children: children })] }));
    };
    return Top;
}(React.Component));
exports.default = Top;
