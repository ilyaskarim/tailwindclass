"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getKey = (key) => {
    if (key.startsWith("_")) {
        return key.substring(1);
    }
    return key;
};
const tailwindclass = (props) => {
    if (!props)
        return "";
    return Object.keys(props)
        .map((key) => {
        const value = props[key];
        if (key === "default") {
            return props.default.trim();
        }
        if (Array.isArray(value)) {
            return value
                .map((className) => `${getKey(key)}:${className}`.trim())
                .join(" ")
                .trim();
        }
        else {
            return value.trim();
        }
    })
        .join(" ")
        .trim();
};
exports.default = tailwindclass;
//# sourceMappingURL=tailwindclass.js.map