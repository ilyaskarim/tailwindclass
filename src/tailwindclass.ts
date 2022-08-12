export interface TailwindClassProps {
  default?: string;
  hover?: string;
  focus?: string;
  active?: string;
  first?: string;
  last?: string;
  odd?: string;
  even?: string;
  selection?: string;
  lg?: string;
  sm?: string;
  xl?: string;
  _2xl?: string;
  dark?: string;
  print?: string;
  ltr?: string;
  rtl?: string;
  open?: string;
  marker?: string;
  placeholder?: string;
  after?: string;
  before?: string;
  file?: string;
  backdrop?: string;
  landscape?: string;
  portrait?: string;
  "group-hover"?: string;
  "first-line"?: string;
  "first-letter"?: string;
  [key: string]: string;
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

export default tailwindclass;
