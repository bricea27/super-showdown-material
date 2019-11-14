import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	card: {
		height: '50%',
		display: 'flex',
		flexDirection: 'column',
		flex: 1
		// [theme.breakpoints.up("sm")]: {
		//   flexDirection: "row"
		// }
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	content: {
		flex: '1 0 auto'
	},
	cover: {
		minHeight: 200,
		[theme.breakpoints.up('sm')]: {
			flexBasis: '50%'
		}
	}
}));

export default function Hero(props) {
	console.log(props);
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
					<Typography component="h5" variant="h5">
						{props.name}
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
}
