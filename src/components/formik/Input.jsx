import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { useField } from 'formik';

export function Input({ label, ...props }) {
	const [field, meta] = useField(props);
	const errorText = meta.error && meta.touched ? meta.error : '';

	return (
		<Grid item xs={12}>
			<TextField
				{...field}
				label={label}
				helperText={errorText}
				error={!!errorText}></TextField>
		</Grid>
	);
}
