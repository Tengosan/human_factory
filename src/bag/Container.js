import { connect } from 'react-redux';
import Bag from './Bag';
import {Actions} from './redux';
import {Actions as Actions1} from '../moneybox/redux';

const mapStateToProps = state => ({
  armsCount: state.items.arm,
  legsCount: state.items.leg,
  cucumbersCount: state.items.cucumber
});


const mapDispatchToProps = dispatch => ({
  oddArm: () => {
    dispatch(Actions.oddArm());
  },
  oddLeg: () => {
    dispatch(Actions.oddLeg());
  },
  oddCucumber: () => {
    dispatch(Actions.oddCucumber());
  },
  sellArm: () => {
    dispatch(Actions1.sellArm());
  },
  sellLeg: () => {
    dispatch(Actions1.sellLeg());
  },
  sellCucumber: () => {
    dispatch(Actions1.sellCucumber());
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Bag);
