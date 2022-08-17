import React from 'react';
import {AppContext} from "../../App";

import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";

import SettingsIcon from './img/settings.png'

const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '13px 0 17px 0'
	},
	title: {
		color: '#ffffff'
	},
	settings: {
		background: "none",
		border: "none",
		cursor: 'pointer',
	}
}));

const Header = () => {
	const classes = useStyles();
	const {switchSettings} = React.useContext(AppContext)

	return (
		<div className={classes.header}>
			<Typography variant='h4' className={classes.title}>
				To Do
			</Typography>
			<button className={classes.settings} onClick={switchSettings}>
				<img src={SettingsIcon} alt="settings"/>
			</button>
		</div>
	);
};

export default Header;