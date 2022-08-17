import React from 'react';
import {makeStyles} from "@mui/styles";

import {AppContext} from "../../App";
import TaskAccordion from "../TaskAccordion";
import {todayIs} from "../../utils/utils";
import TodayTasks from "../TodayTasks";

const usestyles = makeStyles(() => ({
	day: {
		marginBottom: '32px'
	}
}))

const Tasks = () => {
	const {list} = React.useContext(AppContext)
	const classes = usestyles()

	const renderTasks = React.useMemo(() => (
		Object.keys(list).map(day => {
			if (day === todayIs) return <TodayTasks day={day} tasks={list[day]} key={day}/>
			return (
				<div className={classes.day} key={day}>
					<TaskAccordion
						tasks={list[day]}
						day={day}
					/>
				</div>
			)
		})
	))

	return (
		<>
			{renderTasks}
		</>
	)
};

export default Tasks;