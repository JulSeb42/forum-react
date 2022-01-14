// Colors
export const Colors = {}

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
    MobileS: "320px",
    MobileM: "375px",
    MobileL: "425px",
    Tablet: "768px",
    Laptop: "1024px",
    LaptopL: "1440px",
    Desktop: "2560px",
}

export const Breakpoints = {
    MobileS: `(max-width: ${DevicesSizes.MobileS})`,
    MobileM: `(max-width: ${DevicesSizes.MobileM})`,
    MobileL: `(max-width: ${DevicesSizes.MobileL})`,
    Tablet: `(max-width: ${DevicesSizes.Tablet})`,
    Laptop: `(max-width: ${DevicesSizes.Laptop})`,
    LaptopL: `(max-width: ${DevicesSizes.LaptopL})`,
    Desktop: `(max-width: ${DevicesSizes.Desktop})`,
}
