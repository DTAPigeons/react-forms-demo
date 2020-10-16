import React from 'react';
import { Form, Formik } from 'formik';
import { Input } from './Input';
import * as yup from 'yup';
import { Button, Container, Grid } from '@material-ui/core';
import { CheckBox } from './CheckBox';
import { Dropdown } from './Dropdown';
import { FormImage } from './FormImage';

export function FormikForm() {
	const girls = [
		{ value: 'alma', text: '💙 Alma' },
		{ value: 'tammo', text: '💚 Tammo' },
		{ value: 'alice', text: '💙 Alice' },
		{ value: 'gramberia', text: '❤️ Gramberia' },
	];

	const validationSchema = yup.object().shape({
		firstName: yup.string().max(20).required(),
		lastName: yup.string().max(20).required(),
		email: yup.string().email().max(20).required(),
	});

	const onSubmit = (values) => {
		console.log(values);
		window.alert(JSON.stringify(values, 0, 2));
	};

	return (
		<Container>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					knowsDeWay: false,
					girls: '',
				}}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				validateOnChange={true}>
				{({
					values,
					isSubmitting,
					handleSubmit,
					handleChange,
					handleBlur,
					errors,
				}) => (
					<Grid
						container
						justify='flex-end'
						alignItems='center'
						direction='column'>
						<Form>
							<Input label='First Name' name='firstName' />
							<Input name='lastName' label='Last Name' />
							<Input name='email' label='Email' />
							<CheckBox
								name='knowsDeWay'
								type='checkbox'
								label='Do you know de way'
							/>
							<Dropdown name='girls' label='Best girls?' options={girls} />
							<FormImage name='girls' />
							<Button type='submit' color='primary'>
								Submit
							</Button>
						</Form>
					</Grid>
				)}
			</Formik>
		</Container>
	);
}
