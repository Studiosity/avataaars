"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Selector;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var OptionContextProvider_1 = require("./OptionContextProvider");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for ".concat(component));
    }
    return optionValue;
}
function Selector(_a) {
    var option = _a.option, defaultOption = _a.defaultOption, children = _a.children;
    var optionContext = (0, OptionContextProvider_1.useOptionContext)();
    var _b = React.useReducer(function (x) { return x + 1; }, 0), forceUpdate = _b[1];
    var optionContextUpdate = React.useCallback(function () {
        forceUpdate();
    }, []);
    var updateOptionValues = React.useCallback(function () {
        if (!children)
            return;
        var values = React.Children.map(children, function (child) { return getComponentOptionValue(child.type); });
        if (new Set(values).size !== (values === null || values === void 0 ? void 0 : values.length)) {
            throw new Error('Duplicate values');
        }
        optionContext.setOptions(option.key, values);
    }, [children, option.key, optionContext]);
    React.useEffect(function () {
        var defaultValue = typeof defaultOption === 'string' ? defaultOption : getComponentOptionValue(defaultOption);
        optionContext.addStateChangeListener(optionContextUpdate);
        optionContext.optionEnter(option.key);
        var optionState = optionContext.getOptionState(option.key);
        updateOptionValues();
        if (optionState) {
            optionContext.setDefaultValue(option.key, defaultValue);
        }
        return function () {
            optionContext.removeStateChangeListener(optionContextUpdate);
            optionContext.optionExit(option.key);
        };
    }, [option.key, defaultOption, optionContext, optionContextUpdate, updateOptionValues]);
    React.useEffect(function () {
        updateOptionValues();
    }, [updateOptionValues]);
    var result = null;
    var value = optionContext.getValue(option.key);
    React.Children.forEach(children, function (child) {
        if (getComponentOptionValue(child.type) === value) {
            result = child;
        }
    });
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: result });
}
