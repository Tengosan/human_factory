import Types from './types';

const initialState = {
  arm: 0,
  leg: 0,
  cucumber: 0
};

const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_ARM:
      return { ...state, arm: state.arm + action.amount };

    case Types.ADD_LEG:
      return { ...state, leg: state.leg + action.amount };

    case Types.ADD_CUCUMBER:
      return { ...state, cucumber: state.cucumber + action.amount };

    case Types.ODD_ARM:
      return { ...state, arm: state.arm - action.amount };

    case Types.ODD_LEG:
      return { ...state, leg: state.leg - action.amount };

    case Types.ODD_CUCUMBER:
      return { ...state, cucumber: state.cucumber - action.amount };

    default:
      return { ...state };
  }
};

export default bagReducer;

