import React, { useEffect, Suspense } from 'react';
import { Switch, Route, Router, Redirect, } from 'react-router-dom';
import Header from './components/Header';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import { useSelector, useDispatch } from 'react-redux';
import { UserLoginState } from './reducers/userLoginReducer';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

export default function App({ history }: any) {
	const { isLoggedIn } = useSelector((state: UserLoginState) => state);
	return (
		<div>
			<Router history={history}>
				<Header  />
				<Switch>
					<Route exact path='/auth/signin'>
						<Signin />
					</Route>
					<Route exact path='/auth/signup'>
						<Signup />
					</Route>
					<Route exact path='/pricing'>
						<Pricing />
					</Route>
					<Route path='/dashboard'>
						{!isLoggedIn && <Redirect to='/auth/signin' />}
						<Suspense fallback={<div>Loading..</div>}>
							<Dashboard />
						</Suspense>
					</Route>
					<Route exact path='/'>
						<Landing />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
