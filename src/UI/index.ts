import { resolve, join } from 'path';

const getImage = (icon: string) => {
  return resolve(join('./resources/src/UI/images', icon));
};

const getPage = (page: string) => {
  return resolve(join('./resources/src/UI/pages', page));
};

export default {
  images: {
    logo: getImage('online.png'),
    loadingLogo: getImage('loading.png')
  },
  pages: {
    main: getPage('index.html')
  }
};
