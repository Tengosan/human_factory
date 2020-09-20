import { connect } from 'react-redux';
import Moneybox from './Moneybox';
import { Actions } from './redux';

const mapStateToProps = state => ({ 
  coinCount: state.coins.counter,
 });

const mapDispatchToProps = dispatch => ({
  addCoin: () => {
    dispatch(Actions.addCoin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Moneybox);
