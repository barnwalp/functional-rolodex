import './card-list.styles.css';
import Card from '../card/card.component.jsx';


const CardList = (props) => {
	return (
		<div className="card-list">
		{props.monsters.map((monster) => {
			return (
				<Card monster={monster} />
			)
		})}
		</div>
	);
}

export default CardList;
