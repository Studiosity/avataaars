"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOptionContext = exports.OptionContextProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var OptionContextReactContext = React.createContext(null);
var OptionContextProvider = function (_a) {
    var optionContext = _a.optionContext, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(OptionContextReactContext.Provider, { value: optionContext, children: children }));
};
exports.OptionContextProvider = OptionContextProvider;
var useOptionContext = function () {
    var context = React.useContext(OptionContextReactContext);
    if (!context) {
        throw new Error('useOptionContext must be used within OptionContextProvider');
    }
    return context;
};
exports.useOptionContext = useOptionContext;
exports.default = OptionContextReactContext;
