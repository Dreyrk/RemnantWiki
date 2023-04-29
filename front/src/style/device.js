const size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  smallest: `(max-width: ${size.xs})`,
  mobile: `(max-width: ${size.sm})`,
  tablet: `(max-width: ${size.md})`,
  laptop: `(max-width: ${size.lg})`,
  desktop: `(max-width: ${size.xl})`,
  biggest: `(max-width: ${size.xxl})`,
};
