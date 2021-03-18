import React from 'react';

import {
    Button,
    Typography,
    CardActions,
    CardContent,
    CardHeader,
    Card,
    Grid,
    Divider
} from '@material-ui/core';

interface ChildComponentProps {
    onCounterChange: (counter: number) => void;
    isMemoized?: Boolean
}

export const ChildComponent = (props: ChildComponentProps) => {
    const [counter, setCounter] = React.useState(1);
    React.useEffect(() => {
        props.onCounterChange(counter);
    }, [counter])

    const header = props.isMemoized ? "Memoized child" : "Child component";

    return (
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Card>
                    <CardHeader subheader={header} />
                    <Divider />
                    <CardContent>
                        <Typography style={{ textAlign: 'center' }} variant="body2" color="textSecondary" component="h3">
                            Counter: {counter}
                        </Typography>
                        <Typography style={{ textAlign: 'center' }} variant="body2" color="textSecondary" component="h3">
                            Updated MS :  {new Date().getMilliseconds().toString()}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing={false}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => { setCounter(counter + 1) }}>Increase
                            </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => { setCounter(counter - 1) }}>Decrease
                            </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export const MemoizedChildComponent = React.memo(ChildComponent);
