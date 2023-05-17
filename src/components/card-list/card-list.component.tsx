import './card-list.styles.css';
import { MonsterProps } from '../../App';
import Card from '../card/card.component';

interface CardListProps {
	monsterItems: MonsterProps[];
}

const CardList = (props: CardListProps) => {
	
	return (
		<div className="card-list">
		{props.monsterItems.map((monster) => {
			return (
				<>
					<Card monster={monster}/>
				</>
			)
		})}
		</div>
	);
}

export default CardList;
