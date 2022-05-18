"use strict";
// export type ClassType = string[];
Object.defineProperty(exports, "__esModule", { value: true });
const getKey = (key) => {
    if (key === "_2xl") {
        return "2xl";
    }
    return key;
};
const tailwindclass = (props) => {
    if (!props)
        return "";
    return Object.keys(props)
        .map((key) => {
        if (key === "default") {
            return props.default.trim();
        }
        return props[key]
            .map((className) => `${getKey(key)}:${className}`.trim())
            .join(" ")
            .trim();
    })
        .join(" ")
        .trim();
};
exports.default = tailwindclass;
//# sourceMappingURL=tailwindclass.js.map