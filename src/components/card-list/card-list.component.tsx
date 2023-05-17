import './card-list.styles.css';
import { MonsterProps } from '../../App';
// import Card from '../card/card.component.jsx';

interface CardListProps {
	monsterItems: MonsterProps[];
}

const CardList = (props: CardListProps) => {
	
	return (
		<div className="card-list">
		{props.monsterItems.map((monster) => {
			return (
				<>
					<h2>{monster.name}</h2>
					<h2>{monster.email}</h2>
				</>
			)
		})}
		</div>
	);
}

export default CardList;
