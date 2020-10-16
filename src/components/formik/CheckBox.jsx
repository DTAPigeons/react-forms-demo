import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useField, useFormikContext } from 'formik';

export function CheckBox({ label, ...props }) {
	const {
		values: { girls },
		setFieldValue,
	} = useFormikContext();
	const [field, meta] = useField(props);

	useEffect(() => {
		if (girls === 'alice') {
			setFieldValue(props.name, true);
		}
	}, [girls, setFieldValue]);

	return (
		<Grid item xs={12}>
			<FormControlLabel
				label={label}
				control={<Checkbox {...field} />}></FormControlLabel>
		</Grid>
	);
}
