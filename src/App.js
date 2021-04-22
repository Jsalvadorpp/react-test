import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithLayout from './components/routeWithLayout';
import Layout from './layouts/layout';
import Home from './pages/home';
import InVoice from './pages/invoiceDetails';
import Toastr from './components/toastr';

function App() {
	return (
		<Router>
			<Toastr />
			<Switch>
				<RouteWithLayout component={Home} layout={Layout} exact path="/" />
				<RouteWithLayout component={InVoice} layout={Layout} exact path="/invoice" />
			</Switch>
		</Router>
	);
}

export default App;
