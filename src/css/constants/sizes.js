const size = {
  small: '425px',
  medium: '768px',
  large: '1024px',
};

export const device = {
  mobile: `(max-width: ${size.medium})`,
  tablet: `((min-width: ${size.medium}) and (max-width: ${size.large})`,
  laptop: `(min-width: ${size.large})`,
};
