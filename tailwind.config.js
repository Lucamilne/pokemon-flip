/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bug': {
          DEFAULT: '#aaba23',
          '50': '#fcfce9',
          '100': '#f7f8cf',
          '200': '#eef2a4',
          '300': '#dee76f',
          '400': '#ccd942',
          '500': '#aaba23', // default
          '600': '#889818',
          '700': '#677417',
          '800': '#525c18',
          '900': '#454e19',
          '950': '#242b08',
        },
        'dragon': {
          DEFAULT: '#7667ee',
          '50': '#eef0ff',
          '100': '#e1e3fe',
          '200': '#c8ccfd',
          '300': '#a7aafa',
          '400': '#8984f5',
          '500': '#7667ee', // default 
          '600': '#6649e2',
          '700': '#593bc7',
          '800': '#4733a0',
          '900': '#3d307f',
          '950': '#251c4a',
        },
        'electric': {
          DEFAULT: '#ffcc33',
          '50': '#fefae8',
          '100': '#fff4c2',
          '200': '#ffe689',
          '300': '#ffcc33', // default
          '400': '#fdb912',
          '500': '#ec9f06',
          '600': '#cc7902',
          '700': '#a35405',
          '800': '#86420d',
          '900': '#723611',
          '950': '#431a05',
        },
        'fairy': {
          DEFAULT: '#feabff',
          '50': '#fef4ff',
          '100': '#fde7ff',
          '200': '#fdceff',
          '300': '#feabff', // default 
          '400': '#fe74fe',
          '500': '#f540f3',
          '600': '#d920d4',
          '700': '#b417ad',
          '800': '#93158b',
          '900': '#781770',
          '950': '#51014b',
        },
        'fighting': {
          DEFAULT: '#ba5545',
          '50': '#fcf5f4',
          '100': '#f9e9e7',
          '200': '#f5d8d3',
          '300': '#ecbdb5',
          '400': '#df968a',
          '500': '#d07263',
          '600': '#ba5545', // default
          '700': '#9c4739',
          '800': '#823d32',
          '900': '#6d372f',
          '950': '#3a1a15',
        },
        'fire': {
          DEFAULT: '#ff4523',
          '50': '#fff2ed',
          '100': '#ffe2d4',
          '200': '#ffc1a8',
          '300': '#ff9670',
          '400': '#ff5e37',
          '500': '#ff4523', // default
          '600': '#f01a06',
          '700': '#c70e07',
          '800': '#9e0e0f',
          '900': '#7f0f0f',
          '950': '#450507',
        },
        'flying': {
          DEFAULT: '#6699ff',
          '50': '#eef4ff',
          '100': '#dae6ff',
          '200': '#bdd3ff',
          '300': '#90b8ff',
          '400': '#6699ff', // default
          '500': '#356afc',
          '600': '#1f49f1',
          '700': '#1734de',
          '800': '#192cb4',
          '900': '#1a2b8e',
          '950': '#151d56',
        },
        'ghost': {
          DEFAULT: '#6766ba',
          '50': '#f2f4fb',
          '100': '#e8ecf7',
          '200': '#d5dbf0',
          '300': '#bbc4e6',
          '400': '#9fa7da',
          '500': '#868bce',
          '600': '#6766ba', // default
          '700': '#5f5ca6',
          '800': '#4d4d86',
          '900': '#43446c',
          '950': '#27273f',
        },
        'grass': {
          DEFAULT: '#77cd54',
          '50': '#f0fbea',
          '100': '#ddf5d2',
          '200': '#c0ebab',
          '300': '#97dd79',
          '400': '#77cd54', // default
          '500': '#53b131',
          '600': '#3e8d23',
          '700': '#316c1f',
          '800': '#2b561e',
          '900': '#264a1d',
          '950': '#10280b',
        },
        'ground': {
          DEFAULT: '#dcbb54',
          '50': '#faf8ec',
          '100': '#f4eecd',
          '200': '#ebdc9d',
          '300': '#dcbb54', // default
          '400': '#d5a93a',
          '500': '#c5932d',
          '600': '#aa7424',
          '700': '#885420',
          '800': '#724521',
          '900': '#623b21',
          '950': '#381e10',
        },
        'ice': {
          DEFAULT: '#77dcfe',
          '50': '#f0faff',
          '100': '#e0f4fe',
          '200': '#b9ebfe',
          '300': '#77dcfe', // default
          '400': '#35ccfb',
          '500': '#0bb6ec',
          '600': '#0093ca',
          '700': '#0076a4',
          '800': '#056387',
          '900': '#0a5170',
          '950': '#07344a',
        },
        'normal': {
          DEFAULT: '#bbbbaa',
          '50': '#f7f7f5',
          '100': '#ecece8',
          '200': '#d9d9cf',
          '300': '#bbbbaa', // default
          '400': '#a6a491',
          '500': '#94917b',
          '600': '#88846e',
          '700': '#716d5d',
          '800': '#5e5a4e',
          '900': '#4d4a41',
          '950': '#282622',
        },
        'poison': {
          DEFAULT: '#ab5598',
          '50': '#fcf7fb',
          '100': '#f9eef7',
          '200': '#f2dcef',
          '300': '#e7c0e0',
          '400': '#d89acb',
          '500': '#c471b4',
          '600': '#ab5598', // default
          '700': '#894278',
          '800': '#713763',
          '900': '#5e3152',
          '950': '#3b1731',
        },
        'psychic': {
          DEFAULT: '#fe5598',
          '50': '#fef1f6',
          '100': '#fee5f0',
          '200': '#fecce2',
          '300': '#ffa2c9',
          '400': '#fe5598', // default
          '500': '#f93b81',
          '600': '#e9195b',
          '700': '#cb0b43',
          '800': '#a70d37',
          '900': '#8b1031',
          '950': '#560118',
        },
        'rock': {
          DEFAULT: '#baaa67',
          '50': '#f7f7ef',
          '100': '#ecead5',
          '200': '#dbd5ad',
          '300': '#c6bb7e',
          '400': '#baaa67', // default
          '500': '#a5914d',
          '600': '#8e7640',
          '700': '#725936',
          '800': '#614b32',
          '900': '#54412f',
          '950': '#302218',
        },
        'steel': {
          DEFAULT: '#aaaabb',
          '50': '#f5f6f8',
          '100': '#edeef2',
          '200': '#dfe0e6',
          '300': '#cbcdd6',
          '400': '#b5b6c4',
          '500': '#aaaabb', // default
          '600': '#8c8ba0',
          '700': '#79778b',
          '800': '#636271',
          '900': '#52525d',
          '950': '#303036',
        },
        'water': {
          DEFAULT: '#3398fe',
          '50': '#eef8ff',
          '100': '#daeeff',
          '200': '#bce3ff',
          '300': '#8ed2ff',
          '400': '#59b8ff',
          '500': '#3398fe', // default
          '600': '#1d79f3',
          '700': '#1562e0',
          '800': '#1850b5',
          '900': '#19468f',
          '950': '#142c57',
        },
        'theme-blue': {
          DEFAULT: '#59acff',
          '100': '#007fff'
        },
        'theme-red': {
          DEFAULT: '#e61919',
          '100': '#c20a0a',
          '200': '#901a22'
        }
      }
    },
  },
  plugins: [],
}

// --pokedex-red: #e61919;
// --pokedex-inner-red: #c20a0a;
// --pokedex-dark-red: #901a22;
// --bug-color-light: #c6d16e;
// --bug-color: #a8b820;
// --bug-color-dark: #6d7815;
// --dark-color-light: #a29288;
// --dark-color: #705848;
// --dark-color-dark: #49392f;
// --dragon-color-light: #a27dfa;
// --dragon-color: #7038f8;
// --dragon-color-dark: #4924a1;
// --electric-color-light: #fae078;
// --electric-color: #f8d030;
// --electric-color-dark: #a1871f;
// --fairy-color-light: #f4bdc9;
// --fairy-color: #ee99ac;
// --fairy-color-dark: #9b6470;
// --fighting-color-light: #d67873;
// --fighting-color: #c03028;
// --fighting-color-dark: #7d1f1a;
// --fire-color-light: #d67873;
// --fire-color: #f08030;
// --fire-color-dark: #9c531f;
// --flying-color-light: #c6b7f5;
// --flying-color: #a890f0;
// --flying-color-dark: #6d5e9c;
// --ghost-color-light: #a292bc;
// --ghost-color: #705898;
// --ghost-color-dark: #493963;
// --grass-color-light: #a7db8d;
// --grass-color: #78c850;
// --grass-color-dark: #4e8234;
// --ground-color-light: #ebd69d;
// --ground-color: #e0c068;
// --ground-color-dark: #927d44;
// --ice-color-light: #bce6e6;
// --ice-color: #98d8d8;
// --ice-color-dark: #698d8d;
// --normal-color-light: #c6c6a7;
// --normal-color: #a8a878;
// --normal-color-dark: #6d6d4e;
// --poison-color-light: #c183c1;
// --poison-color: #a040a0;
// --poison-color-dark: #682a68;
// --psychic-color-light: #fa92b2;
// --psychic-color: #f85888;
// --psychic-color-dark: #a13959;
// --rock-color-light: #d1c17d;
// --rock-color: #b8a038;
// --rock-color-dark: #786824;
// --steel-color-light: #d1d1e0;
// --steel-color: #b8b8d0;
// --steel-color-dark: #787887;
// --water-color-light: #9db7f5;
// --water-color: #6890f0;
// --water-color-dark: #445e9c;