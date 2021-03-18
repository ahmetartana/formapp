import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
	'@global': {
		a: {
			textDecoration: 'none',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

interface LoginFormData {
	email?:string,
	password?:string
}


export default function SignIn() {
	const classes = useStyles();
	const [formData, setFormData] = React.useReducer((prevstate:LoginFormData, nextstate:LoginFormData)=>{ return {...prevstate, ...nextstate}},{
		email:'ahmet',
		password:'123'
	});
	const handlChange = (event:any) => {
		setFormData({[event.target.name]:event.target.value});
	}
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSignIn = ()=>{
		if(formData.email == 'ahmet' && formData.password == '123'){
			dispatch({type:'LOGIN'});
			history.push('/dashboard');
		}
		// password yanlis
	}

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form
					onSubmit={(e) => e.preventDefault()}
					className={classes.form}
					noValidate
				>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						value={formData.email}
						autoComplete='email'
						autoFocus
						onChange={handlChange}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						value={formData.password}
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						onChange={handlChange}
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						onClick={handleSignIn}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item>
							<Link to='/auth/signup'>{"Don't have an account? Sign Up"}</Link>
						</Grid>
					</Grid>
				</form>
			</div>

		</Container>
	);
}
