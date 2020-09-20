import Types from './types';

const addArm = () => ({
  type: Types.ADD_ARM,
  amount: 1
});

const addLeg = () => ({
  type: Types.ADD_LEG,
  amount: 1
});

const addCucumber = () => ({
  type: Types.ADD_CUCUMBER,
  amount: 1
});

const oddArm = () => ({
  type: Types.ODD_ARM,
  amount: 1
});

const oddLeg = () => ({
  type: Types.ODD_LEG,
  amount: 1
});

const oddCucumber = () => ({
  type: Types.ODD_CUCUMBER,
  amount: 1
});


export default {
  addArm,
  addLeg,
  addCucumber,
  oddArm,
  oddLeg,
  oddCucumber
};
