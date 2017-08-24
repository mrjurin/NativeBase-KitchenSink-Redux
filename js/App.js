/* @flow */

import React from "react";

import { Root } from "native-base";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import { Provider } from 'react-redux';
import store from './store';

import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import { connect } from 'react-redux';

import AppNavigator from './routes/AppNavigator';

class App extends React.Component {
	render() {
		return (
			<AppNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}

const mapStateToProps = (state) => ({
	nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () =>
	<Provider store={store}>
		<StyleProvider style={getTheme(material)}>
			<Root>
				<AppWithNavigationState />
			</Root>
		</StyleProvider>
	</Provider>;
