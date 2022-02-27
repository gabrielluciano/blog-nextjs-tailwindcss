module.exports = {
  content: [
    './src/pages/**/*.jsx',
    './src/components/**/*.jsx',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['noto-sans', 'sans-serif'],
      'text': ['Open Sans'],
    },
    extend: {
      gridTemplateColumns: {
        // Container Main Grid
        'main_container': 'auto 300px',

        // Article grid
        'article-large': 'auto 728px',
        'article-medium': '100px 728px',
      },
      transitionProperty: {
        // Transition
        'max-height': 'max-height',

        'max-width': 'max-width',
      },
      textColor: {
        'facebook': '#4267B2',
        'twitter': '#1DA1F2',
        'whatsapp': '#4AC959',
        'instagram': '#E1306C',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover']
    },
  },
  plugins: [],
}
