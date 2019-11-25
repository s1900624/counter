import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, CardActions } from "@material-ui/core";
import './counter.css';

const useStyles = makeStyles({
    gridContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "30px",
    },
    gridItem: {
        padding: "1.0rem",
        borderRadius: "1rem",
        boxShadow: "-14px 20px 32px -10px rgba(0,0,0,0.75)",
        display: "flex",
        flexDirection: "row",
    },
    cardMedia: {
        height: "35vh",
    },
});

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const reset = () => {
        setCounter(0);
    };

    const add = () => {
        setCounter(counter+1);
    };

    const remove = () => {
        setCounter(counter > 0 ? counter-1 : 0)
    };

    let color = "grey";

    if (counter === 0) {
        color = "grey";
    } else {
        if (counter === 100) reset();
        if (counter % 2 === 0) color = "red";
        if (counter % 2 === 1) color = "black";
    }

    const classes = useStyles();
    return (
        <main className='circle-container'>
            <div className={`circle ${color}`}>
                {counter}
            </div>
            <Grid container className={classes.gridContainer} spacing={2}>
                <Grid item xs={3} className={classes.gridItem}>
                    <CardActions>
                        <Button
                            onClick={ add }
                            variant="contained"
                            color="secondary">
                            Add one more
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            onClick={ remove }
                            variant="contained"
                            color="secondary">
                            Remove one more
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            onClick={ reset }
                            variant="contained"
                            color="secondary">
                            Reset
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </main>
    );
}

export default Counter;