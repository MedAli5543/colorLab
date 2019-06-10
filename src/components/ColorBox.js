import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    changeCopyState = () => {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1200)
        })
    }

    render() {
        const {name, background} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard
                text={background}
                onCopy={this.changeCopyState}>
                <div
                    style={{ background }}
                    className="ColorBox">
                    <div
                        style={{background}}
                        className={`copy-overlay ${copied && "show"}`} 
                    />
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;