export interface TailwindClassProps {
    default?: string;
    hover?: Array<string>;
    focus?: Array<string>;
    active?: Array<string>;
    first?: Array<string>;
    last?: Array<string>;
    odd?: Array<string>;
    even?: Array<string>;
    selection?: Array<string>;
    lg?: Array<string>;
    sm?: Array<string>;
    xl?: Array<string>;
    _2xl?: Array<string>;
    dark?: Array<string>;
    print?: Array<string>;
    ltr?: Array<string>;
    rtl?: Array<string>;
    open?: Array<string>;
    placeholder?: Array<string>;
    after?: Array<string>;
    before?: Array<string>;
    file?: Array<string>;
}
declare const tailwindclass: (props: TailwindClassProps) => string;
export default tailwindclass;
