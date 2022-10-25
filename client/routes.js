import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Sound from "./sound";
import Home from "./homepage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/play' component={Sound} />
			<Route component={Home} />
		</Switch>
	);
};

export default withRouter(Routes);
