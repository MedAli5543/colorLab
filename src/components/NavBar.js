import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';
import { MenuItem } from '@material-ui/core';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }
    }

    changeColorFormat = e => {
        const format = e.target.value;
        this.setState({format, open: true});
        this.props.setColorFormat(format)
    }

    closeSnackbar = () => {
        this.setState({open: false})
    }

    render() {
        const {format, open} = this.state;
        const {level, changeSliderValue} = this.props;
        return (
            <header className="navbar">
                <div className="logo">
                    <Link to="/">ColorLab</Link>
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
                <div className="select-container">
                    <Select
                        onChange={this.changeColorFormat}
                        value={format}    
                    >
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={open}
                    autoHideDuration={2000}
                    message={<span id="message-id">Format Changed To {format.toUpperCase()}!</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default Navbar;