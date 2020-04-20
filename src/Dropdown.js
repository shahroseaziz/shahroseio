import React, { Component } from 'react'
import './App.css';
import instagramLogo from "./images/instagram logo.png"
import linkedinLogo from "./images/linkedin logo.png"
import twitterLogo from "./images/twitter logo.png"


const titleBoxData = [
  {
      url: "https://www.linkedin.com/in/shahroseaziz",
      target: "_blank",
      image: linkedinLogo
  },
  {
      url: "https://www.twitter.com/shahroseaziz",
      target: "_blank",
      image: twitterLogo
  },
  {
      url: "https://www.instagram.com/shahroseaziz",
      target: "_blank",
      image: instagramLogo
  }
];

const SocialBoxTemplate = (props) => {
    return (
      <li>
        <a href={props.url} target={props.target}>
            <img src={props.image} />
        </a>
      </li>  
    )
  }

class Dropdown extends Component {

    state = {
      dropdown: false,
    }
  
    handleClick = () => {
      this.setState({
        dropdown: !this.state.dropdown}, () => {
      document.addEventListener('click', this.closeMenu);
      })
    }
  
    closeMenu = () => {
      this.setState({
        dropdown: false}, () => {
        document.removeEventListener('click', this.closeMenu);
      })
    }
  
    render() {
      return (
        <div className="NavItem-dd">
              <button onClick={this.handleClick}>Social Media</button>
            {this.state.dropdown && <ul>
            {
              titleBoxData.map(function (link) {
                  return (
                      <SocialBoxTemplate
                          key={link.url}
                          url={link.url}
                          target={link.target}
                          image={link.image}
                      />
                  );
                })
              }
              </ul>
            }
        </div>
      )
    }
  }

  export default Dropdown;