import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

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

type HeaderProps = {
	signedIn: boolean;
	onSignOut: () => void;
};

export default function Header({ signedIn, onSignOut }: HeaderProps) {
	const classes = useStyles();

	const onClick = () => {
		if (signedIn && onSignOut) {
			onSignOut();
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
					{signedIn &&
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
						to={signedIn ? '/' : '/auth/signin'}
						onClick={onClick}
					>
						{signedIn ? 'Logout' : 'Login'}
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
