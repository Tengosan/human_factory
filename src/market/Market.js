import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Market.css';

class Market extends Component {

  componentDidMount() {
    if (this.props.coinCount < 2) {
      document.getElementById('buy_arm').disabled = true;
    }

    if (this.props.coinCount < 3) {
      document.getElementById('buy_leg').disabled = true;
    }

    if (this.props.coinCount < 5) {
      document.getElementById('buy_cucumber').disabled = true;
    }
  }

  componentDidUpdate() {
    if (this.props.coinCount < 2) {
      document.getElementById('buy_arm').disabled = true;
    }

    if (this.props.coinCount < 3) {
      document.getElementById('buy_leg').disabled = true;
    }

    if (this.props.coinCount < 5) {
      document.getElementById('buy_cucumber').disabled = true;
    }

    if(this.props.coinCount === 0){
      document.getElementById('buy_arm').disabled = true;
    }
    if(this.props.coinCount === 0){
      document.getElementById('buy_leg').disabled = true;
    }
    if(this.props.coinCount === 0){
      document.getElementById('buy_cucumber').disabled = true;
    }
    if (this.props.coinCount >= 2) {
      document.getElementById('buy_arm').disabled = false;
      document.getElementById("buy_arm").classList.add('ready');
    }else {
      document.getElementById("buy_arm").classList.remove('ready');
    }

    if (this.props.coinCount >= 3) {
      document.getElementById('buy_leg').disabled = false;
      document.getElementById("buy_leg").classList.add('ready');
    }
    else{
      document.getElementById("buy_leg").classList.remove('ready');
    }

    if (this.props.coinCount >= 5) {
      document.getElementById('buy_cucumber').disabled = false;
      document.getElementById("buy_cucumber").classList.add('ready');
    }else{
      document.getElementById("buy_cucumber").classList.remove('ready');
    }
  }

  render() {
    return (
      <div className="Market">
        <div className="ingredient-buy">
          <button className="btn buy_arm" id="buy_arm" onClick={() => {
            if (this.props.coinCount >= 2){
              this.props.payArm();
              this.props.addArm();
            }
          }}>
            Купить ручку
          </button>
          <div className="price">2 монеты</div>
        </div>

        <div className="ingredient-buy">
          <button className="btn buy_leg" id="buy_leg" onClick={() => {
            if (this.props.coinCount >= 3){
              this.props.payLeg();
              this.props.addLeg();
            }
          }}>
            Купить ножку
          </button>
          <div className="price">3 монеты</div>
        </div>

        <div className="ingredient-buy">
          <button className="btn buy_cucumber" id="buy_cucumber" onClick={() => {
            if (this.props.coinCount >= 5){
              this.props.payCucumber();
              this.props.addCucumber();
            }
          }}>
            Купить огуречик
          </button>
          <div className="price">5 монет</div>
        </div>
      </div>
    );
  }
}

Market.propTypes = {
  addArm: PropTypes.func.isRequired,
  addLeg: PropTypes.func.isRequired,
  addCucumber: PropTypes.func.isRequired,
  payArm: PropTypes.func.isRequired,
  payLeg: PropTypes.func.isRequired,
  payCucumber: PropTypes.func.isRequired
};

export default Market;
