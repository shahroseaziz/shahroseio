import React, { Component, useRef, useEffect } from 'react';
import './App.css';
import AboutMe from './AboutMe';


const TitleTop = () => {
    return (
        <div className="Title-top">
        </div>
    )
}

const TitleHeader = () => {
    return <div className="Title-header">Shahrose Aziz</div>
}

const TitleMain = () => {
    return (
        <div className="Title-main">
            <TitleHeader />
        </div>
    )
}

const Title = () => {
    return (
        <div className="Title">
            <TitleMain />
        </div >
    )
}

export default Title;