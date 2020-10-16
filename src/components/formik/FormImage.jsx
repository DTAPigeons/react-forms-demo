import { Grid } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

export function FormImage({ ...props }) {
	const [field, meta] = useField(props);

	const renderHanson = (girl) => {
		if (!girl) {
			return (
				<img
					style={{ width: 200, height: 200 }}
					src='https://bloximages.chicago2.vip.townnews.com/ncnewsonline.com/content/tncms/assets/v3/editorial/5/70/570c3871-56b3-5883-b05e-f5963c507a57/54012dc24880f.image.jpg?resize=500%2C657'
				/>
			);
		}
		if (girl === 'tammo') {
			return (
				<img
					style={{ width: 200, height: 200 }}
					src='https://img.washingtonpost.com/rf/image_1484w/WashingtonPost/Content/Blogs/celebritology/StandingArt/hansen2.jpg?uuid=1lkJfKMuEeCEfDuKiwY_ag'
				/>
			);
		}
		return (
			<img
				style={{ width: 200, height: 200 }}
				src='https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNzkzMzExNDU1/hith-the-birth-of-ok-175-years-ago-istock_000016716612large-2.jpg'
			/>
		);
	};

	return (
		<Grid item xs={12}>
			{renderHanson(field.value)}
		</Grid>
	);
}
