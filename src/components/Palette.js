import React from 'react';
import ColorBox from './ColorBox'; 
import Navbar from './NavBar';
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
                <Navbar
                    level={level}
                    changeSliderValue={this.onChangeSliderValue}
                />
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}

export default Palette;