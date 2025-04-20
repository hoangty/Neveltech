const progress = require('postcss-progress');
const paths = require('./paths');
const baseFontSize = 10; // -  rem計算用

const pcDesignWidth = 1280; // -  vw風にpc計算する用
const pcDesignHeight = 1280; // -  vw風にpc計算する用

const tbDesignWidth = 1280; // -  vw風にpc計算する用
const tbDesignHeight = 1280; // -  vw風にpc計算する用

const spDesignWidth = 768; // -  vw計算用
const spDesignHeight = 736; // -  vh計算用

module.exports = (ctx) => ({
  map:
    ctx.env === 'development'
      ? {
          inline: true
        }
      : false,
  plugins: [
    progress.start(),
    require('postcss-import')(),
    // require('stylelint')(),
    require('postcss-normalize')(),
    require('postcss-for'),
    require('postcss-flexbugs-fixes')(),
    require('postcss-extend-rule')(),
    require('postcss-nested')(),
    require('postcss-simple-vars')(),
    require('postcss-custom-media')(),
    require('postcss-gradient-transparency-fix')(),
    require('postcss-center')(),
    require('postcss-hexrgba')(),
    require('postcss-percentage')(),
    require('postcss-mixins')(),
    require('postcss-functions')({
      functions: {
        rem(num) {
          return `${num / baseFontSize}rem`;
        },
        pw(num, fix = false) {
          if (fix) {
            return `calc( var(--vw) * ${num} )`;
          } else {
            return `calc( var(--vw) * ${(num / pcDesignWidth) * 100} )`;
          }
        },
        ph(num, fix = false) {
          if (fix) {
            return `calc( var(--vh) * ${num} )`;
          } else {
            return `calc( var(--vh) * ${(num / pcDesignHeight) * 100} )`;
          }
        },
        vwTb(num, fix = false) {
          if (fix) {
            return `calc( var(--vw) * ${num} )`;
          } else {
            return `calc( var(--vw) * ${(num / tbDesignWidth) * 100} )`;
          }
        },
        vhTb(num, fix = false) {
          if (fix) {
            return `calc( var(--vh) * ${num} )`;
          } else {
            return `calc( var(--vh) * ${(num / tbDesignHeight) * 100} )`;
          }
        },
        vw(num, fix = false) {
          if (fix) {
            return `calc( var(--vw) * ${num} )`;
          } else {
            return `${(num / spDesignWidth) * 100}vw`;
          }
        },
        vh(num, fix = false) {
          if (fix) {
            return `calc( var(--vh) * ${num} )`;
          } else {
            return `${(num / spDesignHeight) * 100}vw`;
          }
        }
      }
    }),
    require('postcss-momentum-scrolling')(['auto', 'scroll']),
    require('postcss-will-change-transition')(),
    // require('css-mqpacker')(),
    require('tailwindcss')(),
    require('autoprefixer')({
      flexbox: true,
      grid: true
    }),
    require('postcss-cachebuster')({
      type: 'checksum',
      imagesPath: `${paths.appDest}`
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
    progress.stop()
  ].concat(
    ctx.env === 'development'
      ? []
      : [
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true
                },
                autoprefixer: false,
                mergeRules: false
              }
            ]
          })
        ]
  )
});