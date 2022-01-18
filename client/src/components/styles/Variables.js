// Colors
export const Colors = {
    // Primary: "#012A4A",
    // Primary70: "#0372C9",
    // Primary10: "#E6F4FF",
    // Secondary: "#014F86",
    // Secondary70: "#0797FD",
    // Secondary10: "#E6F4FF",
    // Success: "#2FBF71",
    // Success70: "#8CE3B4",
    // Success10: "#EBFAF2",
    // Danger: "#F64740",
    // Danger70: "#FCBDBB",
    // Danger10: "#FEE8E7",
    // Warning: "#ED7D3A",
    // Warning70: "#F8CBB0",
    // Warning10: "#FDF0E8",
    // Black: "#000000",

    Primary: "#445BE4",
    Primary70: "#B3BDF4",
    Primary10: "#E9EBFC",
    Success: "#26A96C",
    Success70: "#71DFAC",
    Success10: "#EAFAF3",
    Danger: "#E94F37",
    Danger70: "#F5B2A8",
    Danger10: "#FCEBE8",
    Warning: "#F4AC45",
    Warning70: "#FBE1BC",
    Warning10: "#FEF4E7",
    Black: "#020300",

    DarkGray: "#333333",
    Gray: "#737373",
    LightGray: "#D9D9D9",
    LighterGray: "#F2F2F2",
    White: "#FFFFFF",
    Background: "#FDFDFD",
    Overlay:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 100%)",
    OverlayWhite:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)",
}

// Effects
export const Effects = {
    Shadow: "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 2px 8px rgba(27, 27, 27, 0.04), 0px 6px 10px rgba(27, 27, 27, 0.01), 0px 2px 10px rgba(27, 27, 27, 0.02)",
}

// Margins
export const Margins = {
    XXL: "48px",
    XL: "32px",
    L: "24px",
    M: "16px",
    S: "12px",
    XS: "8px",
    XXS: "4px",
}

// Fonts
export const FontFamilies = {
    Body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
}

// Font weights
export const FontWeights = {
    Regular: 400,
    Bold: 700,
}

// Font sizes
export const FontSizes = {
    TitleDisplay: "64px",
    TitleLarge: "32px",
    TitleMedium: "24px",
    TitleSmall: "20px",
    Body: "16px",
    Label: "14px",
}

// Line height
export const LineHeight = 1.5

export const Radiuses = {
    XL: "16px",
    L: "12px",
    M: "8px",
    S: "4px",
    Round: "99em",
}

// Container template
export const Container = {
    Template: "1fr 600px 1fr",
    Column: 2,
    Padding: `${Margins.XXL} 0`,

    TemplateTablet: "5vw 1fr 5vw",
}

// Transitions
export const Transitions = {
    Short: "all .2s ease",
    Long: "all .5s ease",
}

// Media queries
const DevicesSizes = {
    Mobile: "600px",
    Tablet: "768px",
}

export const Breakpoints = {
    Mobile: `(max-width: ${DevicesSizes.Mobile})`,
    Tablet: `(max-width: ${DevicesSizes.Tablet})`,
}
