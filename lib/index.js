"use strict";
// export type ClassType = string[];
Object.defineProperty(exports, "__esModule", { value: true });
const tailwindclass = (props) => {
    return Object.keys(props)
        .map((key) => {
        if (key === "default") {
            return props.default.trim();
        }
        return props[key]
            .map((className) => `${key}:${className}`.trim())
            .join(" ")
            .trim();
    })
        .join(" ")
        .trim();
};
exports.default = tailwindclass;
//# sourceMappingURL=index.js.map