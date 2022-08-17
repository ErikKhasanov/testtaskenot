import React from 'react';
import {makeStyles} from "@mui/styles";
import Checkbox from '@mui/material/Checkbox';
import TaskList from "../TaskList";

const useStyles = makeStyles(() => ({
	todayTasks: {
		color: '#FFF',
		marginBottom: '32px'
	},
	list: {
		background: '#282828',
		padding: '16px',
		boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
		borderRadius: '40px',
	}
}))

const TodayTasks = ({tasks, day}) => {
	const classes = useStyles();
	return (
		<div className={classes.todayTasks}>
			<div>
				<Checkbox
					sx={{
						'& .MuiSvgIcon-root': {
							width: '23px',
							height: '23px',
							color: '#FFF',
							borderRadius: '3px'
						},
					}}
					checked={true}
					disabled={true}
				/>
				Today Tasks:
			</div>
			<div className={classes.list}>
				<TaskList tasks={tasks} day={day}/>
			</div>
		</div>
	);
};

export default TodayTasks;