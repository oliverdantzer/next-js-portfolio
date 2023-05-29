// Unfortunate ugly workaround because importing custom config
// from tailwind doesn't work right

export type Colors = {
  primary: {
    dark: string;
    light: string;
  };
  secondary: {
    dark: {
      DEFAULT: string;
      off: string;
    };
    light: {
      DEFAULT: string;
      off: string;
    };
  };
  accent: {
    dark: string;
    light: string;
  };
  linkedIn: {
    DEFAULT: string;
    off: string;
  };
};

export type TailwindConfig = {
  theme: {
    colors: Colors;
  };
};
