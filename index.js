const backgroundColor = '#EEEEEE';
const foregroundColor = '#444444';
const cursorColor = 'rgba(31, 188, 210, 0.8)';
const borderColor = 'transparent';

const colors = [
  backgroundColor,
  '#D70000', // red
  '#008700', // green
  '#F8A738', // yellow
  '#0087AF', // blue
  '#8700AF', // violet
  '#00AF5F', // cyan
  '#BCBCBC', // light gray
  '#444444', // medium gray
  '#D70000', // red
  '#008700', // green
  '#F8A738', // yellow
  '#0087AF', // blue
  '#8700AF', // violet
  '#00AF5F', // cyan
  '#FFFFFF', // white
  foregroundColor
];

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}

      .cursor-node { width: 0.325rem !important; }
      .hyperterm_main { border: none !important; }
      .tabs_title { color: ${foregroundColor} !important; }
    `
  });
};
