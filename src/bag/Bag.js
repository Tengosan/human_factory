import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Bag.css';

class Bag extends Component {
  constructor(props) {
    super(props);
    this.declensionOfNum = this.declensionOfNum.bind(this);
  }

  declensionOfNum(number, titles) {
    this.cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : this.cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  componentDidMount() {
    if (this.props.armsCount === 0) {
      document.getElementById("arm_count").style.color = "lightgray"
      document.getElementById('sell_arm').disabled = true;
    }

    if (this.props.legsCount === 0) {
      document.getElementById("leg_count").style.color = "lightgray"
      document.getElementById('sell_leg').disabled = true;
    }

    if (this.props.cucumbersCount === 0) {
      document.getElementById("cucumber_count").style.color = "lightgray"
      document.getElementById('sell_cucumber').disabled = true;
    }
  }

  componentDidUpdate() {
    if (this.props.armsCount === 0) {
      document.getElementById('sell_arm').disabled = true;
    }
    if (this.props.legsCount === 0) {
      document.getElementById('sell_leg').disabled = true;
    }
    if (this.props.cucumbersCount === 0) {
      document.getElementById('sell_cucumber').disabled = true;
    }
    
    if (this.props.armsCount > 0) {
      document.getElementById("arm_count").style.color = "black";
      document.getElementById("sell_arm").classList.add('ready');
      document.getElementById('sell_arm').disabled = false;
    } else if (this.props.armsCount === 0) {
      document.getElementById("arm_count").style.color = "lightgray";
      document.getElementById("sell_arm").classList.remove('ready');
    }

    if (this.props.legsCount > 0) {
      document.getElementById("leg_count").style.color = "black";
      document.getElementById("sell_leg").classList.add('ready');
      document.getElementById('sell_leg').disabled = false;
    } else if (this.props.legsCount === 0) {
      document.getElementById("leg_count").style.color = "lightgray";
      document.getElementById("sell_leg").classList.remove('ready');
    }

    if (this.props.cucumbersCount > 0) {
      document.getElementById("cucumber_count").style.color = "black";
      document.getElementById("sell_cucumber").classList.add('ready');
      document.getElementById('sell_cucumber').disabled = false;
    } else if (this.props.cucumbersCount === 0) {
      document.getElementById("cucumber_count").style.color = "lightgray";
      document.getElementById("sell_cucumber").classList.remove('ready');
    }
  }

  render() {
    return (
      <div className="Bag">
        <div className="ingredient-table">
          <div className="ingredient-sell">
            <div className="arm-count mar" id="arm_count">
              {this.props.armsCount}{' '}
              {this.declensionOfNum(this.props.armsCount, [
                'рука',
                'руки',
                'рук'
              ])}
            </div>

            <button className="btn sell_arm" id="sell_arm" onClick={() => {
              if (this.props.armsCount > 0) {
                this.props.sellArm();
                this.props.oddArm();
              }
            }}>
              Продать ручку
          </button>
          </div>


          <div className="ingredient-sell">
            <div className="leg-count mar" id="leg_count">
              {this.props.legsCount}{' '}
              {this.declensionOfNum(this.props.legsCount, [
                'нога',
                'ноги',
                'ног'
              ])}
            </div>

            <button className="btn sell_leg" id="sell_leg" onClick={() => {
              if (this.props.legsCount > 0) {
                this.props.sellLeg();
                this.props.oddLeg();
              }
            }}>
              Продать ножку
            </button>
          </div>

          <div className="ingredient-sell">
            <div className="cucumber-count mar" id="cucumber_count">
              {this.props.cucumbersCount}{' '}
              {this.declensionOfNum(this.props.cucumbersCount, [
                'огурец',
                'огурца',
                'огурцов'
              ])}
            </div>

            <button className="btn sell_cucumber" id="sell_cucumber" onClick={() => {
              if (this.props.cucumbersCount > 0) {
                this.props.sellCucumber();
                this.props.oddCucumber();
              }
            }}>
              Продать огуречик
            </button>
          </div>

        </div>
      </div>
    );
  }
}

Bag.propTypes = {
  armsCount: PropTypes.number.isRequired,
  legsCount: PropTypes.number.isRequired,
  cucumbersCount: PropTypes.number.isRequired
};

export default Bag;
