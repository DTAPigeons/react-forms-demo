import React from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from './Input';
import validator from 'validator';
import { CheckBox } from './CheckBox';
import { Dropdown } from './Dropdown';
import { FormImage } from './FormImage';
import { WhenFieldChanges } from './WhenFieldChanges';
import { Button, Container, Grid } from '@material-ui/core';

export function FormComponent() {
	const colors = [
		{ value: '#ff0000', text: '❤️ Red' },
		{ value: '#00ff00', text: '💚 Green' },
		{ value: '#0000ff', text: '💙 Blue' },
	];

	const girls = [
		{ value: 'alma', text: '💙 Alma' },
		{ value: 'tammo', text: '💚 Tammo' },
		{ value: 'alice', text: '💙 Alice' },
		{ value: 'gramberia', text: '❤️ Gramberia' },
	];

	const onSubmit = (values) => {
		console.log(values);
		window.alert(JSON.stringify(values, 0, 2));
	};

	const required = (value) => {
		return value ? undefined : 'Required';
	};

	const isEmail = (value) => {
		let requiredError = required(value);
		if (requiredError) {
			return requiredError;
		} else {
			return validator.isEmail(value) ? undefined : 'Invalid Email';
		}
	};

	return (
		<Container>
			<Grid container justify='flex-end' alignItems='center' direction='column'>
				<Form
					onSubmit={onSubmit}
					subscription={{
						submitting: true,
					}}>
					{({ handleSubmit, values, submitting }) => (
						<form onSubmit={handleSubmit}>
							<Input name='firstName' label='First Name' validate={required} />
							<Input name='lastName' label='Last Name' validate={required} />
							<Input name='email' label='Email' validate={isEmail} />
							<CheckBox name='knowsDeWay' label='Do you know de way?' />
							<WhenFieldChanges
								field='girls'
								becomes='alice'
								set='knowsDeWay'
								to={true}
							/>
							<Dropdown name='girls' label='Best girl?' options={girls} />
							<FormImage name='girls'></FormImage>
							<br />
							<Button type='submit' color='primary'>
								Submit
							</Button>
						</form>
					)}
				</Form>
			</Grid>
		</Container>
	);
}
