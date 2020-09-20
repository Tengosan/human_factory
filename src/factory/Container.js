import { connect } from 'react-redux';
import { Actions } from '../bag/redux';
import {Actions as Actions1} from '../moneybox/redux';
import {Actions as Actions2} from './redux';
import Factory from './Factory';

const mapStateToProps = state => ({
  coinCount: state.coins.counter,
  armsCount: state.items.arm,
  legsCount: state.items.leg,
  cucumbersCount: state.items.cucumber,
  claudronarmscount: state.claudron.claudronarm,
  claudronlegscount: state.claudron.claudronleg,
  claudroncucumberscount: state.claudron.claudroncucumber
});

const mapDispatchToProps = dispatch => ({
  addArm: () => {
    dispatch(Actions.addArm());
  },
  addLeg: () => {
    dispatch(Actions.addLeg());
  },
  addCucumber: () => {
    dispatch(Actions.addCucumber());
  },
  oddArm: () => {
    dispatch(Actions.oddArm());
  },
  oddLeg: () => {
    dispatch(Actions.oddLeg());
  },
  oddCucumber: () => {
    dispatch(Actions.oddCucumber());
  },
  addClaudronArm: () => {
    dispatch(Actions2.addClaudronArm());
  },
  addClaudronLeg: () => {
    dispatch(Actions2.addClaudronLeg());
  },
  addClaudronCucumber: () => {
    dispatch(Actions2.addClaudronCucumber());
  },
  oddClaudronArm: () => {
    dispatch(Actions2.oddClaudronArm());
  },
  oddClaudronLeg: () => {
    dispatch(Actions2.oddClaudronLeg());
  },
  oddClaudronCucumber: () => {
    dispatch(Actions2.oddClaudronCucumber());
  },
  payHuman: () => {
    dispatch(Actions1.payHuman());
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Factory);


