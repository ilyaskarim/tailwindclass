// export type ClassType = string[];

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

const getKey = (key: string) => {
  if (key === "_2xl") {
    return "2xl";
  }
  return key;
};

const tailwindclass = (props: TailwindClassProps) => {
  if (!props) return "";

  return Object.keys(props)
    .map((key: string) => {
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

export default tailwindclass;
