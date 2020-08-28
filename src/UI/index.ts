import { resolve, join } from 'path';

const getImage = (icon: string) => {
  return resolve(join('./src/UI/images', icon));
};

const getPage = (page: string) => {
  return resolve(join('./src/UI/pages', page));
};

export default {
  images: {
    logo: getImage('808080.png')
  },
  pages: {
    main: getPage('index.html')
  }
};
