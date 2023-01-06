import errorCatalog from './errorCatalog';

const errorHandler = (err) => {
  if (err.includes('400') === true) {
    return errorCatalog[400];
  } if (err.includes('429') === true) {
    return errorCatalog[429];
  } return 'Houve algum erro interno :/';
};

export default errorHandler;
