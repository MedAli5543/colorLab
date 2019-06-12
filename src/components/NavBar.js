import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        const {level, changeSliderValue} = this.props;
        return (
            <header className="navbar">
                <div className="logo">
                    <a href="/" >ColorLab</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900} 
                            step={100}
                            onAfterChange={changeSliderValue}
                        />
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;