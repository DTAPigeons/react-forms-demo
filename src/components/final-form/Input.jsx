import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';

export function Input({ name, label, validate }) {
	return (
		<Grid item xs={12}>
			<Field
				name={name}
				validate={validate}
				subscription={{
					value: true,
					active: true,
					error: true,
					touched: true,
				}}>
				{({ input, meta, placeHolder }) => (
					<div className={meta.active ? 'active' : ''}>
						<Grid item xs={12}>
							<TextField
								inputProps={input}
								label={label}
								error={meta.error && meta.touched}
								helperText={meta.error && meta.touched ? meta.error : ''}
							/>
						</Grid>
					</div>
				)}
			</Field>
		</Grid>
	);
}
