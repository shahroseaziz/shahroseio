import React, { Component } from 'react';
import './App.css';

const Profile = () => {
    return(
        <div className="AboutMe-profile">
        <b>
            I'm a Health Tech Product Manager passionate about personalized, predictive medicine.
        </b>
        <br />
        <p>
            I'm the PM for the SensorSuite team at Verily Life Sciences, an Internet-of-Medical-Things platform, 
            optimized for the intersection beween Devices, Data Science, and Software Engineering.
        </p>
        <p>
            During my free time, I enjoy learning basic programming and web development. This particular site was built with 
            <code> React</code>. We'll see what else we can throw in this thing!
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