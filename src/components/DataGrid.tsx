import {
    Card,
    CardContent,
    CardHeader,
    Button,
    ButtonGroup,
    Divider,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    paginationContainer: {
        margin: 10,
        float: "left"
    }
});

interface PageParams {
    currentPage: number;
}

interface PaginationProps {
    handleChange: (args: PageParams) => void;
    minimumPage: number;
    maximumPage: number;
}

interface UserData {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
}

const Pagination = (props: PaginationProps) => {
    const [pageParams, setPageParams] = useState({ currentPage: 1 });
    const { handleChange } = props;
    const classes = useStyles();

    useEffect(() => {
        handleChange(pageParams);
        console.log("key", pageParams);
    }, [pageParams, handleChange]);
    return (
        <div className={classes.paginationContainer}>
            <ButtonGroup
                variant="contained"
                color="primary"
                size={"small"}
                aria-label="text primary button group"
            >
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={pageParams.currentPage <= props.minimumPage}
                    onClick={() => {
                        setPageParams({ currentPage: pageParams.currentPage - 1 });
                    }}>prev</Button>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={pageParams.currentPage >= props.maximumPage}
                    onClick={() => {
                        setPageParams({ currentPage: pageParams.currentPage + 1 });
                    }}>next</Button>
            </ButtonGroup>
        </div>
    );
};

export function DataGrid() {
    const [data, setData] = useState<UserData>({});
    const classes = useStyles();
    const handleChange = useCallback((args: PageParams) => {
        axios(
            `https://jsonplaceholder.typicode.com/users/${args.currentPage}`
        ).then((result) => {
            setData(result.data);
        });
    }, []);

    return (
        <Card>
            <CardHeader title={"Pagination DataGrid"} />
            <Divider />
            <CardContent>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>UserName</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.username}</TableCell>
                                <TableCell>{data.email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Pagination
                        minimumPage={1}
                        maximumPage={10}
                        handleChange={handleChange}
                    />
                </TableContainer>
            </CardContent>
        </Card>
    );
}