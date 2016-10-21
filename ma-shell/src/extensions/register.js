import registerModule from './registerModule';

const register = data => {
  const { modDescription, dispatch } = data;
  switch (modDescription.type) {
    case 'module':
      registerModule({ modDescription, dispatch });
      break;

    default:
      break;
  }
};

export default register;
