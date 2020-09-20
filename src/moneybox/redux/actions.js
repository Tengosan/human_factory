import Types from './types';

const addCoin = () => ({
  type: Types.ADD_COIN,
  amount: 1
});

const payArm = () => ({
  type: Types.PAY_ARM,
  amount: 2
});

const payLeg = () => ({
  type: Types.PAY_LEG,
  amount: 3
});

const payCucumber = () => ({
  type: Types.PAY_CUCUMBER,
  amount: 5
});

const payHuman = () => ({
  type: Types.PAY_HUMAN,
  amount: 20
});

const sellArm = () => ({
  type: Types.SELL_ARM,
  amount: 2
});

const sellLeg = () => ({
  type: Types.SELL_LEG,
  amount: 3
});

const sellCucumber = () => ({
  type: Types.SELL_CUCUMBER,
  amount: 5
});

export default { 
  addCoin, 
  payArm, 
  payLeg, 
  payCucumber,
  payHuman,
  sellArm, 
  sellLeg, 
  sellCucumber
};
