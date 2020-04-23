import React, { Component } from 'react';
import './App.css';

const Profile = () => {
    return(
        <div className="AboutMe-profile">
        <p>
            I'm a Health Tech Product Manager passionate about personalized, predictive medicine.
        </p>
        <p>
            During my free time, I enjoy learning basic programming and web development. Am I good at it? No way.
            Will I keep trying? Honestly, it's up in the air.
        </p>
        </div>
    )
  }

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div className="AboutMe-panel">
                    <div className="AboutMe-img">
                        <img className="AboutMe-img" src={require("./images/me.jpg")} />
                    </div>
                </div>
                <div className="AboutMe-panel">
                    <Profile />
                </div>
                
            </div>
        )
    }
}

export default AboutMe