/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'zen-antique': ['var(--font-zen-antique)'],
        'cinzel': ['var(--font-cinzel)'],
      },
      
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // primary: '#3490dc', // Replace with your primary color
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "8xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "9xl": ["5.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "10xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "11xl": ["6.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "12xl": ["7rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "13xl": ["7.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "14xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "15xl": ["8.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },

      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        scrollFadeIn: {// moves elements from an offset with `opacity: 0` to their final position with `opacity: 1`.
          '0%': { opacity: '0', transform: 'translateY(2.5rem)' }, // ~translate-y-10
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        //This runs the keyframes over `0.5s` with an `ease-out` transition.
        scrollFadeIn: 'scrollFadeIn 0.5s ease-out forwards', // Adjust timing and easing as needed

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
        shine: "shine 5s ease-in-out 500ms infinite",

      },
      // backgroundImage: {
      //   'gradient-corner': `
      //     linear-gradient(to bottom right, 
      //       var(--tw-gradient-stops)
      //     ),
      //     linear-gradient(to bottom left,
      //       var(--tw-gradient-stops)
      //     )
      //   `, 'gradient-corner-fade': `
      //     linear-gradient(to bottom right, 
      //       var(--tw-gradient-stops)
      //     ),
      //     linear-gradient(to bottom left,
      //       var(--tw-gradient-stops)
      //     ),
      //     linear-gradient(to bottom,
      //       rgba(255, 255, 255, 0) 0%,
      //       rgba(255, 255, 255, 0.8) 100%
      //     )
      //   `
      // },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}