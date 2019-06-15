import React from 'react';
import {withStyles} from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "2px",
        padding: ".4rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#ffffff",
        height: "60px",
        width: "100%"
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: "black",
        fontWeight: '500',
        fontSize: ".8rem",
        position: "relative"
    },
    emoji: {
        marginLeft: ".5rem",
        fontSize: "1rem"
    },
    miniColor: {
        height: "48%",
        width: "20%",
        display: "inline-block",
        margin: '0 auto',
        marginBottom: "-4.5px",

    }
}

const MiniPalette = ({classes, paletteName, emoji, colors, handleClick}) => {
    const miniColorBoxes = colors.map(color => <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name} />);
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <div className={classes.colors}></div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);