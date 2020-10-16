import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';

export function Dropdown({ name, label, options }) {
	return (
		<Grid item xs={12} alignItems='flex-start'>
			<Field name={name}>
				{({ input }) => (
					<FormControl style={{ minWidth: 200 }}>
						<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
						<Select labelId='demo-simple-select-label' {...input}>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							{options.map((option) => {
								return <MenuItem value={option.value}>{option.text}</MenuItem>;
							})}
						</Select>
					</FormControl>
				)}
			</Field>
		</Grid>
	);
}
