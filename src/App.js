import { Box } from '@material-ui/core';
import React from 'react';
import './App.css';
import { FormComponent } from './components/final-form/Form';
import { FormikForm } from './components/formik/FormikForm';

function App() {
	return (
		<div className='App'>
			<Box>
				<FormComponent />
			</Box>
			<Box>
				<FormikForm />
			</Box>
		</div>
	);
}

export default App;
