import React, { Component } from 'react';
import './Factory.css';
import man from '../image/man.png';
import woman from '../image/woman.png';
import arm from '../image/arm.png';
import leg from '../image/leg.png';
import cucumber from '../image/cucumber.png';
import claudron from '../image/claudron.png';
import message from '../image/message_cloud.png';
import man_arms from '../image/man_arms.png';
import man_legs from '../image/man_legs.png';
import man_cucumber from '../image/man_cucumber.png';
import woman_arms from '../image/woman_arms.png';
import woman_legs from '../image/woman_legs.png';
import woman_cucumber from '../image/woman_cucumber.png';
import coin from '../moneybox/image/coin.png';


class Factory extends Component {
  constructor(props) {
    super(props);

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
    this.declensionOfNum = this.declensionOfNum.bind(this);


    this.state = {
      gender: '',
      color: ''
    }

  }


  onChangeValue(event) {
    console.log(event.target.value);
    this.setState({
      gender: event.target.value
    })
  }

  onChangeColor(event) {
    console.log(event.target.value);
    this.setState({
      color: event.target.value
    })
  }

  errorMessage() {
    if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.props.coinCount > 19) {
      return (
        <div className="error_message" id="error_message">
          Всё готово к созданию!
        </div>
      )
    }
    if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
                ,{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
                ,{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])} {' '}
              и денег
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
                ,{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
          {' '}и{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
                 ,{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
          {' '} и денег
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
          {' '}и{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0 && this.props.claudroncucumberscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
                 ,{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
          {' '} и денег
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0 && this.props.claudroncucumberscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
          {' '}и{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
        </div>
      )
    }
    else if (this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
                ,{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
          {' '} и денег
        </div>
      )
    }
    else if (this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
          {' '}и{' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
          {' '} и денег
        </div>
      )
    }
    else if (this.props.claudronarmscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ручки',
            'рук',
            'ручек'
          ])}
        </div>
      )
    }
    else if (this.props.claudronlegscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
          {' '} и денег
        </div>
      )
    }
    else if (this.props.claudronlegscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'ножки',
            'ног',
            'ножек'
          ])}
        </div>
      )
    }
    else if (this.props.claudroncucumberscount === 0 && this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
          {' '} и денег
        </div>
      )
    }
    else if (this.props.claudroncucumberscount === 0) {
      return (
        <div className="error_message" id="error_message">
          Не хватает {' '}
          {this.declensionOfNum(this.props.claudronarmscount, [
            'огурца',
            'огурцов',
            'огуречика'
          ])}
        </div>
      )
    }

    else if (this.props.coinCount < 20) {
      return (
        <div className="error_message" id="error_message">
          Не хватает денег
        </div>
      )
    }
    else {
      return null
    }
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

    if (this.props.coinCount < 20) {
      document.getElementById("coin_required").classList.add('uncolor');
    }

    if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0 && this.props.coinCount < 20) {
      document.getElementById('create_human').disabled = true;
    }

    if (this.props.armsCount === 0) {
      document.getElementById('claudron_add_arm').disabled = true;
    }
    if (this.props.legsCount === 0) {
      document.getElementById('claudron_add_leg').disabled = true;
    }
    if (this.props.cucumbersCount === 0) {
      document.getElementById('claudron_add_cucumber').disabled = true;
    }

    if (this.props.claudronarmscount === 0) {
      document.getElementsByClassName('arm_item')[0].style.color = "lightgray";
    }
    if (this.props.claudronlegscount === 0) {
      document.getElementsByClassName('leg_item')[0].style.color = "lightgray";
    }
    if (this.props.claudroncucumberscount === 0) {
      document.getElementsByClassName('cucumber_item')[0].style.color = "lightgray";
    }
    if (this.props.claudronarmscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.add('uncolor');
    }
    if (this.props.claudronlegscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("leg_fragment").classList.add('uncolor');
    }
    if (this.props.claudroncucumberscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("cucumber_fragment").classList.add('uncolor');
    }
    document.getElementById("human").style.visibility = 'hidden';
  }

  componentDidUpdate() {

    if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0 && this.props.coinCount < 20) {
      document.getElementById('create_human').disabled = true;
    }

    if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.props.coinCount > 19) {
      document.getElementById('create_human').disabled = false;
    }

    if (this.props.armsCount === 0) {
      document.getElementById('claudron_add_arm').disabled = true;
    }
    if (this.props.legsCount === 0) {
      document.getElementById('claudron_add_leg').disabled = true;
    }
    if (this.props.cucumbersCount === 0) {
      document.getElementById('claudron_add_cucumber').disabled = true;
    }
    if (this.props.armsCount > 0) {
      document.getElementById('claudron_add_arm').disabled = false;
    }
    if (this.props.legsCount > 0) {
      document.getElementById('claudron_add_leg').disabled = false;
    }
    if (this.props.cucumbersCount > 0) {
      document.getElementById('claudron_add_cucumber').disabled = false;
    }

    if (this.props.claudronarmscount === 0) {
      document.getElementsByClassName('arm_item')[0].style.color = "lightgray";
    }
    if (this.props.claudronlegscount === 0) {
      document.getElementsByClassName('leg_item')[0].style.color = "lightgray";
    }
    if (this.props.claudroncucumberscount === 0) {
      document.getElementsByClassName('cucumber_item')[0].style.color = "lightgray";
    }

    if (this.props.claudronarmscount > 0) {
      document.getElementsByClassName('arm_item')[0].style.color = "black";
    }
    if (this.props.claudronlegscount > 0) {
      document.getElementsByClassName('leg_item')[0].style.color = "black";
    }
    if (this.props.claudroncucumberscount > 0) {
      document.getElementsByClassName('cucumber_item')[0].style.color = "black";
    }

    if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.props.coinCount > 19) {
      document.getElementById("create_human").classList.add('ready');
    } else {
      document.getElementById("create_human").classList.remove('ready');
    }

    if (this.props.coinCount < 20) {
      document.getElementById("coin_required").classList.add('uncolor');
    }
    if (this.props.coinCount > 19) {
      document.getElementById("coin_required").classList.remove('uncolor');
    }

    if (this.props.claudronarmscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.add('uncolor');
    }
    if (this.props.claudronlegscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("leg_fragment").classList.add('uncolor');
    }
    if (this.props.claudroncucumberscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("cucumber_fragment").classList.add('uncolor');
    }

    if (this.props.claudronarmscount > 0 && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.remove('uncolor');
    }
    if (this.props.claudronlegscount > 0 && document.getElementById("human_fragments")) {
      document.getElementById("leg_fragment").classList.remove('uncolor');
    }
    if (this.props.claudroncucumberscount > 0 && document.getElementById("human_fragments")) {
      document.getElementById("cucumber_fragment").classList.remove('uncolor');
    }

    if (this.state.color === "Red") {
      document.getElementById("human").classList.remove('green');
      document.getElementById("human").classList.remove('blue');
      document.getElementById("human").classList.add('red');
    }
    else if (this.state.color === "Green") {
      document.getElementById("human").classList.remove('red');
      document.getElementById("human").classList.remove('blue');
      document.getElementById("human").classList.add('green');
    }
    else if (this.state.color === "Blue") {
      document.getElementById("human").classList.remove('green');
      document.getElementById("human").classList.remove('red');
      document.getElementById("human").classList.add('blue');
    }
    else if (this.state.color === "Defaultcolor") {
      document.getElementById("human").classList.remove('green');
      document.getElementById("human").classList.remove('red');
      document.getElementById("human").classList.remove('blue');
    }


    if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.state.color === "Red" && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.remove('green');
      document.getElementById("arm_fragment").classList.remove('blue');
      document.getElementById("arm_fragment").classList.add('red');
      document.getElementById("leg_fragment").classList.remove('green');
      document.getElementById("leg_fragment").classList.remove('blue');
      document.getElementById("leg_fragment").classList.add('red');
      document.getElementById("cucumber_fragment").classList.remove('green');
      document.getElementById("cucumber_fragment").classList.remove('blue');
      document.getElementById("cucumber_fragment").classList.add('red');
    }
    else if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.state.color === "Green" && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.remove('red');
      document.getElementById("arm_fragment").classList.remove('blue');
      document.getElementById("arm_fragment").classList.add('green');
      document.getElementById("leg_fragment").classList.remove('red');
      document.getElementById("leg_fragment").classList.remove('blue');
      document.getElementById("leg_fragment").classList.add('green'); document.getElementById("arm_fragment").classList.remove('red');
      document.getElementById("cucumber_fragment").classList.remove('red');
      document.getElementById("cucumber_fragment").classList.remove('blue');
      document.getElementById("cucumber_fragment").classList.add('green');
    }
    else if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.state.color === "Blue" && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.remove('green');
      document.getElementById("arm_fragment").classList.remove('red');
      document.getElementById("arm_fragment").classList.add('blue');
      document.getElementById("leg_fragment").classList.remove('green');
      document.getElementById("leg_fragment").classList.remove('red');
      document.getElementById("leg_fragment").classList.add('blue');
      document.getElementById("cucumber_fragment").classList.remove('green');
      document.getElementById("cucumber_fragment").classList.remove('red');
      document.getElementById("cucumber_fragment").classList.add('blue');
    }
    else if (this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0 && this.state.color === "Defaultcolor" && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.remove('green');
      document.getElementById("arm_fragment").classList.remove('red');
      document.getElementById("arm_fragment").classList.remove('blue');
      document.getElementById("leg_fragment").classList.remove('green');
      document.getElementById("leg_fragment").classList.remove('red');
      document.getElementById("leg_fragment").classList.remove('blue');
      document.getElementById("cucumber_fragment").classList.remove('green');
      document.getElementById("cucumber_fragment").classList.remove('red');
      document.getElementById("cucumber_fragment").classList.remove('blue');
    }
    else if (this.props.claudronarmscount === 0 && this.props.claudronlegscount === 0 && this.props.claudroncucumberscount === 0 && document.getElementById("human_fragments")) {
      document.getElementById("arm_fragment").classList.remove('green');
      document.getElementById("arm_fragment").classList.remove('red');
      document.getElementById("arm_fragment").classList.remove('blue');
      document.getElementById("arm_fragment").classList.add('uncolor');
      document.getElementById("leg_fragment").classList.remove('green');
      document.getElementById("leg_fragment").classList.remove('red');
      document.getElementById("leg_fragment").classList.remove('blue');
      document.getElementById("leg_fragment").classList.add('uncolor');
      document.getElementById("cucumber_fragment").classList.remove('green');
      document.getElementById("cucumber_fragment").classList.remove('red');
      document.getElementById("cucumber_fragment").classList.remove('blue');
      document.getElementById("cucumber_fragment").classList.add('uncolor');
    }
  }


  humangender() {
    if (this.state.gender === "Male") {
      return (
        <a href="#!" className="ref">
          <img className="man" id="man" src={man} alt="man" />
        </a>
      )
    }

    if (this.state.gender === "Female") {
      return (
        <a href="#!" className="ref">
          <img className="woman" id="woman" src={woman} alt="woman" />
        </a>
      )
    }
  }

  createhuman() {
    document.getElementById("human").style.visibility = 'visible';
  }

  humanfragmentsgender() {
    if (this.state.gender === "Male") {
      return (
        <div className="human_fragments" id="human_fragments" >
          <a href="#!" className="ref" onClick={() => {
            if (this.props.claudronarmscount > 0) {
              this.props.oddClaudronArm();
              this.props.addArm();
            }
          }}>
            <img className="arm_fragment" id="arm_fragment" src={man_arms} alt="arm_fragment" />
          </a>
          <a href="#!" className="ref"
            onClick={() => {
              if (this.props.claudronlegscount > 0) {
                this.props.oddClaudronLeg();
                this.props.addLeg();
              }
            }}>
            <img className="leg_fragment" id="leg_fragment" src={man_legs} alt="leg_fragment" />
          </a>
          <a href="#!" className="ref"
            onClick={() => {
              if (this.props.claudroncucumberscount > 0) {
                this.props.oddClaudronCucumber();
                this.props.addCucumber();
              }
            }}>
            <img className="cucumber_fragment" id="cucumber_fragment" src={man_cucumber} alt="cucumber_fragment" />
          </a>
        </div>)
    }

    if (this.state.gender === "Female") {
      return (
        <div className="human_fragments" id="human_fragments" >
          <a href="#!" className="ref" onClick={() => {
            if (this.props.claudronarmscount > 0) {
              this.props.oddClaudronArm();
              this.props.addArm();
            }
          }}>
            <img className="arm_fragment" id="arm_fragment" src={woman_arms} alt="arm_fragment" />
          </a>
          <a href="#!" className="ref"
            onClick={() => {
              if (this.props.claudronlegscount > 0) {
                this.props.oddClaudronLeg();
                this.props.addLeg();
              }
            }}>
            <img className="leg_fragment" id="leg_fragment" src={woman_legs} alt="leg_fragment" />
          </a>
          <a href="#!" className="ref"
            onClick={() => {
              if (this.props.claudroncucumberscount > 0) {
                this.props.oddClaudronCucumber();
                this.props.addCucumber();
              }
            }}>
            <img className="cucumber_fragment" id="cucumber_fragment" src={woman_cucumber} alt="cucumber_fragment" />
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Factory">

        <div className="claudron_container">
          <div className='error'>
          {this.errorMessage()}
            <img className='error_message_space' src={message} alt='error_message_space'></img>
          </div>
          <a href="#!" className="claudron">
            <img className="claudron_icon" src={claudron} alt="claudron" />
          </a>
          <button className="btn create_human" id="create_human" onClick={() => {
            if (this.props.coinCount > 19 && this.state.gender && this.props.claudronarmscount > 0 && this.props.claudronlegscount > 0 && this.props.claudroncucumberscount > 0) {
              this.props.payHuman();
              this.props.oddClaudronArm();
              this.props.oddClaudronLeg();
              this.props.oddClaudronCucumber();
              this.createhuman();
            }
          }}>
            Создать человечка
          </button>
          <div className="coins_for_create">
            <img className="coin_required" id="coin_required" src={coin} alt="coin_required" />
            <h1 className="coins_count_requide">X20</h1>
          </div>
        </div>

        <div className="human" id="human">
          {this.humangender()}
        </div>

        <div className="human_fragments_container">
          {this.humanfragmentsgender()}
        </div>

        <div className="items_container">
          <button className="btn claudron_add_arm" id="claudron_add_arm" onClick={() => {
            if (this.props.armsCount > 0) {
              this.props.addClaudronArm();
              this.props.oddArm();
            }
          }}>
            Добавить в котёл ручку
          </button>
          <div className="arm_item space">
            <a href="#!" className="ref">
              <img className="arm_icon" src={arm} alt="arm" />
            </a>
              X{' '}{this.props.claudronarmscount}
          </div>

          <button className="btn claudron_add_leg" id="claudron_add_leg" onClick={() => {
            if (this.props.legsCount > 0) {
              this.props.addClaudronLeg();
              this.props.oddLeg();
            }
          }}>
            Добавить в котёл ножку
          </button>
          <div className="leg_item space" id="claudronlegscount">
            <a href="#!" className="ref">
              <img className="leg_icon" src={leg} alt="leg" />
            </a>
             X{' '}{this.props.claudronlegscount}
          </div>

          <button className="btn claudron_add_cucumber" id="claudron_add_cucumber" onClick={() => {
            if (this.props.cucumbersCount > 0) {
              this.props.addClaudronCucumber();
              this.props.oddCucumber();
            }
          }}>Добавить в котёл огуречик</button>
          <div className="cucumber_item space" id="claudroncucumberscount">
            <a href="#!" className="ref">
              <img className="cucumber_icon" src={cucumber} alt="cucumber" />
            </a>
              X{' '}{this.props.claudroncucumberscount}
          </div>
        </div>

        <div className="settings">
          <div className="gender_select" onChange={this.onChangeValue}>
            <p>Пол:</p>
            <label>Мужской</label>
            <input className="male" id="male" type="radio" value="Male" name="gender" />
            <label>Женский</label>
            <input className="female" id="female" type="radio" value="Female" name="gender" />

            {/* <div className="radio-item">
              <input type="radio" id="ritema" name="ritem" value="ropt1"></input>
              <label for="ritema">Option 1</label>
            </div>

            <div className="radio-item">
              <input type="radio" id="ritemb" name="ritem" value="ropt2"></input>
              <label for="ritemb">Option 2</label>
            </div> */}
          </div>

          <div className="color_select" onChange={this.onChangeColor}>
            <p>Цвет:</p>
            <label>Красный</label>
            <input className="red" id="red" type="radio" value="Red" name="color" />
            <label>Зеленый</label>
            <input className="green" id="green" type="radio" value="Green" name="color" />
            <br />
            <label>Синий</label>
            <input className="blue" id="blue" type="radio" value="Blue" name="color" />
            <br />
            <label>Стандартный</label>
            <input className="defaultcolor" id="defaultcolor" type="radio" value="Defaultcolor" name="color" />
          </div>
        </div>

      </div>
    );
  }
}


export default Factory;