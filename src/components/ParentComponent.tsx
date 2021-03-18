import { Button, Card, CardActions, CardHeader, Divider, Grid } from '@material-ui/core';
import React from 'react';
import { ChildComponent, MemoizedChildComponent } from './ChildComponent';


export const ParentComponent = () => {
    const [counter, setCounter] = React.useState(1);

    // useCallBack hook kullanarak her render'da fonksiyonun imzasinin degismesini engelledik
    // kullanilmadigi zaman sub component'te surekli olarak props degisir ve component re-render olur.
    const onCounterChange = React.useCallback((childCounter) => {
        console.log(childCounter);
    }, []);

    return (
        <Card>
            <CardHeader
                action={
                    <CardActions disableSpacing={false}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => { setCounter(counter + 1) }}>Increase</Button>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => { setCounter(counter - 1) }}>Decrease</Button>
                    </CardActions>
                }
                title={"Parent Component, Count: " + counter}
            />
            <Divider />
            <Grid container md={12} justify="center">
                <Grid item md={4}>
                    <ChildComponent onCounterChange={onCounterChange} />
                </Grid>
                <Grid item md={4}>
                    <MemoizedChildComponent isMemoized={true} onCounterChange={onCounterChange} />
                </Grid>
            </Grid>
        </Card>
    )
}