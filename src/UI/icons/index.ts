import { resolve, join } from 'path';

const baseIcons = (icon: string) => {
  return join('.', 'src', 'UI', 'icons', icon);
};

export default {
  logo: resolve(baseIcons('808080.png'))
};
