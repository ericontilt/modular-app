import * as modulesActions from '../actions/modulesActions';

const registerModule = ({modDescription, dispatch}) => {
  if (modDescription.type !== 'module') {
    return;
  }

  dispatch(modulesActions.registerModule(modDescription));
};

export default registerModule;
