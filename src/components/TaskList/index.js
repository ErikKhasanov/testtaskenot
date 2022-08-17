import React from 'react';
import {makeStyles} from "@mui/styles";

import Task from "./Task";

const useStyles = makeStyles(() => ({
	list: {
		color: '#FFF'
	}
}))

const TaskList = ({tasks, day}) => {
	const classes = useStyles()
	return (
		<div className={classes.list}>
			{tasks.map((task, index) =>
				<Task
					name={task.name}
					description={task.description}
					fullfiled={task.fullfiled}
					day={day}
					id={task.id}
					color={task.color}
					key={index + day}
				/>
			)}
		</div>
	);
};

export default TaskList;