import React from 'react';
import classNames from "classnames";
import {AppContext} from "../../../App";

import {makeStyles} from "@mui/styles";

import {Switch} from "@mui/material";

const useStyles = makeStyles({
	task: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: '14px',
		margin: '0 0 16px 0',
		'&:nth-last-child(1)': {
			margin: '0'
		}
	},
	text: {
		position: 'relative',
	},
	divider: {
		position: 'absolute',
		left: '-14px',
		top: '50%',
		transform: 'translateY(-50%)',
		display: 'block',
		width: '5px',
		height: '40px',
		borderRadius: '3px',
	},
	throughName: {
		textDecoration: 'line-through',
	},
	description: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		lineClamp: 1,
		boxOrient: 'vertical',
		color: '#a9a9a9'
	},
})



const Task = ({name, description, fullfiled, day, id, color}) => {
	const {switchTask} = React.useContext(AppContext);
	const classes = useStyles();

	return (
		<div className={classes.task}>
			<div className={classes.text}>
				<div className={classes.divider} style={{background: color}}/>
				<div className={classNames({[classes.throughName]: fullfiled})}>
					{name}
				</div>
				<div className={classes.description}>
					{description}
				</div>
			</div>
			<Switch checked={fullfiled} onChange={() => switchTask(day, id)}/>
		</div>
	);
};

export default Task;