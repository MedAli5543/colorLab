import React from 'react';
import MiniPalette from "./MiniPalette";
import {Link} from "react-router-dom";
import {withStyles} from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "#6282c4",
        height: "110vh",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "#FFF",
        alignItems: 'center',
        marginBottom: "50px",
    },
    palettes: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

class PaletteList extends React.Component {
    
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>ColorLab</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);