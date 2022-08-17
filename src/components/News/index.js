import React from 'react';
import {makeStyles} from "@mui/styles";
import {useQuery} from "react-query";

const useStyles = makeStyles(({
	news: {
		position: 'absolute',
		bottom: '10px',
		left: '0',
		right: '0',
	},
	marqueeContainer: {
		display: 'flex',
		alignItems: 'center',
		background: '#25284c',
		overflow: 'hidden',
	},
	"@keyframes marquee": {
		'0%': {
			transform: 'translate(100%, 0)',
		},
		'100%': {
			transform: 'translate(-100%, 0)',
		}
	},
	marquee: {
		fontSize: '12px',
		padding: '8px 0',
		color: '#fff',
		textTransform: 'uppercase',
		whiteSpace: 'nowrap',
		animation: '$marquee 10s infinite linear'
	}
}))

const News = () => {
	const classes = useStyles()
	const [currentArticle, setCurrentArticle] = React.useState();

	const {data} = useQuery(
		'repoData',
		() =>
			fetch(
				'https://newsapi.org/v2/top-headlines?country=ru&apiKey=a1d27294c0cb4a2da21d80993e5857ed'
			).then((response) => response.json())
	);

	const articles = React.useMemo(() => data?.articles && data.articles.map(article => article.title));

	React.useEffect(() => {
		if (articles?.length > 0) {
			if(!currentArticle) setCurrentArticle(articles[Math.floor(Math.random() * articles.length)])
			setInterval(() => {
				setCurrentArticle(articles[Math.floor(Math.random() * articles.length)])
			}, 10000)
		}
	}, [articles])

	if (!articles) return null

	return (
		<div className={classes.news}>
			<div className={classes.marqueeContainer}>
				<div className={classes.marquee}>
					{currentArticle}
				</div>
			</div>
		</div>
	);
};

export default News;