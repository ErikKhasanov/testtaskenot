import React from "react";
import {makeStyles} from '@mui/styles';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import {fakeData} from "./utils/tasks";
import News from "./components/News";

const useStyles = makeStyles(() => ({
	app: {
		position: 'relative',
		background: '#222222',
		height: '98vh',
		overflowY: "auto",
		padding: '13px 37px 0 37px',
		width: '390px',
		maxWidth: '100%',
		margin: 'auto',
		borderRadius: '30px'
	}
}))

export const AppContext = React.createContext({
	tasks: {}
})

const App = () => {
	const [tasks, setTasks] = React.useState(fakeData);
	const [showNews, setShowNews] = React.useState(false);
	const classes = useStyles();

	const switchTask = React.useCallback((day, id) => {
		setTasks(prevState => ({
			...prevState,
			[day]: tasks[day].map(task => {
				if (task.id === id) return {
					...task,
					fullfiled: !task.fullfiled
				}
				return task
			})
		}))
	})

	const switchSettings = React.useCallback(() => setShowNews(prevState => !prevState))

	return (
		<AppContext.Provider
			value={{
				list: tasks,
				switchTask,
				switchSettings
			}}
		>
			<div className={classes.app}>
				<Header/>
				<Tasks/>
				{showNews && <News />}
			</div>
		</AppContext.Provider>
	);
}

export default App;