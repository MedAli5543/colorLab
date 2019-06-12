import React from 'react';
import ColorBox from './ColorBox'; 
import Navbar from './NavBar';
import "../styles/Palette.css";


class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    onChangeSliderValue = level => {
        this.setState({level})
    }

    setColorFormat = format => {
        this.setState({format})
    }

    render() {
        const {level, format} = this.state;
        const {colors} = this.props.palette;
        const colorBoxes = colors[level].map(color =>  <ColorBox background={color[format]} name={color.name} />)
        return (
            <div className="palette">
                <Navbar
                    level={level}
                    changeSliderValue={this.onChangeSliderValue}
                    setColorFormat={this.setColorFormat}
                />
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}

export default Palette;