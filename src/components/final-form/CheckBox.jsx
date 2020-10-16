import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';

export function CheckBox({ name, label }) {
	return (
		<Grid item xs={12} alignItems='flex-start' justify='space-between'>
			<Field name={name}>
				{({ input }) => (
					<FormControlLabel
						label={label}
						control={
							<Checkbox inputProps={input} name={name} checked={input.value} />
						}
					/>
				)}
			</Field>
		</Grid>
	);
}
