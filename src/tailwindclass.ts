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
  [key: string]: Array<string> | string;
}

const getKey = (key: string) => {
  if (key.startsWith("_")) {
    return key.substring(1);
  }
  return key;
};

const tailwindclass = (props: TailwindClassProps) => {
  if (!props) return "";

  return Object.keys(props)
    .map((key: string) => {
      const value = props[key];
      if (key === "default") {
        return props.default.trim();
      }

      if (Array.isArray(value)) {
        return value
          .map((className) => `${getKey(key)}:${className}`.trim())
          .join(" ")
          .trim();
      } else {
        return value.trim();
      }
    })
    .join(" ")
    .trim();
};

export default tailwindclass;
