import Types from './types';

const addClaudronArm = () => ({
  type: Types.ADD_CLAUDRON_ARM,
  amount: 1
});

const addClaudronLeg = () => ({
  type: Types.ADD_CLAUDRON_LEG,
  amount: 1
});

const addClaudronCucumber = () => ({
  type: Types.ADD_CLAUDRON_CUCUMBER,
  amount: 1
});

const oddClaudronArm = () => ({
  type: Types.ODD_CLAUDRON_ARM,
  amount: 1
});

const oddClaudronLeg = () => ({
  type: Types.ODD_CLAUDRON_LEG,
  amount: 1
});

const oddClaudronCucumber = () => ({
  type: Types.ODD_CLAUDRON_CUCUMBER,
  amount: 1
});


export default {
  addClaudronArm,
  addClaudronLeg,
  addClaudronCucumber,
  oddClaudronArm,
  oddClaudronLeg,
  oddClaudronCucumber
};
