import React from 'react';
import ColorBox from './ColorBox'; 
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "../styles/Palette.css";


class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
    }

    onChangeSliderValue = (level) => {
        this.setState({level})
    }

    render() {
        const {level} = this.state;
        const {colors} = this.props.palette;
        const colorBoxes = colors[level].map(color =>  <ColorBox background={color.hex} name={color.name} />)
        return (
            <div className="palette">
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900} 
                        step={100}
                        onAfterChange={this.onChangeSliderValue}
                    />
                </div>
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}

export default Palette;