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
        const parsedValue = value
            .trim()
            .split(" ")
            .map((v) => `${getKey(key)}:${v}`)
            .join(" ");
        return parsedValue.trim();
    })
        .join(" ")
        .trim();
};
exports.default = tailwindclass;
//# sourceMappingURL=tailwindclass.js.map