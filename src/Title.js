import React, { Component, useRef, useEffect } from 'react';
import './App.css';
import AboutMe from './AboutMe';


const TitleHeader = () => {
    return <div className="Title-header">
        Shahrose Aziz
        <div className = "Title-sub-header">
            product manager \ health tech geek \ amateur web dev
        </div>      
    </div>
}

const TitleFooter = () => {
    return <div className="Title-footer"><p>Made with React</p></div>
}

const Title = () => {
    return (
        <div className="Title">
            <TitleHeader />
            <TitleFooter />
        </div >
    )
}

export default Title;