import { resolve, join } from 'path';
import { envPath } from '../helpers/envPath';

const getImage = (icon: string) => {
  const path = envPath('./src/UI/images', './resources/src/UI/images');
  return resolve(join(path, icon));
};

const getPage = (page: string) => {
  const path = envPath('./src/UI/pages', './resources/src/UI/pages');
  return resolve(join(path, page));
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
