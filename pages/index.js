import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import Hero from '../components/hero';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		}
	}
}));

export default function Index() {
	const classes = useStyles();
	const initialState = {
		isLoading: true,
		heroes: []
	};
	const [state, setState] = useState(initialState);

	async function getHero(id) {
		const result = await fetch(`${process.env.SELF_URL}/api/hero/${id}`);
		const hero = await result.json();
		return hero;
	}

	function generateRandomId() {
		// TODO make distinct
		return Math.floor(Math.random() * (731 - 1) + 1);
	}

	useEffect(() => {
		const playerOneId = generateRandomId();
		const playerTwoId = generateRandomId();

		Promise.all([getHero(playerOneId), getHero(playerTwoId)]).then(response => {
			response.map(res => {
				if (res.response === 'success') {
					setState(prevState => ({
						...prevState,
						heroes: [...prevState.heroes, { ...res }]
					}));
				}
			});
			setState(prevState => ({ ...prevState, isLoading: false }));
		});
	}, []);

	return (
		<Container className={classes.container} maxWidth="lg">
			{state.isLoading && <CircularProgress />}
			{state.heroes.map(hero => (
				<Hero key={hero.id} {...hero} />
			))}
		</Container>
	);
}
