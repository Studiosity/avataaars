"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allOptions = exports.SkinOption = exports.MouthOption = exports.EyebrowOption = exports.EyesOption = exports.GraphicOption = exports.ClotheColorOption = exports.ClotheOption = exports.FacialHairColor = exports.FacialHairOption = exports.HairColorOption = exports.HatColorOption = exports.AccessoriesOption = exports.TopOption = exports.useOptionContext = exports.OptionContextProvider = exports.Selector = exports.OptionContext = exports.Option = void 0;
var Option_1 = require("./Option");
var Option_2 = require("./Option");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return Option_2.default; } });
var OptionContext_1 = require("./OptionContext");
Object.defineProperty(exports, "OptionContext", { enumerable: true, get: function () { return OptionContext_1.default; } });
var Selector_1 = require("./Selector");
Object.defineProperty(exports, "Selector", { enumerable: true, get: function () { return Selector_1.default; } });
var OptionContextProvider_1 = require("./OptionContextProvider");
Object.defineProperty(exports, "OptionContextProvider", { enumerable: true, get: function () { return OptionContextProvider_1.OptionContextProvider; } });
Object.defineProperty(exports, "useOptionContext", { enumerable: true, get: function () { return OptionContextProvider_1.useOptionContext; } });
exports.TopOption = new Option_1.default({
    key: 'topType',
    label: 'Top',
});
exports.AccessoriesOption = new Option_1.default({
    key: 'accessoriesType',
    label: '↳ 👓 Accessories',
});
exports.HatColorOption = new Option_1.default({
    key: 'hatColor',
    label: '🎨 HatColor',
});
exports.HairColorOption = new Option_1.default({
    key: 'hairColor',
    label: '↳ 💈 Hair Color',
});
exports.FacialHairOption = new Option_1.default({
    key: 'facialHairType',
    label: 'Facial Hair',
});
exports.FacialHairColor = new Option_1.default({
    key: 'facialHairColor',
    label: '↳ ✂️ Facial Hair Color',
});
exports.ClotheOption = new Option_1.default({
    key: 'clotheType',
    label: '👔 Clothes',
});
exports.ClotheColorOption = new Option_1.default({
    key: 'clotheColor',
    label: '↳ Color Fabric',
});
exports.GraphicOption = new Option_1.default({
    key: 'graphicType',
    label: '↳ Graphic',
});
exports.EyesOption = new Option_1.default({
    key: 'eyeType',
    label: '👁 Eyes',
});
exports.EyebrowOption = new Option_1.default({
    key: 'eyebrowType',
    label: '✏️ Eyebrow',
});
exports.MouthOption = new Option_1.default({
    key: 'mouthType',
    label: '👄 Mouth',
});
exports.SkinOption = new Option_1.default({
    key: 'skinColor',
    label: '🎨 Skin',
});
exports.allOptions = [
    exports.TopOption,
    exports.AccessoriesOption,
    exports.HatColorOption,
    exports.HairColorOption,
    exports.FacialHairOption,
    exports.FacialHairColor,
    exports.ClotheOption,
    exports.ClotheColorOption,
    exports.GraphicOption,
    exports.EyesOption,
    exports.EyebrowOption,
    exports.MouthOption,
    exports.SkinOption,
];
