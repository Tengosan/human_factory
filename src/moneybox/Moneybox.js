import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Moneybox.css';
import coin from './image/coin.png';

class Moneybox extends Component {
  constructor(props) {
    super(props);
    this.declensionOfNum = this.declensionOfNum.bind(this);
  }

  //добавление числительных названий
  declensionOfNum(number, titles) {
    this.cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : this.cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
  
  render() {
    const coins = [];
    for (let i = 0; i < this.props.coinCount; i += 1) {
      coins.push(<img className="coin-img" key={coins.toString()} alt="coin" src={coin} />);
    }
    return (
      <div className="Moneybox">
        <a href="#!" className="ref" onClick={this.props.addCoin}>
          Добавить одну монету
        </a>
        <div className="coin-box">
          <div className="coin">
            {this.props.coinCount}{' '}
            {this.declensionOfNum(this.props.coinCount, [
              'монета',
              'монеты',
              'монет'
            ])}
          </div>
          {coins}
        </div>
      </div>
    );
  }
}

Moneybox.propTypes = {
  addCoin: PropTypes.func.isRequired,
  coinCount: PropTypes.number.isRequired
};

export default Moneybox;
