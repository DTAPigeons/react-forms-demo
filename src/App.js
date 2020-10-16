import { Box } from '@material-ui/core';
import React from 'react';
import './App.css';
import { FormComponent } from './components/final-form/Form';

function App() {
	return (
		<div className='App'>
			<Box>
				<FormComponent />
			</Box>
		</div>
	);
}

export default App;
