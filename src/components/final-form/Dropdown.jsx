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
		<Grid item>
			<Field name={name}>
				{({ input }) => (
					<FormControl style={{ minWidth: 200 }}>
						<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
						<Select labelId='demo-simple-select-label' {...input}>
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
				)}
			</Field>
		</Grid>
	);
}
