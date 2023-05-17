import './card.styles.css';
import { MonsterProps } from '../../App';

interface CardProp {
	monster: MonsterProps;
}
const Card = (props: CardProp) => {
	const {name, email, id} = props.monster;
	return (
		<>
			<div 
				key={id}
				className="card-container"	
			>
				<img 
					src={`https://robohash.org/${id}set=set2&size=180x180`} 
					alt={name} 
				/>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</>
	);
}

export default Card;
