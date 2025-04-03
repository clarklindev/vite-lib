export const colors = {
  blue: {
    100: '#99d6ff',
    200: '#5cbeff',
    300: '#0A9DFF',
    400: '#007ACC',
    500: '#00568F',
    600: '#000645',
  },

  green: {
    100: '#72afb0',
    200: '#00A949',
    300: '#008439',
    400: '#005424',
  },

  yellow: {
    100: '#E98A15',
    200: '#EA8F1F',
    300: '#CD7A13',
  },

  red: {
    100: '#D00000',
    200: '#A40000',
    300: '#5A0000',
  },

  neutral: {
    100: '#FFFFFF',
    200: '#e4e4e4',
    300: '#d0d0d0',
    400: '#939393',
    500: '#4a4b53',
    600: '#3d3d3d',
    700: '#2d2d2d',
    800: '#212121',
    900: '#1d1d1d',
    1000: '#000000',
  },

  dev: {
    debug: 'pink',
    error: 'red',
  },

  status: {
    warning: '#ed6c02',
    error: '#d32f2f',
    success: '#2e7d32',
    info: '#0288d1',
  },
};

export const transparency = {
  100: 'FF',
  90: 'E6',
  80: 'CC',
  70: 'B3',
  60: '99',
  50: '80',
  40: '66',
  30: '4D',
  20: '33',
  10: '1A',
  0: '00',
};

// components dont point to globals directly - only from theme
export const global = {
  fontFamily: "Roboto, 'sans-serif'",
  color: 'rgba(0,0,0,0.8)',
  backgroundColor: 'white',
  padding: '10px',
  margin: '1rem',
  gap: '5px',

  headingColor: colors.neutral[500],
  headingFontFamily: 'Roboto, Arial, Helvetica, sans-serif',

  borderWidth: '1px',
  border: `1px solid ${colors.neutral[500]}`,
  borderRadius: '5px',

  inputHeight: '40px',
  inputPadding: '0 10px',

  textMarginBottom: '1.5rem',

  dividerColor: colors.neutral[200],
  componentIcons: colors.neutral[400],
};

export type ThemeType = typeof lightTheme;

// theme - styling for components
export const lightTheme = {
  name: 'lightTheme',

  Section: {
    padding: '2rem',
    borderBottom: `1px solid ${global.dividerColor}`,
  },
  Layout: {
    padding: '0 0 2rem',
  },

  Heading: {
    color: global.headingColor,
    lineHeight: '1.3',
    fontWeight: '400',
    fontFamily: global.headingFontFamily,

    fontSize: {
      level1: '1.383rem',
      XXXL: '1.383rem',
      level2: '1.296rem',
      XXL: '1.296rem',
      level3: '1.215rem',
      XL: '1.215rem',
      level4: '1.138rem',
      L: '1.138rem',
      level5: '1.067rem',
      M: '1.067rem',
      level6: '1rem',
      S: '1rem',
      level7: '0.937rem',
      XS: '0.937rem',
      level8: '0.878rem',
      XXS: '0.878rem',
      level9: '0.823rem',
      XXXS: '0.823rem',
    },
  },

  // Button: {
  //   intent: {
  //     primary: 'text-pink-400 bg-green-500 hover:bg-green-600',
  //     contained: {
  //       color: colors.neutral[100],
  //       background: colors.neutral[400],
  //       hover: colors.neutral[500],
  //       border: `1px solid ${colors.neutral[100]}`,
  //     },

  //     outlined: 'bg-transparent text-white border-white',
  //     text: {
  //       color: colors.neutral[500],
  //     },
  //   },
  // },

  Icon: {
    stroke: 'black',
    fill: '',
    fillOpacity: 0,
  },

  //it actually doesnt do anything with the keys, its for developer guide, technically Input can return a string of tailwind classes.
  Input: {
    default: [
      'box-border',
      'cursor-text',
      'outline-none',
      'w-full',
      'p-2',
      'rounded-md',
      'h-10',
      `bg-[${global.backgroundColor}]`,
    ].join(' '),
    color: `text-red-500`,
    inputHeight: `h-[${global.inputHeight}]`,
    border: `border-[${global.border}]`,
    borderRadius: `rounded-[${global.borderRadius}]`,
  },

  Text: {
    color: global.color,
    marginBottom: global.textMarginBottom,
    lineHeight: 'leading-normal	',
  },

  Accordion: {
    title: {
      color: global.headingColor,
    },
    content: {
      color: global.color,
    },
    componentIcons: {
      stroke: global.componentIcons,
      fill: 'none',
    },
  },

  Label: {
    gap: global.gap,
  },

  Divider: {
    color: global.dividerColor,
    borderColor: global.dividerColor,
    backgroundColor: global.dividerColor,
    margin: global.margin,
    border: `${global.borderWidth} solid ${global.dividerColor}`,
  },

  Select: {
    padding: global.padding,
    inputHeight: global.inputHeight,
    inputPadding: global.inputPadding,
    color: global.color,
    backgroundColor: global.backgroundColor,
    border: global.border,
    borderRadius: global.borderRadius,
  },

  Slider: {
    formElementBackground: '#000000',
  },

  Checkbox: {
    borderRadius: global.borderRadius,
    border: global.border,
    backgroundColor: global.backgroundColor,
  },

  RadioButton: {
    borderRadius: global.borderRadius,
    border: global.border,
    backgroundColor: global.backgroundColor,
  },

  Counter: {
    height: global.inputHeight,
    border: global.border,
    borderRadius: global.borderRadius,
    backgroundColor: global.backgroundColor,
  },

  Codeblock: {
    borderRadius: global.borderRadius,
  },
};
