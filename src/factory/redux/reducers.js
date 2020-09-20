import Types from './types';

const initialState = {
  claudronarm: 0,
  claudronleg: 0,
  claudroncucumber: 0
};

const factoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_CLAUDRON_ARM:
      return { ...state, claudronarm: state.claudronarm + action.amount };

    case Types.ADD_CLAUDRON_LEG:
      return { ...state, claudronleg: state.claudronleg + action.amount };

    case Types.ADD_CLAUDRON_CUCUMBER:
      return { ...state, claudroncucumber: state.claudroncucumber + action.amount };

    case Types.ODD_CLAUDRON_ARM:
      return { ...state, claudronarm: state.claudronarm - action.amount };

    case Types.ODD_CLAUDRON_LEG:
      return { ...state, claudronleg: state.claudronleg - action.amount };

    case Types.ODD_CLAUDRON_CUCUMBER:
      return { ...state, claudroncucumber: state.claudroncucumber - action.amount };

    default:
      return { ...state };
  }
};

export default factoryReducer;

