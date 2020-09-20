import Types from './types';

const initialState = {
  counter: 0,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.ADD_COIN:
      if (state.counter < 100) {
        return { ...state, counter: state.counter + action.amount };
      }
      return { ...state };

    case Types.PAY_ARM:
      if (state.counter > 1 && state.counter < 100) {
        return { ...state, counter: state.counter - action.amount };;
      }
      return { ...state }

    case Types.PAY_LEG:
      if (state.counter > 2 && state.counter < 100) {
        return { ...state, counter: state.counter - action.amount };
      }
      return { ...state }

    case Types.PAY_CUCUMBER:
      if (state.counter > 4 && state.counter < 100) {
        return { ...state, counter: state.counter - action.amount };
      }
      return { ...state }

    case Types.PAY_HUMAN:
      if (state.counter > 19) {
        return { ...state, counter: state.counter - action.amount };
      }
      return { ...state }

    case Types.SELL_ARM:
      return { ...state, counter: state.counter + action.amount };;


    case Types.SELL_LEG:
      return { ...state, counter: state.counter + action.amount };;

    case Types.SELL_CUCUMBER:
      return { ...state, counter: state.counter + action.amount };;

    default:
      return { ...state };

  }
};

export default coinReducer;
