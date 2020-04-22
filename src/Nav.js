import React, { Component } from 'react';
import Title from './Title';
import AboutMe from './AboutMe';
import Dropdown from './Dropdown'
import './App.css';

class Nav extends Component {

  state = {
    aboutMeButton: false,
  }

  clickOn = () => {
    this.setState({
      aboutMeButton: true
    })
  }

  clickOff = () => {
    this.setState({
      aboutMeButton: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <div className="NavItem">
          <button onClick={this.clickOff}> Home </button>
          </div>
          <Dropdown />
          <div className="NavItem">
            <button onClick={this.clickOn}> About Me </button>
          </div>
        </div>
        <div className="Main">
          {!this.state.aboutMeButton && <Title />}
          {this.state.aboutMeButton && <AboutMe />}
        </div>
      </div>
    )
  }
}

export default Nav