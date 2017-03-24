import React from 'react';
import {Provider} from 'react-redux';

import store from '../../store';
import AsyncApp from '../containers/AsyncApp';

function Root (){
	return (
		<Provider store={store}>
			<AsyncApp />
		</Provider>
	);
}

export default Root;