import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

export function Dropdown({ label, options, ...props }) {
	const [field, meta] = useField(props);

	return (
		<Grid item xs={12}>
			<FormControl style={{ minWidth: 200 }}>
				<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
				<Select labelId='demo-simple-select-label' {...field}>
					<MenuItem value='' key=' '>
						<em>None</em>
					</MenuItem>
					{options.map((option) => {
						return (
							<MenuItem key={option.value} value={option.value}>
								{option.text}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Grid>
	);
}
