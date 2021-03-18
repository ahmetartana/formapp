import React, { useEffect, Suspense } from 'react';
import { Switch, Route, Router, Redirect, } from 'react-router-dom';
import Header from './components/Header';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

export default function App({ history }: any) {

	const [signedIn, setSignedIn] = React.useState(false);

	const onSignIn = () => {
		setSignedIn(true);
		history.push('/dashboard');
	};

	return (
		<div>
			<Router history={history}>
				<Header signedIn={signedIn} onSignOut={() => {
					setSignedIn(false);
				}} />
				<Switch>
					<Route exact path='/auth/signin'>
						<Signin onSignIn={onSignIn} />
					</Route>
					<Route exact path='/auth/signup'>
						<Signup onSignIn={onSignIn} />
					</Route>
					<Route exact path='/pricing'>
						<Pricing />
					</Route>
					<Route path='/dashboard'>
						{!signedIn && <Redirect to='/auth/signin' />}
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
