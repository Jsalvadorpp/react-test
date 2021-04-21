import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithLayout from './components/routeWithLayout';
import Layout from './layouts/layout';
import Home from './pages/home';
import Toastr from './components/toastr';

function App() {
	return (
		<Router>
			<Toastr />
			<Switch>
				<RouteWithLayout component={Home} layout={Layout} exact path="/" />
			</Switch>
		</Router>
	);
}

export default App;
