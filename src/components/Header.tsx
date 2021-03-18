import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserLoginState } from '../reducers/userLoginReducer';
const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
		a: {
			textDecoration: 'none',
		},
		body: {
			margin: 0,
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
}));



export default function Header() {
	const classes = useStyles();
	const { isLoggedIn } = useSelector((state: UserLoginState) => state);
	const dispatch = useDispatch();
	const history = useHistory();
	const onClick = () => {
		if (isLoggedIn) {
			dispatch({ type: 'LOGOUT' });
			history.push('/');
		}
	};
	return (
		<React.Fragment>
			<AppBar
				position='static'
				color='default'
				elevation={0}
				className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant='h6'
						color='inherit'
						noWrap
						component={RouterLink}
						to='/'
					>App</Typography>
					{isLoggedIn &&
						<Typography
							variant='h6'
							color='inherit'
							noWrap
							component={RouterLink}
							to='/dashboard'
						>Dashboard</Typography>}
					<Button
						color='primary'
						variant='outlined'
						className={classes.link}
						component={RouterLink}
						to={isLoggedIn ? '/' : '/auth/signin'}
						onClick={onClick}
					>
						{isLoggedIn ? 'Logout' : 'Login'}
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
