import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	card: {
		height: '50%',
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	name: {
		fontWeight: theme.typography.fontWeightBold
	},
	content: {
		flex: '1 0 auto'
	},
	chip: {
		textTransform: 'capitalize',
		margin: theme.spacing(1, 1, 0, 0)
	},
	cover: {
		minHeight: 200,
		[theme.breakpoints.up('sm')]: {
			flexBasis: '50%'
		}
	}
}));

export default function Hero(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cover}
				image={props.image.url}
				title="Live from space album cover"
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography className={classes.name} variant="h4">
						{props.name}
					</Typography>
					{Object.keys(props.powerstats).map(stat => {
						const value = props.powerstats[stat] === 'null' ? '?' : props.powerstats[stat];
						return (
							<Chip
								key={stat}
								className={classes.chip}
								color="primary"
								label={`${stat}: ${value}`}
							/>
						);
					})}
				</CardContent>
			</div>
		</Card>
	);
}
