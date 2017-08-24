import store from '../store';

const actionsCreator = {
	authLogin: (payload) => {
		return {
			type: 'AUTH_LOGIN',
			payload: payload,
		};
	},
	authLogged: (payload) => {
		localStorage.authToken = payload.token || '';
		return {
			type: 'AUTH_LOGGED',
			payload: payload,
		};
	},
};

const dispatchAction = function(action, payload){
	return store.dispatch(actionsCreator[action](payload));
};

export {
	dispatchAction,
	actionsCreator
};

export default actionsCreator;
