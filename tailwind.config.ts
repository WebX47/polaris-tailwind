import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "0px", // --p-breakpoints-xs
      sm: "490px", // --p-breakpoints-sm
      md: "768px", // --p-breakpoints-md
      lg: "1040px", // --p-breakpoints-lg
      xl: "1440px", // --p-breakpoints-xl
    },
    borderRadius: {
      none: "0px", // --p-border-radius-0
      "050": "2px", // --p-border-radius-050
      "100": "4px", // --p-border-radius-100
      "150": "6px", // --p-border-radius-150
      "200": "8px", // --p-border-radius-200
      "300": "12px", // --p-border-radius-300
      "400": "16px", // --p-border-radius-400
      "500": "20px", // --p-border-radius-500
      "750": "30px", // --p-border-radius-750
      full: "9999px", // --p-border-radius-full
    },
    borderWidth: {
      "0": "0px", // --p-border-width-0
      "0165": "0.66px", // --p-border-width-0165
      "025": "1px", // --p-border-width-025
      "050": "2px", // --p-border-width-050
      "100": "4px", // --p-border-width-100
    },
    fontFamily: {
      sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "San Francisco", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"], // --p-font-family-sans
      mono: ["ui-monospace", "SFMono-Regular", "SF Mono", "Consolas", "Liberation Mono", "Menlo", "monospace"], // --p-font-family-mono
    },
    fontSize: {
      // Heading Text Styles
      "heading-3xl": [
        "36px",
        {
          // --p-text-heading-3xl
          lineHeight: "48px", // --p-font-line-height-1200
          letterSpacing: "-0.54px", // --p-font-letter-spacing-densest
          fontWeight: "700", // --p-font-weight-bold
        },
      ],
      "heading-2xl": [
        "30px",
        {
          // --p-text-heading-2xl
          lineHeight: "40px", // --p-font-line-height-1000
          letterSpacing: "-0.3px", // --p-font-letter-spacing-denser
          fontWeight: "700", // --p-font-weight-bold
        },
      ],
      "heading-xl": [
        "24px",
        {
          // --p-text-heading-xl
          lineHeight: "32px", // --p-font-line-height-800
          letterSpacing: "-0.2px", // --p-font-letter-spacing-dense
          fontWeight: "700", // --p-font-weight-bold
        },
      ],
      "heading-lg": [
        "20px",
        {
          // --p-text-heading-lg
          lineHeight: "24px", // --p-font-line-height-600
          letterSpacing: "-0.2px", // --p-font-letter-spacing-dense
          fontWeight: "650", // --p-font-weight-semibold
        },
      ],
      "heading-md": [
        "14px",
        {
          // --p-text-heading-md
          lineHeight: "20px", // --p-font-line-height-500
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "650", // --p-font-weight-semibold
        },
      ],
      "heading-sm": [
        "13px",
        {
          // --p-text-heading-sm
          lineHeight: "20px", // --p-font-line-height-500
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "650", // --p-font-weight-semibold
        },
      ],
      "heading-xs": [
        "12px",
        {
          // --p-text-heading-xs
          lineHeight: "16px", // --p-font-line-height-400
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "650", // --p-font-weight-semibold
        },
      ],

      // Body Text Styles
      "body-lg": [
        "14px",
        {
          // --p-text-body-lg
          lineHeight: "20px", // --p-font-line-height-500
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "450", // --p-font-weight-regular
        },
      ],
      "body-md": [
        "13px",
        {
          // --p-text-body-md
          lineHeight: "20px", // --p-font-line-height-500
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "450", // --p-font-weight-regular
        },
      ],
      "body-sm": [
        "12px",
        {
          // --p-text-body-sm
          lineHeight: "16px", // --p-font-line-height-400
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "450", // --p-font-weight-regular
        },
      ],
      "body-xs": [
        "11px",
        {
          // --p-text-body-xs
          lineHeight: "12px", // --p-font-line-height-300
          letterSpacing: "0px", // --p-font-letter-spacing-normal
          fontWeight: "450", // --p-font-weight-regular
        },
      ],
      "275": "11px", // --p-font-size-275
      "300": "12px", // --p-font-size-300
      "325": "13px", // --p-font-size-325
      "350": "14px", // --p-font-size-350
      "400": "16px", // --p-font-size-400
      "450": "18px", // --p-font-size-450
      "500": "20px", // --p-font-size-500
      "550": "22px", // --p-font-size-550
      "600": "24px", // --p-font-size-600
      "750": "30px", // --p-font-size-750
      "800": "32px", // --p-font-size-800
      "900": "36px", // --p-font-size-900
      "1000": "40px", // --p-font-size-1000
    },
    fontWeight: {
      regular: "450", // --p-font-weight-regular
      medium: "550", // --p-font-weight-medium
      semibold: "650", // --p-font-weight-semibold
      bold: "700", // --p-font-weight-bold
    },
    letterSpacing: {
      densest: "-0.54px", // --p-font-letter-spacing-densest
      denser: "-0.3px", // --p-font-letter-spacing-denser
      dense: "-0.2px", // --p-font-letter-spacing-dense
      normal: "0px", // --p-font-letter-spacing-normal
    },
    lineHeight: {
      "300": "12px", // --p-font-line-height-300
      "400": "16px", // --p-font-line-height-400
      "500": "20px", // --p-font-line-height-500
      "600": "24px", // --p-font-line-height-600
      "700": "28px", // --p-font-line-height-700
      "800": "32px", // --p-font-line-height-800
      "1000": "40px", // --p-font-line-height-1000
      "1200": "48px", // --p-font-line-height-1200
    },
    boxShadow: {
      // Base shadows
      "0": "var(--p-shadow-0)",
      "100": "var(--p-shadow-100)",
      "200": "var(--p-shadow-200)",
      "300": "var(--p-shadow-300)",
      "400": "var(--p-shadow-400)",
      "500": "var(--p-shadow-500)",
      "600": "var(--p-shadow-600)",

      // Inset shadows
      "inset-100": "var(--p-shadow-inset-100)",
      "inset-200": "var(--p-shadow-inset-200)",
      "border-inset": "var(--p-shadow-border-inset)",
      "bevel-100": "var(--p-shadow-bevel-100)",

      // Button shadows
      button: "var(--p-shadow-button)",
      "button-hover": "var(--p-shadow-button-hover)",
      "button-inset": "var(--p-shadow-button-inset)",

      // Primary button shadows
      "button-primary": "var(--p-shadow-button-primary)",
      "button-primary-hover": "var(--p-shadow-button-primary-hover)",
      "button-primary-inset": "var(--p-shadow-button-primary-inset)",

      // Critical button shadows
      "button-primary-critical": "var(--p-shadow-button-primary-critical)",
      "button-primary-critical-hover": "var(--p-shadow-button-primary-critical-hover)",
      "button-primary-critical-inset": "var(--p-shadow-button-primary-critical-inset)",

      // Success button shadows
      "button-primary-success": "var(--p-shadow-button-primary-success)",
      "button-primary-success-hover": "var(--p-shadow-button-primary-success-hover)",
      "button-primary-success-inset": "var(--p-shadow-button-primary-success-inset)",
    },
    keyframes: {
      bounce: {
        "from, 65%, 85%": { transform: "scale(1)" },
        "75%": { transform: "scale(0.85)" },
        "82.5%": { transform: "scale(1.05)" },
      },
      "fade-in": {
        to: { opacity: "1" },
      },
      pulse: {
        "from, 75%": {
          transform: "scale(0.85)",
          opacity: "1",
        },
        to: {
          transform: "scale(2.5)",
          opacity: "0",
        },
      },
      spin: {
        to: { transform: "rotate(1turn)" },
      },
      "appear-above": {
        from: {
          transform: "translateY(var(--p-space-100))",
          opacity: "0",
        },
        to: {
          transform: "none",
          opacity: "1",
        },
      },
      "appear-below": {
        from: {
          transform: "translateY(calc(var(--p-space-100) * -1))",
          opacity: "0",
        },
        to: {
          transform: "none",
          opacity: "1",
        },
      },
    },
    animation: {
      bounce: "bounce var(--p-motion-duration-400) var(--p-motion-ease-in-out)",
      "fade-in": "fade-in var(--p-motion-duration-150) var(--p-motion-ease-in-out)",
      pulse: "pulse 1.5s var(--p-motion-ease-in-out) infinite",
      spin: "spin 1s var(--p-motion-linear) infinite",
      "appear-above": "appear-above var(--p-motion-duration-150) var(--p-motion-ease-in-out)",
      "appear-below": "appear-below var(--p-motion-duration-150) var(--p-motion-ease-in-out)",
    },
    transitionTimingFunction: {
      ease: "var(--p-motion-ease)",
      "ease-in": "var(--p-motion-ease-in)",
      "ease-out": "var(--p-motion-ease-out)",
      "ease-in-out": "var(--p-motion-ease-in-out)",
      linear: "var(--p-motion-linear)",
    },
    transitionDuration: {
      "0": "var(--p-motion-duration-0)",
      "50": "var(--p-motion-duration-50)",
      "100": "var(--p-motion-duration-100)",
      "150": "var(--p-motion-duration-150)",
      "200": "var(--p-motion-duration-200)",
      "250": "var(--p-motion-duration-250)",
      "300": "var(--p-motion-duration-300)",
      "350": "var(--p-motion-duration-350)",
      "400": "var(--p-motion-duration-400)",
      "450": "var(--p-motion-duration-450)",
      "500": "var(--p-motion-duration-500)",
      "5000": "var(--p-motion-duration-5000)",
    },
    spacing: {
      "0": "0px", // --p-space-0
      "025": "1px", // --p-space-025
      "050": "2px", // --p-space-050
      "100": "4px", // --p-space-100
      "150": "6px", // --p-space-150
      "200": "8px", // --p-space-200
      "300": "12px", // --p-space-300
      "400": "16px", // --p-space-400
      "500": "20px", // --p-space-500
      "600": "24px", // --p-space-600
      "800": "32px", // --p-space-800
      "1000": "40px", // --p-space-1000
      "1200": "48px", // --p-space-1200
      "1600": "64px", // --p-space-1600
      "2000": "80px", // --p-space-2000
      "2400": "96px", // --p-space-2400
      "2800": "112px", // --p-space-2800
      "3200": "128px", // --p-space-3200
    },
    zIndex: {
      "0": "auto", // --p-z-index-0
      "1": "100", // --p-z-index-1
      "2": "400", // --p-z-index-2
      "3": "510", // --p-z-index-3
      "4": "512", // --p-z-index-4
      "5": "513", // --p-z-index-5
      "6": "514", // --p-z-index-6
      "7": "515", // --p-z-index-7
      "8": "516", // --p-z-index-8
      "9": "517", // --p-z-index-9
      "10": "518", // --p-z-index-10
      "11": "519", // --p-z-index-11
      "12": "520", // --p-z-index-12
    },
    backgroundColor: {
      DEFAULT: "rgba(241, 241, 241, 1)", // --p-color-bg
      inverse: "rgba(26, 26, 26, 1)", // --p-color-bg-inverse

      // Surface backgrounds (higher prominence elements like cards)
      surface: {
        DEFAULT: "rgba(255, 255, 255, 1)", // --p-color-bg-surface
        hover: "rgba(247, 247, 247, 1)", // --p-color-bg-surface-hover
        active: "rgba(243, 243, 243, 1)", // --p-color-bg-surface-active
        selected: "rgba(241, 241, 241, 1)", // --p-color-bg-surface-selected
        disabled: "rgba(0, 0, 0, 0.05)", // --p-color-bg-surface-disabled
        transparent: "rgba(0, 0, 0, 0)", // --p-color-bg-surface-transparent
        inverse: "rgba(48, 48, 48, 1)", // --p-color-bg-surface-inverse

        secondary: {
          DEFAULT: "rgba(247, 247, 247, 1)", // --p-color-bg-surface-secondary
          hover: "rgba(241, 241, 241, 1)", // --p-color-bg-surface-secondary-hover
          active: "rgba(235, 235, 235, 1)", // --p-color-bg-surface-secondary-active
          selected: "rgba(235, 235, 235, 1)", // --p-color-bg-surface-secondary-selected
        },
        tertiary: {
          DEFAULT: "rgba(243, 243, 243, 1)", // --p-color-bg-surface-tertiary
          hover: "rgba(235, 235, 235, 1)", // --p-color-bg-surface-tertiary-hover
          active: "rgba(227, 227, 227, 1)", // --p-color-bg-surface-tertiary-active
        },
        brand: {
          DEFAULT: "rgba(227, 227, 227, 1)", // --p-color-bg-surface-brand
          hover: "rgba(235, 235, 235, 1)", // --p-color-bg-surface-brand-hover
          active: "rgba(241, 241, 241, 1)", // --p-color-bg-surface-brand-active
          selected: "rgba(241, 241, 241, 1)", // --p-color-bg-surface-brand-selected
        },
        info: {
          DEFAULT: "rgba(234, 244, 255, 1)", // --p-color-bg-surface-info
          hover: "rgba(224, 240, 255, 1)", // --p-color-bg-surface-info-hover
          active: "rgba(202, 230, 255, 1)", // --p-color-bg-surface-info-active
        },
        success: {
          DEFAULT: "rgba(205, 254, 212, 1)", // --p-color-bg-surface-success
          hover: "rgba(175, 254, 191, 1)", // --p-color-bg-surface-success-hover
          active: "rgba(146, 252, 172, 1)", // --p-color-bg-surface-success-active
        },
        caution: {
          DEFAULT: "rgba(255, 248, 219, 1)", // --p-color-bg-surface-caution
          hover: "rgba(255, 244, 191, 1)", // --p-color-bg-surface-caution-hover
          active: "rgba(255, 239, 157, 1)", // --p-color-bg-surface-caution-active
        },
        warning: {
          DEFAULT: "rgba(255, 241, 227, 1)", // --p-color-bg-surface-warning
          hover: "rgba(255, 235, 213, 1)", // --p-color-bg-surface-warning-hover
          active: "rgba(255, 228, 198, 1)", // --p-color-bg-surface-warning-active
        },
        critical: {
          DEFAULT: "rgba(254, 232, 235, 1)", // --p-color-bg-surface-critical
          hover: "rgba(254, 225, 230, 1)", // --p-color-bg-surface-critical-hover
          active: "rgba(254, 217, 223, 1)", // --p-color-bg-surface-critical-active
        },
        emphasis: {
          DEFAULT: "rgba(240, 242, 255, 1)", // --p-color-bg-surface-emphasis
          hover: "rgba(234, 237, 255, 1)", // --p-color-bg-surface-emphasis-hover
          active: "rgba(226, 231, 255, 1)", // --p-color-bg-surface-emphasis-active
        },
        magic: {
          DEFAULT: "rgba(248, 247, 255, 1)", // --p-color-bg-surface-magic
          hover: "rgba(243, 241, 255, 1)", // --p-color-bg-surface-magic-hover
          active: "rgba(233, 229, 255, 1)", // --p-color-bg-surface-magic-active
        },
      },
      // Fill backgrounds (smaller surface area elements like buttons)
      fill: {
        DEFAULT: "rgba(255, 255, 255, 1)", // --p-color-bg-fill
        hover: "rgba(250, 250, 250, 1)", // --p-color-bg-fill-hover
        active: "rgba(247, 247, 247, 1)", // --p-color-bg-fill-active
        selected: "rgba(204, 204, 204, 1)", // --p-color-bg-fill-selected
        disabled: "rgba(0, 0, 0, 0.05)", // --p-color-bg-fill-disabled

        secondary: {
          DEFAULT: "rgba(241, 241, 241, 1)", // --p-color-bg-fill-secondary
          hover: "rgba(235, 235, 235, 1)", // --p-color-bg-fill-secondary-hover
          active: "rgba(227, 227, 227, 1)", // --p-color-bg-fill-secondary-active
          selected: "rgba(227, 227, 227, 1)", // --p-color-bg-fill-secondary-selected
        },
        tertiary: {
          DEFAULT: "rgba(227, 227, 227, 1)", // --p-color-bg-fill-tertiary
          hover: "rgba(212, 212, 212, 1)", // --p-color-bg-fill-tertiary-hover
          active: "rgba(204, 204, 204, 1)", // --p-color-bg-fill-tertiary-active
        },
        brand: {
          DEFAULT: "rgba(48, 48, 48, 1)", // --p-color-bg-fill-brand
          hover: "rgba(26, 26, 26, 1)", // --p-color-bg-fill-brand-hover
          active: "rgba(26, 26, 26, 1)", // --p-color-bg-fill-brand-active
          selected: "rgba(48, 48, 48, 1)", // --p-color-bg-fill-brand-selected
          disabled: "rgba(0, 0, 0, 0.17)", // --p-color-bg-fill-brand-disabled
        },
        info: {
          DEFAULT: "rgba(145, 208, 255, 1)", // --p-color-bg-fill-info
          hover: "rgba(81, 192, 255, 1)", // --p-color-bg-fill-info-hover
          active: "rgba(0, 148, 213, 1)", // --p-color-bg-fill-info-active
          secondary: "rgba(213, 235, 255, 1)", // --p-color-bg-fill-info-secondary
        },
        success: {
          DEFAULT: "rgba(4, 123, 93, 1)", // --p-color-bg-fill-success
          hover: "rgba(3, 94, 76, 1)", // --p-color-bg-fill-success-hover
          active: "rgba(1, 75, 64, 1)", // --p-color-bg-fill-success-active
          secondary: "rgba(175, 254, 191, 1)", // --p-color-bg-fill-success-secondary
        },
        warning: {
          DEFAULT: "rgba(255, 184, 0, 1)", // --p-color-bg-fill-warning
          hover: "rgba(229, 165, 0, 1)", // --p-color-bg-fill-warning-hover
          active: "rgba(178, 132, 0, 1)", // --p-color-bg-fill-warning-active
          secondary: "rgba(255, 214, 164, 1)", // --p-color-bg-fill-warning-secondary
        },
        caution: {
          DEFAULT: "rgba(255, 230, 0, 1)", // --p-color-bg-fill-caution
          hover: "rgba(234, 211, 0, 1)", // --p-color-bg-fill-caution-hover
          active: "rgba(225, 203, 0, 1)", // --p-color-bg-fill-caution-active
          secondary: "rgba(255, 235, 120, 1)", // --p-color-bg-fill-caution-secondary
        },
        critical: {
          DEFAULT: "rgba(199, 10, 36, 1)", // --p-color-bg-fill-critical
          hover: "rgba(163, 10, 36, 1)", // --p-color-bg-fill-critical-hover
          active: "rgba(142, 11, 33, 1)", // --p-color-bg-fill-critical-active
          selected: "rgba(142, 11, 33, 1)", // --p-color-bg-fill-critical-selected
          secondary: "rgba(254, 209, 215, 1)", // --p-color-bg-fill-critical-secondary
        },
        emphasis: {
          DEFAULT: "rgba(0, 91, 211, 1)", // --p-color-bg-fill-emphasis
          hover: "rgba(0, 66, 153, 1)", // --p-color-bg-fill-emphasis-hover
          active: "rgba(0, 46, 106, 1)", // --p-color-bg-fill-emphasis-active
        },
        magic: {
          DEFAULT: "rgba(128, 81, 255, 1)", // --p-color-bg-fill-magic
          secondary: {
            DEFAULT: "rgba(233, 229, 255, 1)", // --p-color-bg-fill-magic-secondary
            hover: "rgba(228, 222, 255, 1)", // --p-color-bg-fill-magic-secondary-hover
            active: "rgba(223, 217, 255, 1)", // --p-color-bg-fill-magic-secondary-active
          },
        },
        inverse: {
          DEFAULT: "rgba(48, 48, 48, 1)", // --p-color-bg-fill-inverse
          hover: "rgba(74, 74, 74, 1)", // --p-color-bg-fill-inverse-hover
          active: "rgba(97, 97, 97, 1)", // --p-color-bg-fill-inverse-active
        },
        transparent: {
          DEFAULT: "rgba(0, 0, 0, 0.02)", // --p-color-bg-fill-transparent
          hover: "rgba(0, 0, 0, 0.05)", // --p-color-bg-fill-transparent-hover
          active: "rgba(0, 0, 0, 0.08)", // --p-color-bg-fill-transparent-active
          selected: "rgba(0, 0, 0, 0.08)", // --p-color-bg-fill-transparent-selected
          secondary: {
            DEFAULT: "rgba(0, 0, 0, 0.06)", // --p-color-bg-fill-transparent-secondary
            hover: "rgba(0, 0, 0, 0.08)", // --p-color-bg-fill-transparent-secondary-hover
            active: "rgba(0, 0, 0, 0.11)", // --p-color-bg-fill-transparent-secondary-active
          },
        },
      },
    },
    textColor: {
      DEFAULT: "rgba(48, 48, 48, 1)", // --p-color-text - The default text color
      secondary: "rgba(97, 97, 97, 1)", // --p-color-text-secondary
      disabled: "rgba(181, 181, 181, 1)", // --p-color-text-disabled

      link: {
        DEFAULT: "rgba(0, 91, 211, 1)", // --p-color-text-link
        hover: "rgba(0, 66, 153, 1)", // --p-color-text-link-hover
        active: "rgba(0, 46, 106, 1)", // --p-color-text-link-active
        inverse: "rgba(197, 208, 255, 1)", // --p-color-text-link-inverse
      },

      brand: {
        DEFAULT: "rgba(74, 74, 74, 1)", // --p-color-text-brand
        hover: "rgba(48, 48, 48, 1)", // --p-color-text-brand-hover
        "on-bg-fill": {
          DEFAULT: "rgba(255, 255, 255, 1)", // --p-color-text-brand-on-bg-fill
          hover: "rgba(227, 227, 227, 1)", // --p-color-text-brand-on-bg-fill-hover
          active: "rgba(204, 204, 204, 1)", // --p-color-text-brand-on-bg-fill-active
          disabled: "rgba(255, 255, 255, 1)", // --p-color-text-brand-on-bg-fill-disabled
        },
      },

      info: {
        DEFAULT: "rgba(0, 58, 90, 1)", // --p-color-text-info
        hover: "rgba(0, 58, 90, 1)", // --p-color-text-info-hover
        active: "rgba(0, 33, 51, 1)", // --p-color-text-info-active
        secondary: "rgba(0, 124, 180, 1)", // --p-color-text-info-secondary
        "on-bg-fill": "rgba(0, 33, 51, 1)", // --p-color-text-info-on-bg-fill
      },

      success: {
        DEFAULT: "rgba(1, 75, 64, 1)", // --p-color-text-success
        hover: "rgba(7, 54, 48, 1)", // --p-color-text-success-hover
        active: "rgba(2, 38, 34, 1)", // --p-color-text-success-active
        secondary: "rgba(4, 123, 93, 1)", // --p-color-text-success-secondary
        "on-bg-fill": "rgba(250, 255, 251, 1)", // --p-color-text-success-on-bg-fill
      },

      caution: {
        DEFAULT: "rgba(79, 71, 0, 1)", // --p-color-text-caution
        hover: "rgba(51, 46, 0, 1)", // --p-color-text-caution-hover
        active: "rgba(31, 28, 0, 1)", // --p-color-text-caution-active
        secondary: "rgba(130, 117, 0, 1)", // --p-color-text-caution-secondary
        "on-bg-fill": "rgba(51, 46, 0, 1)", // --p-color-text-caution-on-bg-fill
      },

      warning: {
        DEFAULT: "rgba(94, 66, 0, 1)", // --p-color-text-warning
        hover: "rgba(65, 45, 0, 1)", // --p-color-text-warning-hover
        active: "rgba(37, 26, 0, 1)", // --p-color-text-warning-active
        secondary: "rgba(149, 111, 0, 1)", // --p-color-text-warning-secondary
        "on-bg-fill": "rgba(37, 26, 0, 1)", // --p-color-text-warning-on-bg-fill
      },

      critical: {
        DEFAULT: "rgba(142, 11, 33, 1)", // --p-color-text-critical
        hover: "rgba(95, 7, 22, 1)", // --p-color-text-critical-hover
        active: "rgba(47, 4, 11, 1)", // --p-color-text-critical-active
        secondary: "rgba(199, 10, 36, 1)", // --p-color-text-critical-secondary
        "on-bg-fill": "rgba(255, 250, 251, 1)", // --p-color-text-critical-on-bg-fill
      },

      emphasis: {
        DEFAULT: "rgba(0, 91, 211, 1)", // --p-color-text-emphasis
        hover: "rgba(0, 66, 153, 1)", // --p-color-text-emphasis-hover
        active: "rgba(0, 46, 106, 1)", // --p-color-text-emphasis-active
        "on-bg-fill": {
          DEFAULT: "rgba(252, 253, 255, 1)", // --p-color-text-emphasis-on-bg-fill
          hover: "rgba(226, 231, 255, 1)", // --p-color-text-emphasis-on-bg-fill-hover
          active: "rgba(213, 220, 255, 1)", // --p-color-text-emphasis-on-bg-fill-active
        },
      },

      magic: {
        DEFAULT: "rgba(87, 0, 209, 1)", // --p-color-text-magic
        secondary: "rgba(113, 38, 255, 1)", // --p-color-text-magic-secondary
        "on-bg-fill": "rgba(253, 253, 255, 1)", // --p-color-text-magic-on-bg-fill
      },

      inverse: {
        DEFAULT: "rgba(227, 227, 227, 1)", // --p-color-text-inverse
        secondary: "rgba(181, 181, 181, 1)", // --p-color-text-inverse-secondary
      },
    },
    borderColor: {
      DEFAULT: "rgba(227, 227, 227, 1)", // --p-color-border - The default color for borders on any element
      hover: "rgba(204, 204, 204, 1)", // --p-color-border-hover
      disabled: "rgba(235, 235, 235, 1)", // --p-color-border-disabled
      secondary: "rgba(235, 235, 235, 1)", // --p-color-border-secondary - For hr elements or visual dividers
      tertiary: "rgba(204, 204, 204, 1)", // --p-color-border-tertiary - Pair with bg-surface-tertiary or bg-fill-tertiary
      focus: "rgba(0, 91, 211, 1)", // --p-color-border-focus - Focus ring for interactive elements
      brand: "rgba(227, 227, 227, 1)", // --p-color-border-brand

      info: "rgba(168, 216, 255, 1)", // --p-color-border-info
      success: "rgba(146, 252, 172, 1)", // --p-color-border-success
      caution: "rgba(255, 235, 120, 1)", // --p-color-border-caution
      warning: "rgba(255, 200, 121, 1)", // --p-color-border-warning

      critical: {
        DEFAULT: "rgba(254, 193, 199, 1)", // --p-color-border-critical
        secondary: "rgba(142, 11, 33, 1)", // --p-color-border-critical-secondary - For invalid text fields
      },

      emphasis: {
        DEFAULT: "rgba(0, 91, 211, 1)", // --p-color-border-emphasis
        hover: "rgba(0, 66, 153, 1)", // --p-color-border-emphasis-hover
        active: "rgba(0, 46, 106, 1)", // --p-color-border-emphasis-active
      },

      magic: {
        DEFAULT: "rgba(228, 222, 255, 1)", // --p-color-border-magic
        secondary: {
          DEFAULT: "rgba(148, 116, 255, 1)", // --p-color-border-magic-secondary
          hover: "rgba(128, 81, 255, 1)", // --p-color-border-magic-secondary-hover
        },
      },

      inverse: {
        DEFAULT: "rgba(97, 97, 97, 1)", // --p-color-border-inverse
        hover: "rgba(204, 204, 204, 1)", // --p-color-border-inverse-hover
        active: "rgba(227, 227, 227, 1)", // --p-color-border-inverse-active
      },

      tooltip: {
        "tail-down": "rgba(212, 212, 212, 1)", // --p-color-tooltip-tail-down-border
        "tail-up": "rgba(227, 227, 227, 1)", // --p-color-tooltip-tail-up-border
      },
    },

    extend: {
      height: {
        p0: "0px", // --p-height-0
        p025: "1px", // --p-height-025
        p050: "2px", // --p-height-050
        p100: "4px", // --p-height-100
        p150: "6px", // --p-height-150
        p200: "8px", // --p-height-200
        p300: "12px", // --p-height-300
        p400: "16px", // --p-height-400
        p500: "20px", // --p-height-500
        p600: "24px", // --p-height-600
        p700: "28px", // --p-height-700
        p800: "32px", // --p-height-800
        p900: "36px", // --p-height-900
        p1000: "40px", // --p-height-1000
        p1200: "48px", // --p-height-1200
        p1600: "64px", // --p-height-1600
        p2000: "80px", // --p-height-2000
        p2400: "96px", // --p-height-2400
        p2800: "112px", // --p-height-2800
        p3200: "128px", // --p-height-3200
      },
      width: {
        p0: "0px", // --p-width-0
        p025: "1px", // --p-width-025
        p050: "2px", // --p-width-050
        p100: "4px", // --p-width-100
        p150: "6px", // --p-width-150
        p200: "8px", // --p-width-200
        p300: "12px", // --p-width-300
        p400: "16px", // --p-width-400
        p500: "20px", // --p-width-500
        p600: "24px", // --p-width-600
        p700: "28px", // --p-width-700
        p800: "32px", // --p-width-800
        p900: "36px", // --p-width-900
        p1000: "40px", // --p-width-1000
        p1200: "48px", // --p-width-1200
        p1600: "64px", // --p-width-1600
        p2000: "80px", // --p-width-2000
        p2400: "96px", // --p-width-2400
        p2800: "112px", // --p-width-2800
        p3200: "128px", // --p-width-3200
      },
    },
  },
  plugins: [],
} satisfies Config;
